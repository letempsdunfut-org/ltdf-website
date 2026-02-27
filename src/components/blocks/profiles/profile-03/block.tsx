"use client"

import {
    Avatar,
    Button,
    Container,
    Grid,
    Heading,
    HStack,
    Stack,
    Text,
} from "@chakra-ui/react"
import {
 LuLink, LuMail, LuMapPin 
} from "react-icons/lu"
import {
 StatLabel, StatRoot, StatValueText 
} from "@/components/ui/stat"

export const Block = () => {
    return (
        <Container py="20" maxW="4xl">
            <Stack direction={{ base: "column", md: "row" }} gap={{ base: "8", md: "16" }}>
                <Stack gap="6" flex="1">
                    <HStack gap="6">
                        <Avatar.Root size="2xl">
                            <Avatar.Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" />
                            <Avatar.Fallback name="Segun Adebayo" />
                        </Avatar.Root>
                        <Stack gap="0">
                            <Heading as="h2" textStyle="2xl">
                                Segun Adebayo
                            </Heading>
                            <Text textStyle="lg" color="fg.muted">
                                Frontend Engineer
                            </Text>
                        </Stack>
                    </HStack>

                    <Stack gap="4" color="fg.muted" textStyle="sm">
                        <HStack gap="2">
                            <LuMapPin />
                            <Text>Lagos, Nigeria</Text>
                        </HStack>
                        <HStack gap="2">
                            <LuLink />
                            <Text>chakra-ui.com</Text>
                        </HStack>
                        <HStack gap="2">
                            <LuMail />
                            <Text>sage@chakra-ui.com</Text>
                        </HStack>

                        <Text>
                            Creator of Chakra UI. Frontend Engineer and UI Designer. I love building tools for developers.
                        </Text>
                    </Stack>

                    <HStack>
                        <Button>Message</Button>
                        <Button variant="outline">Follow</Button>
                    </HStack>
                </Stack>

                <Grid templateColumns="repeat(2, 1fr)" gap="8" flex="1">
                    <Stack p="4" bg="bg.panel" borderRadius="lg" borderWidth="1px">
                        <StatRoot>
                            <StatLabel>Projects</StatLabel>
                            <StatValueText>142</StatValueText>
                        </StatRoot>
                    </Stack>
                    <Stack p="4" bg="bg.panel" borderRadius="lg" borderWidth="1px">
                        <StatRoot>
                            <StatLabel>Followers</StatLabel>
                            <StatValueText>8.9k</StatValueText>
                        </StatRoot>
                    </Stack>
                    <Stack p="4" bg="bg.panel" borderRadius="lg" borderWidth="1px">
                        <StatRoot>
                            <StatLabel>Following</StatLabel>
                            <StatValueText>1.2k</StatValueText>
                        </StatRoot>
                    </Stack>
                    <Stack p="4" bg="bg.panel" borderRadius="lg" borderWidth="1px">
                        <StatRoot>
                            <StatLabel>Rating</StatLabel>
                            <StatValueText>4.8</StatValueText>
                        </StatRoot>
                    </Stack>
                </Grid>
            </Stack>
        </Container>
    )
}
