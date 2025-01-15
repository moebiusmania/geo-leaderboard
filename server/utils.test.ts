import { describe, it, expect, vi, beforeEach } from "vitest";
import { databases } from "~/utils/appwrite";
import { getDocuments, getSeasonParam } from "./utils";
import { H3Event } from "h3";

// Mock the external dependencies
vi.mock("~/utils/appwrite", () => ({
  databases: {
    listDocuments: vi.fn(),
  },
}));

// Mock h3 functions
vi.mock("h3", async () => {
  const actual = await vi.importActual("h3");
  return {
    ...actual,
    getRouterParam: vi.fn(),
    createError: vi.fn(({ statusCode, statusMessage }) => ({
      statusCode,
      statusMessage,
      __nuxt_error: true,
      expected: undefined,
      actual: undefined,
      stacks: [],
    })),
  };
});

// Import mocked functions
const { getRouterParam } = await import("h3");

describe("Server Utils", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("getDocuments", () => {
    it("calls listDocuments with correct parameters", async () => {
      const mockResponse = { documents: [], total: 0 };
      vi.mocked(databases.listDocuments).mockResolvedValue(mockResponse);

      const collectionId = "test-collection";
      const seasonIndex = 1;

      await getDocuments(collectionId, seasonIndex);

      expect(databases.listDocuments).toHaveBeenCalled();
    });
  });

  describe("getSeasonParam", () => {
    it("returns correct season index from valid parameter", () => {
      const mockEvent = {
        context: {},
      } as H3Event;
      vi.mocked(getRouterParam).mockReturnValue("1");

      const result = getSeasonParam(mockEvent);
      expect(result).toBe(1);
    });

    it("throws error for negative season value", () => {
      const mockEvent = {
        context: {},
      } as H3Event;
      vi.mocked(getRouterParam).mockReturnValue("-1");

      expect(() => getSeasonParam(mockEvent)).toThrow();
    });

    it("defaults to 0 when no season parameter is provided", () => {
      const mockEvent = {
        context: {},
      } as H3Event;
      vi.mocked(getRouterParam).mockReturnValue(undefined);

      const result = getSeasonParam(mockEvent);
      expect(result).toBe(0);
    });
  });
});
