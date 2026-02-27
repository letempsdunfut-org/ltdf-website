import {
 Box, Button, Container, IconButton, Input, Stack, Text 
} from "@chakra-ui/react"
import { LuX } from "react-icons/lu"

export const Block = () => (
    <Box borderBottomWidth="1px" bg="bg.panel" position="relative">
        <Container py={{ base: "4", md: "3.5" }}>
            <IconButton
                display={{ base: "inline-flex", md: "none" }}
                variant="ghost"
                size="sm"
                aria-label="Close banner"
                position="absolute"
                right="3"
                top="2"
            >
                <LuX />
            </IconButton>
            <Stack
                gap="4"
                justify={{ base: "start", md: "space-between" }}
                direction={{ base: "column", md: "row" }}
            >
                <Box pe={{ base: "4", md: "0" }}>
                    <Text fontWeight="medium">Stay Ahead with our Newsletter</Text>
                    <Text color="fg.muted">Embrace trends, industry insights, and actionable advice.</Text>
                </Box>
                <Stack
                    direction={{ base: "column", md: "row" }}
                    gap="3"
                    align={{ base: "stretch", md: "center" }}
                >
                    <Input placeholder="Enter your E-Mail" minW="2xs" />
                    <Button>Sign Up</Button>
                    <IconButton
                        variant="ghost"
                        aria-label="Close banner"
                        display={{ base: "none", md: "inline-flex" }}
                    >
                        <LuX />
                    </IconButton>
                </Stack>
            </Stack>
        </Container>
    </Box>
)
