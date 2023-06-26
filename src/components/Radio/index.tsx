"use client"
import React , {useState,useRef,useContext, ReactNode}from 'react'
import { VisuallyHidden, useRadio} from 'react-aria';
import { RadioContext } from './RadioGroup';
import { RadioActive, RadioInactive } from '../../../public/icons/icons';
// RadioGroup is the same as in the previous example
interface RadioProps {
  children: ReactNode,
  value: string,
}


export default function Radio(props:RadioProps) {
  const { children, value } = props;
  const state = useContext(RadioContext);
  const inputRef = useRef(null);
  let{ inputProps, isSelected } = useRadio(props, state, inputRef);
  const radioClickHandler = () => {
    isSelected = true;
  }
  return (
    <label className='flex gap-[0.8rem] items-center hover:cursor-pointer' onClick={radioClickHandler} >
      <VisuallyHidden><input {...inputProps} ref={inputRef} className='text-[2.4rem]' /></VisuallyHidden>
      {isSelected?<RadioActive />:<RadioInactive/>}
      <span className='text-[1.4rem]'>{children}</span>
    </label>
  );
}