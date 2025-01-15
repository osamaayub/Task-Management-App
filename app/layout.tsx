import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import  {ReduxProvider}  from '@/providers/redux-provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Task Management Dashboard',
  description: 'Stay organized, track progress, and monitor task status.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}

