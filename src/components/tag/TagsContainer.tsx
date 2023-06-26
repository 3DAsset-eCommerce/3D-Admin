"use client"
import React, {useState} from 'react'
import TagChip from './TagChip'

interface TagsContainerProps {
  tagList?: string[]
}


export default function TagsContainer({tagList=[]}:TagsContainerProps) {
  const [arr, setArr] = useState(tagList)
  return (
    <div className='flex flex-wrap gap-[0.8rem]'>
      { arr.map((item)=><TagChip key={item} arr={arr} setArr={setArr}>{item}</TagChip>)}
    </div>
  )
}
