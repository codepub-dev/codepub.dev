import { extract } from '@extractus/feed-extractor';

export const getFeed = async () => {
  const res = await extract('https://pod.codepub.dev/@codepub/feed.xml', {
    getExtraFeedFields: (feedData) => {
      return {
        fullData: feedData,
      };
    },
    getExtraEntryFields: (entryData) => {
      return {
        fullData: entryData,
      };
    },
  });
  return res;
};
