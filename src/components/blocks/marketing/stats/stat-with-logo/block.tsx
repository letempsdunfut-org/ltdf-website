import {
 Box, Container, SimpleGrid, Span, Stack, Text 
} from "@chakra-ui/react"
import {
 Logo1, Logo2, Logo3, Logo4 
} from "./logo-ipsum"
import { SectionHeader } from "./section-header"

export const Block = () => {
    return (
        <Container py="16" maxW="4xl">
            <SectionHeader gap="10" tagline="How we do" headline="We deliver incredible results">
                <SimpleGrid columns={{ base: 2, md: 4 }} gap="4">
                    {data.map((item) => (
                        <Stack key={item.label} gap="6">
                            <Text textStyle="xl">
                                <Span fontWeight="semibold">{item.value} </Span>
                                <Span color="fg.muted">{item.label}</Span>
                            </Text>
                            <Box _icon={{ h: "7" }}>{item.logo}</Box>
                        </Stack>
                    ))}
                </SimpleGrid>
            </SectionHeader>
        </Container>
    )
}

const data = [
    {
        value: "10 days",
        label: "average order value",
        logo: <Logo1 />,
    },
    {
        value: "80%",
        label: "faster delivery speed",
        logo: <Logo2 />,
    },
    {
        value: "400%",
        label: "sales growth rate",
        logo: <Logo3 />,
    },
    {
        value: "10x",
        label: "customer retention",
        logo: <Logo4 />,
    },
]
