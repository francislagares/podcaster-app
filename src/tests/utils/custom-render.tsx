import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, RenderOptions } from '@testing-library/react';
import { PropsWithChildren, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

const AllProviders = ({ children }: PropsWithChildren) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  );
};

export default AllProviders;

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): ReturnType<typeof render> =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
