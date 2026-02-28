"use client"

import {
    Avatar,
    Box,
    Container,
    Heading,
    HStack,
    Stack,
    Text,
} from "@chakra-ui/react"
import { Switch } from "@/components/ui/switch"

export const Block = () => {
    return (
        <Container py="20" maxW="xl">
            <Stack gap="8">
                <Stack gap="1">
                    <Heading as="h2" textStyle="xl">
                        Social Notifications
                    </Heading>
                    <Text color="fg.muted">Control which social activities trigger a notification.</Text>
                </Stack>

                <Stack gap="4">
                    <NotificationItem
                        name="John Doe"
                        action="started following you"
                        avatar="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=150"
                        time="2 hours ago"
                    />
                    <NotificationItem
                        name="Segun Adebayo"
                        action="liked your post"
                        avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150"
                        time="5 hours ago"
                    />
                    <NotificationItem
                        name="John Doe"
                        action="commented on your photo"
                        avatar="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150"
                        time="1 day ago"
                    />
                </Stack>
            </Stack>
        </Container>
    )
}

interface NotificationItemProps {
    name: string
    action: string
    avatar: string
    time: string
}

const NotificationItem = (props: NotificationItemProps) => {
    const {
 name, action, avatar, time
} = props
    return (
        <HStack justify="space-between" width="full" bg="bg.panel" p="4" borderRadius="l3" borderWidth="1px">
            <HStack gap="3">
                <Avatar.Root size="sm">
                    <Avatar.Fallback name={name} />
                    <Avatar.Image src={avatar} />
                </Avatar.Root>
                <Box>
                    <Text textStyle="sm">
                        <Text as="span" fontWeight="medium">
                            {name}
                        </Text>{" "}
                        <Text as="span" color="fg.muted">
                            {action}
                        </Text>
                    </Text>
                    <Text textStyle="xs" color="fg.muted">
                        {time}
                    </Text>
                </Box>
            </HStack>
            <Switch aria-label={`Toggle notification for ${name}`} defaultChecked />
        </HStack>
    )
}
