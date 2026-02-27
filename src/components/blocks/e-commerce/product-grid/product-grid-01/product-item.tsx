import {
    Box, FormatNumber, HStack, Span, Stack, Text
} from "@chakra-ui/react"
import { ProductColorPicker } from "./product-color-picker"
import type { Product } from "./types"

interface ProductItemProps {
    data: Product
}

export const ProductItem = (props: ProductItemProps) => {
    const { data } = props
    const productImage = data.images?.[0]?.src
    return (
        <Stack>
            <Box position="relative">
                <Box asChild w="full" objectFit="cover">
                    <img width="290" height="386" src={productImage} alt={data.title} />
                </Box>
                {data.on_sale && (
                    <Span
                        position="absolute"
                        bg="red.500"
                        color="white"
                        px="2"
                        py="1"
                        textStyle="xs"
                        fontWeight="bold"
                        top="2"
                        insetStart="2"
                    >
                        SALE
                    </Span>
                )}
            </Box>
            <Stack gap="1" px="4" py="4" bg="bg.panel">
                <HStack align="center" justify="space-between">
                    <Text textStyle="sm" fontWeight="semibold">
                        {data.title}
                    </Text>
                </HStack>
                <HStack justify="space-between">
                    <Span textStyle="sm" color="fg.muted" textDecoration={data.on_sale ? "line-through" : "none"}>
                        <FormatNumber
                            style="currency"
                            currency={data.currency}
                            value={Number(data.regular_price)}
                        />
                    </Span>
                    {data.on_sale && (
                        <Span textStyle="sm">
                            <FormatNumber
                                style="currency"
                                currency={data.currency}
                                value={Number(data.sale_price)}
                            />
                        </Span>
                    )}
                </HStack>

                <ProductColorPicker data={data} />
            </Stack>
        </Stack>
    )
}
