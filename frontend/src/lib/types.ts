export type CallbackProps<T> = {
  onError?: (error: Error) => void;
  onSuccess?: (data: T) => void;
};
