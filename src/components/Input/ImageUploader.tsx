"use client"
import React, {useState} from 'react'

interface ImageUploaderProps {
  width:number,
  height:number,
}

export default function ImageUploader({width, height, }:ImageUploaderProps) {
  const [isUploaded, setIsUploaded] = useState(false)
  const imageUploadHandler = () => {
    setIsUploaded(true)
  }
  const imageRemoveHandler = () => {
    setIsUploaded(false)
  }
  return (
    <>
      <div style={{width: `${width}rem`, height: `${height}rem`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className='relative rounded border border-[#474E57] bg-neutral-navy-950 px-[2rem] flex justify-center items-center'>
        <label htmlFor="imageUploadBtn"><span className='text-[6.4rem] hover:cursor-pointer'>+</span></label>
        {isUploaded && <button className='absolute right-0 top-0 w-[4rem] h-[4rem] bg-[rgba(0,0,0,0.7)] text-neutral-navy-100' onClick={imageRemoveHandler}>X</button>}
      </div>
      <input type='file' accept="image/*" className='hidden' onChange={imageUploadHandler} id='imageUploadBtn'/>
      {isUploaded && (
      <div>
        <p>{}</p>
        <p>{}</p>
      </div>)}
    </>
  )
}
