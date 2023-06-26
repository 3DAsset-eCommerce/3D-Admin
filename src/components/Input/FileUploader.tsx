'use client'


import React, {ReactNode, useState ,useRef, ChangeEvent} from 'react'
import Button from '../Button'

interface FileUploaderProps {
  inputWidth: number,
  inputHeight?: number,
  placeholder?: string,
  inputValue?:string, //file url
  assetdata?: object,
  setAssetdata?: Function,
  children?: ReactNode,
}

export default function FileUploader({children,inputWidth, inputHeight=12, inputValue,...props}:FileUploaderProps) {
  const assetdata = props.assetdata;
  const setAssetdata = props.setAssetdata;
  const inputRef = useRef(null)
  const [value, setValue] = useState(inputValue?inputValue:'선택된 파일 없음')


  const uploadFileHandler = (e: ChangeEvent) => {
    e.preventDefault()

    // console.log(inputRef.current.files)
    setValue(inputRef?.current.files[0].name)


  }

  return (

        <div className='relative flex gap-[0.8rem]'>
          <input disabled style={{width: `${inputWidth}rem`, height: `${inputHeight}rem`}} className='rounded border border-[#474E57] bg-neutral-navy-950 px-[1.1rem] text-[1.4rem]' value={value}/>
          <input ref={inputRef} type="file" id='uploadBtn'  className='hidden' onChange={uploadFileHandler}/>
          <Button id='uploadBtn' width={13} height={4.2} >파일 선택</Button>
          {children}
        </div>

  )
}
