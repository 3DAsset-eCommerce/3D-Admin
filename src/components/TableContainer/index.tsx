import React, { ReactNode } from 'react'

interface TableContainerProps {
  children: ReactNode
}

export default function TableContainer({children}:TableContainerProps) {
  return (
    <ul className='flex flex-col gap-[5rem]'>{children}</ul>


  )
}
