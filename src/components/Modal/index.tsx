import React, { ReactNode } from 'react'
import Button from '../Button'

interface ModalProps {
  children:ReactNode,
  width?: number,
  height?:number,
  isButtons?: boolean,
  buttonText?: string,
}

export default function Modal({children,width=45.6, height=22, isButtons=false, buttonText='확인' }:ModalProps) {
  return (
    <div style={{width: `${width}rem`, height:`${height}rem`}} className='relative text-center rounded'>
      <p className=''>{children}</p>
      <div className='buttonsContainer absolute bottom-[2.4rem]'>
        {isButtons && <Button borderRadius={2} >취소</Button>}
        <Button>{buttonText}</Button>
      </div>
      <button className='absolute'>X</button>
    </div>
  )
}

export const showModal = (number:number) => {
  switch(number){
    //액션 재확인
    case 1: return (<Modal isButtons={true} buttonText='나가기'>사이트에서 나가시겠습니까?<br/>변경사항이 저장되지 않을 수 있습니다.</Modal> );
    case 2: return (<Modal isButtons={true} buttonText='변경하기'>선택한 <span className='font-[600]'>{}</span>개의 상품의 판매 상태를<br/>판매중지로 변경하시겠습니까?</Modal>)
    case 3: return (<Modal height={19.1} isButtons={true} buttonText='등록하기'>에셋을 등록하시겠습니까?</Modal>)
    //에러
    case 4: return (<Modal height={19.1}>입력되지 않은 필수 정보가 있습니다.</Modal>)
    case 5: return (<Modal height={19.1}>최대 첨부 가능 용량을 초과하였습니다.</Modal>)
    case 6: return (<Modal height={19.1}>최대 첨부 가능 이미지 수를 초과하였습니다.</Modal>)
    case 7: return (<Modal height={19.1}>지원하지 않는 파일 형식입니다.</Modal>
    )
    //완료
    case 8: return (<Modal height={19.1}>판매상태 변경이 완료되었습니다.</Modal>)
    case 9: return (<Modal height={19.1}>에셋 정보 수정이 완료되었습니다.</Modal>)
    case 10: return (<Modal height={19.1}>에셋이 성공적으로 등록되었습니다.</Modal>)
  }
}