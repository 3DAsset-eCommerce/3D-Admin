"use client"
import React, {useState,useRef, FormEvent, ChangeEvent} from 'react'

interface TextInputProps {
  type?: 'input' | 'textarea'
  width: number,
  height?:number,
  placeholder: string,
  inputValue?:string, 
  counter?: number,
  disabled?:boolean,
  doesEnterWork?: boolean 
  
}

export default function TextInput({type='input' ,width, height=4.2, placeholder, inputValue,counter, disabled=false, doesEnterWork=false}:TextInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputLength, setInputLength] = useState<number | undefined>(inputValue?.length)

  const handlerKeyDown = (e:KeyboardEvent) => {
    if(e.key==='Enter'){
      console.log('form')
    } else {
    setInputLength(e.target.value.length)
    }
  }

  return (
    <>
    {type === 'input' ? (
        <div>
          <input style={{width: `${width}rem`, height:`${height}rem`}} className={'py-[0.9rem] rounded border border-[#474E57] bg-neutral-navy-950 px-[2rem] text-[1.4rem] focus:border-neutral-navy-200 disabled:bg-neutral-navy-850' } ref={inputRef} placeholder={inputValue ? inputValue : placeholder}  disabled={disabled} onKeyDown={handlerKeyDown}/>
          <div className='relative'>
            {counter && <p className='text-[1.4rem] font-light absolute -bottom-[3rem] left-[53.5rem]'><span className='text-primary-newlloyd-button '>{inputLength}</span><span>  / {counter}</span></p>}
          </div>
        </div>
        )
        :
        (
        <textarea style={{width: `${width}rem`, height:`${height}rem`}} className='p-[0.9rem] rounded border border-[#474E57] bg-neutral-navy-950 px-[2rem] text-[1.4rem]' placeholder={placeholder}></textarea>
        )
    }
    </>
  )
}
