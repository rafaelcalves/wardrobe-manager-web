import { Box, Flex } from "@chakra-ui/react";
import { Card } from "./card";

export const List: React.FC = () => {
    return (
        <Flex>
            <Box>
                <Card/>
            </Box>
            <Box>
                <Card/>
            </Box>
        </Flex>
    );
};