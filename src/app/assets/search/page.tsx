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
import AssetCategorySelectContainer from '@/components/Select/AssetCategorySelectContainer'
import RadioContainer from '@/components/Radio/RadioContainer'
import AssetsTableContainer from '@/components/AssetsTableContainer'
import { searchAssets } from '@/api/service/asset'
export default function AssetsPage() {
  return (
    <Layout>
      <Header title="에셋 조회/수정" required={false} isButton={false} />
      <Body>
        <TableContainer>
          <TableItem title="검색어" required={false}>
            <div className="flex gap-[1.6rem]">
              <label htmlFor="assetId">
                <span className="pr-[1.6rem] text-[1.4rem]">상품번호</span>
                <input
                  type="text"
                  id="assetId"
                  className="rounded border border-[#474E57] bg-neutral-navy-950 px-[2rem] py-[0.9rem] text-[1.4rem] focus:border-neutral-navy-200"
                />
              </label>
              <label htmlFor="assetName">
                <span className="pr-[1.6rem] text-[1.4rem]">상품명</span>
                <input
                  type="text"
                  id="assetName"
                  className="text-[1.4rem rounded border border-[#474E57] bg-neutral-navy-950 px-[2rem] py-[0.9rem] focus:border-neutral-navy-200"
                />
              </label>
            </div>
            <div></div>
          </TableItem>
          <TableItem title="카테고리" required={false}>
            <AssetCategorySelectContainer />
          </TableItem>
          <TableItem title="판매상태" required={false}>
            <RadioContainer type="circle" label="판매상태" array={['전체', '판매중', '판매중지']} />
          </TableItem>
        </TableContainer>
        <div className="buttonContainer mt-[5rem] flex justify-center gap-[1.6rem]">
          <Button type="success" label="search" width={12.5} height={3.6}>
            검색
          </Button>
          <Button
            type="fail"
            label="search"
            width={12.5}
            height={3.6}
            backgroundColor="transparent"
            borderColor="#60AFFF"
          >
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
