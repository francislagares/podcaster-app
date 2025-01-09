import { expect } from 'vitest';
import { formatMilliseconds } from '../timeFormatter';

describe('timeFormatter', () => {
  test('formats milliseconds to MM:SS format', () => {
    const input = 125000; // 2:05
    const expected = '02:05';
    expect(formatMilliseconds(input)).toBe(expected);
  });

  test('handles zero milliseconds', () => {
    const input = 0;
    const expected = '00:00';
    expect(formatMilliseconds(input)).toBe(expected);
  });

  test('handles large millisecond values', () => {
    const input = 3600000; // 1 hour
    const expected = '60:00';
    expect(formatMilliseconds(input)).toBe(expected);
  });

  test('pads single digit minutes and seconds with zeros', () => {
    const input = 65000; // 1:05
    const expected = '01:05';
    expect(formatMilliseconds(input)).toBe(expected);
  });
});
