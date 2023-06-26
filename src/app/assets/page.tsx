import React from 'react'
import Header from '@/components/Header'
import Body from '@/components/Body'
import TableContainer from '@/components/Table/TableContainer'
import TableItem from '@/components/Table/TableItem'
import Radio from '@/components/Radio'
import Button from '@/components/Button'
import Divider from '@/components/Divider'
import RadioGroup from '@/components/Radio/RadioGroup'
import SelectContainer from '@/components/Select/SelectContainer'


const categoryList = [
  {
    "id": 1,
    "categoryName": "cute"
  },
  {
    "id": 2,
    "categoryName": "pretty"
  },
  {
    "id": 3,
    "categoryName": "sexy"
  },
  {
    "id": 4,
    "categoryName": "luxury"
  },
  {
    "id": 5,
    "categoryName":"cool"
  },
];

export default function AssetsPage() {

  return (
    <>
      <Header title='에셋 조회/수정' required={false} isButton={false}/>
      <Body>
        <TableContainer>
          <TableItem title='검색어' required={false} >
            <div className='flex gap-[6.4rem]'>
              <label htmlFor="assetId">
                <span className='pr-[1.6rem] text-[1.4rem]'>상품번호</span>
                <input type="text" id='assetId' className='rounded border border-[#474E57] bg-neutral-navy-950 px-[2rem] py-[0.9rem] text-[1.4rem] focus:border-neutral-navy-200'/>
              </label>
              <label htmlFor="assetName">
                <span className='pr-[1.6rem] text-[1.4rem]'>상품명</span>
                <input type="text" id='assetName' className='rounded border border-[#474E57] bg-neutral-navy-950 px-[2rem] py-[0.9rem] text-[1.4rem] focus:border-neutral-navy-200'/>
              </label>
            </div>
            <div></div>
          </TableItem>
          <TableItem title='카테고리' required={false}>
            {/* <SelectContainer categoryList={categoryList} /> */}
          </TableItem>
          <TableItem title='판매상태' required={false}>
            <RadioGroup label='saleState'>
              <Radio value='전체'>전체</Radio>
              <Radio value='판매중'>판매중</Radio>
              <Radio value='판매중지'>판매중지</Radio>
            </RadioGroup>
          </TableItem>
        </TableContainer>
        <div className='buttonContainer flex gap-[1.6rem] mt-[5rem] justify-center'>
          <Button width={12.5} height={3.6} >검색</Button>
          <Button width={12.5} height={3.6} backgroundColor='transparent' borderColor='#60AFFF'>초기화</Button>
        </div>
        </Body>
        <Divider/>
        <Body>
          <div>
            <span>에셋 목록 (총 <span className='text-primary-main'>{10}</span>개)</span>
          </div>
        
          <div className='w-[151rem] y-[64.6rem] py-[1.6rem] px-[1.4rem] overflow-auto border border-[#474E57]'>
            <table className='text-[1.4rem] w-[147.9rem] y-[63rem] border border-[#474E57]'>
              <thead w-full>
                <tr className='grid grid-cols-[1.5fr_3fr_9fr_3fr_2.5fr_5fr_5fr_4fr_4fr_2fr] grid-rows-[4.2rem] w-full'>
                  <th className='px-[1.5rem] py-[1rem] border-[0.05rem] border-[#474E57]'>s</th>
                  <th className='px-[1.5rem] py-[1rem] border-[0.05rem] border-[#474E57]'>상품번호</th>
                  <th className='px-[1.5rem] py-[1rem] border-[0.05rem] border-[#474E57]'>상품명</th>
                  <th className='px-[1.5rem] py-[1rem] border-[0.05rem] border-[#474E57]'>판매상태</th>
                  <th className='px-[1.5rem] py-[1rem] border-[0.05rem] border-[#474E57]'>판매가</th>
                  <th className='px-[1.5rem] py-[1rem] border-[0.05rem] border-[#474E57]'>대분류</th>
                  <th className='px-[1.5rem] py-[1rem] border-[0.05rem] border-[#474E57]'>소분류</th>
                  <th className='px-[1.5rem] py-[1rem] border-[0.05rem] border-[#474E57]'>상품등록일</th>
                  <th className='px-[1.5rem] py-[1rem] border-[0.05rem] border-[#474E57]'>최종수정일</th>
                  <th className='px-[1.5rem] py-[1rem] border-[0.05rem] border-[#474E57]'>수정</th>
                </tr>
              </thead>
              <tbody>
              {<tr className='grid grid-cols-[1.5fr_3fr_9fr_3fr_2.5fr_5fr_5fr_4fr_4fr_2fr] grid-rows-[4.2rem] w-full'>
                <td className='px-[1.5rem] py-[1rem] border-[0.05rem] border-[#474E57]'></td>
                <td className='px-[1.5rem] py-[1rem] border-[0.05rem] border-[#474E57]'>{'00000001'}</td>
                <td className='px-[1.5rem] py-[1rem] border-[0.05rem] border-[#474E57]'>{'Girl Running'}</td>
                <td className='px-[1.5rem] py-[1rem] border-[0.05rem] border-[#474E57]'>{'판매 중'}</td>
                <td className='px-[1.5rem] py-[1rem] border-[0.05rem] border-[#474E57]'>{'8,900'}</td>
                <td className='px-[1.5rem] py-[1rem] border-[0.05rem] border-[#474E57]'>{'Daily Life'}</td>
                <td className='px-[1.5rem] py-[1rem] border-[0.05rem] border-[#474E57]'>{'Daily Life'}</td>
                <td className='px-[1.5rem] py-[1rem] border-[0.05rem] border-[#474E57]'>{'2023.05.30'}</td>
                <td className='px-[1.5rem] py-[1rem] border-[0.05rem] border-[#474E57]'>{'2023.06.01'}</td>
                <td className='px-[1.5rem] py-[1rem] border-[0.05rem] border-[#474E57]'>
                  <button className='w-[4.2rem] h-[2.4rem] rounded bg-primary-newlloyd-button text-[#d9d9d9]'>수정</button>
                </td>
              </tr>}
            </tbody>
          </table>
        </div>
      </Body>
    </>
  )
}
