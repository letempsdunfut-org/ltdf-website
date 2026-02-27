import {
 Container, Flex, Heading, SimpleGrid, Stack, Text 
} from "@chakra-ui/react"

export const Block = () => {
    return (
        <Container py="16" maxW="6xl">
            <Stack gap="12">
                <Flex direction={{ base: "column", md: "row" }} gap={{ base: "4", md: "5" }}>
                    <Heading as="h2" textStyle={{ base: "3xl", md: "4xl" }} flex="1" maxW={{ md: "lg" }}>
                        LogoIpsum powers the world's most innovative companies
                    </Heading>

                    <Text color="fg.muted" textStyle={{ base: "md", md: "lg" }} flex="1" pt="1">
                        Our SaaS platform empowers businesses with robust analytics, seamless integrations, and
                        enterprise-grade security. We help organizations streamline operations.
                    </Text>
                </Flex>
                <SimpleGrid columns={2} gap="8" flex="1">
                    {data.map((item) => (
                        <Stack gap="0" px="4" borderStartWidth="1px" key={item.label}>
                            <Text textStyle={{ base: "4xl", md: "5xl" }} fontWeight="medium">
                                {item.value}
                            </Text>
                            <Text color="fg.muted">{item.label}</Text>
                        </Stack>
                    ))}
                </SimpleGrid>
            </Stack>
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
]
