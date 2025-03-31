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
                    <BlogsList blogs={blogs} />
                </div>
                <div className="mt-10 text-center">
                    <Btn label="もっと見る" url="/blogs" />
                </div>
            </div>
        </section>
    );
}
