'use client'
import React, { useState, useEffect } from 'react'
import TableRow from './TableRow'
import { getAllAssets } from '@/api/service/asset'

interface Asset {
  assetId: string
  assetName: string
  price: number //소수점
  discount: number
  discountPrice: number //소수점
  releaseDate: string
  thumbnailUrl: string
  rating: number //소수점
  reviewCount: number
  wishCount: number
  wishlistId: null
}
export default function AssetsTableContainer() {
  const [assets, setAssets] = useState<Asset[]>([])
  const getFullAssetsArr = async () => {
    const res = await getAllAssets()
    const assetList = res.data.assetList
    console.log(assetList)
    setAssets(assetList)
    return setAssets([])
  }
  useEffect(() => {
    getFullAssetsArr()
  }, [])

  return (
    <>
      <div className="y-[64.6rem] w-full overflow-auto border border-[#474E57] px-[1.4rem] py-[1.6rem]">
        <table className="y-[63rem] w-full border border-[#474E57] text-ms">
          <tbody w-full>
            <TableRow
              num="상품번호"
              name="상품명"
              status="판매상태"
              price="판매가"
              category="대분류"
              subcategory="소분류"
              releaseDate="상품등록일"
              updatedAt="최종수정일"
              isHeader={true}
            />
            {assets.map((asset) => (
              <TableRow
                key={asset.assetId + 'key'}
                num={asset.assetId}
                name={asset.assetName}
                status={asset.status}
                price={asset.price}
                category={asset.categoryName}
                subcategory={asset.subCategoryName}
                releaseDate={asset.releaseDate}
                updatedAt={asset.updatedAt}
                isHeader={false}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
