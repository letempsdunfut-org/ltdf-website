import {
 Box, Container, IconButton, Stack, Text 
} from "@chakra-ui/react"
import { LuX } from "react-icons/lu"

export const Block = () => {
    return (
        <Box borderBottomWidth="1px" bg="bg.panel">
            <Container py={{ base: "4", md: "3.5" }}>
                <Stack
                    direction="row"
                    gap={{ base: "3", md: "4" }}
                    justify="space-between"
                    align={{ base: "start", md: "center" }}
                >
                    <Box>
                        <Text fontWeight="medium">Hooray, we just released a new version.</Text>
                        <Text color="fg.muted">
                            Exciting times ahead, as the new version integrates the most recent updates from
                            Chakra UI.
                        </Text>
                    </Box>
                    <IconButton variant="ghost" aria-label="Close banner">
                        <LuX />
                    </IconButton>
                </Stack>
            </Container>
        </Box>
    )
}
