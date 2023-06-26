"use client"
import React, { useState, ReactNode,Children, cloneElement, ReactElement } from 'react'

interface TableContainerProps {
  children: ReactElement[]
}

export default function TableContainer({children}:TableContainerProps) {
  const [assetdata, setAssetdata] = useState({
    assetId: 1,
    assetName: "",
    price: "",
    fileSize: 0,
    fileUrl: "",
    creator: "",
    assetDetail:"",
    tagList: [],
    thumbnail:"",
    detailImages:[]
  })

  return (
    <ul className='flex flex-col gap-[5rem]'>
      {
        Children.map(children,(child,index)=> {
          return cloneElement(child,{
            key: index,
            assetdata: assetdata,
            setAssetdata: setAssetdata
          })
        })
      }
    </ul>


  )
}
