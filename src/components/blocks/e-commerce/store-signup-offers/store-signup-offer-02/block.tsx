import {
    Box,
    Button,
    Container,
    Flex,
    Image,
    Input,
    Span,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react"
import { Logo } from "./logo"



export const Block = () => (
    <Container maxW="4xl" py={{ base: "12", md: "24" }}>
        <Flex flex="1" borderWidth="1px" borderRadius="l1" overflow="hidden">
            <Box flex="1" hideBelow="lg">
                <Image
                    src={"https://images.unsplash.com/photo-1729808784071-346188be62e9?q=80&w=2061" +
                        "&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    alt="get 15% off"
                    objectFit="cover"
                    width="full"
                    height="full"
                />
            </Box>

            <Stack gap="6" flex="1" px="8" py="12">
                <Logo />
                <VStack gap="1" textAlign="center">
                    <Span textStyle="lg" textTransform="uppercase" fontWeight="medium">
                        Sign up to Win a
                    </Span>
                    <Span textStyle="6xl" fontWeight="bold">
                        $100
                    </Span>
                    <Span textStyle="2xl" fontWeight="bold">
                        Gift Card
                    </Span>
                </VStack>

                <Stack gap="4" textAlign="center">
                    <Text textStyle="lg" fontWeight="medium">
                        Plus 15% Off Your 1st Order
                    </Text>
                    <Input size="lg" type="email" placeholder="Email" />
                    <Button size="lg" textTransform="uppercase">
                        Get 15% Off
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    </Container>
)
