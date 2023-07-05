import React from 'react'
import Layout from '@/components/Layout'
import Header from '@/components/Header/Index'
import Divider from '@/components/Divider'
import Body from '@/components/Body'
import TableContainer from '@/components/Table/TableContainer'
import TableItem from '@/components/Table/TableItem'
import RadioContainer from '@/components/Radio/RadioContainer'
import DateInput from '@/components/Input/DateInput'
import ListBox from '@/components/Select/ListBox'
import TextInput from '@/components/Input/TextInput'
import Button from '@/components/Button'
import OrderTableContainer from '@/components/OrderTableContainer'

export default function SalesManagementPage() {
  //주문 번호 ?onum=20230704000004
  // 상품명 &name=cuteboy
  // 상품번호 $anum=
  // 이메일 $email=sdfkj@naver.com

  return (
    <Layout>
      <Header title="주문통합검색" required={false} isButton={false} />
      <Body>
        <TableContainer>
          <TableItem title="주문일" required={false}>
            <RadioContainer
              type="rectangle"
              label="orderedDate"
              array={['오늘', '일주일', '1개월', '3개월', '1년']}
            />
            <DateInput />
          </TableItem>
          <TableItem title="상세조건" required={false}>
            <ListBox title="주문번호" array={['주문번호', '상품명', '상품번호', '구매자 이메일']} />
            <TextInput required={false} width={24} placeholder="" />
          </TableItem>
          <div className="buttonContainer mt-[5rem] flex justify-center gap-[1.6rem] text-[1.4rem]">
            <Button width={12.5} height={3.6}>
              검색
            </Button>
            <Button width={12.5} height={3.6} backgroundColor="transparent" borderColor="#60AFFF">
              초기화
            </Button>
          </div>
        </TableContainer>
        <Divider height={0.2} />
        <OrderTableContainer />
      </Body>
    </Layout>
  )
}
