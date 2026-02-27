"use client"

import {
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    Heading,
    HStack,
    Stack,
    Tabs,
    Text,
} from "@chakra-ui/react"
import { LuCalendar, LuMapPin } from "react-icons/lu"

export const Block = () => {
    return (
        <Container py="0" maxW="full" p="0">
            <Box h="48" bg="bg.emphasized" />
            <Container maxW="5xl">
                <Stack gap="6">
                    <HStack justify="space-between" align="flex-end" mt="-12" mb="4" wrap="wrap" gap="4">
                        <HStack gap="5" align="flex-end">
                            <Avatar.Root size="2xl" border="4px solid white">
                                <Avatar.Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" />
                                <Avatar.Fallback name="Segun Adebayo" />
                            </Avatar.Root>
                            <Stack gap="0" pb="2">
                                <Heading as="h2" textStyle="2xl">Segun Adebayo</Heading>
                                <Text color="fg.muted">@sage_adebayo</Text>
                            </Stack>
                        </HStack>
                        <HStack pb="2">
                            <Button variant="outline">Message</Button>
                            <Button>Follow</Button>
                        </HStack>
                    </HStack>

                    <HStack gap="6" color="fg.muted" textStyle="sm">
                        <Text>Product Designer at Chakra UI</Text>
                        <HStack gap="1">
                            <LuMapPin />
                            <Text>Lagos, Nigeria</Text>
                        </HStack>
                        <HStack gap="1">
                            <LuCalendar />
                            <Text>Joined March 2018</Text>
                        </HStack>
                    </HStack>

                    <Tabs.Root defaultValue="posts" variant="plain">
                        <Tabs.List borderBottomWidth="1px" w="full">
                            <Tabs.Trigger value="posts">Posts</Tabs.Trigger>
                            <Tabs.Trigger value="media">Media</Tabs.Trigger>
                            <Tabs.Trigger value="likes">Likes</Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content value="posts" pt="6">
                            <Grid templateColumns="240px 1fr" gap="8">
                                <Stack gap="4">
                                    <Stack gap="2">
                                        <Heading textStyle="sm">About</Heading>
                                        <Text textStyle="sm" color="fg.muted">
                                            Passionate about building accessible and inclusive web applications.
                                        </Text>
                                    </Stack>
                                </Stack>
                                <Stack gap="4">
                                    <Box p="4" borderWidth="1px" borderRadius="lg">
                                        <Text>Posts content will appear here</Text>
                                    </Box>
                                </Stack>
                            </Grid>
                        </Tabs.Content>
                    </Tabs.Root>

                </Stack>
            </Container>
        </Container>
    )
}
