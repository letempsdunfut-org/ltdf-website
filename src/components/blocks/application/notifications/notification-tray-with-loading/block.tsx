"use client"

import {
    Button,
    Flex,
    HStack,
    IconButton,
    Popover,
    Portal,
    Skeleton,
    Stack,
    Text,
} from "@chakra-ui/react"
import { useState } from "react"
import { LuBell, LuCircleCheck } from "react-icons/lu"

export const Block = () => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <Flex py="6" w="full" justifyContent="center" alignItems="center">
            <Popover.Root open={isOpen} onOpenChange={(details) => setIsOpen(details.open)}>
                <Popover.Trigger asChild>
                    <IconButton aria-label="Notifications" variant="ghost" colorPalette="gray" size="sm">
                        <LuBell />
                    </IconButton>
                </Popover.Trigger>
                <Portal>
                    <Popover.Positioner>
                        <Popover.Content minW="sm" boxShadow="sm">
                            <Popover.Body p="0">
                                <Header />
                                <LoadingSkeleton />
                            </Popover.Body>
                        </Popover.Content>
                    </Popover.Positioner>
                </Portal>
            </Popover.Root>
        </Flex>
    )
}

const Header = () => {
    return (
        <Stack borderBottomWidth="1px">
            <HStack justify="space-between" py="2" px="4">
                <HStack gap="3">
                    <Text textStyle="sm" fontWeight="medium">
                        Notifications
                    </Text>
                </HStack>
                <Button disabled variant="ghost" colorPalette="gray" size="xs">
                    <LuCircleCheck />
                    Mark all as read
                </Button>
            </HStack>
        </Stack>
    )
}

const LoadingSkeleton = () => {
    return (
        <Stack gap="1" pt="3" minH="72">
            {Array.from({ length: 4 }).map((_, i) => (
                <HStack key={i} px="4" py="3" alignItems="flex-start">
                    <Skeleton rounded="full" boxSize="6" />
                    <Stack flex="1" gap="1">
                        <Skeleton h="2.5" maxW="40%" />
                        <Skeleton h="2.5" maxW="80%" />
                        <Skeleton h="2.5" maxW="100%" />
                    </Stack>
                </HStack>
            ))}
        </Stack>
    )
}
