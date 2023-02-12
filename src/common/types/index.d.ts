export interface ICommonResponse<T> {
  error: string | null;
  message: string | string[];
  data: T | null;
  status: number;
}
export type ExceptionResponse = Pick<ICommonResponse, 'error' | 'message'> & {
  statusCode: number;
};
