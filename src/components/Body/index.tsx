import React, { ReactNode } from 'react'

interface BodyProps {
  children: ReactNode,
}

export default function Body({children}:BodyProps) {
  return (
    <div className='pt-[10rem] '>{children}</div>
  )
}
