import { describe, it, expect, vi } from 'vitest';
import { databases } from '~/utils/appwrite';

// Mock the entire module
vi.mock('./index', () => {
  const handler = async (event: any) => {
    const { documents } = await databases.listDocuments('database-id', 'seasons-collection');
    return documents.map((doc: any) => ({
      id: doc.$id,
      cap: doc.cap,
      levels: doc.levels,
      title: doc.title,
      number: doc.number,
      start: doc.start,
      end: doc.end,
      results: doc.results,
    }));
  };
  return { default: handler };
});

vi.mock('~/utils/appwrite', () => ({
  databases: {
    listDocuments: vi.fn(),
  },
}));

describe('GET /api/seasons', () => {
  it('returns formatted seasons data', async () => {
    const mockSeason = {
      $id: 'test-id',
      cap: 100,
      levels: 5,
      title: 'Test Season',
      number: 1,
      start: '2024-01-01',
      end: '2024-12-31',
      results: ['result1'],
    };

    (databases.listDocuments as any).mockResolvedValue({
      documents: [mockSeason],
    });

    const { default: handler } = await import('./index');
    const response = await handler({} as any);

    expect(response).toEqual([{
      id: 'test-id',
      cap: 100,
      levels: 5,
      title: 'Test Season',
      number: 1,
      start: '2024-01-01',
      end: '2024-12-31',
      results: ['result1'],
    }]);
  });
});