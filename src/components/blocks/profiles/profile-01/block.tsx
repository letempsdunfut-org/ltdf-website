"use client"

import {
 Avatar, Button, Container, Heading, HStack, Stack, Text 
} from "@chakra-ui/react"
import { LuLink, LuMapPin } from "react-icons/lu"

export const Block = () => {
    return (
        <Container py="20" maxW="xl">
            <Stack gap="6" align="center" textAlign="center">
                <Avatar.Root size="2xl">
                    <Avatar.Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" />
                    <Avatar.Fallback name="Segun Adebayo" />
                </Avatar.Root>

                <Stack gap="1">
                    <Heading as="h2" textStyle="2xl">
                        Segun Adebayo
                    </Heading>
                    <Text textStyle="lg" color="fg.muted">
                        Creator of Chakra UI. Frontend Engineer and UI Designer.
                    </Text>
                </Stack>

                <HStack gap="4" color="fg.muted" textStyle="sm">
                    <HStack gap="1">
                        <LuMapPin />
                        <Text>Lagos, Nigeria</Text>
                    </HStack>
                    <HStack gap="1">
                        <LuLink />
                        <Text>chakra-ui.com</Text>
                    </HStack>
                </HStack>

                <HStack>
                    <Button variant="outline">Message</Button>
                    <Button>Follow</Button>
                </HStack>
            </Stack>
        </Container>
    )
}
