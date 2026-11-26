import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { getBlogsDetail, getWorksDetail } from '@/app/_libs/microcms';

/**
 * microCMS の画面プレビュー用の入口。
 *
 * microCMS の「画面プレビュー」の URL には次を設定する（{CONTENT_ID}・{DRAFT_KEY} は microCMS が置き換える）。
 *   ブログ: https://office-tsuyuki.pom.jp/api/draft?endpoint=blogs&slug={CONTENT_ID}&dk={DRAFT_KEY}
 *   実績:   https://office-tsuyuki.pom.jp/api/draft?endpoint=works&slug={CONTENT_ID}&dk={DRAFT_KEY}
 *
 * draftKey でその記事の下書きを取得できたときだけ Draft Mode を有効にし、記事ページへ移す。
 * 記事ページは Draft Mode のときだけ ?dk= を読むので、通常の閲覧は静的なまま保たれる。
 *
 * 下書きの無い公開中の記事では、microCMS は {DRAFT_KEY} を空文字に置き換える。
 * そのときは Draft Mode を有効にせず、公開中の記事ページへそのまま移す。
 */
const fetchers = {
  blogs: getBlogsDetail,
  works: getWorksDetail,
} as const;

// microCMS のコンテンツ ID に使われる文字だけを許す（リダイレクト先の組み立てに使うため）
const CONTENT_ID_PATTERN = /^[A-Za-z0-9_-]+$/;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const endpoint = searchParams.get('endpoint');
  const slug = searchParams.get('slug');
  const draftKey = searchParams.get('dk');

  if ((endpoint !== 'blogs' && endpoint !== 'works') || !slug || !CONTENT_ID_PATTERN.test(slug)) {
    return new Response('Invalid preview request', { status: 400 });
  }

  if (!draftKey) {
    redirect(`/${endpoint}/${slug}`);
  }

  try {
    await fetchers[endpoint](slug, { draftKey });
  } catch {
    return new Response('Draft not found', { status: 404 });
  }

  (await draftMode()).enable();
  redirect(`/${endpoint}/${slug}?dk=${encodeURIComponent(draftKey)}`);
}
