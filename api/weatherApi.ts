
import { useQuery } from '@tanstack/react-query';
import { WeatherData, ForecastData } from '../lib/types';

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Fetch current weather by city
export const useWeatherByCity = (city: string) => {
  return useQuery<WeatherData>({
    queryKey: ['weather', city],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) throw new Error('City not found');
      return response.json();
    },
    enabled: !!city, // Only fetch if city is provided
  });
};

// Fetch weather by coordinates
export const useWeatherByCoords = (lat: number, lon: number) => {
  return useQuery<WeatherData>({
    queryKey: ['weather', lat, lon],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
      if (!response.ok) throw new Error('Location error');
      return response.json();
    },
    enabled: !!(lat && lon), // Only fetch if coords are valid
  });
};

// Fetch 7-day forecast
export const useForecast = (city: string) => {
  return useQuery<ForecastData>({
    queryKey: ['forecast', city],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric&cnt=7`);
      if (!response.ok) throw new Error('Forecast not available');
      return response.json();
    },
    enabled: !!city,
  });
};