"use client"

import {
    Button,
    Card,
    Container,
    Heading,
    HStack,
    Progress,
    Separator,
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
                            Usage & Limits
                        </Heading>
                        <Text color="fg.muted" textStyle="sm">
                            Monitor your resource usage
                        </Text>
                    </Stack>
                </Card.Header>
                <Card.Body>
                    <Stack gap="6" separator={<Separator />}>
                        <UsageItem
                            label="Bandwidth"
                            value={120}
                            limit={500}
                            unit="GB"
                            description="Monthly bandwidth allowance"
                        />
                        <UsageItem
                            label="Storage"
                            value={8.5}
                            limit={10}
                            unit="GB"
                            description="Total cloud storage space"
                            critical={8.5 / 10 > 0.8}
                        />
                        <UsageItem
                            label="API Requests"
                            value={450}
                            limit={1000}
                            unit="k"
                            description="Monthly API calls"
                        />
                    </Stack>
                </Card.Body>
                <Card.Footer justifyContent="flex-end" pt="4">
                    <Button variant="outline" size="sm">
                        Upgrade plan <LuExternalLink />
                    </Button>
                </Card.Footer>
            </Card.Root>
        </Container>
    )
}

interface UsageItemProps {
    label: string
    value: number
    limit: number
    unit: string
    description?: string
    critical?: boolean
}

const UsageItem = (props: UsageItemProps) => {
    const {
 label, value, limit, unit, description, critical 
} = props
    const percentage = (value / limit) * 100

    return (
        <Stack gap="3">
            <HStack justify="space-between">
                <Stack gap="0.5">
                    <Text fontWeight="medium" textStyle="sm">{label}</Text>
                    {description && (
                        <Text textStyle="xs" color="fg.muted">
                            {description}
                        </Text>
                    )}
                </Stack>
                <Text textStyle="sm" fontWeight="medium" color="fg.muted">
                    {value} / {limit} {unit}
                </Text>
            </HStack>

            <Progress.Root value={percentage} colorPalette={critical ? "red" : "blue"} size="sm">
                <Progress.Track>
                    <Progress.Range />
                </Progress.Track>
            </Progress.Root>
        </Stack>
    )
}
