'use client'

import React, { ReactNode, useState, useRef, ChangeEvent } from 'react'
import Button from '../Button'

interface FileUploaderProps {
  inputWidth: number
  inputHeight?: number
  placeholder?: string
  children?: ReactNode
}

export default function FileUploader({
  inputWidth,
  inputHeight = 12,
  children,
}: FileUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [placeholder, setPlaceholder] = useState('선택된 파일 없음')

  const uploadFileHandler = (e: ChangeEvent) => {
    e.preventDefault()
    if (inputRef.current !== null) {
      setPlaceholder(inputRef.current.value)
    }
  }
  return (
    <div className="relative flex gap-[0.8rem]">
      <input
        disabled
        style={{ width: `${inputWidth}rem`, height: `${inputHeight}rem` }}
        className="rounded border border-[#474E57] bg-neutral-navy-950 px-[1.1rem] text-[1.4rem]"
        placeholder={placeholder}
      />
      <input
        ref={inputRef}
        type="file"
        id="uploadBtn"
        name="uploadBtn"
        className="hidden"
        onChange={uploadFileHandler}
      />
      <Button id="uploadBtn" width={13} height={4.2}>
        파일 선택
      </Button>
      {children}
    </div>
  )
}
