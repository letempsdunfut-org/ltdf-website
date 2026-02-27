"use client"

import {
 Button, Container, Heading, HStack, Separator, Stack
, Text
} from "@chakra-ui/react"
import { Switch } from "@/components/ui/switch"

export const Block = () => {
    return (
        <Container py="20" maxW="3xl">
            <Stack gap="8">
                <Stack gap="1">
                    <Heading as="h2" textStyle="xl">
                        Notifications
                    </Heading>
                    <Text color="fg.muted">
                        Manage how you receive notifications and updates.
                    </Text>
                </Stack>
                <Separator />

                <Stack gap="10">
                    <section>
                        <Heading as="h3" textStyle="lg" mb="4">
                            Email Notifications
                        </Heading>
                        <Stack gap="5">
                            <HStackJustified>
                                <Stack gap="0.5">
                                    <Text fontWeight="medium">Product updates</Text>
                                    <Text textStyle="sm" color="fg.muted">
                                        Receive messages about new features
                                    </Text>
                                </Stack>
                                <Switch />
                            </HStackJustified>
                            <Separator />
                            <HStackJustified>
                                <Stack gap="0.5">
                                    <Text fontWeight="medium">Security alerts</Text>
                                    <Text textStyle="sm" color="fg.muted">
                                        Receive security alerts for your account
                                    </Text>
                                </Stack>
                                <Switch defaultChecked />
                            </HStackJustified>
                        </Stack>
                    </section>

                    <section>
                        <Heading as="h3" textStyle="lg" mb="4">
                            Push Notifications
                        </Heading>
                        <Stack gap="5">
                            <HStackJustified>
                                <Stack gap="0.5">
                                    <Text fontWeight="medium">Comments</Text>
                                    <Text textStyle="sm" color="fg.muted">
                                        Receive a notification when someone comments on your post
                                    </Text>
                                </Stack>
                                <Switch defaultChecked />
                            </HStackJustified>
                            <Separator />
                            <HStackJustified>
                                <Stack gap="0.5">
                                    <Text fontWeight="medium">Mentions</Text>
                                    <Text textStyle="sm" color="fg.muted">
                                        Receive a notification when someone mentions you
                                    </Text>
                                </Stack>
                                <Switch defaultChecked />
                            </HStackJustified>
                        </Stack>
                    </section>
                </Stack>

                <HStackJustified pt="4">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Changes</Button>
                </HStackJustified>
            </Stack>
        </Container>
    )
}



const HStackJustified = (props: React.ComponentProps<typeof HStack>) => (
    <HStack justify="space-between" align="start" {...props} />
)
