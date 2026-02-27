"use client"

import {
    Avatar,
    Button,
    Container,
    Heading,
    HStack,
    Stack,
    Tabs,
    Text,
} from "@chakra-ui/react"

export const Block = () => {
    return (
        <Container py="20" maxW="5xl">
            <Stack gap="8">
                <HStack justify="space-between" align="flex-start" wrap="wrap" gap="4">
                    <HStack gap="5">
                        <Avatar.Root size="2xl">
                            <Avatar.Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" />
                            <Avatar.Fallback name="Segun Adebayo" />
                        </Avatar.Root>
                        <Stack gap="0">
                            <Heading as="h2" textStyle="2xl">Segun Adebayo</Heading>
                            <Text textStyle="lg" color="fg.muted">Product Designer</Text>
                            <Text textStyle="sm" color="fg.muted">Lagos, Nigeria • 11:30 AM local time</Text>
                        </Stack>
                    </HStack>
                    <HStack>
                        <Button variant="outline">Message</Button>
                        <Button>Hire Me</Button>
                    </HStack>
                </HStack>

                <Tabs.Root defaultValue="overview" variant="line">
                    <Tabs.List>
                        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
                        <Tabs.Trigger value="media">Media</Tabs.Trigger>
                        <Tabs.Trigger value="files">Files</Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value="overview" pt="6" minH="200px">
                        <Text color="fg.muted">
                            Profile overview content goes here.
                        </Text>
                    </Tabs.Content>
                    <Tabs.Content value="media" pt="6" minH="200px">
                        <Text color="fg.muted">
                            Media content goes here.
                        </Text>
                    </Tabs.Content>
                    <Tabs.Content value="files" pt="6" minH="200px">
                        <Text color="fg.muted">
                            Files content goes here.
                        </Text>
                    </Tabs.Content>
                </Tabs.Root>
            </Stack>
        </Container>
    )
}
