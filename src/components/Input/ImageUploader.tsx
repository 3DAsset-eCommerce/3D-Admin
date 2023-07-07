'use client'
import React, { useState, useRef, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { createThumbnailSrc, createPreviewUrlList } from '@/store/assetSlice'
import { debounce } from '@/utils/debounce'

interface ImageUploaderProps {
  type: 'thumbnail' | 'detail'
  required: boolean
  width: number
  height: number
  id: number
}

export default function ImageUploader({ type, required, width, height, id }: ImageUploaderProps) {
  const [isUploaded, setIsUploaded] = useState<boolean>(false)
  const [url, setUrl] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const [imageName, setImageName] = useState<string>('')
  const [imageSize, setImageSize] = useState<number>(0)
  const dispatch = useDispatch()
  let urlList
  const imageUploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //이미지 파일이 존재할 때,
    if (e.currentTarget.files !== null) {
      const image = e.currentTarget.files[0]
      const imageSize = Number((image.size / 1024 ** 2).toFixed(2))
      //이미지 파일 사이즈가 10메가바이트 초과면,
      if (imageSize > 10) {
        setUrl('')
        alert('최대 10MB까지 업로드 가능합니다.')
      } else {
        // 이미지 파일 사이즈가 10메가바이트 이하면,
        const url = URL.createObjectURL(image)
        //이미지 업로드 상태 = 업로드 => X  버튼 나옴
        setIsUploaded(true)
        //선택한 이미지 파일 상자에 렌더
        setUrl(url)
        //이미지 파일명과 사이즈 상자 밑에 렌더시키기
        setImageName(image.name)
        setImageSize(image.size)
        if (type === 'thumbnail') {
          //2초 동안 아무 동작 없으면 그제서야 dispatch 하기
          debounce(() => {
            dispatch(createThumbnailSrc(url))
          }, 5000)()
          console.log('thumbnailRedux')
        } else if (type === 'detail') {
          // debounce(() => {
          //   dispatch(createPreviewUrlList(urlList))
          // }, 2000)()
          // console.log('detailImageSrcRedux')
        }
      }
    } else {
      alert('파일이 존재하지 않습니다.')
    }
  }
  const imageRemoveHandler = () => {
    setIsUploaded(false)
    setUrl('')
  }
  return (
    <div className="flex flex-col">
      <div
        style={{ width: `${width}rem`, height: `${height}rem`, backgroundImage: `url(${url})` }}
        className="relative flex items-center justify-center rounded border border-[#474E57] bg-neutral-navy-950 bg-cover bg-no-repeat px-[2rem]"
      >
        <label htmlFor={`imageUploadBtn${id}`}>
          <span
            className={
              isUploaded
                ? 'hidden px-[1rem] text-[6.4rem] hover:cursor-pointer'
                : 'px-[1rem] text-[6.4rem]  text-neutral-navy-200 hover:cursor-pointer'
            }
          >
            +
          </span>
        </label>
        {isUploaded && (
          <button
            className="absolute right-0 top-0 h-[4rem] w-[4rem] bg-[rgba(0,0,0,0.7)] text-neutral-navy-100"
            onClick={imageRemoveHandler}
          >
            X
          </button>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        required={required}
        accept="image/*"
        className="hidden"
        onChange={imageUploadHandler}
        id={`imageUploadBtn${id}`}
      />
      {isUploaded && (
        <div className="ml-[0.5rem] mt-[1.2rem] w-[21.4rem]">
          <p className="flex flex-wrap">{imageName}</p>
          <p>{(imageSize / 1024 ** 2).toFixed(2)}MB</p>
        </div>
      )}
    </div>
  )
}
