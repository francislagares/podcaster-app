import { createBrowserRouter } from 'react-router-dom';

import Header from '@/layouts/header';
import Home from '@/pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default router;
