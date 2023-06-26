
"use client"
import React, {useState,useRef} from 'react'

interface TextInputProps {
  type?: 'input' | 'textarea'
  width: number,
  height?:number,
  placeholder: string,
  inputValue?:string, 
  counter?: number,
  disabled?:boolean,
  assetdata?:object,
  setAssetdata?: Function
  
}

export default function TextInput({type='input' ,width, height=4.2, placeholder, inputValue,counter, disabled=false, assetdata, setAssetdata}:TextInputProps) {
  const inputRef = useRef(null);
  const [inputLength, setInputLength] = useState(inputValue?.length)
  const submitHandler = (e:SubmitEvent) => {
    e.preventDefault()
  }
  const countInputHandler = (e) => {
    setInputLength(e.target.value.length)
  }
  // const textLength =  inputRef.current.value.length 

  return (
    <>
    {type === 'input' ? (
        <form onSubmit={submitHandler}>
          <input style={{width: `${width}rem`, height:`${height}rem`}} className='py-[0.9rem] rounded border border-[#474E57] bg-neutral-navy-950 px-[2rem] text-[1.4rem] focus:border-neutral-navy-200' ref={inputRef} placeholder={inputValue ? inputValue : placeholder}  disabled={disabled} onChange={counter && countInputHandler}/>
          <div className='relative'>
            {counter && <p className='text-[1.4rem] font-light absolute -bottom-[3rem] left-[53.5rem]'><span className='text-primary-newlloyd-button '>{inputLength}</span><span>  / {counter}</span></p>}

          </div>
        </form>
      ) : (
        <textarea
          style={{ width: `${width}rem`, height: `${height}rem` }}
          className="p-[0.9rem] rounded border border-[#474E57] bg-neutral-navy-950 px-[2rem] text-[1.4rem]"
          placeholder={placeholder}
        ></textarea>
      )}
    </>
  )
}
