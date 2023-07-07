import React from 'react'

interface TableRowProps {
  num: string
  orderedDate: string
  name: string
  email: string
  price: number | '결제금액'
  payment: string
  status: boolean | '결제상태' | '결제완료' | '결제대기'
  isHeader: boolean
}

export default function TableRow({
  num,
  orderedDate,
  name,
  email,
  price,
  payment,
  status,
  isHeader,
}: TableRowProps) {
  return (
    <div>
      <tr
        className={`grid w-full grid-cols-[1.5fr_0.8fr_2fr_2fr_1fr_1fr_1fr] grid-rows-[4.2rem] ${
          isHeader ? 'bg-[#171A1D]' : 'bg-[#31373D]'
        }`}
      >
        <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">{num}</th>
        <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">{orderedDate}</th>
        <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">{name}</th>
        <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">{email}</th>
        <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">{price}</th>
        <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">{payment}</th>
        <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">{status}</th>
      </tr>
    </div>
  )
}
