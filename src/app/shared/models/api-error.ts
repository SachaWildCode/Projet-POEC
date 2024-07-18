export interface ApiError {
  error: {
    message: string;
    path: string;
    status: number;
    timestamp: string;
  };
}
