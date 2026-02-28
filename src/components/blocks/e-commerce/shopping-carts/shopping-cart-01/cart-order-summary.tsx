import {
    Button, FormatNumber, Heading, HStack, Link, Stack, Text
} from "@chakra-ui/react"
import type { CartData } from "./types"

interface CartOrderSummaryProps {
    data: CartData
}

export const CartOrderSummary = (props: CartOrderSummaryProps) => {
    const { data } = props
    return (
        <Stack gap="8" width="full" bg="bg.panel" p="8" borderWidth="1px" rounded="lg">
            <Heading size="md">Order Summary</Heading>

            <Stack gap="4">
                <HStack justify="space-between">
                    <Text color="fg.muted">Subtotal</Text>
                    <Text fontWeight="medium">
                        <FormatNumber value={data.items_subtotal_price} style="currency" currency={data.currency} />
                    </Text>
                </HStack>

                <HStack justify="space-between">
                    <Text color="fg.muted">Shipping + Tax</Text>
                    <Link variant="underline" color="fg.muted" textStyle="sm">
                        Calculate shipping
                    </Link>
                </HStack>

                <HStack justify="space-between" pt="4" borderTopWidth="1px">
                    <Text fontWeight="semibold">Total</Text>
                    <Text fontWeight="semibold">
                        <FormatNumber value={data.items_subtotal_price} style="currency" currency={data.currency} />
                    </Text>
                </HStack>
            </Stack>

            <Button size="lg" width="full">
                Checkout
            </Button>
        </Stack>
    )
}
