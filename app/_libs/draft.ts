import { draftMode } from 'next/headers';

/**
 * microCMS の下書きプレビュー用の draftKey（?dk=）を返す。
 *
 * Draft Mode（/api/draft で有効にする）のときだけ searchParams を読む。
 * 通常の閲覧で searchParams を読むとページ全体が動的（Cache-Control: no-store）になるため、
 * 記事ページを静的（ISR）に保つためにこの順で確認する。
 */
export async function getDraftKey(
  searchParams?: Promise<{ dk?: string }>
): Promise<string | undefined> {
  const { isEnabled } = await draftMode();
  if (!isEnabled || !searchParams) {
    return undefined;
  }
  return (await searchParams).dk;
}
