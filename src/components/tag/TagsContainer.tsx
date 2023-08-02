'use client'
import React, { useState } from 'react'
import TextInput from '@/components/Input/TextInput'
import TagChip from './TagChip'

interface TagsContainerProps {
  required: boolean
  tagList?: string[]
}

export default function TagsContainer({ required, tagList = [] }: TagsContainerProps) {
  const [tagsArr, setTagsArr] = useState<string[]>(tagList)
  return (
    <>
      <TextInput
        required={required}
        width={38.8}
        placeholder="태그를 입력해주세요. (최대 10개)"
        tagsArr={tagsArr}
        setTagsArr={setTagsArr}
      />
      <div className="flex flex-wrap gap-[0.8rem]">
        {tagsArr.length !== 0 &&
          tagsArr.map((item) => (
            <TagChip key={item} tagsArr={tagsArr} setTagsArr={setTagsArr}>
              {item}
            </TagChip>
          ))}
      </div>
    </>
  )
}
