export type BlogCardProps = {
  title?: string;
  description?: string;
  image?: string;
  alt?: string;
  link?: string;
  buttonText?: string;
  date?: string;
};

export type BlogCardComponent = React.FC<BlogCardProps>;
