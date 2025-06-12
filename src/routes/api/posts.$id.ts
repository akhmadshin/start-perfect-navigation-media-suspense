import { getMockArticle } from '~/utils/posts/getMockArticle';
import { createAPIFileRoute } from '@tanstack/react-start/api';
import { json } from '@tanstack/react-start';

export const APIRoute = createAPIFileRoute('/api/posts/$id')({
  GET: async ({ request, params }) => {
    console.info(`Fetching posts by id=${params.id}... @`, request.url)
    try {
      const slugInt = parseInt(params.id.match(/\d+/)![0]) ?? 0;
      const post = getMockArticle(slugInt);

      return json(post)
    } catch (e) {
      console.error(e)
      return json({ error: 'Post not found' }, { status: 404 })
    }
  },
})
