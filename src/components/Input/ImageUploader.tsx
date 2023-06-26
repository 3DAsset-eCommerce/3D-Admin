"use client"
import React, {useState, useRef, ChangeEvent} from 'react'

interface ImageUploaderProps {
  width:number,
  height:number,
  id: number

}

export default function ImageUploader({width, height, id}:ImageUploaderProps) {
  const [isUploaded, setIsUploaded] = useState(false)
  const [url, setUrl] = useState('')
  const inputRef = useRef(null)
  const [fileName, setFileName] = useState('')
  const [fileSize, setFileSize] = useState(0)
  const imageUploadHandler = (e:ChangeEvent) => {
    const file = e.target.files[0]
    const url = URL.createObjectURL(file);
    console.log('file:',file)
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
    <div className='flex flex-col'>
      <div style={{width: `${width}rem`, height: `${height}rem`, backgroundImage: `url(${url})`}} className='relative rounded border border-[#474E57] bg-neutral-navy-950 px-[2rem] flex justify-center items-center bg-no-repeat bg-contain'>
        <label htmlFor={`imageUploadBtn${id}`}><span className={isUploaded?'text-[6.4rem] hover:cursor-pointer hidden px-[1rem]':'px-[1rem] text-[6.4rem] hover:cursor-pointer'}>+</span></label>
        {isUploaded && <button className='absolute right-0 top-0 w-[4rem] h-[4rem] bg-[rgba(0,0,0,0.7)] text-neutral-navy-100' onClick={imageRemoveHandler}>X</button>}
      </div>
      <input ref={inputRef} type='file' accept="image/*" className='hidden' onChange={imageUploadHandler} id={`imageUploadBtn${id}`} />
      {isUploaded && (
      <div className='mt-[1.2rem] ml-[0.5rem]'>
        <p>{fileName}</p>
        <p>{fileSize}</p>
      </div>)}
    </div>
  )
}
