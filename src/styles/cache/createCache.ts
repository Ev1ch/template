import createEmotionCache from '@emotion/cache';

import { getIsClient } from '#/ui/utils';

const isBrowser = getIsClient();

export default function createCache() {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]',
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createEmotionCache({ key: 'mui-style', insertionPoint });
}
