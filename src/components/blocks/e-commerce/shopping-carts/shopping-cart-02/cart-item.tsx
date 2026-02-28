import {
  Box,
  Flex,
  type FlexProps,
  FormatNumber,
  HStack,
  Image,
  Link,
  NativeSelect,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import { HiCheckCircle } from "react-icons/hi"
import type { CartItemData } from "./types"

interface CartItemProps extends FlexProps {
  data: CartItemData
}

export const CartItem = (props: CartItemProps) => {
  const { data } = props
  return (
    <SimpleGrid columns={{ base: 6, md: 12 }} gap="4">
      <Flex gridColumn="span 4" gap="4">
        <Image asChild width="120px" height="120px" flexShrink={0} fit="cover" rounded="sm">
          <img src={data.image} alt={data.title} loading="lazy" />
        </Image>

        <Box>
          <Stack align="flex-start">
            <Text fontWeight="medium" lineClamp={1}>
              {data.title}
            </Text>

            {data.sku && (
              <Text color="fg.muted" textStyle="sm" hideBelow="md">
                {data.sku}
              </Text>
            )}

            {data.variants && (
              <Stack gap="1" textStyle="sm" hideFrom="md">
                {data.variants.map((variant) => (
                  <Text color="fg.muted" key={variant.title}>
                    {variant.title}: {variant.value}
                  </Text>
                ))}
              </Stack>
            )}

            {data.available && (
              <HStack gap="1" color="colorPalette.fg" textStyle="sm" fontWeight="medium">
                <HiCheckCircle />
                In stock
              </HStack>
            )}
          </Stack>
        </Box>
      </Flex>

      {data.variants?.map((variant) => (
        <Box gridColumn="span 2" hideBelow="md" key={variant.title}>
          <NativeSelect.Root size="sm" maxW="120px">
            <NativeSelect.Field
              defaultValue={variant.value}
              bg="bg"
              aria-label={`Select ${variant.title}`}
            >
              {variant.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Box>
      ))}

      <Box gridColumn="span 2" hideBelow="md">
        <Text fontWeight="medium">{data.available ? "In stock" : "Out of stock"}</Text>
      </Box>

      <Stack align="flex-end" gridColumn="span 2" pb="4" gap="8">
        <Text fontWeight="semibold">
          <FormatNumber value={data.price} style="currency" currency="USD" />
        </Text>

        <Stack>
          <Link textStyle="sm" variant="underline">
            Save for later
          </Link>
          <Link textStyle="sm" variant="underline">
            Remove item
          </Link>
        </Stack>
      </Stack>
    </SimpleGrid>
  )
}
