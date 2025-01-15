// pages/_app.tsx

import { ToastProvider } from '@/components/ui/use-toast'; // Adjust import path based on your folder structure
import { AppProps } from 'next/app'; // Next.js AppProps for types
import '@/styles/globals.css'; // Your global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}

export default MyApp;
