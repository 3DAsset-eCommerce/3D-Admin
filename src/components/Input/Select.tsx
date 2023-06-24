"use client"
import React, { ReactNode } from 'react'
import { useSelect , HiddenSelect } from '@react-aria/select'
import { useListBox, useOption, useListBoxSection } from '@react-aria/listbox'
import { useSelectState } from '@react-stately/select'

interface SelectProps {
  children?: ReactNode
}

export default function Select({children}:SelectProps) {

  return (
      <div className='flex flex-col relative'>
        <div className='border border-[#474E57] text-neutral-navy-200 '>
          
        </div>
        {children}
      </div>

  )
}

