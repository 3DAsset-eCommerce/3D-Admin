import React, { ReactNode } from 'react'

interface BodyProps {
  children: ReactNode
}

export default function Body({ children }: BodyProps) {
  return <div className="mt-[13.5rem] px-[9rem] pt-[4.8rem] text-neutral-navy-200">{children}</div>
}
