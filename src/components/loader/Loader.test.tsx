import { render, screen } from '@testing-library/react';

import Loader from './index';

describe('Loader Component', () => {
  test('renders loader component', () => {
    render(<Loader />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('applies animation delay to dot', () => {
    render(<Loader />);

    const dot = screen
      .getByRole('status')
      .querySelector('.loader-container__dot');
    expect(dot).toHaveStyle('animation-delay: 200ms');
  });
});
