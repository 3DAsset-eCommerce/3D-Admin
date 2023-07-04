'use client'
import React, { ReactNode, useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { createFileUrl, createFileExtension, createFileSize } from '@/store/assetSlice'
import Button from '../Button'

interface FileUploaderProps {
  inputWidth: number
  inputHeight?: number
  placeholder?: string
  inputValue?: string //file url

  children?: ReactNode
}

export default function FileUploader({
  children,
  inputWidth,
  inputHeight = 12,
  inputValue,
  ...props
}: FileUploaderProps) {
  const [value, setValue] = useState(inputValue ? inputValue : '선택된 파일 없음')
  const dispatch = useDispatch()
  const createFileInfo = (file: File) => {
    const fileSize = Number((file.size / 1024).toFixed(2))
    dispatch(createFileUrl(file))
    // dispatch(createFileExtension())
    // dispatch(createFileSize(fileSize))
  }
  const uploadFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.currentTarget.files !== null) {
      console.log('file:', e.currentTarget.files[0])
      setValue(e.currentTarget.files[0].name)
      // setTimeout(createFileInfo(e.currentTarget.files[0]), 5000)
    } else {
      alert('파일이 존재하지 않습니다.')
    }
  }

  return (
    <div className="relative flex gap-[0.8rem]">
      <input
        disabled
        style={{ width: `${inputWidth}rem`, height: `${inputHeight}rem` }}
        className="rounded border border-[#474E57] bg-neutral-navy-950 px-[1.1rem] text-[1.4rem] text-neutral-navy-200"
        value={value}
      />
      <input type="file" id="uploadBtn" className="hidden" onChange={uploadFileHandler} />
      <Button id="uploadBtn" width={13} height={4.2}>
        파일 선택
      </Button>
      {children}
    </div>
  )
}
