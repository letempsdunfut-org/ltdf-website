import {
    Container, Flex, SimpleGrid, Stack, Text
} from "@chakra-ui/react"
import { SectionHeader } from "./section-header"

const description = "Our SaaS platform delivers enterprise-grade performance and reliability, " +
    "helping businesses scale with confidence and achieve measurable results."

export const Block = () => {
    return (
        <Container py="16">
            <Flex gap={{ base: "10", md: "20" }} direction={{ base: "column", md: "row" }}>
                <SectionHeader
                    flex="1"
                    maxW="xl"
                    headline="Performance Metrics"
                    description={description}
                />
                <SimpleGrid columns={2} gap="8" flex="1">
                    {data.map((item) => (
                        <Stack gap="0" pb="4" borderBottomWidth="1px" key={item.label}>
                            <Text textStyle="4xl" fontWeight="semibold">
                                {item.value}
                            </Text>
                            <Text>{item.label}</Text>
                        </Stack>
                    ))}
                </SimpleGrid>
            </Flex>
        </Container>
    )
}

const data = [
    {
        value: "99.9%",
        label: "System Uptime",
    },
    {
        value: "95%",
        label: "Customer Satisfaction",
    },
    {
        value: "4B+",
        label: "Data Processed",
    },
    {
        value: "72%",
        label: "Revenue Growth",
    },
    {
        value: "24/7",
        label: "Customer Support",
    },
    {
        value: "50+",
        label: "Global Partners",
    },
]
