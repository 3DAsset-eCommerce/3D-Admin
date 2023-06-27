"use client"
import SideNav from '@/components/SideNav'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import {SSRProvider} from 'react-aria';
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'NeuroidAsset-BO',
  description: 'NeuroidAsset-BackOffice',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={inter.className}>
      <SSRProvider>
        <body>
          <div className="flex">
            <SideNav />
            <main className="ml-[25rem] h-[290.6rem] px-[7.2rem] text-neutral-navy-100 ">{children}</main>
          </div>
        </body>
      </SSRProvider>
    </html>
  )
}
