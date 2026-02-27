import {
    Button,
    Card,
    Container,
    For,
    Heading,
    SimpleGrid,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react"
import { LuPhone } from "react-icons/lu"
import { plans } from "./data"
import { PricingCard } from "./pricing-card"

export const Block = () => {
    return (
        <Container maxW="6xl" py={{ base: "12", md: "24" }}>
            <VStack gap="16">
                <VStack maxW="xl" mx="auto" gap="4" textAlign="center">
                    <Heading as="h2" size={{ base: "4xl", md: "5xl" }}>
                        Simple, transparent pricing
                    </Heading>
                    <Text color="fg.muted" maxW="lg" textStyle="lg">
                        Our features are available on a pay-as-you-go basis. Choose the plan that best fits your
                        needs.
                    </Text>
                </VStack>

                <VStack gap="20">
                    <SimpleGrid w="full" columns={{ base: 1, md: 3 }} gap="6">
                        <For each={plans}>{(plan) => <PricingCard key={plan.value} data={plan} />}</For>
                    </SimpleGrid>
                    <Card.Root variant="outline" maxW="2xl" mx="auto">
                        <Card.Body
                            gap="3"
                            flexDirection={{ base: "column", md: "row" }}
                            alignItems={{ md: "center" }}
                            justifyContent="space-between"
                        >
                            <Stack maxW="xs" gap="1">
                                <Card.Title>Need a custom plan?</Card.Title>
                                <Card.Description>
                                    We offer custom pricing for enterprise customers. Talk to us about your needs.
                                </Card.Description>
                            </Stack>
                            <Button>
                                <LuPhone />
                                Talk to sales
                            </Button>
                        </Card.Body>
                    </Card.Root>
                </VStack>
            </VStack>
        </Container>
    )
}
