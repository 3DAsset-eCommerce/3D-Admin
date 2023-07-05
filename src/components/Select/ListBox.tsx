'use client'
import React, { ReactNode } from 'react'
import { Listbox } from '@headlessui/react'
import { DropDownIcon } from '../../../public/icons/icons'

interface ListBoxProps {
  children?: ReactNode
  title: string
  disabled?: boolean
  array: any[]
}

export default function ListBox({ children, title, disabled = false, array }: ListBoxProps) {
  return (
    <div>
      <Listbox by="id" as="div" className="relative flex flex-col gap-0">
        <Listbox.Button
          id={title}
          className="flex h-[4.2rem] w-[24rem] justify-between rounded border border-[#474E57] bg-neutral-navy-950 px-[2rem] py-[0.9rem] text-[1.4rem]  text-neutral-navy-200 focus:border-neutral-navy-200"
        >
          <span>{title}</span>
          <DropDownIcon />
        </Listbox.Button>
        {!disabled && (
          <Listbox.Options className="absolute top-[4.2rem] z-10 rounded border border-[#474E57] bg-neutral-navy-950 text-[1.4rem]">
            {array.map((item) => (
              <Listbox.Option
                key={item.index}
                value={item}
                className="flex min-h-[3.5rem] w-[24rem] items-center border border-[rgba(0,0,0,0)] px-[2rem] py-[0.9rem] text-neutral-navy-200 hover:border-neutral-navy-200"
                onClick={() => {
                  console.log('clicked!!')
                }}
              >
                {item}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        )}
      </Listbox>
      {children}
    </div>
  )
}
