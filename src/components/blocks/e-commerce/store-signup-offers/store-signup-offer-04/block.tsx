import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Image,
    Input,
    Link,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react"

const description = "Everything you need to build great products. " +
    "Our platform offers a wide range of features to help you succeed."

export const Block = () => (
    <Container px="0" py={{ base: "12", md: "24" }}>
        <Flex flex="1" borderWidth="1px" borderRadius="l1" overflow="hidden" align="center">
            <Box flex="1" hideBelow="lg">
                <Image
                    src={"https://images.unsplash.com/photo-1547635289-f3a1a2078969?q=80&w=3425" +
                        "&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    alt="fashion bag"
                    objectFit="cover"
                    height="full"
                    width="full"
                    maxH="520px"
                />
            </Box>

            <VStack gap={{ base: "4", md: "8" }} flex="1" px="8" py="12">
                <Stack gap="2" textAlign="center">
                    <Heading size={{ base: "2xl", md: "3xl" }}>Stay in the loop</Heading>
                    <Text fontSize="lg" color="fg.muted">
                        {description}
                    </Text>
                </Stack>

                <Stack w="full" maxW="320px" mx="auto" gap="4">
                    <Input
                        type="email"
                        size="lg"
                        placeholder="Enter your email"
                        variant="flushed"
                        textAlign="center"
                    />
                    <Button type="submit" size="lg">
                        Sign up
                    </Button>
                </Stack>

                <Text textStyle="xs" color="fg.muted" textAlign="center">
                    By signing up, you agree to receive emails from CK Skincare in accordance to our{" "}
                    <Link variant="underline" href="#">
                        Privacy Policy
                    </Link>
                </Text>
            </VStack>
        </Flex>
    </Container>
)
