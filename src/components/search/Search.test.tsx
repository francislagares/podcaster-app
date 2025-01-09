import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { vi } from 'vitest';
import Search from './index';

describe('Search Component', () => {
  const mockOnChange = vi.fn();
  const defaultProps = {
    count: 10,
    value: '',
    onChange: mockOnChange,
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  test('renders search input and count', () => {
    render(<Search {...defaultProps} />);

    expect(
      screen.getByPlaceholderText('Filter podcasts...'),
    ).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  test('calls onChange when input value changes', async () => {
    render(<Search {...defaultProps} />);

    const input = screen.getByPlaceholderText('Filter podcasts...');
    await userEvent.type(input, 'test');

    expect(mockOnChange).toHaveBeenCalled();
  });

  test('displays current value in input', () => {
    render(<Search {...defaultProps} value='test' />);

    const input = screen.getByPlaceholderText(
      'Filter podcasts...',
    ) as HTMLInputElement;
    expect(input.value).toBe('test');
  });
});
