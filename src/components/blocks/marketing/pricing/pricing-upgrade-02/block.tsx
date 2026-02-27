import {
    Button,
    Card,
    Center,
    Circle,
    Container,
    Flex,
    For,
    Icon,
    Link,
    List,
    Span,
    Stack,
    VStack,
} from "@chakra-ui/react"
import { FaArrowUpRightDots } from "react-icons/fa6"
import { LuCheck } from "react-icons/lu"

export const Block = () => {
    return (
        <Container maxW="6xl" py={{ base: "12", md: "24" }}>
            <VStack>
                <Card.Root maxW="sm">
                    <Center bg="colorPalette.subtle" height="80px" />

                    <Card.Body>
                        <Stack gap="6" mt="-14">
                            <Circle size="60px" bg="colorPalette.solid" alignSelf="center">
                                <Icon fontSize="2xl" color="colorPalette.contrast">
                                    <FaArrowUpRightDots />
                                </Icon>
                            </Circle>
                            <Stack textAlign="center">
                                <Card.Title fontWeight="bold" textStyle="3xl">
                                    Upgrade to growth
                                </Card.Title>
                                <Card.Description minH="2lh" textStyle="md" maxW="xs" mx="auto">
                                    Unlimited flows and usage based pricing that scales with you.
                                </Card.Description>
                            </Stack>

                            <List.Root variant="plain" align="center" textStyle="sm" gap="3">
                                <For
                                    each={[
                                        "Advanced Analytics",
                                        "Automation Integrations",
                                        "Priority Support",
                                        "Increased Storage",
                                        "User Segmentation",
                                    ]}
                                >
                                    {(item) => (
                                        <List.Item alignItems="center" key={item}>
                                            <List.Indicator asChild color="colorPalette.solid">
                                                <LuCheck />
                                            </List.Indicator>
                                            <Span>{item}</Span>
                                        </List.Item>
                                    )}
                                </For>
                            </List.Root>

                            <Stack>
                                <Flex gap="1" align="flex-end">
                                    <Span textStyle="3xl" fontWeight="bold" lineHeight="1" letterSpacing="tight">
                                        $299
                                    </Span>
                                    <Span color="fg.muted" whiteSpace="nowrap">
                                        / month
                                    </Span>
                                </Flex>
                                <Span color="fg.muted">plus $0.10 for each additional MTU</Span>
                            </Stack>
                            <Stack gap="3">
                                <Button size="lg">Upgrade</Button>
                                <Link variant="plain" href="#" alignSelf="center" textStyle="sm">
                                    Got questions? Contact us
                                </Link>
                            </Stack>
                        </Stack>
                    </Card.Body>
                </Card.Root>
            </VStack>
        </Container>
    )
}
