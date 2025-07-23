export interface SuccessResponse<T> {
  status: 'success';
  message: string;
  data: T;
}

export interface FailureResponse {
  status: 'failure';
  message: string;
  error: string;
}

export function createSuccessResponse<T>(
  message: string,
  data: T,
): SuccessResponse<T> {
  return {
    status: 'success',
    message,
    data,
  };
}

export function createFailureResponse(
  message: string,
  error: any,
): FailureResponse {
  return {
    status: 'failure',
    message,
    error,
  };
}
