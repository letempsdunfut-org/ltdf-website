import {
 Badge, Box, FormatNumber, HStack, IconButton, Span, Stack, Text 
} from "@chakra-ui/react"
import { LuHeart } from "react-icons/lu"
import type { Product } from "./types"

interface ProductItemProps {
  data: Product
}

export const ProductItem = (props: ProductItemProps) => {
  const { data } = props
  const image = data.images?.[0]?.src
  const colorVariant = data.variants?.find((variant) => variant.title === "Color")

  return (
    <Stack gap="4">
      <Box position="relative">
        <Box asChild w="full" objectFit="cover" height="420px">
          <img draggable={false} width="290" height="386" src={image} alt={data.title} />
        </Box>
        <Stack align="flex-end" position="absolute" bottom="2" insetStart="2" gap="1.5">
          {data.highlights?.map((highlight) => (
            <Badge key={highlight} variant="solid" size="lg" rounded="0">
              {highlight}
            </Badge>
          ))}
        </Stack>
        <Span position="absolute" top="2" insetEnd="2" className="dark">
          <IconButton colorPalette="gray" size="xs" aria-label="Add to wishlist">
            <LuHeart />
          </IconButton>
        </Span>
      </Box>

      <Text textStyle="sm">{data.title}</Text>

      <Stack gap="1">
        <HStack>
          <Span
            color={data.on_sale ? "fg.muted" : "fg"}
            fontWeight={data.on_sale ? "normal" : "semibold"}
            textDecoration={data.on_sale ? "line-through" : undefined}
          >
            <FormatNumber
              style="currency"
              currency={data.currency}
              value={Number(data.regular_price)}
            />
          </Span>
          {data.on_sale && (
            <Span fontWeight="semibold">
              <FormatNumber
                style="currency"
                currency={data.currency}
                value={Number(data.sale_price)}
              />
            </Span>
          )}
        </HStack>

        {colorVariant && (
          <Text textStyle="sm" color="fg.muted">
            {colorVariant?.options?.length} colors
          </Text>
        )}
      </Stack>
    </Stack>
  )
}
