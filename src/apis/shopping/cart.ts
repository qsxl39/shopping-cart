import http from '@/utils/http'

const BASE_URL = '/shopping/cart'

export interface CartResp {
  cartId: string
  memberId: string
  applicantName: string
  satelliteModel: string
  productName: string
  specModel: string
  quantity: string
  unit: string
  qualityGrade: string
  modelStage: string
  acceptanceStandard: string
  supplierName: string
  unitPrice: string
  totalPrice: string
  status: string
  createdAt: string
  updatedAt: string
  createUserString: string
  updateUserString: string
}
export interface CartDetailResp {
  cartId: string
  memberId: string
  applicantName: string
  satelliteModel: string
  productName: string
  specModel: string
  quantity: string
  unit: string
  qualityGrade: string
  modelStage: string
  acceptanceStandard: string
  supplierName: string
  unitPrice: string
  totalPrice: string
  status: string
  createdAt: string
  updatedAt: string
  createUserString: string
  updateUserString: string
}
export interface CartQuery {
  cartId: string
  memberId: string
  sort: Array<string>
}
export interface CartPageQuery extends CartQuery, PageQuery {}

/** @desc 查询购物车列表 */
export function listCart(query: CartPageQuery) {
  return http.get<PageRes<CartResp[]>>(`${BASE_URL}`, query)
}

/** @desc 查询购物车详情 */
export function getCart(id: string) {
  return http.get<CartDetailResp>(`${BASE_URL}/${id}`)
}

/** @desc 新增购物车 */
export function addCart(data: any) {
  return http.post(`${BASE_URL}`, data)
}

/** @desc 修改购物车 */
export function updateCart(data: any, id: string) {
  return http.put(`${BASE_URL}/${id}`, data)
}

/** @desc 删除购物车 */
export function deleteCart(id: string) {
  return http.del(`${BASE_URL}/${id}`)
}

/** @desc 导出购物车 */
export function exportCart(query: CartQuery) {
  return http.download<any>(`${BASE_URL}/export`, query)
}
