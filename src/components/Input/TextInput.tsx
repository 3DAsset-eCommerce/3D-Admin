'use client'
import React, { FormEvent, useRef } from 'react'

interface TextInputProps {
  type?: 'input' | 'textarea'
  width: number
  height?: number
  placeholder: string
  counter?: number
  required?: boolean
}

export default function TextInput({
  type = 'input',
  width,
  height = 4.2,
  placeholder,
  counter,
  required,
}: TextInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  // const textLength =  inputRef.current.value.length

  return (
    <>
      {type === 'input' ? (
        <form onSubmit={handlerSubmit}>
          <input
            style={{ width: `${width}rem`, height: `${height}rem` }}
            className="py-[0.9rem] rounded border border-[#474E57] bg-neutral-navy-950 px-[2rem] text-[1.4rem]"
            ref={inputRef}
            type="text"
            placeholder={placeholder}
          />
          <div className="relative">
            {counter && (
              <p className="text-[1.4rem] font-light absolute -bottom-[3rem] left-[53.5rem]">
                <span className="text-primary-newlloyd-button ">{0}</span>
                <span> / {counter}</span>
              </p>
            )}
          </div>
        </form>
      ) : (
        <textarea
          style={{ width: `${width}rem`, height: `${height}rem` }}
          className="p-[0.9rem] rounded border border-[#474E57] bg-neutral-navy-950 px-[2rem] text-[1.4rem]"
          placeholder={placeholder}
        ></textarea>
      )}
    </>
  )
}
