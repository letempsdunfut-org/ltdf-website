"use client"

import {
 Badge, HStack, IconButton, Show, Table, Text 
} from "@chakra-ui/react"
import { LuCopy, LuPencil } from "react-icons/lu"
import {
 apiKeyData, type ApiKeyItem, type ColumnDef, maskSecret 
} from "./data"
import { RevokeActionButton } from "./revoke-action-button"

export const ApiKeysTable = () => {
    return (
        <Table.ScrollArea>
            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        {apiKeyColumns.map((column) => (
                            <Show
                                key={String(column.key)}
                                when={!column.hidden}
                                fallback={<Table.ColumnHeader />}
                            >
                                <Table.ColumnHeader hideBelow={column.hideBelow}>{column.name}</Table.ColumnHeader>
                            </Show>
                        ))}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {apiKeyData.map((item) => (
                        <Table.Row key={item.id} bg="bg.panel">
                            {apiKeyColumns.map((column) => (
                                <Show key={String(column.key)} when={!column.hidden} fallback={<Table.Cell />}>
                                    <Table.Cell hideBelow={column.hideBelow}>{column.render(item)}</Table.Cell>
                                </Show>
                            ))}
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </Table.ScrollArea>
    )
}

const apiKeyColumns: ColumnDef<ApiKeyItem>[] = [
    {
        name: "Name",
        key: "name",
        render: (item) => (
            <HStack>
                <Text fontWeight="medium">{item.name}</Text>
                <Badge size="sm" variant="surface">
                    {item.permission}
                </Badge>
            </HStack>
        ),
    },
    {
        name: "Secret key",
        key: "value",
        render: (item) => (
            <HStack>
                <Text fontFamily="mono" color="fg.muted">
                    {maskSecret(item.value)}
                </Text>
                <IconButton size="xs" variant="ghost" colorPalette="gray">
                    <LuCopy />
                </IconButton>
            </HStack>
        ),
    },
    {
        name: "Created",
        key: "created",
        hideBelow: "md",
        render: (item) => item.created,
    },
    {
        name: "Last used",
        key: "lastUsed",
        hideBelow: "md",
        render: (item) => item.lastUsed,
    },
    {
        name: "",
        key: "actions",
        render: () => (
            <HStack justify="flex-end">
                <IconButton size="xs" variant="ghost" colorPalette="gray">
                    <LuPencil />
                </IconButton>
                <RevokeActionButton />
            </HStack>
        ),
    },
]
