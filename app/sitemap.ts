import { MetadataRoute } from 'next';
import { getAllCategoryList, getAllWorksList, getAllBlogsList } from './_libs/microcms';

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const buildUrl = (path?: string) => `${NEXT_PUBLIC_BASE_URL}${path ?? ''}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const worksContents = await getAllWorksList();
  const blogsContents = await getAllBlogsList();
  const categoryContents = await getAllCategoryList();

  const worksUrls: MetadataRoute.Sitemap = worksContents.map((content) => ({
    url: buildUrl(`/works/${content.id}`),
    lastModified: content.revisedAt,
  }));
  const blogsUrls: MetadataRoute.Sitemap = blogsContents.map((content) => ({
    url: buildUrl(`/blogs/${content.id}`),
    lastModified: content.revisedAt,
  }));
  const categoryUrls: MetadataRoute.Sitemap = categoryContents.map(
    (content) => ({
      url: buildUrl(`/works/category/${content.id}`),
      lastModified: content.revisedAt,
    })
  );

  const now = new Date();

  return [
    {
      url: buildUrl(),
      lastModified: now,
    },
    {
      url: buildUrl('/category'),
      lastModified: now,
    },
    {
      url: buildUrl('/contact'),
      lastModified: now,
    },
    {
      url: buildUrl('/works'),
      lastModified: now,
    },
    {
      url: buildUrl('/blogs'),
      lastModified: now,
    },
    ...worksUrls,
    ...blogsUrls,
    ...categoryUrls,
  ];
}
