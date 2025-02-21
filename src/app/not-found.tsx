'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">404</h1>
        <p className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
          Oops! Looks like this page got lost in the clouds.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}