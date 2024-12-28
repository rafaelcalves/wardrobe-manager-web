import { fetchPieces } from "../pieceApi";
import { Piece, ProblemDetail } from "../../types";
import { API_BASE_URL } from "../../config/apiConfig";

global.fetch = jest.fn();

describe("fetchPieces", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch and return a list of pieces", async () => {
    const mockPieces: Piece[] = [
        {
          code: "piece_code",
          description: "piece_description",
          brandCode: "brand_code",
          predominantColorHex: "#FFFFFF",
          categoryCode: "category_code",
          fabric: "piece_fabric",
          images: [
            "https://www.image.com"
          ],
          links: [
            "https://www.link.com"
          ]
        },
        {
          code: "piece_code1",
          description: "piece_description1",
          brandCode: "brand_code1",
          predominantColorHex: "#FFFFFF",
          categoryCode: "category_code1",
          fabric: "piece_fabric1",
          images: [
            "https://www.image1.com"
          ],
          links: [
            "https://www.link1.com"
          ]
        }
    ];

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockPieces,
    });

    const pieces = await fetchPieces();

    expect(pieces).toEqual(mockPieces);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/piece`);
  });

  it("should throw an error if the network response is not ok", async () => {
    const mockProblemDetail: ProblemDetail = {
      title: "Internal Server Error",
      status: 500,
      detail: "Internal Server Error",
      instance: "/piece",
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => mockProblemDetail,
    });

    await expect(fetchPieces()).rejects.toThrow("Error fetching pieces: Internal Server Error - Internal Server Error");
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/piece`);
  });
});