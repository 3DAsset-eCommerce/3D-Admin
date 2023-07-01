"use client"

import React, {ReactNode, useState} from 'react'

interface ButtonProps {
  width?: number,
  height?: number,
  backgroundColor?: string,
  borderRadius?:number,
  borderColor?: string,
  color?: string,
  id?:string,
  onClick?:Function,
  children: ReactNode
}

export default function Button({children, width=13, height= 3.6, backgroundColor='#237FDB',borderRadius=0.4, borderColor='transparent', color='#FFF', id, onClick}:ButtonProps) {
  const [isClicked, setIsClicked] = useState(false)
  const clickHandler = () => {
    setIsClicked(!isClicked)

  }
  return (
    <label htmlFor={id}><span style={{'width': `${width}rem`, height: `${height}rem`, backgroundColor:`${backgroundColor}`, borderColor: `${borderColor}`, color: `${color}`, borderRadius:`${borderRadius}rem`}} className={' py-[0.8rem] px-[3.2rem] border flex items-center justify-center hover:cursor-pointer '+`${isClicked && 'border-transparent-blue border text-neutral-navy-100'}`} onClick={clickHandler}>{children}</span></label>
  )
}
