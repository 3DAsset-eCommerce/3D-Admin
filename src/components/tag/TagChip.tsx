import React, { ReactNode } from 'react'

interface TagChipProps {
  children: ReactNode

}

export default function TagChip({children}:TagChipProps) {
  return (
    <div className='flex gap-[1rem] items-center h-[3.6rem] mt-[2rem] py-[0.8rem] px-[1.6rem] rounded-[1.8rem] bg-neutral-navy-300 text-neutral-white-50 hover:cursor-pointer'>
      <span>{children}</span>
      <span>X</span>
    </div>
  )
}
