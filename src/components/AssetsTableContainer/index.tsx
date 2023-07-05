'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export default function AssetsTableContainer() {
  const [checkboxChecked, setCheckboxChecked] = useState(false)

  return (
    <>
      <div className="y-[64.6rem] w-full overflow-auto border border-[#474E57] px-[1.4rem] py-[1.6rem]">
        <table className="y-[63rem] w-full border border-[#474E57] text-ms">
          <tbody w-full>
            <tr className="grid w-full grid-cols-[1.5fr_3fr_9fr_3fr_2.5fr_5fr_5fr_4fr_4fr_2fr] grid-rows-[4.2rem]">
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
              <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">상품번호</th>
              <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">상품명</th>
              <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">판매상태</th>
              <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">판매가</th>
              <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">대분류</th>
              <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">소분류</th>
              <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">
                상품등록일
              </th>
              <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">
                최종수정일
              </th>
              <th className="border-[0.05rem] border-[#474E57] px-[1.5rem] py-[1rem]">수정</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
