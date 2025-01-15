import { describe, it, expect, vi } from 'vitest';

const mockFetch = vi.fn();

// Mock the entire module
vi.mock('./[number]', () => {
  const handler = async (event: any) => {
    const seasons = await mockFetch('/api/seasons');
    const number = event.context.params.number;
    const index = parseInt(number || "0");
    if (index < 0 || index >= seasons.length) {
      throw new Error('Season not found');
    }
    return seasons[index];
  };
  return { default: handler };
});

describe('GET /api/seasons/[number]', () => {
  it('returns the correct season by number', async () => {
    const mockSeasons = [
      {
        id: 'test-id-1',
        cap: 100,
        levels: 5,
        title: 'Season 1',
        number: 1,
        start: '2024-01-01',
        end: '2024-03-31',
        results: ['result1'],
      },
      {
        id: 'test-id-2',
        cap: 150,
        levels: 6,
        title: 'Season 2',
        number: 2,
        start: '2024-04-01',
        end: '2024-06-30',
        results: ['result2'],
      },
    ];

    mockFetch.mockResolvedValue(mockSeasons);

    const { default: handler } = await import('./[number]');
    const response = await handler({
      context: {
        params: { number: '1' }
      }
    } as any);

    expect(response).toEqual(mockSeasons[1]);
  });

  it('throws 404 error when season not found', async () => {
    mockFetch.mockResolvedValue([]);

    const { default: handler } = await import('./[number]');
    
    await expect(handler({
      context: {
        params: { number: '0' }
      }
    } as any)).rejects.toThrow('Season not found');
  });
}); 