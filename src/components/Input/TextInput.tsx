'use client'
import React, { useState, useRef, KeyboardEvent, Dispatch, SetStateAction, FormEvent } from 'react'
import { useForm } from 'react-hook-form'
import {
  createAssetName,
  createAssetDescription,
  createAssetPrice,
  createAssetDiscount,
  createTagList,
} from '@/store/assetSlice'

interface TextInputProps {
  type?: 'input' | 'textarea' | 'number'
  required: boolean
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
  required,
  width,
  height = 4.2,
  placeholder,
  inputValue,
  counter,
  disabled = false,
  ...props
}: TextInputProps) {
  const {
    formState: {},
  } = useForm({
    delayError: 1000,
    mode: 'onChange',
    defaultValues: { inputValue },
  })
  const inputRef = useRef<HTMLInputElement>()
  const [inputLength, setInputLength] = useState<number | undefined>(inputValue?.length)
  const tagsArr = props.tagsArr
  const setTagsArr = props.setTagsArr

  const handlerKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (counter && e.key !== 'Enter') {
      setInputLength(e.currentTarget.value.length)
      console.log(e.nativeEvent)
    }
  }
  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    if (tagsArr !== undefined && setTagsArr !== undefined && inputRef.current !== undefined) {
      if (tagsArr.length >= 10) {
        alert('최대 10개까지 가능합니다.')
        return
      } else {
        if (tagsArr.find((item) => item === inputRef.current?.value)) {
          console.log('tagsArr:', tagsArr)
          alert('이미 존재하는 태그입니다.')
          return
        } else {
          console.log([...tagsArr, inputRef.current?.value])
          setTagsArr([...tagsArr, inputRef.current?.value])
          inputRef.current.value = ''
          return
        }
      }
    }
  }
  return (
    <>
      {type === 'input' || type === 'number' ? (
        <form onSubmit={submitHandler}>
          <input
            ref={inputRef}
            style={{ width: `${width}rem`, height: `${height}rem` }}
            className={
              'rounded border border-[#474E57] bg-neutral-navy-950 px-[2rem] py-[0.9rem] text-[1.4rem] focus:border-neutral-navy-200 disabled:bg-neutral-navy-850'
            }
            placeholder={placeholder}
            disabled={disabled}
            onKeyDown={handlerKeyDown}
            defaultValue={inputValue}
            maxLength={100}
            required={required}
          />
          <div className="relative">
            {counter && (
              <p className="absolute -bottom-[3rem] left-[53.5rem] text-[1.4rem] font-light">
                <span className="text-primary-newlloyd-button ">{inputLength}</span>
                <span> / {counter}</span>
              </p>
            )}
          </div>
        </form>
      ) : (
        <textarea
          style={{ width: `${width}rem`, height: `${height}rem` }}
          className="rounded border border-[#474E57] bg-neutral-navy-950 p-[0.9rem] px-[2rem] text-[1.4rem]"
          placeholder={placeholder}
          defaultValue={inputValue}
        ></textarea>
      )}
    </>
  )
}
