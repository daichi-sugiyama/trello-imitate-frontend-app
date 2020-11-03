import { $axios } from '~/utils/api'
import { listType } from '~/models/DataType'

// TODO:apiのurl
const url: string = ''
const token: string = ''

/**
 * apiからデータを取得
 */
export const getData = async() => {
  let res = await $axios.get(url);
  return res;
}

/**
 * apiにデータを更新
 */
export const updateData = (list: listType) => {
  let res = $axios.post(url);
  return res
}