import {
 Container, Flex, Icon, SimpleGrid, Stack, Text, VStack 
} from "@chakra-ui/react"
import {
 LuArrowUpRight, LuChartBar, LuChartLine 
} from "react-icons/lu"
import { SectionHeader } from "./section-header"

export const Block = () => {
    return (
        <Container py="16" maxW="5xl">
            <VStack gap="12">
                <SectionHeader
                    textAlign="center"
                    headline="Enterprise customer results"
                    description="We empower businesses with robust analytics, seamless integrations"
                />
                <SimpleGrid columns={{ base: 1, lg: 3 }} gap="4" alignSelf="stretch">
                    {data.map((item) => (
                        <Stack key={item.label} gap="2" padding="6" bg="bg.muted" borderRadius="l3">
                            <Text textStyle="5xl" fontWeight="semibold" color="colorPalette.fg">
                                {item.value}
                            </Text>
                            <Flex align="flex-end" justify="space-between" flex="1">
                                <Text whiteSpace="nowrap">{item.label}</Text>
                                <Icon
                                    boxSize={{ base: "2rem", md: "4rem" }}
                                    color="colorPalette.fg"
                                    pos="relative"
                                    top="2"
                                >
                                    {item.icon}
                                </Icon>
                            </Flex>
                        </Stack>
                    ))}
                </SimpleGrid>
            </VStack>
        </Container>
    )
}

const data = [
    {
        value: "20x",
        label: "Increase in revenue",
        icon: <LuChartBar />,
    },
    {
        value: "400%",
        label: "Increase in transactions",
        icon: <LuChartLine />,
    },
    {
        value: "4.8x",
        label: "Increase in SEO traffic",
        icon: <LuArrowUpRight />,
    },
]
