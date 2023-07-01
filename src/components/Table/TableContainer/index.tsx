"use client"
import React, { useState, ReactNode,Children, cloneElement, ReactElement } from 'react'

interface TableContainerProps {
  children: ReactElement[]
}

export default function TableContainer({children}:TableContainerProps) {


  return (
    <ul className='flex flex-col gap-[5rem]'>
      {
        Children.map(children,(child,index)=> {
          return cloneElement(child,{
            key: index,
           
           
          })
        })
      }
    </ul>


  )
}
