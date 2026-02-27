"use client"

import {
    Avatar,
    Box,
    Button,
    Container,
    Heading,
    HStack,
    Stack,
    Text,
} from "@chakra-ui/react"
import {
 LuCalendar, LuLink, LuMapPin 
} from "react-icons/lu"

export const Block = () => {
    return (
        <Container py="20" maxW="3xl">
            <Box h="32" bg="bg.emphasized" borderRadius="lg" mb="-16" />
            <Stack px="6" pb="6">
                <HStack justify="space-between" align="flex-end">
                    <Avatar.Root size="2xl" border="4px solid white">
                        <Avatar.Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" />
                        <Avatar.Fallback name="Segun Adebayo" />
                    </Avatar.Root>
                    <Button>Follow</Button>
                </HStack>

                <Stack gap="4">
                    <Stack gap="1">
                        <Heading as="h2" textStyle="2xl">
                            Segun Adebayo
                        </Heading>
                        <Text color="fg.muted">@sage_adebayo</Text>
                    </Stack>

                    <Text>
                        Creator of Chakra UI. Frontend Engineer and UI Designer. I love building tools for
                        developers.
                    </Text>

                    <HStack gap="6" color="fg.muted" textStyle="sm" flexWrap="wrap">
                        <HStack gap="1">
                            <LuMapPin />
                            <Text>Lagos, Nigeria</Text>
                        </HStack>
                        <HStack gap="1">
                            <LuLink />
                            <Text>chakra-ui.com</Text>
                        </HStack>
                        <HStack gap="1">
                            <LuCalendar />
                            <Text>Joined September 2019</Text>
                        </HStack>
                    </HStack>

                    <HStack gap="4">
                        <HStack gap="1">
                            <Text fontWeight="semibold">569</Text>
                            <Text color="fg.muted">Following</Text>
                        </HStack>
                        <HStack gap="1">
                            <Text fontWeight="semibold">72.6K</Text>
                            <Text color="fg.muted">Followers</Text>
                        </HStack>
                    </HStack>
                </Stack>
            </Stack>
        </Container>
    )
}
