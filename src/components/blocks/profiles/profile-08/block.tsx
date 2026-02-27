"use client"

import {
    Avatar,
    Badge,
    Box,
    Button,
    Container,
    Grid,
    Heading,
    HStack,
    Stack,
    Text,
} from "@chakra-ui/react"

const description = "Experienced Product Designer with a demonstrated history of working in the computer software industry. " +
    "Skilled in User Interface Design, Front-end Development, and Public Speaking."

export const Block = () => {
    return (
        <Container py="20" maxW="4xl">
            <Grid templateColumns={{ base: "1fr", lg: "1fr 300px" }} gap="8">
                <Stack gap="8">
                    <HStack gap="4">
                        <Avatar.Root size="xl">
                            <Avatar.Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" />
                            <Avatar.Fallback name="Segun Adebayo" />
                        </Avatar.Root>
                        <Stack gap="1">
                            <HStack>
                                <Heading size="lg">Segun Adebayo</Heading>
                                <Badge colorPalette="blue" variant="solid">PRO</Badge>
                            </HStack>
                            <Text color="fg.muted">Product Designer, UI Developer</Text>
                            <Text textStyle="sm" color="fg.muted">Lagos, Nigeria</Text>
                        </Stack>
                    </HStack>

                    <Stack gap="4">
                        <Heading size="md">About</Heading>
                        <Text color="fg.muted">
                            {description}
                        </Text>
                    </Stack>

                    <Stack gap="4">
                        <Heading size="md">Experience</Heading>
                        <ExperienceItem
                            role="Senior Frontend Engineer"
                            company="Chakra UI"
                            date="2019 - Present"
                        />
                        <ExperienceItem
                            role="UI Designer"
                            company="Freelance"
                            date="2015 - 2019"
                        />
                    </Stack>
                </Stack>

                <Stack gap="6">
                    <Button width="full" size="lg">Contact Me</Button>

                    <Stack gap="4" p="6" bg="bg.subtle" borderRadius="lg">
                        <Heading size="sm">Skills</Heading>
                        <HStack wrap="wrap" gap="2">
                            <Badge variant="surface">React</Badge>
                            <Badge variant="surface">TypeScript</Badge>
                            <Badge variant="surface">Chakra UI</Badge>
                            <Badge variant="surface">Next.js</Badge>
                            <Badge variant="surface">Node.js</Badge>
                        </HStack>
                    </Stack>
                </Stack>
            </Grid>
        </Container>
    )
}

const ExperienceItem = (props: { role: string, company: string, date: string }) => {
    const {
        role, company, date
    } = props
    return (
        <HStack align="flex-start" gap="4">
            <Box
                boxSize="3"
                bg="blue.500"
                borderRadius="full"
                mt="1.5"
                flexShrink={0}
            />
            <Stack gap="0.5">
                <Text fontWeight="medium">{role}</Text>
                <Text textStyle="sm">{company}</Text>
                <Text textStyle="xs" color="fg.muted">{date}</Text>
            </Stack>
        </HStack>
    )
}
