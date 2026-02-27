"use client"

import {
    Button,
    Container,
    Grid,
    Heading,
    HStack,
    IconButton,
    Stack,
    Text
} from "@chakra-ui/react"
import { LuEllipsis, LuPlus } from "react-icons/lu"
import { Avatar } from "@/components/ui/avatar"
import { members } from "./data"

export const Block = () => {
    return (
        <Container py="20" maxW="4xl">
            <Stack gap="8">
                <HStack justify="space-between">
                    <Heading as="h2" textStyle="xl">
                        Meet the Team
                    </Heading>
                    <Button>
                        <LuPlus /> Add Member
                    </Button>
                </HStack>

                <Grid templateColumns={{
                    base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)"
                }} gap="6">
                    {members.map((member) => (
                        <Stack
                            key={member.email}
                            p="6"
                            borderWidth="1px"
                            borderRadius="lg"
                            bg="bg.panel"
                            align="center"
                            textAlign="center"
                            gap="4"
                            position="relative"
                        >
                            <IconButton
                                aria-label="Options"
                                variant="ghost"
                                size="xs"
                                colorPalette="gray"
                                position="absolute"
                                top="2"
                                right="2"
                            >
                                <LuEllipsis />
                            </IconButton>
                            <Avatar size="2xl" name={member.name} src={member.avatar} />
                            <Stack gap="1">
                                <Text fontWeight="semibold" textStyle="lg">{member.name}</Text>
                                <Text color="fg.muted" textStyle="sm">{member.role}</Text>
                            </Stack>
                            <HStack gap="2" width="full">
                                <Button variant="outline" size="sm" flex="1">Profile</Button>
                                <Button variant="outline" size="sm" flex="1">Message</Button>
                            </HStack>
                        </Stack>
                    ))}
                </Grid>
            </Stack>
        </Container>
    )
}
