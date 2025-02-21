'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '../../styles/globals.css'; // Adjust if needed

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
 
  return (
    <html lang="en">
      <body className="bg-blue-500 dark:bg-blue-900 text-black dark:text-white">
        <QueryClientProvider client={queryClient}>
           
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}