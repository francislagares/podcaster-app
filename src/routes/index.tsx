import { createBrowserRouter } from 'react-router-dom';

import Loader from '@/components/loader';
import Header from '@/layouts/header';
import Episode from '@/pages/episode';
import Home from '@/pages/home';
import Podcast from '@/pages/podcast';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Header>
        <Loader isLoading={false} />
      </Header>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'podcast/:podcastId', element: <Podcast /> },
      { path: 'podcast/:podcastId/episode/:episodeId', element: <Episode /> },
    ],
  },
]);

export default router;
