
import React from 'react'
import TableRow from './TableRow'
const assetList = [
  {
    assetNumber: '20230601-000001',
    assetName: 'cute  man',
    status: 'active',
    price: 1000.0,
    categoryName: 'cute',
    subCategoryName: 'man',
    releaseDate: '2023-06-01',
    updatedAt: '2023-07-04',
  },
  {
    assetNumber: '20230601-000001',
    assetName: 'cute  man',
    status: 'active',
    price: 1000.0,
    categoryName: 'cute',
    subCategoryName: 'man',
    releaseDate: '2023-06-01',
    updatedAt: '2023-07-04',
  },
]
export default function AssetsTableContainer() {
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
            {assetList.map((asset) => (
              <TableRow
                key={asset.assetNumber}
                num={asset.assetNumber}
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
