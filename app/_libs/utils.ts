import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: string) => {
  return dayjs.utc(date).tz('Asia/Tokyo').format('YYYY/MM/DD');
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
