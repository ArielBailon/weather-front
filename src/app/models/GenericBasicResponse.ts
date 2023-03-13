export interface IGenericBasicResponse<T> {
  code: number
  status: string
  message: string
  data: T
}
