"use client";


// Redesigned SearchBar
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full max-w-md mx-auto mb-10 px-4 relative group"
    >
      <div className="relative w-full">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="w-full pl-6 pr-16 py-4 rounded-full border-2 border-white/20
            bg-white/10 backdrop-blur-lg text-white placeholder-white/50 text-lg
            focus:outline-none focus:border-white/50 focus:ring-4 focus:ring-white/20
            shadow-[0_8px_25px_rgba(255,255,255,0.1)] hover:shadow-[0_12px_35px_rgba(255,255,255,0.2)]
            transform transition-all duration-300 ease-in-out
            hover:scale-[1.03] focus:scale-[1.03]"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full
            bg-gradient-to-r from-blue-600 to-cyan-600 text-white
            hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-700
            transform transition-all duration-300 ease-in-out
            hover:scale-110 hover:rotate-12 active:scale-95
            shadow-[0_6px_20px_rgba(6,182,212,0.4)] hover:shadow-[0_8px_25px_rgba(6,182,212,0.6)]"
          aria-label="Search city"
        >
          <FiSearch className="w-6 h-6" />
        </button>
      </div>
      {/* Floating decorative elements */}
      <div className="absolute -top-2 -left-2 w-4 h-4 bg-white/20 rounded-full animate-pulse" />
      <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white/20 rounded-full animate-pulse delay-300" />
    </form>
  );
}