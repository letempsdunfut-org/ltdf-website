"use client"

import {
    Button,
    Container,
    Heading,
    HStack,
    IconButton,
    Input,
    Stack,
    Table,
 Text 
} from "@chakra-ui/react"
import { LuPlus, LuTrash2 } from "react-icons/lu"
import { Avatar } from "@/components/ui/avatar"
import { Field } from "@/components/ui/field"
import { NativeSelectField, NativeSelectRoot } from "@/components/ui/native-select"
import { members } from "./data"

export const Block = () => {
    return (
        <Container py="20" maxW="3xl">
            <Stack gap="8">
                <Stack gap="1">
                    <Heading as="h2" textStyle="xl">
                        Team Members
                    </Heading>
                    <Text color="fg.muted">Invite and manage your team members.</Text>
                </Stack>

                <Stack direction={{ base: "column", md: "row" }} gap="4">
                    <Field label="Email address" srOnly>
                        <Input placeholder="Enter email address" />
                    </Field>
                    <Field label="Role" srOnly width="auto">
                        <NativeSelectRoot minW="140px">
                            <NativeSelectField defaultValue="member">
                                <option value="member">Member</option>
                                <option value="admin">Admin</option>
                            </NativeSelectField>
                        </NativeSelectRoot>
                    </Field>
                    <Button>
                        <LuPlus /> Invite
                    </Button>
                </Stack>

                <Table.ScrollArea>
                    <Table.Root>
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeader>Name</Table.ColumnHeader>
                                <Table.ColumnHeader>Role</Table.ColumnHeader>
                                <Table.ColumnHeader></Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {members.map((member) => (
                                <Table.Row key={member.email}>
                                    <Table.Cell>
                                        <HStack gap="3">
                                            <Avatar name={member.name} src={member.avatar} size="sm" />
                                            <Stack gap="0">
                                                <Text fontWeight="medium">{member.name}</Text>
                                                <Text textStyle="xs" color="fg.muted">
                                                    {member.email}
                                                </Text>
                                            </Stack>
                                        </HStack>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <NativeSelectRoot size="sm" variant="subtle" width="auto">
                                            <NativeSelectField defaultValue={member.role.toLowerCase()}>
                                                <option value="admin">Admin</option>
                                                <option value="member">Member</option>
                                            </NativeSelectField>
                                        </NativeSelectRoot>
                                    </Table.Cell>
                                    <Table.Cell textAlign="end">
                                        <IconButton variant="ghost" size="xs" colorPalette="red" aria-label="Delete member">
                                            <LuTrash2 />
                                        </IconButton>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Root>
                </Table.ScrollArea>
            </Stack>
        </Container>
    )
}
