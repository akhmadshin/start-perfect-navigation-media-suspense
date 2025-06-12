import React, { Suspense } from 'react';
import { useBlogItemPageData } from '~/utils/posts/useBlogItemPageData';
import { ArticlePageFulfilled } from '~/pages/ArticlePage/ArticlePageFulfiled';
import { ArticlePageFallback } from '~/pages/ArticlePage/ArticlePageFallback';

export const ArticlePage = () => {
  return (
    <Suspense fallback={<ArticlePageFallback />}>
      <ArticlePageWithQuery />
    </Suspense>
  )
};


export const ArticlePageWithQuery = () => {
  const { data: article } = useBlogItemPageData();

  return (
    <ArticlePageFulfilled article={article} isFallback={false} />
  )
};
