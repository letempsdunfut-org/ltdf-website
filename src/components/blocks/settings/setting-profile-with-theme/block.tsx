"use client"

import {
 Button, Container, Heading, HStack, Stack, Text
} from "@chakra-ui/react"
import {
 LuMonitor, LuMoon, LuSun
} from "react-icons/lu"
import {
 RadioCardItem, RadioCardRoot
} from "@/components/ui/radio-card"

export const Block = () => {
    return (
        <Container py="20" maxW="xl">
            <Stack gap="8">
                <Stack gap="1">
                    <Heading as="h2" textStyle="xl">
                        Appearance
                    </Heading>
                    <Text color="fg.muted">Customize how the app looks on your device.</Text>
                </Stack>

                <Stack gap="4">
                    <Text fontWeight="medium">Theme</Text>
                    <RadioCardRoot defaultValue="system" gap="4" flexDirection="row">
                        <RadioCardItem
                            value="light"
                            label="Light"
                            icon={<LuSun fontSize="1.25em" />}
                            indicator={false}
                            flex="1"
                            p="4"
                            textAlign="center"
                            cursor="pointer"
                        >
                            <Stack align="center" gap="3" width="full">
                                <LuSun fontSize="1.5em" />
                                <Text fontWeight="medium">Light</Text>
                            </Stack>
                        </RadioCardItem>
                        <RadioCardItem
                            value="dark"
                            label="Dark"
                            indicator={false}
                            flex="1"
                            p="4"
                            textAlign="center"
                            cursor="pointer"
                        >
                            <Stack align="center" gap="3" width="full">
                                <LuMoon fontSize="1.5em" />
                                <Text fontWeight="medium">Dark</Text>
                            </Stack>
                        </RadioCardItem>
                        <RadioCardItem
                            value="system"
                            label="System"
                            indicator={false}
                            flex="1"
                            p="4"
                            textAlign="center"
                            cursor="pointer"
                        >
                            <Stack align="center" gap="3" width="full">
                                <LuMonitor fontSize="1.5em" />
                                <Text fontWeight="medium">System</Text>
                            </Stack>
                        </RadioCardItem>
                    </RadioCardRoot>
                </Stack>

                <HStack justify="flex-end">
                    <Button>Save Preference</Button>
                </HStack>
            </Stack>
        </Container>
    )
}
