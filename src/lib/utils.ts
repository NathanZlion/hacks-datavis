import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type Result<T> = { success: true, value: T } | { success: false, error: Error };

export enum LoadingState {
  LoadingInitial = 'loadingInitial',
  Loading = 'loading',
  LoadingSuccess = 'loadedSuccess',
  LoadingError = 'loadingError'
}

export function cx(...args: ClassValue[]) {
  return twMerge(clsx(...args))
}

export function capitalizeFirstLetterOfEachWord(str: string) {
  return str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}