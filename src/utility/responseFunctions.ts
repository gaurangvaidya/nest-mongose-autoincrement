import { ICommonResponse } from 'src/common/types';

export const sentResponse = <T>(
  data: T,
  status?: number,
  message?: string | string[],
): ICommonResponse<T> => {
  return {
    message: message ?? 'Success',
    status: status ?? 200,
    data,
    error: null,
  };
};

export const sentError = (
  error?: string,
  message?: string | string[],
  status?: number,
): ICommonResponse<null> => {
  return {
    message: message ?? 'Something Went Wrong!',
    status: status ?? 500,
    data: null,
    error: error ?? 'Internal Server Error',
  };
};
