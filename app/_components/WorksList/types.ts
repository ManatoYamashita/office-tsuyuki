// app/components/WorksList/types.ts
export type Thumbnail = {
    url: string;
    width: number;
    height: number;
};

export type Category = {
    id: string;
    name: string;
};

export type Work = {
    id: string;
    title: string;
    thumbnail?: Thumbnail;
    category: Category;
    publishedAt?: string;
    createdAt: string;
    excerpt?: string;
};
