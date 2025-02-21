"use client";
import { useState, useEffect } from "react";
import { useWeatherByCity, useWeatherByCoords } from "../../api/weatherApi";
import SearchBar from "../../components/SearchBar";
import WeatherCard from "../../components/WeatherCard";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Home() {
  const [city, setCity] = useState("Faisalabad");
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [timeOfDay, setTimeOfDay] = useState<'morning' | 'day' | 'evening' | 'night'>('day');
  const [background, setBackground] = useState("bg-blue-500");
  
  const { data: cityWeather, isLoading: cityLoading, error: cityError } = useWeatherByCity(city);
  const { data: coordsWeather, isLoading: coordsLoading, error: coordsError } = useWeatherByCoords(coords?.lat ?? 0, coords?.lon ?? 0);

  useEffect(() => {  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => setCoords({ lat: position.coords.latitude, lon: position.coords.longitude }),
        (error) => console.error(error)
      );
    }
  }, []);

  useEffect(() => {
    const updateTimeOfDay = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) setTimeOfDay('morning');
      else if (hour >= 12 && hour < 17) setTimeOfDay('day');
      else if (hour >= 17 && hour < 20) setTimeOfDay('evening');
      else setTimeOfDay('night');
    };
    updateTimeOfDay();
    const interval = setInterval(updateTimeOfDay, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const weather = cityWeather || coordsWeather;
    const condition = weather?.weather?.[0]?.main?.toLowerCase();

    if (condition) {
      const getBackground = () => {
        const defaultImage = 'bg-blue-500';

        if (timeOfDay === 'night') {
          switch (condition) {
            case 'clear': return `bg-[url('https://images.unsplash.com/photo-1507400492013-162706c8c05e?q=80&w=2070')]`;
            case 'clouds': return `bg-[url('https://images.unsplash.com/photo-1505322033502-1f4385692e6b?q=80&w=2070')]`;
            case 'rain': return `bg-[url('https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?q=80&w=1769')]`;
            case 'drizzle': return `bg-[url('https://images.unsplash.com/photo-1511578313235-7e45897d698e?q=80&w=2070')]`;
            case 'thunderstorm': return `bg-[url('https://images.unsplash.com/photo-1508873696983-33c8eecf36d0?q=80&w=2070')]`;
            case 'snow': return `bg-[url('https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=2080')]`;
            case 'mist': return `bg-[url('https://images.unsplash.com/photo-1542601099-3e98bf67e8fb?q=80&w=2070')]`;
            case 'fog': return `bg-[url('https://images.unsplash.com/photo-1516914945108-0c263de4e72f?q=80&w=2070')]`;
            case 'haze': return `bg-[url('https://images.unsplash.com/photo-1542272201-b1ca555f8505?q=80&w=2070')]`;
            case 'smoke': return `bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070')]`;
            case 'dust': return `bg-[url('https://images.unsplash.com/photo-1541696227797-9818b9936b75?q=80&w=2070')]`;
            case 'sand': return `bg-[url('https://images.unsplash.com/photo-1511886929830-5b65ba53e8e8?q=80&w=2070')]`;
            case 'ash': return `bg-[url('https://images.unsplash.com/photo-1597843786186-826cc3489f56?q=80&w=2070')]`;
            case 'squall': return `bg-[url('https://images.unsplash.com/photo-1527482797697-8795b450c81d?q=80&w=2070')]`;
            case 'tornado': return `bg-[url('https://images.unsplash.com/photo-1571841899680-79eacce22fe7?q=80&w=2070')]`;
            default: return defaultImage;
          }
        } else if (timeOfDay === 'morning') {
          switch (condition) {
            case 'clear': return `bg-[url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070')]`;
            case 'clouds': return `bg-[url('https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=1974')]`;
            case 'rain': return `bg-[url('https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1770')]`;
            case 'drizzle': return `bg-[url('https://images.unsplash.com/photo-1511578313235-7e45897d698e?q=80&w=2070')]`;
            case 'thunderstorm': return `bg-[url('https://images.unsplash.com/photo-1605727216801-ada1f5d1e704?q=80&w=2070')]`;
            case 'snow': return `bg-[url('https://images.unsplash.com/photo-1418985991508-e47386d96a71?q=80&w=2070')]`;
            case 'mist': return `bg-[url('https://images.unsplash.com/photo-1485231183945-fffb1503f3d7?q=80&w=2070')]`;
            case 'fog': return `bg-[url('https://images.unsplash.com/photo-1516914945108-0c263de4e72f?q=80&w=2070')]`;
            case 'haze': return `bg-[url('https://images.unsplash.com/photo-1542272201-b1ca555f8505?q=80&w=2070')]`;
            case 'smoke': return `bg-[url('https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&w=2070')]`;
            case 'dust': return `bg-[url('https://images.unsplash.com/photo-1511829597101-8e766c87b0ca?q=80&w=2070')]`;
            case 'sand': return `bg-[url('https://images.unsplash.com/photo-1511886929830-5b65ba53e8e8?q=80&w=2070')]`;
            case 'ash': return `bg-[url('https://images.unsplash.com/photo-1597843786186-826cc3489f56?q=80&w=2070')]`;
            case 'squall': return `bg-[url('https://images.unsplash.com/photo-1527482797697-8795b450c81d?q=80&w=2070')]`;
            case 'tornado': return `bg-[url('https://images.unsplash.com/photo-1571841899680-79eacce22fe7?q=80&w=2070')]`;
            default: return defaultImage;
          }
        } else if (timeOfDay === 'evening') {
          switch (condition) {
            case 'clear': return `bg-[url('https://images.unsplash.com/photo-1472120435266-53107fd0c44a?q=80&w=1974')]`;
            case 'clouds': return `bg-[url('https://images.unsplash.com/photo-1500740516770-92bd004b996e?q=80&w=2072')]`;
            case 'rain': return `bg-[url('https://images.unsplash.com/photo-1501691223387-dd0500403074?q=80&w=1974')]`;
            case 'drizzle': return `bg-[url('https://images.unsplash.com/photo-1511578313235-7e45897d698e?q=80&w=2070')]`;
            case 'thunderstorm': return `bg-[url('https://images.unsplash.com/photo-1605727216801-ada1f5d1e704?q=80&w=2070')]`;
            case 'snow': return `bg-[url('https://images.unsplash.com/photo-1516431883659-655d41c09bf9?q=80&w=2071')]`;
            case 'mist': return `bg-[url('https://images.unsplash.com/photo-1542601099-3e98bf67e8fb?q=80&w=2070')]`;
            case 'fog': return `bg-[url('https://images.unsplash.com/photo-1516914945108-0c263de4e72f?q=80&w=2070')]`;
            case 'haze': return `bg-[url('https://images.unsplash.com/photo-1542272201-b1ca555f8505?q=80&w=2070')]`;
            case 'smoke': return `bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070')]`;
            case 'dust': return `bg-[url('https://images.unsplash.com/photo-1541696227797-9818b9936b75?q=80&w=2070')]`;
            case 'sand': return `bg-[url('https://images.unsplash.com/photo-1511886929830-5b65ba53e8e8?q=80&w=2070')]`;
            case 'ash': return `bg-[url('https://images.unsplash.com/photo-1597843786186-826cc3489f56?q=80&w=2070')]`;
            case 'squall': return `bg-[url('https://images.unsplash.com/photo-1527482797697-8795b450c81d?q=80&w=2070')]`;
            case 'tornado': return `bg-[url('https://images.unsplash.com/photo-1571841899680-79eacce22fe7?q=80&w=2070')]`;
            default: return defaultImage;
          }
        } else { // Day
          switch (condition) {
            case 'clear': return `bg-[url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=1974')]`;
            case 'clouds': return `bg-[url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1902')]`;
            case 'rain': return `bg-[url('https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1770')]`;
            case 'drizzle': return `bg-[url('https://images.unsplash.com/photo-1511578313235-7e45897d698e?q=80&w=2070')]`;
            case 'thunderstorm': return `bg-[url('https://images.unsplash.com/photo-1605727216801-ada1f5d1e704?q=80&w=2070')]`;
            case 'snow': return `bg-[url('https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=2070')]`;
            case 'mist': return `bg-[url('https://images.unsplash.com/photo-1485231183945-fffb1503f3d7?q=80&w=2070')]`;
            case 'fog': return `bg-[url('https://images.unsplash.com/photo-1516914945108-0c263de4e72f?q=80&w=2070')]`;
            case 'haze': return `bg-[url('https://images.unsplash.com/photo-1542272201-b1ca555f8505?q=80&w=2070')]`;
            case 'smoke': return `bg-[url('https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&w=2070')]`;
            case 'dust': return `bg-[url('https://images.unsplash.com/photo-1511829597101-8e766c87b0ca?q=80&w=2070')]`;
            case 'sand': return `bg-[url('https://images.unsplash.com/photo-1511886929830-5b65ba53e8e8?q=80&w=2070')]`;
            case 'ash': return `bg-[url('https://images.unsplash.com/photo-1597843786186-826cc3489f56?q=80&w=2070')]`;
            case 'squall': return `bg-[url('https://images.unsplash.com/photo-1527482797697-8795b450c81d?q=80&w=2070')]`;
            case 'tornado': return `bg-[url('https://images.unsplash.com/photo-1571841899680-79eacce22fe7?q=80&w=2070')]`;
            default: return defaultImage;
          }
        }
      };
      setBackground(getBackground());
    } else {
      setBackground('bg-blue-500');
    }
  }, [cityWeather, coordsWeather, timeOfDay]);

  const handleSearch = (searchCity: string) => {
    setCity(searchCity);
    setCoords(null);
  };

  const weather = cityWeather || coordsWeather;
  const isLoading = cityLoading || coordsLoading;
  const error = cityError || coordsError;

  return (
    <div className={`${background} bg-cover bg-center`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden transition-all duration-1000"
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        
        <motion.div
          className="z-10 flex flex-col items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl font-extrabold text-white mb-8 drop-shadow-xl tracking-tight">
            Weather Dashboard
          </h1>
          
          <div className="mb-6 text-white/90">
            <p className="text-center text-xl font-medium">
              {timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)} • {new Date().toLocaleTimeString('en-US')}
            </p>
          </div>
          <SearchBar onSearch={handleSearch} />
          
          {isLoading && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white text-2xl font-medium animate-pulse"
            >
              Loading Weather...
            </motion.p>
          )}
          
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-300 text-xl font-medium bg-red-900/30 p-4 rounded-xl"
            >
              {error instanceof Error ? error.message : "Failed to fetch weather data"}
            </motion.p>
          )}
          
          {weather && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <WeatherCard weather={weather} timeOfDay={timeOfDay} />
            </motion.div>
          )}
<Link className="text-white mt-4" href="/forecast">Explore the 7-Day Weather Forecast</Link>
</motion.div>
      </motion.div>
    </div>
  );
}

