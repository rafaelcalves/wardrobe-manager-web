
import { Piece, ProblemDetail } from "@/types";
import { API_BASE_URL } from "@/config/apiConfig";
  
export const fetchPieces = async (): Promise<Piece[]> => {
    const response = await fetch(`${API_BASE_URL}/piece`);

    if (!response.ok) {
        const problemDetail: ProblemDetail = await response.json();
        throw new Error(
          `Error fetching pieces: ${problemDetail.title} - ${problemDetail.detail}`
        );
      }

    return response.json();
};