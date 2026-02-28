import {
 Box, Button, FormatNumber, IconButton, Span, Stack, Text 
} from "@chakra-ui/react"
import { FiHeart } from "react-icons/fi"
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
        <Box asChild w="full" objectFit="cover" maxH="180px">
          <img width="290" height="300" src={productImage} alt={data.title} />
        </Box>
        <Span position="absolute" top="2" insetEnd="2" className="dark">
          <IconButton
            colorPalette="gray"
            size="xs"
            _hover={{ transform: "scale(1.1)" }}
            aria-label={`Add ${data.title} to your favourites`}
          >
            <FiHeart />
          </IconButton>
        </Span>
      </Box>

      <Stack pb="4" pt="1" gap="2" bg="bg.panel">
        <Text textStyle="sm" color="fg.muted">
          {data.title}
        </Text>
        <Span textStyle="sm">
          <FormatNumber
            style="currency"
            currency={data.currency}
            value={Number(data.regular_price)}
          />
        </Span>
        <Button my="2" colorPalette="gray" variant="outline" borderColor="colorPalette.emphasized">
          Choose Options
        </Button>
      </Stack>
    </Stack>
  )
}
