"use client"

import {
    Avatar,
    Box,
    Button,
    Container,
    Heading,
    Stack,
    Text,
} from "@chakra-ui/react"
import { LuPlus } from "react-icons/lu"

export const Block = () => {
    return (
        <Container py="20" maxW="5xl">
            <Stack direction={{ base: "column", md: "row" }} gap="8" align="flex-start">
                <Stack w={{ base: "full", md: "xs" }} gap="6" flexShrink={0}>
                    <Box position="relative">
                        <Box h="24" bg="bg.emphasized" borderRadius="lg" mb="-12" />
                        <Box px="4">
                            <Avatar.Root size="2xl" border="4px solid white">
                                <Avatar.Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" />
                                <Avatar.Fallback name="Segun Adebayo" />
                            </Avatar.Root>
                        </Box>
                    </Box>

                    <Stack px="4" gap="4">
                        <Stack gap="1">
                            <Heading size="lg">Segun Adebayo</Heading>
                            <Text color="fg.muted">@sage_adebayo</Text>
                        </Stack>
                        <Text>
                            Frontend Engineer and UI Designer. Creator of Chakra UI.
                        </Text>
                        <Button width="full">
                            <LuPlus /> Follow
                        </Button>
                    </Stack>
                </Stack>

                <Box flex="1" bg="bg.panel" minH="md" borderRadius="lg" borderWidth="1px" p="6">
                    <Text color="fg.muted">Main content area</Text>
                </Box>
            </Stack>
        </Container>
    )
}
