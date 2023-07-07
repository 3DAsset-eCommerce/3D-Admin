'use client'
import React, { useState, Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import Button from '../Button'

interface TableRowProps {
  num: string
  name: string
  status: string
  price: number | '판매가'
  category: string
  subcategory: string
  releaseDate: string
  updatedAt: string
  isHeader: boolean
}

export default function TableRow({
  num,
  name,
  status,
  price,
  category,
  subcategory,
  releaseDate,
  updatedAt,
  isHeader,
}: TableRowProps) {
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  return (
    <tr
      className={`grid w-full grid-cols-[1.5fr_4fr_9fr_3fr_2.5fr_5fr_5fr_4fr_4fr_2fr] grid-rows-[4.2rem] text-ms text-[#A4AFBA] ${
        isHeader ? 'bg-[#171A1D]' : 'bg-[#31373D]'
      }`}
    >
      <th className="flex items-center justify-center border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">
        {checkboxChecked ? (
          <Image
            src="/icons/checkboxOn.svg"
            alt="checkbox on icon"
            width={24}
            height={24}
            onClick={() => setCheckboxChecked(!checkboxChecked)}
            className="hover:cursor-pointer"
          />
        ) : (
          <Image
            src="/icons/checkboxEmpty.svg"
            alt="checkbox off icon"
            width={24}
            height={24}
            onClick={() => setCheckboxChecked(!checkboxChecked)}
            className="hover:cursor-pointer"
          />
        )}
      </th>
      <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">{num}</th>
      <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">{name}</th>
      <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">
        {status === 'active' ? '판매중' : '판매중지'}
      </th>
      <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">{price}</th>
      <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">{category}</th>
      <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">{subcategory}</th>
      <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">{releaseDate}</th>
      <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">{updatedAt}</th>
      <th className="flex items-center justify-center border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">
        {isHeader ? (
          '수정'
        ) : (
          <Button width={4.2} height={2.4}>
            수정
          </Button>
        )}
      </th>
    </tr>
  )
}
