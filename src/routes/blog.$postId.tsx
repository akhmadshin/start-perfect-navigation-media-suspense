import { ErrorComponent, createFileRoute } from '@tanstack/react-router'
import { NotFound } from '~/components/NotFound'
import React from 'react'
import { blogItemPageOptions } from '~/utils/posts/useBlogItemPageData';
import { ArticlePage } from '~/pages/ArticlePage';

const NotFoundRouteComponent = () => <NotFound>Post not found</NotFound>

export const Route = createFileRoute('/blog/$postId')({
  loader: ({ params: { postId }, context }) => {
    context.queryClient.ensureQueryData(
      blogItemPageOptions(postId),
    )
  },
  errorComponent: ErrorComponent,
  notFoundComponent: NotFoundRouteComponent,
  component: PostComponent,
});

function PostComponent() {
  return (
    <ArticlePage />
  );
}
