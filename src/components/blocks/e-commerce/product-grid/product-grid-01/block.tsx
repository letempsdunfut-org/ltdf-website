import { Container, SimpleGrid } from "@chakra-ui/react"
import { data } from "./data"
import { ProductItem } from "./product-item"

export const Block = () => {
    return (
        <Container maxW="7xl" py="10">
            <SimpleGrid columns={{ base: 2, md: 4 }} gap="0.5">
                {data.slice(0, 4).map((product) => (
                    <ProductItem key={product.id} data={product} />
                ))}
            </SimpleGrid>
        </Container>
    )
}
