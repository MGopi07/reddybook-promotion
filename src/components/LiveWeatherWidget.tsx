'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sun, CloudSun, CloudRain, CloudLightning, Crosshair, MapPin, Navigation } from 'lucide-react';
import '@/styles/weather.css';

interface CricketCity {
  name: string;
  stadium: string;
  lat: number;
  lon: number;
}

const CRICKET_CITIES: CricketCity[] = [
  { name: 'CHENNAI', stadium: 'M.A. Chidambaram (Chepauk)', lat: 13.0827, lon: 80.2707 },
  { name: 'MUMBAI', stadium: 'Wankhede Stadium', lat: 18.9389, lon: 72.8258 },
  { name: 'DELHI', stadium: 'Arun Jaitley Stadium', lat: 28.6377, lon: 77.2432 },
  { name: 'BENGALURU', stadium: 'M. Chinnaswamy Stadium', lat: 12.9788, lon: 77.5996 },
  { name: 'KOLKATA', stadium: 'Eden Gardens', lat: 22.5646, lon: 88.3433 },
  { name: 'AHMEDABAD', stadium: 'Narendra Modi Stadium', lat: 23.0917, lon: 72.5975 },
  { name: 'MELBOURNE', stadium: 'Melbourne Cricket Ground', lat: -37.8200, lon: 144.9834 },
  { name: 'LONDON', stadium: "Lord's Cricket Ground", lat: 51.5297, lon: -0.1722 },
  { name: 'BRIDGETOWN', stadium: 'Kensington Oval', lat: 13.1042, lon: -59.6200 },
];

interface WeatherState {
  city: string;
  stadium: string;
  temp: number;
  condition: string;
  code: number;
  dateStr: string;
  loading: boolean;
}

function getWeatherCondition(code: number): { text: string; type: 'sun' | 'cloud' | 'rain' | 'storm' } {
  if (code === 0) return { text: 'Sunny', type: 'sun' };
  if (code === 1) return { text: 'Mainly Sunny', type: 'sun' };
  if (code === 2) return { text: 'Partly Cloudy', type: 'cloud' };
  if (code === 3) return { text: 'Overcast', type: 'cloud' };
  if (code === 45 || code === 48) return { text: 'Foggy', type: 'cloud' };
  if (code >= 51 && code <= 67) return { text: 'Rainy', type: 'rain' };
  if (code >= 80 && code <= 82) return { text: 'Showers', type: 'rain' };
  if (code >= 95) return { text: 'Thunderstorm', type: 'storm' };
  return { text: 'Sunny', type: 'sun' };
}

function getFormattedDate(): string {
  const now = new Date();
  return now.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function LiveWeatherWidget() {
  const [selectedCity, setSelectedCity] = useState<CricketCity>(CRICKET_CITIES[0]);
  const [weather, setWeather] = useState<WeatherState>({
    city: 'CHENNAI',
    stadium: 'M.A. Chidambaram (Chepauk)',
    temp: 32,
    condition: 'Sunny',
    code: 0,
    dateStr: getFormattedDate(),
    loading: false,
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    setWeather((prev) => ({ ...prev, dateStr: getFormattedDate() }));
  }, []);

  // Fetch live weather for the selected city from Open-Meteo API
  useEffect(() => {
    let isCancelled = false;

    async function fetchWeather() {
      try {
        setWeather((prev) => ({ ...prev, loading: true }));
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.lat}&longitude=${selectedCity.lon}&current=temperature_2m,relative_humidity_2m,weather_code&timezone=auto`
        );
        if (!res.ok) throw new Error('Weather request failed');
        const data = await res.json();
        if (isCancelled || !data?.current) return;

        const roundedTemp = Math.round(data.current.temperature_2m);
        const conditionInfo = getWeatherCondition(data.current.weather_code ?? 0);

        setWeather({
          city: selectedCity.name,
          stadium: selectedCity.stadium,
          temp: roundedTemp,
          condition: conditionInfo.text,
          code: data.current.weather_code ?? 0,
          dateStr: getFormattedDate(),
          loading: false,
        });
      } catch (err) {
        // Fallback to graceful mock if network is offline
        if (!isCancelled) {
          setWeather((prev) => ({
            ...prev,
            city: selectedCity.name,
            stadium: selectedCity.stadium,
            temp: 32,
            condition: 'Sunny',
            code: 0,
            dateStr: getFormattedDate(),
            loading: false,
          }));
        }
      }
    }

    fetchWeather();

    // Refresh every 10 minutes
    const interval = setInterval(fetchWeather, 10 * 60 * 1000);
    return () => {
      isCancelled = true;
      clearInterval(interval);
    };
  }, [selectedCity]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Detect user location
  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const customCity: CricketCity = {
          name: 'LOCAL VENUE',
          stadium: 'Detected Coordinates',
          lat: latitude,
          lon: longitude,
        };
        setSelectedCity(customCity);
        setIsDropdownOpen(false);
      },
      () => {
        alert('Unable to retrieve your location');
      }
    );
  };

  const conditionInfo = getWeatherCondition(weather.code);

  const renderIcon = () => {
    switch (conditionInfo.type) {
      case 'rain':
        return <CloudRain size={20} className="weather-rain-icon" />;
      case 'storm':
        return <CloudLightning size={20} className="weather-rain-icon" />;
      case 'cloud':
        return <CloudSun size={20} className="weather-cloud-icon" />;
      case 'sun':
      default:
        return <Sun size={20} className="weather-sun-icon" />;
    }
  };

  return (
    <div className="weather-widget-wrapper" ref={containerRef}>
      {/* Exact Pill Design matching user reference image */}
      <div
        className="weather-pill"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        role="button"
        tabIndex={0}
        aria-label={`Live weather for ${weather.city}: ${weather.temp}°C ${weather.condition}`}
        title="Click to change stadium location"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsDropdownOpen((prev) => !prev);
          }
        }}
      >
        {/* Left circular icon container with radiant yellow sun */}
        <div className="weather-icon-circle">
          {renderIcon()}
        </div>

        {/* Right info with city name and date/temp */}
        <div className="weather-info">
          <div className="weather-city-row">
            <span className="weather-city-name">{weather.city}</span>
            <Crosshair size={13} className="weather-location-icon" strokeWidth={2.5} />
          </div>
          <div className="weather-details-row">
            <span>{isMounted ? weather.dateStr : 'Nov 12, 2024'}</span>
            <span className="weather-dot-divider">•</span>
            <span>{weather.temp}°C {weather.condition}</span>
          </div>
        </div>
      </div>

      {/* Floating Stadium / Location Picker Dropdown */}
      {isDropdownOpen && (
        <div className="weather-dropdown" role="menu">
          <div className="weather-dropdown-header">
            <span className="weather-dropdown-title">Select Match Venue</span>
            <button
              className="btn-detect-location"
              onClick={handleDetectLocation}
              title="Detect my current location"
            >
              <Navigation size={10} />
              <span>Auto-Detect</span>
            </button>
          </div>

          <div className="weather-cities-list">
            {CRICKET_CITIES.map((city) => (
              <button
                key={city.name}
                className={`weather-city-option ${selectedCity.name === city.name ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCity(city);
                  setIsDropdownOpen(false);
                }}
              >
                <div>
                  <div className="weather-option-name">{city.name}</div>
                  <div className="weather-option-stadium">{city.stadium}</div>
                </div>
                {selectedCity.name === city.name && (
                  <span className="weather-option-badge">LIVE</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
