export type FeaturedPostsProps = {
  items: {
    name: string;
    content: {
      title: string;
      description: string;
      image: { filename: string; alt: string };
      link: string;
      storyImage?: any;
    };
    slug: string;
    id: string;
    first_published_at?: string;
  }[];
  Title?: string;
};

export type FeaturedPostsComponent = React.FC<FeaturedPostsProps>;
