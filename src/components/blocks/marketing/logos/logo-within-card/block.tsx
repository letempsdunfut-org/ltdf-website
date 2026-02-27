import {
 Box, Button, Center, Container, Flex, Heading, SimpleGrid, Stack 
} from "@chakra-ui/react"
import { LuCircleArrowRight } from "react-icons/lu"
import * as logos from "./logo-ipsum"

export const Block = () => {
    const items = [
        { name: "Company A", logo: <logos.Logo1 monochrome /> },
        { name: "Company B", logo: <logos.Logo2 monochrome /> },
        { name: "Company C", logo: <logos.Logo3 monochrome /> },
        { name: "Company D", logo: <logos.Logo4 monochrome /> },
        { name: "Company E", logo: <logos.Logo5 monochrome /> },
        { name: "Company F", logo: <logos.Logo6 monochrome /> },
    ]

    return (
        <Container py="12">
            <Stack gap="12">
                <Flex
                    direction={{ base: "column", sm: "row" }}
                    align={{ sm: "center" }}
                    gap="8"
                    justify="space-between"
                >
                    <Heading size="4xl" fontWeight="medium" flex="1" maxW="lg">
                        Trusted by the world's most successful companies
                    </Heading>
                    <Button>
                        Read Case Studies
                        <LuCircleArrowRight />
                    </Button>
                </Flex>

                <SimpleGrid columns={{ base: 2, md: 3 }} flex="1" gap="4">
                    {items.map(({ name, logo }) => (
                        <Center bg="bg.muted" key={name} minH="40" pos="relative">
                            <Box _icon={{ h: "8" }}>{logo}</Box>
                            <Box
                                pos="absolute"
                                bottom="2"
                                right="2"
                                bg="bg.panel"
                                px="2"
                                py="1"
                                rounded="l2"
                                textStyle="sm"
                            >
                                {name}
                            </Box>
                        </Center>
                    ))}
                </SimpleGrid>
            </Stack>
        </Container>
    )
}
