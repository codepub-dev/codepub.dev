import { extract } from '@extractus/feed-extractor';

export const getFeed = async () => {
  const res = await extract('https://pod.codepub.dev/@codepub/feed.xml', {
    getExtraFeedFields: (feedData) => {
      console.log(feedData);
      // return {
      //   subtitle: feedData.subtitle || ''
      // }
    },
  });
  return res;
}
