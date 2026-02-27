import {
  Box,
  Button,
  Field,
  Flex,
  FormatNumber,
  Input,
  Span,
  Stack,
  type StackProps,
  Text,
} from "@chakra-ui/react"
import type { CartData } from "./types"

interface CartOrderSummaryProps extends StackProps {
  data: CartData
}

export const CartOrderSummary = (props: CartOrderSummaryProps) => {
  const { data, ...rest } = props
  return (
    <Stack gap="6" {...rest}>
      <Field.Root flexDir="row" alignItems="center" hideBelow="md">
        <Field.Label flex="1">Promo Code</Field.Label>
        <Input flex="2" placeholder="Enter promo code" />
      </Field.Root>

      <Flex justify="space-between" align="center">
        <Text textStyle="sm" fontWeight="medium">
          Total <Span color="fg.muted">(Excl. Delivery)</Span>
        </Text>
        <Text textStyle="lg" fontWeight="semibold">
          <FormatNumber value={data.items_subtotal_price} style="currency" currency="GBP" />
        </Text>
      </Flex>

      <Flex>
        <Box flex="1" hideBelow="md" />
        <Button flex="2">Checkout</Button>
      </Flex>
    </Stack>
  )
}
