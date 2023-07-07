import Image from 'next/image'
import Active from './Active.svg'
import Inactive from './Inactive.svg'
import ArrowDropDown from './ArrowDropDown.svg'
import Close from './close.svg'
export const RadioActive = () => {
  return <Image src={Active} alt='radio active icon' width={24} height={24}/>
}

export const RadioInactive = () => {
  return <Image src={Inactive} alt='radio inactive icon'width={24} height={24}/>
}

export const DropDownIcon = () => {
    return <Image src={ArrowDropDown} alt='drop down icon'width={24} height={24}/>
}

export const CloseIcon = () => {
  return <Image src={Close} alt='close icon' width={24} height={24}/>
}