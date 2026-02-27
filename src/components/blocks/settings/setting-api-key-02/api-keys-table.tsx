"use client"

import {
 HStack, IconButton, Table, Text
} from "@chakra-ui/react"
import { LuTrash2 } from "react-icons/lu"
import {
 apiKeyData, type ApiKeyItem, type ColumnDef
} from "./data"

export const ApiKeysTable = () => {
    return (
        <Table.ScrollArea>
            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        {apiKeyColumns.map((column) => (
                            <Table.ColumnHeader
                                key={String(column.key)}
                                hideBelow={column.hideBelow}
                                textAlign={column.align as string}
                                width={column.width}
                            >
                                {column.name}
                            </Table.ColumnHeader>
                        ))}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {apiKeyData.map((item) => (
                        <Table.Row key={item.id}>
                            {apiKeyColumns.map((column) => (
                                <Table.Cell
                                    key={String(column.key)}
                                    hideBelow={column.hideBelow}
                                    textAlign={column.align as string}
                                >
                                    {column.render(item)}
                                </Table.Cell>
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
        render: (item) => <Text fontWeight="medium">{item.name}</Text>,
    },
    {
        name: "Pattern",
        key: "value",
        render: (item) => (
            <HStack>
                <Text fontFamily="mono" color="fg.muted">
                    {item.value}
                </Text>
            </HStack>
        ),
    },
    {
        name: "Status",
        key: "status",
        render: (item) => (
            <HStack>
                <Text color={item.status === "Active" ? "fg.success" : "fg.error"}>{item.status}</Text>
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
        name: "",
        key: "actions",
        render: () => (
            <IconButton size="xs" variant="ghost" colorPalette="red">
                <LuTrash2 />
            </IconButton>
        ),
    },
]
