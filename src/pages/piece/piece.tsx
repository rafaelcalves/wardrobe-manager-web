import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Piece } from "@/types";
import { fetchPieces } from "@/api/pieceApi";
import { PieceList } from "@/components/piece/list";
import { Spinner, Text } from "@chakra-ui/react";

export const PiecePage: React.FC = () => {
    const [pieces, setPieces] = useState<Piece[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadPieces = async () => {
        try {
            const data = await fetchPieces();
            setPieces(data);
        } catch (err) {
            console.error(err);
            setError("Failed to load pieces. Please try again later.");
        } finally {
            setLoading(false);
        }
        };

        loadPieces();
    }, []);

    if (loading) {
        return (
        <Box textAlign="center" mt={10}>
            <Spinner size="lg" />
            <Text mt={4}>Loading clothes...</Text>
        </Box>
        );
    }

    if (error) {
        return (
        <Box textAlign="center" mt={10}>
            <Text color="red.500">{error}</Text>
        </Box>
        );
    }

    return (
        <Box p={4}>
        <PieceList pieces={pieces} />
        </Box>
    );
};
  

export default PiecePage;