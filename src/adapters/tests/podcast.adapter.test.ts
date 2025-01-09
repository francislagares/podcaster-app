import { createPodcastAdapter } from '../podcast.adapter';

describe('Podcast Adapter', () => {
  const mockPodcastData = {
    id: { attributes: { 'im:id': '123' } },
    'im:name': { label: 'Test Podcast' },
    'im:artist': { label: 'Test Author' },
    'im:image': [
      { label: 'small.jpg' },
      { label: 'medium.jpg' },
      { label: 'large.jpg' },
    ],
    summary: { label: 'Test Description' },
  };

  test('transforms podcast data correctly', () => {
    const result = createPodcastAdapter(mockPodcastData);

    expect(result).toEqual({
      id: '123',
      title: 'Test Podcast',
      author: 'Test Author',
      image: 'large.jpg',
      description: 'Test Description',
    });
  });
});
