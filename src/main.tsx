import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { LoadingProvider } from './contexts/loading';
import router from './routes';
import GlobalStyles from './styles/GlobalStyles';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <RouterProvider router={router} />
      </LoadingProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
);
