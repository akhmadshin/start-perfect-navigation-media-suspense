import React, { useEffect, useRef } from 'react';
import { APIResponseData, ArticleItem, ArticleListItem } from '~/types/api';
import { RelatedArticles } from './RelatedArticles';
import { Container } from '~/components/Container';
import { RichText } from '~/components/RichText';
import { Component } from '~/types/general';
import { ArticleContentSkeleton } from './ArticleContentSkeleton';
import type { BlocksContent } from '@strapi/blocks-react-renderer';

interface Props {
  article: APIResponseData<ArticleListItem | ArticleItem>;
}

export const ArticleContent: Component<Props> = ({ article }) => {
  const articleAttributes = article.attributes || {};
  let content: BlocksContent | undefined;
  if ('content' in articleAttributes) {
    content = articleAttributes.content;
  }

  let relatedArticles: APIResponseData<ArticleListItem>[] = [];
  if ('relatedArticles' in articleAttributes) {
    relatedArticles = articleAttributes.relatedArticles;
  }

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (!content || !ref.current) {
        return;
      }
      ref.current.style.opacity = '1';
    });
  }, [content]);

  if (!content) {
    return (
      <ArticleContentSkeleton />
    );
  }

  return (
    <div
      ref={ref}
      className={"transition-opacity ease-linear duration-700 opacity-0"}
    >
      <RelatedArticles articles={relatedArticles} />
      <Container>
        <RichText content={content} />
      </Container>
    </div>
  );
};
