import React, { ReactNode } from 'react'

interface TableItemProps {
  title: string,
  required: boolean,
  children: ReactNode,
}


export default function TableItem({title, required, children}:TableItemProps) {
  return (
    <li className='flex h-fit'>
      <div className='flex justify-start gap-[0.9rem] w-[32rem] pt-[1.2rem]'>
        <span className='font-[600] text-neutral-navy-100 text-[1.6rem]' >{title}</span>
        {required && <span className='text-primary-newlloyd-button'>•</span>}
      </div>
      <div className='w-[142rem]'>
        {children}
      </div>
    </li>
  )
}
