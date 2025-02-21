'use client';

import { useState } from 'react';
import { useForecast } from '../../../api/weatherApi';
import ForecastList from '../../../components/ForecastList';

export default function Forecast() {
  const [city, setCity] = useState('London'); // Default city
  const { data: forecast, isLoading } = useForecast(city);

  return (
    <div className="min-h-screen bg-black-100 dark:bg-gray-900 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">7-Day Forecast</h1>
      {isLoading && <p>Loading forecast...</p>}
      {forecast && <ForecastList forecast={forecast} />}
    </div>
  );
}