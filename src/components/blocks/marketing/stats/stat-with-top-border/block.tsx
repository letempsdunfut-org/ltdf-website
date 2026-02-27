import {
 Container, Heading, SimpleGrid, Stack, Text 
} from "@chakra-ui/react"

export const Block = () => {
    return (
        <Container py="16" maxW="5xl">
            <Stack gap="16">
                <Stack gap="4" maxW="2xl">
                    <Heading as="h2" textStyle={{ base: "3xl", md: "4xl" }}>
                        LogoIpsum powers innovative companies
                    </Heading>

                    <Text color="fg.muted" textStyle={{ base: "md", md: "lg" }}>
                        Our SaaS platform empowers businesses with robust analytics, seamless integrations, and
                        enterprise-grade security.
                    </Text>
                </Stack>
                <SimpleGrid columns={{ base: 2, md: 4 }} gap="8">
                    {data.map((item) => (
                        <Stack
                            gap="1"
                            py="4"
                            borderTopWidth="2px"
                            borderTopColor="colorPalette.fg"
                            key={item.label}
                        >
                            <Text
                                textStyle={{ base: "4xl", md: "5xl" }}
                                fontWeight="medium"
                                color="colorPalette.fg"
                            >
                                {item.value}
                            </Text>
                            <Text>{item.label}</Text>
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
        label: "system uptime on average",
    },
    {
        value: "20 hours",
        label: "deployment time savings",
    },
    {
        value: "4B+",
        label: "data processed per day",
    },
    {
        value: "120k",
        label: "daily active users",
    },
]
