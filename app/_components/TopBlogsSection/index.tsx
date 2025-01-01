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
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">最近の投稿</h2>
                <BlogsList blogs={blogs} />
                <div className="mt-8 text-center">
                    <Btn label="もっと見る" url="/blog" />
                </div>
            </div>
        </section>
    );
}
