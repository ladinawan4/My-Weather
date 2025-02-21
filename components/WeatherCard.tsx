// Redesigned WeatherCard
import { useState } from "react";
import { WiCelsius, WiFahrenheit, WiHumidity, WiStrongWind } from "react-icons/wi";
import { FiSunrise, FiSunset } from "react-icons/fi";
import UnitToggle from "./UnitToggle";
import WeatherIcon from "./WeatherIcon";
import type { WeatherData } from "../lib/types";

interface WeatherCardProps {
  weather: WeatherData;
  timeOfDay: 'morning' | 'day' | 'evening' | 'night';
}

export default function WeatherCard({ weather, timeOfDay }: WeatherCardProps) {
  const [unit, setUnit] = useState("C");

  const temp = unit === "C" ? weather.main.temp : (weather.main.temp * 9) / 5 + 32;
  const feelsLike = unit === "C" ? weather.main.feels_like : (weather.main.feels_like * 9) / 5 + 32;

  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className={`relative bg-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/30 
      text-white max-w-lg mx-auto transform transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]
      overflow-hidden group`}>
      {/* Animated background overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br opacity-60 transition-all duration-500
        ${timeOfDay === 'night' ? 'from-indigo-900/80 to-purple-900/80' : 
          timeOfDay === 'evening' ? 'from-orange-600/80 to-red-700/80' :
          timeOfDay === 'morning' ? 'from-yellow-500/80 to-orange-600/80' :
          'from-blue-500/80 to-cyan-600/80'} 
        group-hover:opacity-80`}></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-extrabold tracking-tight drop-shadow-md">{weather.name}</h2>
          <UnitToggle unit={unit} setUnit={setUnit} />
        </div>

        <div className="flex items-center justify-center mb-8 gap-6">
          <WeatherIcon iconCode={weather.weather[0].icon} size={100} className="drop-shadow-lg" />
          <div className="text-center">
            <p className="text-8xl font-extrabold tracking-tight drop-shadow-xl">
              {Math.round(temp)}°{unit}
            </p>
            <p className="text-2xl font-semibold capitalize mt-2 text-white/90 drop-shadow-md">
              {weather.weather[0].description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {[
            { icon: WiHumidity, label: "Humidity", value: `${weather.main.humidity}%` },
            { icon: WiStrongWind, label: "Wind", value: `${weather.wind.speed} m/s` },
            { icon: FiSunrise, label: "Sunrise", value: formatTime(weather.sys.sunrise) },
            { icon: FiSunset, label: "Sunset", value: formatTime(weather.sys.sunset) },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 bg-white/10 p-4 rounded-xl backdrop-blur-md 
                hover:bg-white/20 transition-all duration-300 hover:shadow-inner"
            >
              <item.icon className="text-4xl shrink-0" />
              <div>
                <p className="text-sm text-white/70">{item.label}</p>
                <p className="text-xl font-semibold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-lg font-medium text-center bg-white/10 py-2 px-4 rounded-full inline-flex items-center gap-2
          hover:bg-white/20 transition-all duration-300">
          Feels like: {Math.round(feelsLike)}°
          {unit === "C" ? <WiCelsius className="text-2xl" /> : <WiFahrenheit className="text-2xl" />}
        </p>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-white/5 rounded-br-full" />
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/5 rounded-tl-full" />
    </div>
  );
}
