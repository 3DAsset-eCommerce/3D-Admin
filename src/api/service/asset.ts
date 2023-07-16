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
    '/s/admin/assets?num=&name=man&category=&subcategory=&status=true&page=0&size=100&sort=createdAt',
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
export const uploadFileAsset = async (file: FormData, type: 'fbx' | 'thumbnail' | 'detail') => {
  const token = getToken()
  const res = await axios.post(`/s/admin/file/${type}`, file, {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  })
  return res
}

// export const editAsset = async (asset): Promise<T> => {
//   const res = await axiosInstance.post('/s/admin/asset/update', asset)
// }
// export const inactivateAsset = async (): Promise<T> => {}
// export const activateAsset = async (): Promise<T> => {}
