import { Box, Flex } from "@chakra-ui/react";
import { PieceCard } from "./card";
import { Piece } from "@/types";

interface PieceListProps {
    pieces: Piece[];
  }

export const PieceList: React.FC<PieceListProps> = ({ pieces }) => {
    return (
        <Flex>
            {pieces.map((piece) => (
                <Box key={piece.code}>
                    <PieceCard piece={piece}/>
                </Box>
            ))}
        </Flex>
    );
};