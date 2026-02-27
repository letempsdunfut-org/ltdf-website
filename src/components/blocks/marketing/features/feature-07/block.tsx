"use client"

import {
    Box, Image as ChakraImage, Container, HStack, Icon, Stack, Tabs, Text, VStack
} from "@chakra-ui/react"
import {
    LuChartBar, LuFile, LuShare2
} from "react-icons/lu"
import { TimerProgress } from "./progress"
import { SectionHeader } from "./section-header"
import { useTimedState } from "./use-timed-state"

const description = "Experience the power of our platform with these amazing features. " +
    "Designed to help you scale and grow your business."

export const Block = () => {
    const [selected, setSelected] = useTimedState({
        defaultValue: features[0].value,
        timeout: 5000,
        values: features.map((feature) => feature.value),
    })

    return (
        <Container maxW="6xl">
            <VStack gap={{ base: "8", md: "20" }}>
                <Stack gap={{ base: "10", md: "20" }} flex="1">
                    <SectionHeader
                        textAlign={{ base: "start", md: "center" }}
                        align="center"
                        headline="Create, manage, and share files"
                        description={description}
                    />
                    <Tabs.Root
                        hideBelow="md"
                        size="lg"
                        variant="subtle"
                        value={selected}
                        onValueChange={(e) => setSelected(e.value)}
                    >
                        <Tabs.List gap="4">
                            {features.map((feature) => (
                                <Tabs.Trigger
                                    key={feature.title}
                                    value={feature.value}
                                    flex="1"
                                    h="auto"
                                    p="5"
                                    rounded="l2"
                                    textAlign="start"
                                >
                                    <Stack>
                                        <HStack fontWeight="semibold">
                                            <Icon size="md">{feature.icon}</Icon>
                                            {feature.title}
                                        </HStack>
                                        <Text color="muted" fontWeight="normal">
                                            {feature.description}
                                        </Text>
                                    </Stack>
                                    <TimerProgress selected={selected === feature.value} />
                                </Tabs.Trigger>
                            ))}
                        </Tabs.List>
                    </Tabs.Root>
                </Stack>
                <Box flex="1" w="full" hideBelow="md">
                    {features.find((feature) => feature.value === selected)?.image}
                </Box>

                <Stack gap="10" hideFrom="md">
                    {features.map((feature) => (
                        <Stack key={feature.title} gap="4">
                            <HStack fontWeight="semibold">
                                <Icon size="md" color="colorPalette.solid">
                                    {feature.icon}
                                </Icon>
                                {feature.title}
                            </HStack>
                            <Text color="muted">{feature.description}</Text>
                            <Box>{feature.image}</Box>
                        </Stack>
                    ))}
                </Stack>
            </VStack>
        </Container>
    )
}

const features = [
    {
        value: "create-with-ease",
        icon: <LuFile />,
        title: "Create with ease",
        description: "Streamline your workflow with our intuitive file management system.",
        url: "#",
        image: (
            <ChakraImage
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1000"
                alt="Create with ease"
                objectFit="cover"
                minH="sm"
                rounded="lg"
                w="full"
            />
        ),
    },
    {
        value: "track-engagement",
        icon: <LuChartBar />,
        title: "Track engagement",
        description: "Monitor file engagement, downloads, and team collaboration.",
        url: "#",
        image: (
            <ChakraImage
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                alt="Track engagement"
                objectFit="cover"
                minH="sm"
                rounded="lg"
                w="full"
            />
        ),
    },
    {
        value: "share-and-collaborate",
        icon: <LuShare2 />,
        title: "Share and collaborate",
        description: "Generate secure sharing links, set permissions, and work together.",
        url: "#",
        image: (
            <ChakraImage
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
                alt="Share and collaborate"
                objectFit="cover"
                minH="sm"
                rounded="lg"
                w="full"
            />
        ),
    },
]
