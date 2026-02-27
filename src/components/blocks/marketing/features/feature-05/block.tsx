import {
    Box, Image as ChakraImage, Container, Flex, HStack, Icon, Stack
} from "@chakra-ui/react"
import {
    LuChartBar, LuFile, LuShare2
} from "react-icons/lu"
import { SectionHeader } from "./section-header"

const description = "We provide the best tools to help you build your product. " +
    "Our features are designed to make your life easier."

export const Block = () => {
    return (
        <Container maxW="6xl">
            <Flex direction={{ base: "column", md: "row" }} gap={{ base: "8", md: "20" }}>
                <Stack gap="6" pt="2" flex="1">
                    <SectionHeader
                        tagline="File Management"
                        headline="Create, manage, and share files"
                        description={description}
                    />
                    <Stack gap={{ base: "4", md: "6" }}>
                        {features.map((feature) => (
                            <HStack key={feature.title}>
                                <Icon>{feature.icon}</Icon>
                                {feature.title}
                            </HStack>
                        ))}
                    </Stack>
                </Stack>

                <Box flex="1" w="full">
                    <ChakraImage
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                        alt="Task management"
                        objectFit="cover"
                        minH={{ base: "xs", md: "sm" }}
                        rounded="lg"
                        w="full"
                    />
                </Box>
            </Flex>
        </Container>
    )
}

const features = [
    {
        icon: <LuFile />,
        title: "Create with ease.",
    },
    {
        icon: <LuChartBar />,
        title: "Track engagement.",
    },
    {
        icon: <LuShare2 />,
        title: "Share and collaborate.",
    },
]
