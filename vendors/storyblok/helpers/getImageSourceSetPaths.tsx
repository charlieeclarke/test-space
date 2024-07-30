export const getImageSourceSetPaths = (path, width, height = 0) => {
  return `${path}/m/${width}x${height}/filters:quality(${process.env.NEXT_PUBLIC_STORYBLOK_IMAGE_COMPRESSION}):format(webp)`;
};
