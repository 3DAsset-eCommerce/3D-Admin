'use client'
import React, { ReactNode, useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { UseSelector } from 'react-redux/es/hooks/useSelector'
import Button from '../Button'
import { createFileUrl, createFileExtension, createFileSize } from '@/store/assetSlice'
import { uploadFileAsset } from '@/api/service/asset'
import { debounce } from '@/utils/debounce'

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

  const uploadFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setValue('')
    if (e.currentTarget.files !== null) {
      const fileAsset = e.currentTarget.files[0]
      const fileSize = Number((fileAsset.size / 1024 ** 2).toFixed(2))
      if (fileSize > 10) {
        alert('최대 10MB까지 업로드 가능합니다.')
      } else {
        setValue(fileAsset.name)
        debounce(() => {
          console.log('debounce')
          const formData = new FormData()
          console.log(fileAsset)

          formData.append('file', fileAsset)
          console.log(formData.get('file'))
          // dispatch(createFileUrl(formData))
          // console.log(formData)
          // dispatch(createFileSize(fileSize))
          console.log('formData', formData)

          uploadFileAsset(formData)
        }, 5000)()
      }
    } else {
      alert('파일이 존재하지 않습니다.')
    }
  }

  return (
    <div className="relative flex gap-[0.8rem]">
      <input
        disabled
        style={{ width: `${inputWidth}rem`, height: `${inputHeight}rem` }}
        className="rounded border border-[#474E57] bg-neutral-navy-950 px-[1.1rem] text-[1.4rem]"
        value={value}
      />
      <input
        type="file"
        name="file"
        id="uploadBtn"
        className="hidden"
        onChange={uploadFileHandler}
      />
      <Button id="uploadBtn" type="none" width={13} height={4.2}>
        파일 선택
      </Button>
      {children}
    </div>
  )
}
