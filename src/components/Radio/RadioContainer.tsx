'use client'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { RadioActive, RadioInactive } from '../../../public/icons/icons'
interface RadioGroupProps {
  type: 'circle' | 'rectangle'
  label: string
  array: string[]
}

export default function RadioContainer({ type, label, array }: RadioGroupProps) {
  const [isFocused, setIsFocused] = useState({ 전체: true, 판매중: false, 판매중지: false })
  return (
    <RadioGroup className={type === 'circle' ? 'flex gap-[2.4rem]' : 'flex'}>
      {type === 'circle'
        ? array.map((item) => (
            <RadioGroup.Option key={item} value={item}>
              <div className="flex gap-[0.8rem] text-neutral-navy-200">
                {/* {isFocused.{item} ?<RadioActive/>:<RadioInactive />} */}
                {item}
              </div>
            </RadioGroup.Option>
          ))
        : array.map((item) => (
            <RadioGroup.Option
              key={item}
              value={item}
              className="flex h-[4.2rem] w-[7.5rem] items-center justify-center border border-[#40464E] bg-neutral-navy-950 text-ms text-neutral-navy-200 focus:border-primary-main focus:text-primary-main"
            >
              {item}
            </RadioGroup.Option>
          ))}
    </RadioGroup>
  )
}
