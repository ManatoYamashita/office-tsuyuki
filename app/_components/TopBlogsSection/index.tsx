import { getBlogsList } from '@/app/_libs/microcms'
import { TOP_BLOGS_LIMIT } from '@/app/_constants'
import BlogsList from '@/app/_components/BlogsList'
import Btn from '@/app/_components/Btn'

export const revalidate = 60

export default async function TopBlogsSection() {
    const { contents: blogs } = await getBlogsList({
        limit: TOP_BLOGS_LIMIT,
    });

    return (
        <section className="py-12 w-full">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                    最新ブログ記事
                </h2>
                <div className="max-w-6xl mx-auto">
                    <BlogsList
                        blogs={blogs}
                        // 実測: sm 未満 1 列、lg 未満 2 列、lg 以上 3 列で最大 368px（max-w-6xl）
                        sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2.25rem), (max-width: 1199px) calc((100vw - 6rem) / 3), 368px"
                    />
                </div>
                <div className="mt-10 text-center">
                    <Btn label="もっと見る" url="/blogs" />
                </div>
            </div>
        </section>
    );
}
