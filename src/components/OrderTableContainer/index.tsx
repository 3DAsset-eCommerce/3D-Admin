import React from 'react'
import TableItem from '../Table/TableItem'
import ListBox from '../Select/ListBox'

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
  return (
    <>
      <div className=" my-[3.7rem] flex justify-between">
        <div className="flex items-center text-[1.6rem] font-[600] text-neutral-navy-100">
          목록 (총 <span className="text-primary-newlloyd-button">{120}</span>건 )
        </div>
        <ListBox title="주문일 최신순" array={['주문일 최신순', '주문일 오래된순']} />
      </div>
      <div className="h-[64.6rem] w-full overflow-auto border border-[#474E57] px-[1.4rem] py-[1.6rem]">
        <table className="h-[63rem] w-full border border-[#474E57] text-[1.4rem]">
          <tbody w-full>
            <tr className="grid w-full grid-cols-[1.5fr_0.8fr_2fr_2fr_1fr_1fr_1fr] grid-rows-[4.2rem] bg-[#171A1D]">
              <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">주문번호</th>
              <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">주문일</th>
              <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">상품명</th>
              <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">
                구매자 이메일
              </th>
              <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">결제금액</th>
              <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">결제수단</th>
              <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">결제상태</th>
            </tr>
            {orderList.map((item) => (
              <tr
                key={item.orderNumber}
                className="grid w-full grid-cols-[1.5fr_0.8fr_2fr_2fr_1fr_1fr_1fr] grid-rows-[4.2rem] bg-[#31373D]"
              >
                <th className="border-box flex items-center justify-center border-[0.05rem] border-[#474E57] px-[1.2rem] py-[1rem]">
                  {item.orderNumber}
                </th>
                <th className="border-box flex items-center justify-center border-[0.05rem] border-[#474E57] px-[1.2rem] py-[1rem]">
                  {item.orderDate}
                </th>
                <th className="border-box flex items-center justify-center border-[0.05rem] border-[#474E57] px-[1.2rem] py-[1rem]">
                  {item.assetName}
                </th>
                <th className="border-box flex items-center justify-center border-[0.05rem] border-[#474E57] px-[1.2rem] py-[1rem]">
                  {item.email}
                </th>
                <th className="border-box flex items-center justify-center border-[0.05rem] border-[#474E57] px-[1.2rem] py-[1rem]">
                  {item.price}
                </th>
                <th className="border-box flex items-center justify-center border-[0.05rem] border-[#474E57] px-[1.2rem] py-[1rem]">
                  {item.paymentTool}
                </th>
                <th className="border-box flex items-center justify-center border-[0.05rem] border-[#474E57] px-[1.2rem] py-[1rem]">
                  {item.status?'결제 완료':'결제 미완료'}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
