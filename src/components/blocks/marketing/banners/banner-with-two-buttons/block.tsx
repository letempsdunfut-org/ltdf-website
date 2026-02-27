import {
 Box, Button, Container, HStack, Stack, Text 
} from "@chakra-ui/react"

export const Block = () => {
    return (
        <Box borderBottomWidth="1px" bg="bg.panel">
            <Container py={{ base: "4", md: "3.5" }}>
                <Stack
                    gap="4"
                    justifyContent={{ base: "start", md: "space-between" }}
                    direction={{ base: "column", md: "row" }}
                >
                    <Box pe={{ base: "4", md: "0" }}>
                        <Text fontWeight="medium">Stay Ahead with our Newsletter</Text>
                        <Text color="fg.muted">Embrace trends, industry insights, and actionable advice.</Text>
                    </Box>
                    <HStack gap="3">
                        <Button variant="outline" colorPalette="gray">
                            No, Thanks
                        </Button>
                        <Button>Sign Up</Button>
                    </HStack>
                </Stack>
            </Container>
        </Box>
    )
}
