export type BlogContentProps = {
  blok: {
    title?: string;
    description?: string;
    storyImage?: any;
    content?: string;
    publicationDate?: string | undefined;
    tag_list?: string[];
    _uid: string;
    relatedPosts?: {
      full_slug: string;
      content: {
        title: string;
      };
    }[];
    tags?: {
      id: number;
      full_slug: string;
      name: string;
    }[];
  };
};
export type BlogContentComponent = React.FC<BlogContentProps>;
