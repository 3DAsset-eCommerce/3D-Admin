import React, { Children, cloneElement } from 'react'

interface TableItemProps {
  children: any
  title: string
  required: boolean
}

export default function TableItem({ children, title, required }: TableItemProps) {
  return (
    <li className="flex h-fit w-full justify-between">
      <div className="flex w-[32rem] justify-start gap-[0.9rem] pt-[1.2rem]">
        <span className="text-[1.6rem] font-[600] text-neutral-navy-100">{title}</span>
        {required && <span className="text-primary-newlloyd-button">•</span>}
      </div>
      <div className="flex w-[142rem] gap-[1.6rem] flex-col">
        {Children.map(children, (child, index) => {
          return cloneElement(child, {
            key: index,
          })
        })}
      </div>
    </li>
  )
}
