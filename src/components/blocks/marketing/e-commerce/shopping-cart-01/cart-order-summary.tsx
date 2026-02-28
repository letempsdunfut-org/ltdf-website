import {
    Button, Card, FormatNumber, Heading, HStack, Link, Separator, Text
} from "@chakra-ui/react"
import { LuArrowRight } from "react-icons/lu"
import type { CartData } from "./types"

interface CartOrderSummaryProps {
    data: CartData
}

export const CartOrderSummary = (props: CartOrderSummaryProps) => {
    const { data } = props
    return (
        <Card.Root width="full">
            <Card.Header>
                <Heading size="md">Order Summary</Heading>
            </Card.Header>
            <Card.Body gap="4">
                <HStack justify="space-between" textStyle="sm">
                    <Text color="fg.muted">Subtotal</Text>
                    <FormatNumber value={data.subtotal} style="currency" currency={data.currency} />
                </HStack>
                <HStack justify="space-between" textStyle="sm">
                    <Text color="fg.muted">Shipping + Tax</Text>
                    <Link variant="underline">Calculate shipping</Link>
                </HStack>
                <Separator />
                <HStack justify="space-between" fontWeight="semibold">
                    <Text>Total</Text>
                    <FormatNumber value={data.total} style="currency" currency={data.currency} />
                </HStack>
                <Button size="lg" width="full">
                    Checkout <LuArrowRight />
                </Button>
            </Card.Body>
        </Card.Root>
    )
}
