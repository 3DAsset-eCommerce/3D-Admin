'use client'

import React, { MouseEventHandler, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { uploadAsset, editAsset, uploadFileAsset } from '@/api/service/asset'

interface ButtonProps {
  children: ReactNode
  type: 'fail' | 'success' | 'none'
  label?: 'enroll' | 'edit' | 'search' | 'none'
  width?: number
  height?: number
  backgroundColor?: string
  borderRadius?: number
  borderColor?: string
  color?: string
  id?: string
  onClick?: MouseEventHandler
}

export default function Button({
  children,
  type,
  label = 'none',
  width = 13,
  height = 3.6,
  backgroundColor = '#237FDB',
  borderRadius = 0.4,
  borderColor = 'transparent',
  color = '#FFF',
  id,
  onClick,
}: ButtonProps) {
  const asset = useSelector((state: RootState) => state.createAsset)

  const clickHandler = () => {
    switch (type) {
      case 'fail':
        break
      case 'success':
        switch (label) {
          case 'enroll':
            if (
              asset.assetName &&
              asset.assetDescription &&
              asset.price &&
              // asset.category &&
              asset.fileUrl &&
              asset.thumbnailUrl
            ) {
              uploadAsset(asset)
              uploadFileAsset(asset.fileUrl)
              console.log('upLoadedAsset>>>>', asset)
            } else {
              alert('필수 항목을 다 채워 주세요.')
              console.log('upLoadedFailAsset>>>>', asset)
            }
            break
          case 'edit':
            console.log('editDispatch>>>>', asset)
            break
          case 'search':
            break
        }
        break
    }
    // uploadFileAsset(asset.createdAt.fileUrl)
  }
  return (
    <label htmlFor={id}>
      <span
        style={{
          width: `${width}rem`,
          height: `${height}rem`,
          backgroundColor: `${backgroundColor}`,
          borderColor: `${borderColor}`,
          color: `${color}`,
          borderRadius: `${borderRadius}rem`,
        }}
        className=" flex items-center justify-center border py-[0.8rem] hover:cursor-pointer "
        onClick={type === 'none' ? onClick : clickHandler}
      >
        {children}
      </span>
    </label>
  )
}
