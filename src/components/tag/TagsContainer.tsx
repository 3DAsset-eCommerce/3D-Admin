"use client"
import React, {useState} from 'react'
import Tag from './TagChip'

interface TagsContainerProps {
  tagList?: string[]
}

const arr = ['smiling', 'man', 'waving', 'hands', 'doubled', 'handed']

export default function TagsContainer({tagList=[]}:TagsContainerProps) {
  const [arr, setArr] = useState(tagList)
  //FIXME - keyProp 바꾸기
  return (
    <div className='flex flex-wrap gap-[0.8rem]'>
      {tagList.length && arr.map((item)=><Tag key={item} arr={arr} setArr={setArr}>{item}</Tag>)}
    </div>
  )
}
