import { screen } from '@testing-library/react';

import { render } from '@/tests/utils/custom-render';
import Card from './index';

const mockPodcast = {
  id: '123',
  title: 'Test Podcast',
  author: 'Test Author',
  image: 'test-image.jpg',
  description: 'Test Description',
};

describe('Card Component', () => {
  test('renders podcast information correctly', () => {
    render(<Card podcast={mockPodcast} />);

    expect(screen.getByText(mockPodcast.title)).toBeInTheDocument();
    expect(
      screen.getByText(`Author: ${mockPodcast.author}`),
    ).toBeInTheDocument();
    expect(screen.getByAltText(mockPodcast.title)).toHaveAttribute(
      'src',
      mockPodcast.image,
    );
  });

  test('links to correct podcast detail page', () => {
    render(<Card podcast={mockPodcast} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/podcast/${mockPodcast.id}`);
  });
});
