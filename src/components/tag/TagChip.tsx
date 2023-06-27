import React, { useRef,ReactNode } from 'react'

interface TagChipProps {
  children: ReactNode,
  arr:string[],
  setArr: Function
}

export default function TagChip({children,arr, setArr}:TagChipProps) {
  const tagRef = useRef<HTMLSpanElement | null>(null)
  const deleteTagHandler = () => {
    const newArr = arr.filter((item)=>item !== tagRef.current.innerHTML) 
    setArr(newArr)  
  }
  return (
    <div className='flex gap-[1rem] items-center h-[3.6rem] mt-[2rem] py-[0.8rem] px-[1.6rem] rounded-[1.8rem] bg-neutral-navy-300 text-neutral-white-50 hover:cursor-pointer'>
      <span ref={tagRef}>{children}</span>
      <span className='hover:cursor-pointer px-[1rem]' onClick={deleteTagHandler}>X</span>
    </div>
  )
}
