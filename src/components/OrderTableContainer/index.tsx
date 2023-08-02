'use client'
import React, { useState } from 'react'
import TableItem from '../Table/TableItem'
import ListBox from '../Select/ListBox'
import TableRow from './TableRow'

const orderList = [
  {
    orderNumber: '20230627-000004',
    orderDate: '2023-06-27',
    assetName: 'agggg 외 11건',
    assetCount: 12,
    email: 'leeroun5@nate.com',
    price: 21000.0,
    paymentTool: '국민카드',
    status: true,
  },
  {
    orderNumber: '20230627-000003',
    orderDate: '2023-06-27',
    assetName: 'adddd 외 10건',
    assetCount: 11,
    email: 'leejihun4@nate.com',
    price: 21000.0,
    paymentTool: '국민카드',
    status: true,
  },
  {
    orderNumber: '20230627-000002',
    orderDate: '2023-06-27',
    assetName: 'abbbb 외 9건',
    assetCount: 10,
    email: 'yangjinho3@nate.com',
    price: 21000.0,
    paymentTool: '국민카드',
    status: true,
  },
  {
    orderNumber: '20230627-000001',
    orderDate: '2023-06-27',
    assetName: 'aaaaa 외 8건',
    assetCount: 9,
    email: 'yuhyunju1@nate.com',
    price: 21000.0,
    paymentTool: '국민카드',
    status: true,
  },
]

export default function OrderTableContainer() {
  const [selectedOption, setSelectedOption] = useState('주문일 최신순')
  return (
    <>
      <div className=" my-[3.7rem] flex justify-between">
        <div className="flex items-center text-[1.6rem] font-[600] text-neutral-navy-100">
          목록 (총 <span className="text-primary-newlloyd-button">{120}</span>건 )
        </div>
        <ListBox
          array={['주문일 최신순', '주문일 오래된순']}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <div className="h-[64.6rem] w-full overflow-auto border border-[#474E57] px-[1.4rem] py-[1.6rem]">
        <table className="h-[63rem] w-full border border-[#474E57] text-[1.4rem]">
          <tbody w-full>
            <TableRow
              num="주문번호"
              orderedDate="주문일"
              name="상품명"
              email="구매자 이메일"
              price="결제금액"
              payment="결제수단"
              status="결제상태"
              isHeader={true}
            />
            {orderList.map((item) => (
              <TableRow
                key={item.orderNumber}
                num={item.orderNumber}
                orderedDate={item.orderDate}
                name={item.assetName}
                email={item.email}
                price={item.price}
                payment={item.paymentTool}
                status={item.status ? '결제완료' : '결제대기'}
                isHeader={false}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
