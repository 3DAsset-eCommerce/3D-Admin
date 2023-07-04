'use client'
import React, { useState, useRef, ChangeEvent } from 'react'

interface ImageUploaderProps {
  required: boolean
  width: number
  height: number
  id: number
}

export default function ImageUploader({ required, width, height, id }: ImageUploaderProps) {
  const [isUploaded, setIsUploaded] = useState<boolean>(false)
  const [url, setUrl] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState<string>('')
  const [fileSize, setFileSize] = useState<number>(0)
  const imageUploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files && e.currentTarget.files[0]
    const url = URL.createObjectURL(file)
    setIsUploaded(true)
    setUrl(url)
    setFileName(file.name)
    setFileSize(file.size)
  }
  const imageRemoveHandler = () => {
    setIsUploaded(false)
    setUrl('')
  }
  return (
    <div className="flex flex-col">
      <div
        style={{ width: `${width}rem`, height: `${height}rem`, backgroundImage: `url(${url})` }}
        className="relative flex items-center justify-center rounded border border-[#474E57] bg-neutral-navy-950 bg-contain bg-no-repeat px-[2rem]"
      >
        <label htmlFor={`imageUploadBtn${id}`}>
          <span
            className={
              isUploaded
                ? 'hidden px-[1rem] text-[6.4rem] hover:cursor-pointer'
                : 'px-[1rem] text-[6.4rem]  text-neutral-navy-200 hover:cursor-pointer'
            }
          >
            +
          </span>
        </label>
        {isUploaded && (
          <button
            className="absolute right-0 top-0 h-[4rem] w-[4rem] bg-[rgba(0,0,0,0.7)] text-neutral-navy-100"
            onClick={imageRemoveHandler}
          >
            X
          </button>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        required={required}
        accept="image/*"
        className="hidden"
        onChange={imageUploadHandler}
        id={`imageUploadBtn${id}`}
      />
      {isUploaded && (
        <div className="ml-[0.5rem] mt-[1.2rem]">
          <p>{fileName}</p>
          <p>{fileSize / 1024}</p>
        </div>
      )}
    </div>
  )
}
