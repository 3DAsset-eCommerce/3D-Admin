/**
 * 에셋 조회/수정 페이지
 */
import React from 'react'
import Layout from '@/components/Layout'
import Header from '@/components/Header/Index'
import Body from '@/components/Body'
import TableContainer from '@/components/Table/TableContainer'
import TableItem from '@/components/Table/TableItem'
import Button from '@/components/Button'
import Divider from '@/components/Divider'
import SelectContainer from '@/components/Select/SelectContainer'
import AssetsTableContainer from '@/components/AssetsTableContainer'

export default function AssetsPage() {
  return (
    <Layout>
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
            <SelectContainer />
          </TableItem>

          <TableItem title="판매상태" required={false}>
            {/* <RadioGroup label="saleState">
                <Radio value="전체">전체</Radio>
                <Radio value="판매중">판매중</Radio>
                <Radio value="판매중지">판매중지</Radio>
              </RadioGroup> */}
          </TableItem>
        </TableContainer>
        <div className="buttonContainer mt-[5rem] flex justify-center gap-[1.6rem]">
          <Button width={12.5} height={3.6}>
            검색
          </Button>
          <Button width={12.5} height={3.6} backgroundColor="transparent" borderColor="#60AFFF">
            초기화
          </Button>
        </div>
        <Divider />
      </Body>

      <Body>
        <div>
          <span>
            에셋 목록 (총 <span className="text-primary-main">{10}</span>개)
          </span>
        </div>
        <AssetsTableContainer />
      </Body>
    </Layout>
  )
}
