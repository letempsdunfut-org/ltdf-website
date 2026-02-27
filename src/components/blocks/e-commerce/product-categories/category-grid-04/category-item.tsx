import {
    Box,
    Flex,
    FormatNumber,
    Image,
    Span,
    Stack,
    type StackProps,
} from "@chakra-ui/react"
import type { CategoryItemData } from "./data"

interface CategoryItemProps extends StackProps {
    data: CategoryItemData
}

export const CategoryItem = (props: CategoryItemProps) => {
    const { data, ...rest } = props
    return (
        <Stack bg="bg.muted" gap="1" {...rest}>
            <Image draggable={false} src={data.src} boxSize="full" objectFit="cover" alt={data.title} />
            <Flex padding="3" textStyle="sm" align="flex-start">
                <Stack gap="0" flex="1">
                    <Box fontWeight="medium">{data.title}</Box>
                    <Box color="fg.muted">{data.description}</Box>
                </Stack>
                <Stack gap="0" align="flex-end">
                    <FormatNumber value={data.price} style="currency" currency={data.currency} />
                    {data.priceOverride && (
                        <Span textDecoration="line-through" color="fg.muted">
                            <FormatNumber value={data.priceOverride} style="currency" currency={data.currency} />
                        </Span>
                    )}
                </Stack>
            </Flex>
        </Stack>
    )
}
