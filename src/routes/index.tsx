import { createBrowserRouter } from 'react-router-dom';

import Header from '@/layouts/header';
import Home from '@/pages/home';
import Podcast from '@/pages/podcast';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      { index: true, element: <Home /> },
      { path: 'podcast/:podcastId', element: <Podcast /> },
    ],
  },
]);

export default router;
