import { Container, SimpleGrid } from "@chakra-ui/react"
import { data } from "./data"
import { ProductItem } from "./product-item"

export const Block = () => {
  return (
    <Container maxW="7xl" py="10">
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="4">
        {data.map((product) => (
          <ProductItem key={product.id} data={product} />
        ))}
      </SimpleGrid>
    </Container>
  )
}
