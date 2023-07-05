import SideNav from '@/components/SideNav'
import React, { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      <SideNav />
      <div>{children}</div>
    </div>
  )
}
