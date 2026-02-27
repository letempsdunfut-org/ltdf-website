import {
  Box,
  Button,
  Container,
  Flex,
  For,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react"
import { LuChevronLeft } from "react-icons/lu"
import { CartItem } from "./cart-item"
import { CartOrderSummary } from "./cart-order-summary"
import { data } from "./data"

export const Block = () => (
  <Container maxW="7xl" py={{
 base: "6", md: "8", lg: "12" 
}}>
    <Stack gap={{ base: "8", md: "12" }}>
      <Flex
        gap="4"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ md: "center" }}
      >
        <Heading>Shopping Bag ({data.item_count} items)</Heading>

        <HStack gap="8" flex="1" maxW={{ md: "md" }}>
          <Link textStyle="sm" fontWeight="semibold" hideBelow="md">
            <LuChevronLeft />
            Shop More
          </Link>
          <Button flex="1">Checkout</Button>
        </HStack>
      </Flex>

      <Box>
        <SimpleGrid py="4" hideBelow="md" columns={{ base: 6, md: 12 }} gap="4">
          <For
            each={[
              { title: "Items", gridColumn: "span 4" },
              { title: "Qty", gridColumn: "span 2" },
              { title: "Size", gridColumn: "span 2" },
              { title: "Availability", gridColumn: "span 2" },
              {
 title: "Price", gridColumn: "span 2", align: "flex-end" 
},
            ]}
          >
            {(item) => (
              <Stack
                color="fg.muted"
                textStyle="sm"
                gridColumn={item.gridColumn}
                align={item.align}
              >
                {item.title}
              </Stack>
            )}
          </For>
        </SimpleGrid>

        <Stack gap="4">
          {data.items.map((item) => (
            <CartItem data={item} key={item.id} />
          ))}
        </Stack>
      </Box>

      <CartOrderSummary width="full" maxW={{ md: "md" }} ms="auto" data={data} />
    </Stack>
  </Container>
)
