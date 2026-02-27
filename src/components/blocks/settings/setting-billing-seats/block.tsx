"use client"

import {
    Badge,
    Button,
    Card,
    Container,
    Heading,
    HStack,
    Progress,
    Stack,
    Text,
} from "@chakra-ui/react"
import { LuExternalLink } from "react-icons/lu"

export const Block = () => {
    return (
        <Container py="20" maxW="xl">
            <Card.Root size="sm">
                <Card.Header>
                    <Stack gap="1">
                        <Heading as="h2" textStyle="lg">
                            Seats
                        </Heading>
                        <Text color="fg.muted" textStyle="sm">
                            Manage your team seats and usage
                        </Text>
                    </Stack>
                </Card.Header>
                <Card.Body>
                    <Stack gap="6">
                        <HStack justify="space-between" align="center">
                            <Stack gap="1">
                                <Text fontWeight="medium">Standard Seats</Text>
                                <Text textStyle="xs" color="fg.muted">
                                    $15/month per seat
                                </Text>
                            </Stack>
                            <Badge size="lg" variant="solid" colorPalette="blue">
                                5 / 10 Used
                            </Badge>
                        </HStack>

                        <Stack gap="2">
                            <Progress.Root value={50} colorPalette="blue" size="sm">
                                <Progress.Track>
                                    <Progress.Range />
                                </Progress.Track>
                            </Progress.Root>
                            <HStack justify="space-between" textStyle="xs" color="fg.muted">
                                <Text>5 seats used</Text>
                                <Text>10 seats total</Text>
                            </HStack>
                        </Stack>

                        <Text textStyle="sm" color="fg.muted">
                            You have 5 seats remaining on your plan. Add more seats to invite more team members.
                        </Text>
                    </Stack>
                </Card.Body>
                <Card.Footer justifyContent="flex-end" pt="4">
                    <Button variant="outline" size="sm">
                        Manage seats <LuExternalLink />
                    </Button>
                </Card.Footer>
            </Card.Root>
        </Container>
    )
}
