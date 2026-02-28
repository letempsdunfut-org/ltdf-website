"use client"

import {
    Avatar,
    Button,
    Container,
    Heading,
    HStack,
    Icon,
    Stack,
    Text,
    Wrap,
} from "@chakra-ui/react"
import { LuLink, LuMapPin } from "react-icons/lu"
import {
    SiGithub, SiLinkedin, SiX
} from "react-icons/si"

const bio = "I'm a frontend engineer and UI designer passionate about building accessible and user-friendly web applications. " +
    "I created Chakra UI to help developers build better React applications with speed."

export const Block = () => {
    return (
        <Container py="20" maxW="3xl">
            <Stack gap="8" align="center" textAlign="center">
                <Stack gap="4" align="center">
                    <Avatar.Root size="2xl">
                        <Avatar.Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" />
                        <Avatar.Fallback name="Segun Adebayo" />
                    </Avatar.Root>
                    <Stack gap="1">
                        <Heading as="h1" textStyle="3xl">Segun Adebayo</Heading>
                        <Text textStyle="lg" color="fg.muted">Creator of Chakra UI. Frontend Engineer.</Text>
                    </Stack>
                </Stack>

                <Wrap justify="center" gap="6" color="fg.muted">
                    <HStack gap="2">
                        <LuMapPin />
                        <Text>Lagos, Nigeria</Text>
                    </HStack>
                    <HStack gap="2">
                        <LuLink />
                        <Text>chakra-ui.com</Text>
                    </HStack>
                </Wrap>

                <HStack gap="4">
                    <Button variant="ghost" size="sm" colorPalette="gray">
                        <Icon fontSize="xl" as={SiGithub} />
                    </Button>
                    <Button variant="ghost" size="sm" colorPalette="gray">
                        <Icon fontSize="xl" as={SiX} />
                    </Button>
                    <Button variant="ghost" size="sm" colorPalette="gray">
                        <Icon fontSize="xl" as={SiLinkedin} />
                    </Button>
                </HStack>
            </Stack>

            <Container maxW="2xl" mt="12">
                <Stack gap="8">
                    <Stack gap="2">
                        <Heading size="md">About</Heading>
                        <Text color="fg.muted" lineHeight="tall">
                            {bio}
                        </Text>
                    </Stack>

                    <Stack gap="4">
                        <Heading size="md">Projects</Heading>
                        <Stack gap="4">
                            <ProjectCard
                                title="Chakra UI"
                                description="Simple, Modular and Accessible UI Components for your React Applications"
                                url="https://chakra-ui.com"
                            />
                            <ProjectCard
                                title="Zag.js"
                                description="Finite state machine for your UI components"
                                url="https://zagjs.com"
                            />
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Container>
    )
}

const ProjectCard = (props: { title: string, description: string, url: string }) => {
    const {
        title, description, url
    } = props
    return (
        <Stack p="4" borderWidth="1px" borderRadius="lg" _hover={{ borderColor: "fg.muted" }}>
            <Heading size="sm">
                <a href={url}>{title}</a>
            </Heading>
            <Text color="fg.muted" textStyle="sm">{description}</Text>
        </Stack>
    )
}
