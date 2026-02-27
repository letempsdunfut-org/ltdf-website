import {
 Container, Flex, Heading, SimpleGrid 
} from "@chakra-ui/react"
import * as logos from "./logo-ipsum"

export const Block = () => {
    return (
        <Container py="12">
            <Flex gap="12" direction={{ base: "column", lg: "row" }}>
                <Heading size="2xl" flex="1" maxW={{ lg: "sm" }}>
                    The world's leading companies choose Logoipsum
                </Heading>
                <SimpleGrid columns={{ base: 2, md: 4 }} gap="8" flex="1">
                    {Object.entries(logos).map(([name, Logo]) => (
                        <Logo monochrome height="32px" key={name} />
                    ))}
                </SimpleGrid>
            </Flex>
        </Container>
    )
}
