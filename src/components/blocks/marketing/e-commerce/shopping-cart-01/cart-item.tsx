import {
 Flex, FormatNumber, HStack, Image, Link, Span, Stack, Text 
} from "@chakra-ui/react"
import { LuGift } from "react-icons/lu"
import { QuantitySelect } from "./quantity-select"
import type { CartItemData } from "./types"

interface CartItemProps {
    data: CartItemData
}

export const CartItem = (props: CartItemProps) => {
    const { data } = props

    return (
        <Flex justify="space-between" align={{ base: "center", md: "flex-start" }} direction={{ base: "column", md: "row" }} gap="4">
            <Flex gap="4" flex="1" direction={{ base: "column", sm: "row" }} align="center">
                <Image asChild width="120px" height="120px" flexShrink={0} fit="cover" rounded="l2">
                    <img src={data.image} alt={data.title} loading="lazy" />
                </Image>

                <Stack gap="1">
                    <Text fontWeight="medium">{data.title}</Text>
                    {data.variants && (
                        <Text color="fg.muted" textStyle="sm">
                            {data.variants.map((variant) => `${variant.title}: ${variant.value}`).join(", ")}
                        </Text>
                    )}
                    {data.gift_wrapping && (
                        <HStack color="fg.muted" textStyle="sm">
                            <LuGift />
                            <Span>Gift wrapping</Span>
                        </HStack>
                    )}
                    <Link variant="underline" colorPalette="red" textStyle="sm">Delete</Link>
                </Stack>
            </Flex>

            <Flex direction={{ base: "row", md: "column" }} align={{ base: "center", md: "flex-end" }} gap="4">
                <Span fontWeight="semibold">
                    <FormatNumber
                        value={data.price}
                        style="currency"
                        currency={data.currency}
                    />
                </Span>
                <QuantitySelect value={data.quantity} />
            </Flex>
        </Flex>
    )
}
