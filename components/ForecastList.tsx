import { ForecastData } from '../lib/types';
import WeatherIcon from './WeatherIcon';

interface ForecastListProps {
  forecast: ForecastData;
}

export default function ForecastList({ forecast }: ForecastListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {forecast.list.map((day, index) => (
        <div 
          key={index} 
          className="bg-gradient-to-br from-blue-400/90 to-blue-600/90 p-6 rounded-2xl 
            shadow-xl backdrop-blur-lg border border-white/20 text-white
            transform hover:scale-[1.02] transition-all"
        >
          <p className="text-lg font-semibold mb-2">
            {new Date(day.dt * 1000).toLocaleDateString(undefined, {
              weekday: 'long',
              month: 'short',
              day: 'numeric'
            })}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold">{Math.round(day.main.temp)}°C</p>
            <WeatherIcon iconCode={day.weather[0].icon} size={50} />
          </div>
          <p className="capitalize text-white/90 mt-2">{day.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
}