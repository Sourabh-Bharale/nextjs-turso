import TanstackQuery from '@/providers/TanstackQuery'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RememBro',
  description:'--experimental This is a simple todo app to test out Nextjs13.5 with Turso DB'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <TanstackQuery>
        <html lang="en">
          <body className={`${inter.className} flex flex-col justify-center mx-2 `}>
            {children}
            <Toaster/>
            </body>
        </html>
      </TanstackQuery>
    </ClerkProvider>
  )
}
