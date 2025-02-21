import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
      
      extend: {
        fontFamily: {
          sans: ['InterVariable', '...defaultTheme.fontFamily.sans'],
        },
  
        animation: {
          gradient: 'gradient 15s ease infinite',
          rain: 'rain 0.5s linear infinite',
          drizzle: 'drizzle 0.8s linear infinite',
          
          flash: 'flash 2s ease infinite',
          snow: 'snow 3s linear infinite',
          mist: 'mist 5s ease infinite',
          fog: 'fog 4s ease infinite',
          smoke: 'smoke 6s ease infinite',
          wind: 'wind 1s linear infinite',
          spin: 'spin 3s linear infinite',
        },
        keyframes: {
          gradient: {
            '0%, 100%': { 'background-position': '0% 50%' },
            '50%': { 'background-position': '100% 50%' },
          },
          rain: {
            '0%': { 'background-position': '0% 0%' },
            '100%': { 'background-position': '0% 100%' },
          },
          drizzle: {
            '0%': { 'background-position': '0% 0%' },
            '100%': { 'background-position': '0% 50%' },
          },
          flash: {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0.7' },
          },
          snow: {
            '0%': { 'background-position': '0% 0%' },
            '100%': { 'background-position': '0% 100%' },
          },
          mist: {
            '0%': { 'background-position': '0% 0%' },
            '100%': { 'background-position': '100% 100%' },
          },
          fog: {
            '0%': { 'background-position': '0% 0%' },
            '100%': { 'background-position': '50% 50%' },
          },
          smoke: {
            '0%, 100%': { 'background-position': '0% 0%' },
            '50%': { 'background-position': '50% 50%' },
          },
          wind: {
            '0%': { 'background-position': '0% 0%' },
            '100%': { 'background-position': '100% 0%' },
          },
        },
      },
  },
};

export default config;
