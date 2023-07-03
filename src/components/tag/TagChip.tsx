'use client'
import React, { useRef, ReactNode } from 'react'

interface TagChipProps {
  children: string
  tagsArr: string[]
  setTagsArr: Function
}

export default function TagChip({ children, tagsArr, setTagsArr }: TagChipProps) {
  const tagRef = useRef<HTMLSpanElement | null>(null)
  const deleteTagHandler = () => {
    const newArr = tagsArr.filter((item) => item !== tagRef.current?.innerText)
    console.log(newArr)
    setTagsArr(newArr)
  }
  return (
    <div className="mt-[2rem] flex h-[3.6rem] items-center gap-[1rem] rounded-[1.8rem] bg-neutral-navy-300 px-[1.6rem] py-[0.8rem] text-neutral-white-50 hover:cursor-pointer">
      <label htmlFor={children} className="hover:cursor-pointer">
        <span ref={tagRef}>{children}</span>
        <button className="px-[1rem]" onClick={deleteTagHandler} id={children}>
          X
        </button>
      </label>
    </div>
  )
}
