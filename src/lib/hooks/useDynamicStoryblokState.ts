import { useState, useEffect } from 'react';
import { registerStoryblokBridge } from '@storyblok/js';
import { dynamicBlockData } from '~storyblok/graphql';

export const useDynamicStoryblokState = (initialStory = null, bridgeOptions = {}) => {
  const [story, setStory] = useState(initialStory);
  const storyId = initialStory?.internalId ?? initialStory?.id ?? 0;
  const isBridgeEnabled = typeof window !== 'undefined' && typeof window.storyblokRegisterEvent !== 'undefined';

  const fetchStoryData = async (storyData) => {
    const body = await dynamicBlockData(storyData.content?.body as Array<any>, true);
    storyData.content.body = body;

    setStory(storyData);
  };

  useEffect(() => {
    fetchStoryData(initialStory);

    if (!isBridgeEnabled || !initialStory) return;

    registerStoryblokBridge(storyId, (newStory) => {
      fetchStoryData(newStory);
      bridgeOptions;
    });
  }, [initialStory]);

  return story;
};
