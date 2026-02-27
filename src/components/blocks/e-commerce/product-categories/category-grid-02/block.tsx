import { Container, Grid } from "@chakra-ui/react"
import { CategoryItem } from "./category-item"
import { data } from "./data"

export const Block = () => (
    <Container maxW="7xl" py={{ base: "8", lg: "16" }}>
        <Grid
            height={{ md: "640px" }}
            gap={{ base: "4", md: "8" }}
            templateColumns={{ md: "repeat(3, 1fr)" }}
            templateRows={{ md: "repeat(2, 1fr)" }}
        >
            {data.map((item, index) => (
                <CategoryItem
                    key={item.title}
                    data={item}
                    data-first={index === 0 || undefined}
                    gridRow={index === 0 ? { md: "span 2" } : undefined}
                    gridColumn={index === 0 ? { md: "span 2" } : undefined}
                    objectPosition={index === 0 ? "top center" : undefined}
                />
            ))}
        </Grid>
    </Container>
)
