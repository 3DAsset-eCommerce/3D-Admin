import React from 'react'
import Tag from './TagChip'

const arr = ['smiling', 'man', 'waving', 'hands', 'doubled', 'handed']

export default function TagsContainer() {
  //FIXME - keyProp 바꾸기
  return (
    <div className='flex flex-wrap gap-[0.8rem]'>
      {arr.map((item)=><Tag key={item}>{item}</Tag>)}
    </div>
  )
}
