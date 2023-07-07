'use client'
import React, { useState } from 'react'
import ListBox from './ListBox'
export default function OrderCategorySelectContainer() {
  const [selectedOption, setSelectedOption] = useState('주문번호')
  return (
    <div>
      <ListBox
        array={['주문번호', '상품명', '상품번호', '구매자 이메일']}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </div>
  )
}
