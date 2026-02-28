import {
 Badge, Box, Flex, FormatNumber, HStack, RatingGroup, Span, Stack, Text 
} from "@chakra-ui/react"
import type { Product } from "./types"

interface ProductItemProps {
    data: Product
}

export const ProductItem = (props: ProductItemProps) => {
    const { data } = props
    const productImage = data.images?.[0]?.src

    return (
        <Stack borderWidth="1px">
            <Box position="relative">
                <Box asChild w="full" objectFit="cover" maxH="420px">
                    <img width="290" height="386" src={productImage} alt={data.title} />
                </Box>
                <Stack align="flex-end" position="absolute" top="2" insetEnd="2" gap="1.5" className="dark">
                    {data.highlights?.map((highlight) => (
                        <Badge key={highlight} size="sm" variant="solid" colorPalette="gray" rounded="0">
                            {highlight}
                        </Badge>
                    ))}
                </Stack>
            </Box>
            <Stack px="4" pb="4" pt="1" gap="1" bg="bg.panel">
                <HStack align="center" justify="space-between">
                    <HStack gap="1">
                        <RatingGroup.Root disabled allowHalf size="xs" value={data.average_rating} count={5}>
                            <RatingGroup.HiddenInput />
                            <RatingGroup.Control />
                        </RatingGroup.Root>
                        <Text textStyle="xs" color="fg.muted">
                            ({data.rating_count})
                        </Text>
                    </HStack>
                    <Span textStyle="sm" fontWeight="semibold">
                        <FormatNumber
                            style="currency"
                            currency={data.currency}
                            value={Number(data.regular_price)}
                        />
                    </Span>
                </HStack>
                <Flex justify="space-between">
                    <Box>
                        <Text textStyle="sm" fontWeight="semibold">
                            {data.title}
                        </Text>
                        <Text textStyle="xs" color="fg.muted">
                            {data.short_description}
                        </Text>
                    </Box>
                </Flex>
            </Stack>
        </Stack>
    )
}
