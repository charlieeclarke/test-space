import { sdk } from '~storyblok/lib/graphClient';
import { StoryblokBlogItem, StoryblokPageItem } from './types';
import { getStoryBlokNavLinks } from '~storyblok/helpers';

export const dynamicBlockData = async (data = [], preview = false) => {
  let DYNAMIC_BLOCKS;

  try {
    DYNAMIC_BLOCKS = JSON.parse(process.env.NEXT_PUBLIC_DYNAMIC_BLOCKS);
  } catch (error) {
    DYNAMIC_BLOCKS = {};
  }

  return await Promise.all(
    data.map(async (block) => {
      const blockName = block?.component;

      if (DYNAMIC_BLOCKS[blockName]) {
        const variables = {
          ...(block?.per_page && {
            per_page: parseInt(`${block?.per_page}`),
          }),
          ...(block?.uuids && {
            uuids: block?.uuids.join(','),
          }),
        };

        const emptyVariable = variables.per_page <= 0 || variables.uuids === '' || Object.keys(variables).length === 0;

        if (emptyVariable) return block;

        const data = await sdk[blockName](
          { ...variables },
          {
            version: preview ? 'draft' : 'published',
          }
        );

        const blockDataTypes = DYNAMIC_BLOCKS[blockName].split(',');
        const blockData = {
          items: [],
          total: 0,
        };

        for (let index = 0; index < blockDataTypes.length; index++) {
          const { items = [], total = 0 } = data[blockDataTypes[index]];
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          blockData.items.push(...items);
          blockData.total = blockData.total + parseInt(`${total}`);
        }

        return {
          ...block,
          dynamic: true,
          ...blockData,
        };
      }

      return block;
    })
  );
};

/**
 * Generic method for retrieving a Storyblok Page by slug
 * You can use this method for other content types by a) adding the required routes and b) passing the contentType parameter
 * @param slug page slug
 * @param locale locale
 * @param contentType storyblok content type
 * @returns data
 */
export const getStoryblokPage = async ({
  slug,
  locale,
  contentType = 'PageItem',
  preview = false,
}): Promise<StoryblokPageItem> => {
  const response = await sdk[contentType](
    { slug: locale ? `${locale.toLowerCase()}/${slug}` : slug },
    {
      version: preview ? 'draft' : 'published',
    }
  );

  const body = await dynamicBlockData(response[contentType]?.content?.body as Array<any>, preview);

  return {
    story: {
      ...response[contentType],
      content: {
        ...response[contentType]?.content,
        body,
      },
    },
    navigation: getStoryBlokNavLinks(response[contentType] as Record<string, any>),
  };
};

export const getStoryblokBlog = async ({ slug, locale, variables, preview = false }): Promise<StoryblokBlogItem> => {
  const pageResponse = await sdk.BlogPage(
    { slug: locale ? `${locale}/${slug}` : slug, ...variables },
    {
      version: preview ? 'draft' : 'published',
    }
  );
  const body = await dynamicBlockData(pageResponse?.PageItem?.content?.body as Array<any>, preview);

  return {
    story: {
      ...pageResponse?.PageItem,
      content: {
        ...pageResponse?.PageItem?.content,
        body,
      },
    },
    navigation: getStoryBlokNavLinks(pageResponse?.PageItem as Record<string, any>),
    blog: {
      PostItems: pageResponse?.PostItems,
      Tags: pageResponse?.Tags,
    },
  };
};

export const getSitemapPages = async () => {
  const MAX_ITEMS = 10;
  let page = 1;
  let items: unknown[] = [];
  let total = 0;

  const { ContentNodes } = await sdk.ContentNodes({ page });

  items = items.concat(ContentNodes?.items);
  total = ContentNodes.total - MAX_ITEMS;

  while (total > 0) {
    page++;
    total -= MAX_ITEMS;
    const fetchedData = await sdk.ContentNodes({ page });
    items = items.concat(fetchedData.ContentNodes?.items);
  }

  return items;
};
