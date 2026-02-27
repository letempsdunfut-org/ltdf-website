import {
 Badge, FormatNumber, HStack, Image, Span, Stack 
} from "@chakra-ui/react"
import { Rating } from "@/components/ui/rating"
import { ProductColorPicker } from "./product-color-picker"
import type { Product } from "./types"

interface ProductItemProps {
    data: Product
}

export const ProductItem = (props: ProductItemProps) => {
    const { data } = props
    return (
        <Stack gap="4" p="4" _hover={{ shadow: "sm" }} transition="all 0.2s" rounded="l2">
            <Image
                src={data.images[0].src}
                alt={data.title}
                aspectRatio="3/4"
                objectFit="cover"
                rounded="l2"
            />
            <Stack gap="2">
                <HStack justify="space-between" align="start">
                    <Span fontWeight="medium" lineClamp="1">
                        {data.title}
                    </Span>
                    {data.on_sale && <Badge colorPalette="red">Sale</Badge>}
                </HStack>
                <Rating defaultValue={data.average_rating} size="sm" readOnly />
                <HStack gap="2">
                    <Span fontWeight="bold" textStyle="lg">
                        <FormatNumber
                            style="currency"
                            currency={data.currency}
                            value={Number(data.regular_price)}
                        />
                    </Span>
                    {data.on_sale && (
                        <Span textStyle="sm" textDecoration="line-through" color="fg.muted">
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
