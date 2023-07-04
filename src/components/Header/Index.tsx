import React from 'react'
import Button from '../Button'
import Divider from '../Divider'

interface HeaderProps {
  title: string
  required: boolean
  isButton: boolean
  buttonText?: string
}

export default function Header({
  title,
  required,
  isButton,
  buttonText = '에셋 등록',
}: HeaderProps) {
  return (
    <div className="box-content h-[3.1rem] pt-[8rem]">
      <div className="flex justify-between">
        <h1>
          <span className="text-[2.6rem] font-[700] leading-[3.1rem] text-neutral-navy-100">
            {title}
          </span>
          {required && <span className="ml-[2.6rem] text-primary-newlloyd-button">• 필수항목</span>}
        </h1>
        {isButton && <Button>{buttonText}</Button>}
      </div>
      <Divider height="0.2rem" />
    </div>
  )
}
