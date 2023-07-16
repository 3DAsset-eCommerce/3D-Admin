import axios from 'axios'
import { axiosInstance } from '../axios'
import { AssetDetailResponse, AssetUploadRequest, AssetsSearchRequest } from '../interface/asset'
import { getToken } from '@/utils/token'
//에셋 조회
// export const searchAssets = async ({
//   page,
//   size,
//   sort,
//   num,
//   name,
//   category,
//   subcategory,
//   status,
// }: AssetsSearchRequest) => {
//   const res = await axiosInstance.get(`https://neuroid-asset.shop/s/admin/assets?num=${
//     num && num
//   }&name=${name && name}&category=${category && category}&subcategory=${subcategory && subcategory}
//   &status=${status && status}&page=${page}&size=${size}&sort=${sort}`)
//   return res.data
// }
export const getAllAssets = async () => {
  const res = await axiosInstance.get(
    'https://neuroid-asset.shop/s/admin/assets?num=&name=man&category=&subcategory=&status=true&page=0&size=100&sort=createdAt',
  )
  return res.data
}

//에셋 상세보기
export const getAssetDetail = async <T = AssetDetailResponse>(id: number): Promise<T> => {
  const res = await axiosInstance.get<T>(`/assets/${id}/details`)
  return res.data
}
export const uploadAsset = async (asset: FormData) => {
  const res = await axiosInstance.post('/s/admin/asset', asset)
  return res.data
}
export const uploadFileAsset = async (file: any) => {
  const token = getToken()
  const res = await axios.post(`/s/admin/file/fbx`, file, {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  })
  console.log('enrolledFile:', file)
  console.log(res)
  return res.data
}
// export const uploadFileAsset = async (file) => {
//   const token = getToken()
//   try {
//     const response = await fetch('https://neuroid-asset.shop/s/admin/file/fbx', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ file: file }),
//     })

//     if (response.ok) {
//       const responseData = await response.json()
//       console.log('Response:', responseData)
//     } else {
//       throw new Error('Request failed with status ' + response.status)
//     }
//   } catch (error) {
//     console.error('Error:', error.message)
//   }
// }
export const uploadThumbnailAsset = async (file: FormData) => {
  const token = getToken()
  const res = await axios.post(
    `/s/admin/file/thumbnail`,
    {
      file: file,
    },
    {
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      headers: {
        'Content-Type': 'multipart/form-data; boundary=[boundary]',
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    },
  )
  return res.data
}
export const uploadDetailPhotosAsset = async (file: FormData) => {
  const token = getToken()
  const res = await axios.post(
    `/s/admin/file/detail`,
    {
      file: file,
    },
    {
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      headers: {
        'Content-Type': 'multipart/form-data; boundary=[boundary]',
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    },
  )
  return res.data
}

// export const editAsset = async (asset): Promise<T> => {
//   const res = await axiosInstance.post('/s/admin/asset/update', asset)
// }
// export const inactivateAsset = async (): Promise<T> => {}
// export const activateAsset = async (): Promise<T> => {}
