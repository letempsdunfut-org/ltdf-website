"use client"

import {
 Button, Container, Heading, HStack, Input, Stack, Text 
} from "@chakra-ui/react"
import { Avatar } from "@/components/ui/avatar"
import { Field } from "@/components/ui/field"

export const Block = () => {
    return (
        <Container py="20" maxW="xl">
            <Stack gap="10">
                <HStack gap="4">
                    <Avatar size="lg" name="Segun Adebayo" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" />
                    <Stack gap="0">
                        <Heading size="md">Segun Adebayo</Heading>
                        <Text color="fg.muted" textStyle="sm">sage@chakra-ui.com</Text>
                    </Stack>
                    <Button variant="outline" size="sm" ml="auto">Edit</Button>
                </HStack>

                <Stack gap="6">
                    <Field label="Username">
                        <Input defaultValue="segunadebayo" />
                    </Field>
                    <Field label="Website">
                        <Input defaultValue="https://chakra-ui.com" />
                    </Field>
                </Stack>

                <HStack justify="flex-end">
                    <Button>Save</Button>
                </HStack>
            </Stack>
        </Container>
    )
}
