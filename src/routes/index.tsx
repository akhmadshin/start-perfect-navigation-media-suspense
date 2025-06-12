import React from 'react';
import { createFileRoute, ErrorComponent } from '@tanstack/react-router'

import { HomePage } from '~/pages/HomePage';
import { homePageQueryOptions } from '~/utils/posts/useHomePageData';

export const Route = createFileRoute('/')({
  loader: async ({ context }) => {
    context.queryClient.ensureQueryData(homePageQueryOptions())
  },
  component: HomePageComponent,
  errorComponent: ErrorComponent,
})

function HomePageComponent() {
  return (
    <HomePage />
  );
}
