import { CombinedError } from 'urql';

export const isAuthError = (error?: CombinedError) =>
  error?.graphQLErrors.some((error_) => error_.message === 'Unauthorized');

export interface ResultOutput<T> {
  result: T;
}
