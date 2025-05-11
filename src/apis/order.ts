import http from '@/utils/http'

// 订单接口类型定义
export interface OrderResp {
  id: number
  createUserString: string
  createTime: string
  disabled: boolean
  memberId: number
  orderNo: number
  applicantName: string
  satelliteModel: string
  productName: string
  specModel: string
  quantity: number
  unit: string
  qualityGrade: string
  modelStage: string
  acceptanceStandard: boolean
  supplierName: string
  unitPrice: number
  totalPrice: number
  paymentTime: string
  createdAt: string
  updatedAt: string
}

export interface OrderDetailResp extends OrderResp {
  updateUserString: string
  updateTime: string
}

export interface OrderReq {
  orderNo: number
  applicantName: string
  satelliteModel: string
  productName: string
  specModel: string
  quantity: number
  unit: string
  qualityGrade: string
  modelStage: string
  acceptanceStandard: boolean
  supplierName: string
  unitPrice: number
  totalPrice: number
  paymentTime: string
}

export interface OrderQuery {
  orderNo?: number
  page?: number
  size?: number
  sort?: string[]
}

const BASE_URL = '/order/orders'

/** @desc 分页查询订单列表 */
export function listOrders(query: OrderQuery) {
  return http.get<PageRes<OrderResp[]>>(`${BASE_URL}`, query)
}

/** @desc 查询订单详情 */
export function getOrder(id: string) {
  return http.get<OrderDetailResp>(`${BASE_URL}/${id}`)
}

/** @desc 新增订单 */
export function addOrder(data: OrderReq) {
  return http.post<{ id: number }>(`${BASE_URL}`, data)
}

/** @desc 修改订单 */
export function updateOrder(data: OrderReq, id: string) {
  return http.put(`${BASE_URL}/${id}`, data)
}

/** @desc 删除订单 */
export function deleteOrder(ids: string | Array<string>) {
  return http.del(`${BASE_URL}/${ids}`)
}

/** @desc 导出订单 */
export function exportOrder(query: OrderQuery) {
  return http.download(`${BASE_URL}/export`, query)
} 