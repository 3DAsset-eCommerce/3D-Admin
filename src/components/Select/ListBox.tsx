'use client'
import React, { ReactNode, Dispatch, SetStateAction, MouseEventHandler } from 'react'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { Listbox } from '@headlessui/react'
import { DropDownIcon } from '../../../public/icons/icons'
import { debounce } from '@/utils/debounce'
interface ListBoxProps {
  children?: ReactNode
  array: any[]
  selectedOption: string
  setSelectedOption: Dispatch<SetStateAction<string>>
  disabled?: boolean
  dispatchFunc?: ActionCreatorWithPayload<any>
}

export default function ListBox({
  children,
  array,
  selectedOption,
  setSelectedOption,
  disabled,
  dispatchFunc,
}: ListBoxProps) {
  const dispatch = useDispatch()
  const handleOptionClick = (e: any) => {
    setSelectedOption(e.target.innerText)
    dispatchFunc &&
      debounce(() => {
        dispatch(dispatchFunc(e.target.innerText))
      }, 5000)()
  }

  return (
    <div>
      <Listbox by="id" as="div" className="relative flex flex-col gap-0">
        <Listbox.Button
          className={`flex h-[4.2rem] w-[24rem] justify-between rounded border border-[#474E57] bg-neutral-navy-950 px-[2rem] py-[0.9rem]  text-[1.4rem]  text-neutral-navy-200 focus:border-neutral-navy-200 ${
            disabled && 'bg-[#394149]'
          }`}
        >
          <span>{selectedOption}</span>
          <DropDownIcon />
        </Listbox.Button>
        {!disabled && (
          <Listbox.Options className="absolute top-[4.2rem] z-10 rounded border border-[#474E57] bg-neutral-navy-950 text-[1.4rem]">
            {array?.map((item) => (
              <Listbox.Option
                key={item.index}
                value={item}
                className="flex min-h-[3.5rem] w-[24rem] items-center border border-[rgba(0,0,0,0)] px-[2rem] py-[0.9rem] text-neutral-navy-200 hover:border-neutral-navy-200"
                onClick={handleOptionClick}
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
