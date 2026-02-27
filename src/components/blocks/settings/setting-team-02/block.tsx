"use client"

import {
    Button,
    Container,
    Heading,
    HStack,
    Stack,
    Text,
    Wrap,
} from "@chakra-ui/react"
import { LuPlus, LuSettings } from "react-icons/lu"
import { Avatar } from "@/components/ui/avatar"
import { members } from "./data"

export const Block = () => {
    return (
        <Container py="20" maxW="3xl">
            <Stack gap="8">
                <HStack justify="space-between" align="center">
                    <Stack gap="1">
                        <Heading as="h2" textStyle="xl">
                            Team
                        </Heading>
                        <Text color="fg.muted">Manage who has access to this project.</Text>
                    </Stack>
                    <Button size="sm">
                        <LuPlus /> Invite Member
                    </Button>
                </HStack>

                <Wrap gap="4">
                    {members.map((member) => (
                        <HStack key={member.email} minW="240px" flex="1" p="4" borderWidth="1px" borderRadius="lg" bg="bg.panel" justify="space-between">
                            <HStack gap="3">
                                <Avatar name={member.name} src={member.avatar} />
                                <Stack gap="0">
                                    <Text fontWeight="medium" textStyle="sm">{member.name}</Text>
                                    <Text textStyle="xs" color="fg.muted">{member.role}</Text>
                                </Stack>
                            </HStack>
                            <Button size="xs" variant="ghost" colorPalette="gray">
                                <LuSettings />
                            </Button>
                        </HStack>
                    ))}
                </Wrap>
            </Stack>
        </Container>
    )
}
