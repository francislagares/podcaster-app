import { createBrowserRouter } from 'react-router-dom';

import Header from '@/layouts/header';
import Home from '@/pages/Home';
import Podcast from '@/pages/Podcast';

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
