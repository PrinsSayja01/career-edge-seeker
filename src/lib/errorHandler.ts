export interface ApiError {
  message: string;
  status?: number;
  code?: string;
  details?: any;
}

export class NetworkError extends Error {
  status?: number;
  code?: string;
  details?: any;

  constructor(message: string, status?: number, code?: string, details?: any) {
    super(message);
    this.name = 'NetworkError';
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export const handleApiError = (error: any): ApiError => {
  // Network connection error
  if (error.name === 'TypeError' && error.message.includes('fetch')) {
    return {
      message: 'Unable to connect to the backend server. Please ensure the server is running.',
      status: 0,
      code: 'NETWORK_ERROR'
    };
  }

  // HTTP error
  if (error.status) {
    switch (error.status) {
      case 400:
        return {
          message: 'Invalid request. Please check your input and try again.',
          status: 400,
          code: 'BAD_REQUEST'
        };
      case 401:
        return {
          message: 'Authentication required. Please log in and try again.',
          status: 401,
          code: 'UNAUTHORIZED'
        };
      case 403:
        return {
          message: 'Access denied. You do not have permission to perform this action.',
          status: 403,
          code: 'FORBIDDEN'
        };
      case 404:
        return {
          message: 'The requested resource was not found.',
          status: 404,
          code: 'NOT_FOUND'
        };
      case 413:
        return {
          message: 'File size too large. Please upload a smaller file (max 5MB).',
          status: 413,
          code: 'FILE_TOO_LARGE'
        };
      case 422:
        return {
          message: 'Invalid file format. Please upload a PDF or DOCX file.',
          status: 422,
          code: 'INVALID_FILE_FORMAT'
        };
      case 429:
        return {
          message: 'Too many requests. Please wait a moment before trying again.',
          status: 429,
          code: 'RATE_LIMITED'
        };
      case 500:
        return {
          message: 'Server error. Please try again later.',
          status: 500,
          code: 'SERVER_ERROR'
        };
      case 503:
        return {
          message: 'Service temporarily unavailable. Please try again later.',
          status: 503,
          code: 'SERVICE_UNAVAILABLE'
        };
      default:
        return {
          message: `Request failed with status ${error.status}`,
          status: error.status,
          code: 'HTTP_ERROR'
        };
    }
  }

  // Generic error
  return {
    message: error.message || 'An unexpected error occurred. Please try again.',
    code: 'UNKNOWN_ERROR',
    details: error
  };
};

export const getUserFriendlyErrorMessage = (error: any): string => {
  const apiError = handleApiError(error);
  return apiError.message;
};