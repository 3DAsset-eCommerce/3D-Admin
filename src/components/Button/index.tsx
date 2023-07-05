'use client'

import React, { ReactNode, useState } from 'react'

interface ButtonProps {
  children: ReactNode
  width?: number
  height?: number
  backgroundColor?: string
  borderRadius?: number
  borderColor?: string
  color?: string
  id?: string
  onClick?: Function
}

export default function Button({
  children,

  width = 13,
  height = 3.6,
  backgroundColor = '#237FDB',
  borderRadius = 0.4,
  borderColor = 'transparent',
  color = '#FFF',
  id,
  onClick,
}: ButtonProps) {
  const [isClicked, setIsClicked] = useState(false)
  const clickHandler = () => {
    setIsClicked(!isClicked)
  }
  return (
    <label htmlFor={id}>
      <span
        style={{
          width: `${width}rem`,
          height: `${height}rem`,
          backgroundColor: `${backgroundColor}`,
          borderColor: `${borderColor}`,
          color: `${color}`,
          borderRadius: `${borderRadius}rem`,
        }}
        className={
          ' flex items-center justify-center border py-[0.8rem] hover:cursor-pointer ' +
          `${isClicked && 'border border-transparent-blue text-neutral-navy-100 '}`
        }
        onClick={clickHandler}
      >
        {children}
      </span>
    </label>
  )
}
