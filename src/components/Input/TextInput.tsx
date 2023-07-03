'use client'
import React, { useState, useRef, KeyboardEvent, Dispatch, SetStateAction } from 'react'
import {createAssetName, createAssetDescription, createAssetPrice, createAssetDiscount, createTagList} from '@/store/assetSlice'

interface TextInputProps {
  type?: 'input' | 'textarea'
  width: number
  height?: number
  placeholder: string
  inputValue?: string
  counter?: number
  disabled?: boolean
  tagsArr?: string[]
  setTagsArr?: Dispatch<SetStateAction<string[]>>
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
    if (tagsArr !== undefined && setTagsArr !== undefined && e.key === 'Enter') {
      if (tagsArr.length >= 10) {
        alert('최대 10개까지 가능합니다.')
      } else {
        if (tagsArr.find((item) => item === e.currentTarget.value)) {
          console.log('tagsArr:', tagsArr)
          alert('이미 존재하는 태그입니다.')
          return
        } else {
          console.log([...tagsArr, e.currentTarget.value])
          setTagsArr([...tagsArr, e.currentTarget.value])
          e.currentTarget.value = ''
        }
      }
    } else {
      setInputLength(e.currentTarget.value.length)
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
