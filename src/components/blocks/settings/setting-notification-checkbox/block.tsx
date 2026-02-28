"use client"

import {
 Button, Container, Heading, Stack, Text, VStack 
} from "@chakra-ui/react"
import { Checkbox } from "@/components/ui/checkbox"

export const Block = () => {
    return (
        <Container py="20" maxW="xl">
            <Stack gap="8">
                <Stack gap="1">
                    <Heading as="h2" textStyle="xl">
                        Notifications
                    </Heading>
                    <Text color="fg.muted">Check the notifications you want to receive</Text>
                </Stack>

                <Stack gap="6">
                    <VStack align="start" gap="3">
                        <Text fontWeight="medium">Messages</Text>
                        <Checkbox>Direct messages</Checkbox>
                        <Checkbox defaultChecked>Mentions</Checkbox>
                        <Checkbox>Group updates</Checkbox>
                    </VStack>

                    <VStack align="start" gap="3">
                        <Text fontWeight="medium">Activity</Text>
                        <Checkbox defaultChecked>New comments</Checkbox>
                        <Checkbox defaultChecked>Project status changes</Checkbox>
                        <Checkbox>Task assignments</Checkbox>
                    </VStack>
                </Stack>

                <Button alignSelf="start">Save preferences</Button>
            </Stack>
        </Container>
    )
}
