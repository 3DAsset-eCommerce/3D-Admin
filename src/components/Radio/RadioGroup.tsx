"use client"
import React, { ReactNode, createContext} from "react";
import { useRadioGroup } from "react-aria";
import { useRadioGroupState } from "react-stately";
import { RadioGroupProps as radiogroupprops} from "react-stately";


export const RadioContext = createContext(null);

export default function RadioGroup(props: RadioGroupProps){
  const { children, label } = props
  let state = useRadioGroupState(props);
  let { radioGroupProps, labelProps } = useRadioGroup(props, state);
  // console.log('radioGroupProps',radioGroupProps )
  // console.log('labelProps',labelProps)
  return (
      <RadioContext.Provider value={state}>
        <div className="flex gap-[2.5rem] items-center pt-[1.2rem]" aria-label={label}>{children}</div>
      </RadioContext.Provider>
  );
}
