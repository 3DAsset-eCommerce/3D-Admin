'use client'
import React, { useState, useRef, KeyboardEvent } from 'react'

interface TextInputProps {
  type?: 'input' | 'textarea'
  width: number
  height?: number
  placeholder: string
  inputValue?: string
  counter?: boolean
  disabled?: boolean
  tagsArr: string[]
  setTagsArr: Function
}

export default function TextInput({
  type = 'input',
  width,
  height = 4.2,
  placeholder,
  inputValue,
  counter,
  disabled = false,
  ...props
}: TextInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [inputLength, setInputLength] = useState<number | undefined>(inputValue?.length)
  const tagsArr = props.tagsArr
  const setTagsArr = props.setTagsArr

  const handlerKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setTagsArr([...tagsArr, e.target.value])
      e.target.value = ''
    } else {
      setInputLength(e.target.value.length)
    }
  }

  return (
    <>
      {type === 'input' ? (
        <div>
          <input
            style={{ width: `${width}rem`, height: `${height}rem` }}
            className={
              'rounded border border-[#474E57] bg-neutral-navy-950 px-[2rem] py-[0.9rem] text-[1.4rem] focus:border-neutral-navy-200 disabled:bg-neutral-navy-850'
            }
            ref={inputRef}
            placeholder={inputValue ? inputValue : placeholder}
            disabled={disabled}
            onKeyDown={handlerKeyDown}
          />
          <div className="relative">
            {counter && (
              <p className="absolute -bottom-[3rem] left-[53.5rem] text-[1.4rem] font-light">
                <span className="text-primary-newlloyd-button ">{inputLength}</span>
                <span> / {counter}</span>
              </p>
            )}
          </div>
        </div>
      ) : (
        <textarea
          style={{ width: `${width}rem`, height: `${height}rem` }}
          className="rounded border border-[#474E57] bg-neutral-navy-950 p-[0.9rem] px-[2rem] text-[1.4rem]"
          placeholder={placeholder}
        ></textarea>
      )}
    </>
  )
}
