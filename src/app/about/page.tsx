    'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 
      flex flex-col items-center justify-center p-6">
      <motion.div
        className="max-w-3xl w-full bg-white/10 backdrop-blur-lg p-10 rounded-3xl 
          shadow-2xl border border-white/20 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8">About This Weather App</h1>
        <p className="text-lg text-white/90 mb-6 leading-relaxed">
          This is a modern weather application built to provide real-time weather updates and forecasts. Whether you're checking the weather in your current location or searching for conditions in another city, this app delivers a seamless and visually appealing experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <motion.div
            className="bg-white/5 p-6 rounded-2xl border border-white/10"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="list-disc pl-6 text-white/90">
              <li>Real-time weather updates using the OpenWeatherMap API</li>
              <li>Search functionality for any city worldwide</li>
              <li>Current location weather via the Geolocation API</li>
              <li>Dynamic backgrounds that change with weather conditions</li>
              <li>7-day weather forecast</li>
              <li>Temperature unit toggle (°C/°F)</li>
              <li>Dark mode support</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white/5 p-6 rounded-2xl border border-white/10"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
            <ul className="list-disc pl-6 text-white/90">
              <li>Next.js 14 (App Router)</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>TanStack Query</li>
              <li>Framer Motion</li>
              <li>React Icons</li>
            </ul>
          </motion.div>
        </div>

        <p className="text-center mt-10 text-white/70">
          Built with ❤️ by [Your Name] | Powered by xAI's Grok
        </p>
      </motion.div>
    </div>
  );
}