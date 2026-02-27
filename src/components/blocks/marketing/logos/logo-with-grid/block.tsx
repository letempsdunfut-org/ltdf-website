import {
    AspectRatio,
    Button,
    Center,
    Container,
    Heading,
    SimpleGrid,
    Stack,
} from "@chakra-ui/react"
import { LuCircleArrowRight } from "react-icons/lu"
import * as logos from "./logo-ipsum"

export const Block = () => (
    <Container py="12">
        <Stack gap="12" align={{ lg: "center" }} direction={{ base: "column", lg: "row" }}>
            <Stack gap="8" flex="1" maxW="lg" align="flex-start">
                <Heading size="4xl" fontWeight="medium">
                    Trusted by the world's most successful companies
                </Heading>
                <Button>
                    Read Case Studies
                    <LuCircleArrowRight />
                </Button>
            </Stack>
            <SimpleGrid columns={{ base: 2, md: 3 }} flex="1" borderTopWidth="1px" borderStartWidth="1px">
                {Object.entries(logos).map(([name, Logo]) => (
                    <AspectRatio ratio={3} key={name} borderBottomWidth="1px" borderEndWidth="1px">
                        <Center>
                            <Logo height="32px" monochrome />
                        </Center>
                    </AspectRatio>
                ))}
            </SimpleGrid>
        </Stack>
    </Container>
)
