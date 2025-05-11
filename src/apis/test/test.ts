import http from '@/utils/http'

const BASE_URL = '/test/test'

export interface TestResp {
  id: string
  name: string
  age: string
  number: string
  school: string
  createUserString: string
  updateUserString: string
}
export interface TestDetailResp {
  id: string
  name: string
  age: string
  number: string
  school: string
  createUserString: string
  updateUserString: string
}
export interface TestQuery {
  id: string
  sort: Array<string>
}
export interface TestPageQuery extends TestQuery, PageQuery {}

/** @desc 查询测试列表 */
export function listTest(query: TestPageQuery) {
  return http.get<PageRes<TestResp[]>>(`${BASE_URL}`, query)
}

/** @desc 查询测试详情 */
export function getTest(id: string) {
  return http.get<TestDetailResp>(`${BASE_URL}/${id}`)
}

/** @desc 新增测试 */
export function addTest(data: any) {
  return http.post(`${BASE_URL}`, data)
}

/** @desc 修改测试 */
export function updateTest(data: any, id: string) {
  return http.put(`${BASE_URL}/${id}`, data)
}

/** @desc 删除测试 */
export function deleteTest(id: string) {
  return http.del(`${BASE_URL}/${id}`)
}

/** @desc 导出测试 */
export function exportTest(query: TestQuery) {
  return http.download<any>(`${BASE_URL}/export`, query)
}
