export interface IGenericListResponse<T> {
  code: number
  status: string
  message: string
  data: T[]
}
