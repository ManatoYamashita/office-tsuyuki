import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

/**
 * Draft Mode を終える。プレビューのあとに公開中の表示へ戻したいときに開く。
 */
export async function GET() {
  (await draftMode()).disable();
  redirect('/');
}
