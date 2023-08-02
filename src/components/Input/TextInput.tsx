'use client'
import React, {
  useState,
  useRef,
  KeyboardEvent,
  Dispatch,
  SetStateAction,
  FormEvent,
  KeyboardEventHandler,
} from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {
  createAssetName,
  createAssetDescription,
  createAssetPrice,
  createAssetDiscount,
  createTagList,
} from '@/store/assetSlice'
import { debounce } from '@/utils/debounce'
interface TextInputProps {
  type?: 'input' | 'textarea' | 'number'
  label?: 'name' | 'price' | 'description' | 'tag' | 'none'
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
  label = 'none',
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
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputLength, setInputLength] = useState<number | undefined>(inputValue?.length)
  const tagsArr = props.tagsArr
  const setTagsArr = props.setTagsArr
  const dispatch = useDispatch()

  const keyDownHandler: KeyboardEventHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value
    if (e.key !== 'Enter') {
      counter && setInputLength(e.currentTarget.value.length)
      if (label !== 'tag') {
        debounce(() => {
          switch (label) {
            case 'name':
              dispatch(createAssetName(inputValue))
              console.log('nameRedux')
              break
            case 'price':
              dispatch(createAssetPrice(parseFloat(inputValue)))
              console.log('priceRedux')
              break
            case 'description':
              dispatch(createAssetDescription(inputValue))
              console.log('descriptionRedux')
              break
          }
        }, 5000)()
      } else if (label === 'tag') {
        return
      }
    }
  }

  const tagSubmitHandler = (e: FormEvent) => {
    e.preventDefault()
    if (tagsArr && setTagsArr && inputRef.current) {
      if (inputRef.current.value) {
        if (tagsArr.length >= 10) {
          alert('최대 10개까지 가능합니다.')
          inputRef.current.value = ''
        } else {
          if (tagsArr.find((item) => item === inputRef.current?.value)) {
            alert('이미 존재하는 태그입니다.')
            inputRef.current.value = ''
          } else {
            // console.log([...tagsArr, inputRef.current?.value])
            setTagsArr([...tagsArr, inputRef.current?.value])
            inputRef.current.value = ''
            debounce(() => {
              dispatch(createTagList([inputRef.current?.value, ...tagsArr]))
            }, 5000)()
            console.log('tagsDispatch')
          }
        }
      } else {
        alert('태그명을 입력해주세요.')
      }
    }
  }
  return (
    <>
      {type === 'input' || type === 'number' ? (
        <form onSubmit={tagSubmitHandler}>
          <input
            ref={inputRef}
            style={{ width: `${width}rem`, height: `${height}rem` }}
            className={
              'rounded border border-[#474E57] bg-neutral-navy-950 px-[2rem] py-[0.9rem] text-[1.4rem]  text-neutral-navy-200 focus:border-neutral-navy-200 disabled:bg-neutral-navy-850'
            }
            placeholder={placeholder}
            disabled={disabled}
            onKeyDown={keyDownHandler}
            defaultValue={inputValue}
            maxLength={100}
            required={required}
          />
          <div className="relative">
            {counter && (
              <p className="absolute -bottom-[3rem] left-[53.5rem] text-[1.4rem] font-light">
                <span className="text-primary-newlloyd-button ">{inputLength}</span>
                <span className=" text-neutral-navy-200"> / {counter}</span>
              </p>
            )}
          </div>
        </form>
      ) : (
        <textarea
          style={{ width: `${width}rem`, height: `${height}rem` }}
          className="rounded border border-[#474E57] bg-neutral-navy-950 p-[0.9rem] px-[2rem] text-[1.4rem]  text-neutral-navy-200"
          placeholder={placeholder}
          defaultValue={inputValue}
          onKeyDown={keyDownHandler}
        ></textarea>
      )}
    </>
  )
}
