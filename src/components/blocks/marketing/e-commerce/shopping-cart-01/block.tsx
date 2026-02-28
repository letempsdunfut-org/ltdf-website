import {
 Container, Heading, Link, Stack 
} from "@chakra-ui/react"
import { LuArrowRight } from "react-icons/lu"
import { CartItem } from "./cart-item"
import { CartOrderSummary } from "./cart-order-summary"
import { data } from "./data"

export const Block = () => (
    <Container maxW="7xl" py={{
 base: "6", md: "8", lg: "12" 
}}>
        <Stack
            direction={{ base: "column", lg: "row" }}
            align={{ lg: "flex-start" }}
            gap={{ base: "8", md: "16" }}
        >
            <Stack gap={{ base: "8", md: "10" }} flex="2">
                <Heading size="2xl">Shopping Cart ({data.item_count} items)</Heading>

                <Stack gap="6">
                    {data.items.map((item) => (
                        <CartItem key={item.id} data={item} />
                    ))}
                </Stack>
            </Stack>

            <Stack gap="10" pt="2" align="flex-end" flex="1">
                <Link textStyle="sm" hideBelow="md">
                    Continue shopping <LuArrowRight />
                </Link>
                <CartOrderSummary data={data} />
            </Stack>
        </Stack>
    </Container>
)
