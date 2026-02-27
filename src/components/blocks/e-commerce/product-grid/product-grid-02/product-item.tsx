import {
 Badge, Flex, FormatNumber, HStack, Span, Stack, Text 
} from "@chakra-ui/react"
import { ProductColorPicker } from "./product-color-picker"
import { ProductImage } from "./product-image"
import type { Product } from "./types"

interface ProductItemProps {
    data: Product
}

export const ProductItem = (props: ProductItemProps) => {
    const { data } = props

    return (
        <Stack gap="2" className="group">
            <ProductImage data={data} />
            <Stack gap="1" pt="1">
                <HStack align="center" justify="space-between">
                    <Text textStyle="sm" fontWeight="semibold">
                        {data.title}
                    </Text>
                    <Span textStyle="sm" fontWeight="semibold">
                        <FormatNumber
                            style="currency"
                            currency={data.currency}
                            value={Number(data.sale_price)}
                        />
                    </Span>
                </HStack>
                <Flex justify="space-between" align="center">
                    <Text textStyle="xs" color="fg.muted">
                        {data.short_description}
                    </Text>
                </Flex>
                <HStack pt="2">
                    {data.highlights?.map((highlight) => (
                        <Badge key={highlight} size="sm" variant="surface" colorPalette="gray">
                            {highlight}
                        </Badge>
                    ))}
                    <ProductColorPicker data={data} />
                </HStack>
            </Stack>
        </Stack>
    )
}
