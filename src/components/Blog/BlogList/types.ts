export type BlogListProps = {
  posts_per_page: number;
  pagination: boolean;
  total: number;
  page: number;
  tags?: any[];
  posts: {
    title: string;
    description: string;
    image: { filename: string; alt: string };
    link: string;
  }[];
};
export type ItemsProps = {
  posts: {
    first_published_at?: string;
    name: string;
    content: {
      title: string;
      description: string;
      storyImage: {
        filename: string;
        alt: string;
      };
    };
    slug?: string | null | undefined;
  }[];
};
export type BlogListComponent = React.FC<BlogListProps>;
export type ItemsComponent = React.FC<ItemsProps>;
