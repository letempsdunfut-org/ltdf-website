import {
    Flex, FormatNumber, HStack, Image, Link, Stack, Text
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
        <Flex justify="space-between" align="flex-start">
            <Flex gap="8">
                <Image asChild width="120px" height="120px" flexShrink={0} fit="cover">
                    <img src={data.image} alt={data.title} loading="lazy" />
                </Image>

                <Stack flex="1">
                    <Stack gap="1">
                        <Text fontWeight="medium">{data.title}</Text>
                        {data.variants && (
                            <Text color="fg.muted" textStyle="sm">
                                {data.variants.map((variant) => variant.value).join(", ")}
                            </Text>
                        )}
                        <HStack align="center" gap="1" color="fg.muted" textStyle="sm">
                            <LuGift />
                            <Link variant="underline" color="fg.muted">
                                Add gift wrapping
                            </Link>
                        </HStack>
                    </Stack>

                    <QuantitySelect value={data.quantity} />
                </Stack>
            </Flex>

            <Text fontWeight="medium">
                <FormatNumber value={data.price} style="currency" currency={data.currency} />
            </Text>
        </Flex>
    )
}
