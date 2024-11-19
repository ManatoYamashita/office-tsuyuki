import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type Category = {
  name: string;
} & MicroCMSListContent;

export type Works = {
  title: string;
  description: string;
  content: string;
  category: Category;
  thumbnail: MicroCMSImage;
} & MicroCMSListContent;

export type Blogs = {
  title: string;
  description: string;
  content: string;
  thumbnail: MicroCMSImage;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required. （MICROCMS_SERVICE_DOMAINは必須です。）');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required. （MICROCMS_API_KEYは必須です。）');
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getWorksList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Works>({
      endpoint: "works",
      queries,
    });
    return listData;
};

export const getBlogsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blogs>({
      endpoint: "blogs",
      queries,
    });
    return listData;
};

export const getWorksDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Works>({
    endpoint: 'works',
    contentId,
    queries,
    customRequestInit: {
      next: {
        revalidate: queries?.draftKey === undefined ? 60 : 0,
      },
    },
  });

  return detailData;
};

export const getBlogsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Blogs>({
    endpoint: 'blogs',
    contentId,
    queries,
    customRequestInit: {
      next: {
        revalidate: queries?.draftKey === undefined ? 60 : 0,
      },
    },
  });

  return detailData;
};

export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Category>({
    endpoint: 'categories',
    contentId,
    queries,
  });

  return detailData;
};

export const getAllWorksList = async () => {
  const listData = await client.getAllContents<Works>({
    endpoint: 'works',
  });

  return listData;
};

export const getAllBlogsList = async () => {
  const listData = await client.getAllContents<Blogs>({
    endpoint: 'blogs',
  });

  return listData;
};

export const getAllCategoryList = async () => {
  const listData = await client.getAllContents<Category>({
    endpoint: 'categories',
  });

  return listData;
};