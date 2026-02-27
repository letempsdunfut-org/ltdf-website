"use client"

import {
    Badge,
    Button,
    Card,
    Container,
    Heading,
    HStack,
    Icon,
    Stack,
    Text,
} from "@chakra-ui/react"
import Image from "next/image"
import { LuCheck, LuExternalLink } from "react-icons/lu"



export const Block = () => {
    return (
        <Container py="20" maxW="xl">
            <Stack gap="6">
                <Stack gap="1">
                    <Heading as="h2" textStyle="lg">
                        Billing
                    </Heading>
                    <Text color="fg.muted">Manage your billing information and view your invoices</Text>
                </Stack>

                <Card.Root size="sm">
                    <Card.Header>
                        <HStack justify="space-between">
                            <Heading as="h3" textStyle="sm">
                                Current Plan
                            </Heading>
                            <Badge colorPalette="green" variant="surface">
                                <Icon fontSize="sm">
                                    <LuCheck />
                                </Icon>
                                Active
                            </Badge>
                        </HStack>
                    </Card.Header>
                    <Card.Body>
                        <Stack gap="4">
                            <Stack gap="1">
                                <Text textStyle="2xl" fontWeight="semibold">
                                    Premium Plan
                                </Text>
                                <Text color="fg.muted">
                                    Billed monthly. Next payment on <Text as="span" color="fg">Feb 14, 2024</Text>
                                </Text>
                            </Stack>
                            <Text textStyle="sm" color="fg.muted">
                                You are currently on the Premium plan. You can upgrade or downgrade your plan at any
                                time.
                            </Text>
                        </Stack>
                    </Card.Body>
                    <Card.Footer justifyContent="flex-end">
                        <Button variant="outline" size="sm">
                            Manage subscription <LuExternalLink />
                        </Button>
                    </Card.Footer>
                </Card.Root>

                <Card.Root size="sm">
                    <Card.Header>
                        <Heading as="h3" textStyle="sm">
                            Payment Method
                        </Heading>
                    </Card.Header>
                    <Card.Body>
                        <HStack justify="space-between">
                            <HStack gap="3">
                                <Icon fontSize="xl" color="fg.muted">
                                    <Image
                                        src="/images/credit-card-icon.png"
                                        alt="Credit Card"
                                        width={32}
                                        height={32}
                                    />
                                </Icon>
                                <Stack gap="0">
                                    <Text textStyle="sm" fontWeight="medium">
                                        Visa ending in 4242
                                    </Text>
                                    <Text textStyle="xs" color="fg.muted">
                                        Expires 04/2026
                                    </Text>
                                </Stack>
                            </HStack>
                            <Button variant="ghost" size="xs">
                                Edit
                            </Button>
                        </HStack>
                    </Card.Body>
                </Card.Root>
            </Stack>
        </Container>
    )
}
