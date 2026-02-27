"use client"

import {
 Button, Container, Heading, HStack, Stack, Text 
} from "@chakra-ui/react"
import { useState } from "react"
import { LuPlus } from "react-icons/lu"
import { ApiKeysTable } from "./api-keys-table"
import { CreateApiKeyDialog } from "./create-api-key-dialog"

export const Block = () => {
    const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

    return (
        <Container py="20" maxW="5xl">
            <Stack gap="8">
                <HStack justify="space-between" align="center">
                    <Stack>
                        <Heading as="h2" textStyle="3xl">
                            API keys
                        </Heading>
                        <Text color="fg.muted">Create a new API key to authenticate your app</Text>
                    </Stack>
                    <Button
                        size="xs"
                        variant="subtle"
                        colorPalette="gray"
                        onClick={() => setIsCreateDialogOpen(true)}
                    >
                        <LuPlus />
                    </Button>
                </HStack>

                <ApiKeysTable />

                <Text fontSize="sm" color="fg.muted">
                    4 results
                </Text>

                <CreateApiKeyDialog
                    open={isCreateDialogOpen}
                    onOpenChange={(details) => setIsCreateDialogOpen(details.open)}
                />
            </Stack>
        </Container>
    )
}
