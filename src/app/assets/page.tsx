/**
 * 에셋 조회/수정 페이지
 */
import React from 'react'
import Header from '@/components/Header/Index'
import Body from '@/components/Body'
import TableContainer from '@/components/TableContainer'
import TableItem from '@/components/TableItem'
import Select from '@/components/Input/Select'
// import Radio from '@/components/Radio'
import Button from '@/components/Button'
import Divider from '@/components/Divider'
import Modal from '@/components/Modal'
import { showModal } from '@/components/Modal'

export default function AssetsPage() {
  return (
    <>
      <Header title="에셋 조회/수정" required={false} isButton={false} />
      <Body>
        <TableContainer>
          <TableItem title="검색어" required={false}>
            <div className="flex gap-[6.4rem]">
              <label htmlFor="assetId">
                <span className="pr-[1.6rem] text-[1.4rem]">상품번호</span>
                <input
                  type="text"
                  id="assetId"
                  className="rounded border border-neutral-navy-300 bg-neutral-navy-950 px-[2rem] py-[0.9rem] text-[1.4rem]"
                />
              </label>
              <label htmlFor="assetName">
                <span className="pr-[1.6rem] text-[1.4rem]">상품명</span>
                <input
                  type="text"
                  id="assetName"
                  className="rounded border border-neutral-navy-300 bg-neutral-navy-950 px-[2rem] py-[0.9rem] text-[1.4rem]"
                />
              </label>
            </div>
            <div></div>
          </TableItem>
          <TableItem title="카테고리" required={false}>
            <Select></Select>
          </TableItem>
          <TableItem title="판매상태" required={false}>
            {/* <Radio /> */}
          </TableItem>
        </TableContainer>
        <div className="buttonContainer flex gap-[1.6rem] mt-[5rem] justify-center">
          <Button width={12.5} height={3.6}>
            검색
          </Button>
          <Button width={12.5} height={3.6} backgroundColor="transparent" borderColor="#60AFFF">
            초기화
          </Button>
        </div>
      </Body>
      <Divider />
      <Body>
        <div>
          <span>
            에셋 목록 (총 <span className="text-primary-main">{10}</span>개)
          </span>
        </div>
        <Select />
        <div className="w-[151rem] y-[64.6rem] py-[1.6rem] px-[1.4rem] overflow-auto border border-neutral-navy-800">
          <table className="text-[1.4rem] w-[147.9rem] y-[63rem] border border-neutral-navy-300">
            <thead w-full>
              <tr className="grid grid-cols-[1.5fr_3fr_9fr_3fr_2.5fr_5fr_5fr_4fr_4fr_2fr] grid-rows-[4.2rem] w-full">
                <th className="px-[1.5rem] py-[1rem] border-[0.05rem] border-neutral-navy-300">
                  s
                </th>
                <th className="px-[1.5rem] py-[1rem] border-[0.05rem] border-neutral-navy-300">
                  상품번호
                </th>
                <th className="px-[1.5rem] py-[1rem] border-[0.05rem] border-neutral-navy-300">
                  상품명
                </th>
                <th className="px-[1.5rem] py-[1rem] border-[0.05rem] border-neutral-navy-300">
                  판매상태
                </th>
                <th className="px-[1.5rem] py-[1rem] border-[0.05rem] border-neutral-navy-300">
                  판매가
                </th>
                <th className="px-[1.5rem] py-[1rem] border-[0.05rem] border-neutral-navy-300">
                  대분류
                </th>
                <th className="px-[1.5rem] py-[1rem] border-[0.05rem] border-neutral-navy-300">
                  소분류
                </th>
                <th className="px-[1.5rem] py-[1rem] border-[0.05rem] border-neutral-navy-300">
                  상품등록일
                </th>
                <th className="px-[1.5rem] py-[1rem] border-[0.05rem] border-neutral-navy-300">
                  최종수정일
                </th>
                <th className="px-[1.5rem] py-[1rem] border-[0.05rem] border-neutral-navy-300">
                  수정
                </th>
              </tr>
            </thead>
            <tbody>
              {
                <tr className="grid grid-cols-[1.5fr_3fr_9fr_3fr_2.5fr_5fr_5fr_4fr_4fr_2fr] grid-rows-[4.2rem] w-full">
                  <td className="px-[1.5rem] py-[1rem] border-[0.05rem] border-neutral-navy-300"></td>
                  <td className="px-[1.5rem] py-[1rem] border-[0.05rem] border-neutral-navy-300">
                    {'00000001'}
                  </td>
                  <td className="px-[1.5rem] py-[1rem] border-[0.05rem] border-neutral-navy-300">
                    {'Girl Running'}
                  </td>
                  <td className="px-[1.5rem] py-[1rem] border-[0.05rem] border-neutral-navy-300">
                    {'판매 중'}
                  </td>
                  <td className="px-[1.5rem] py-[1rem] border-[0.05rem] border-neutral-navy-300">
                    {'8,900'}
                  </td>
                  <td className="px-[1.5rem] py-[1rem] border-[0.05rem] border-neutral-navy-300">
                    {'Daily Life'}
                  </td>
                  <td className="px-[1.5rem] py-[1rem] border-[0.05rem] border-neutral-navy-300">
                    {'Daily Life'}
                  </td>
                  <td className="px-[1.5rem] py-[1rem] border-[0.05rem] border-neutral-navy-300">
                    {'2023.05.30'}
                  </td>
                  <td className="px-[1.5rem] py-[1rem] border-[0.05rem] border-neutral-navy-300">
                    {'2023.06.01'}
                  </td>
                  <td className="px-[1.5rem] py-[1rem] border-[0.05rem] border-neutral-navy-300">
                    <button className="w-[4.2rem] h-[2.4rem] rounded bg-primary-newlloyd-button text-[#d9d9d9]">
                      수정
                    </button>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </Body>
    </>
  )
}
