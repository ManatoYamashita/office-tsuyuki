import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

dayjs.extend(utc);
dayjs.extend(timezone);

// サーバーサイドレンダリングとクライアントサイドレンダリングで一貫した出力を保証
export const formatDate = (date: string) => {
  // 日付を固定フォーマットで処理し、ロケールに依存しないようにする
  return dayjs.utc(date).format('YYYY/MM/DD');
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
