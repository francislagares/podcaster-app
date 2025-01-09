import { expect } from 'vitest';
import { formatDate } from '../dateFormatter';

describe('dateFormatter', () => {
  test('formats date string to MM/DD/YYYY', () => {
    const input = '2024-02-15T10:30:00Z';
    const expected = '02/15/2024';
    expect(formatDate(input)).toBe(expected);
  });

  test('handles different date formats', () => {
    const input = 'February 15, 2024';
    const expected = '02/15/2024';
    expect(formatDate(input)).toBe(expected);
  });

  test('handles invalid date input', () => {
    const input = 'invalid-date';
    expect(formatDate(input)).toBe('Invalid Date');
  });
});
