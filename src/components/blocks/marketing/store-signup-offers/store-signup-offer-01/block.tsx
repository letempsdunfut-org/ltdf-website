import {
    Box,
    Button,
    Container,
    Fieldset,
    Flex,
    Heading,
    HStack,
    Image,
    Input,
    Link,
    RadioGroup,
    Stack,
    Text,
} from "@chakra-ui/react"

const imgUrl = "https://images.unsplash.com/photo-1575032617751-6ddec2089882?q=80&w=2819" +
    "&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

export const Block = () => (
    <Container maxW="4xl" px="0" py={{ base: "12", md: "24" }}>
        <Flex flex="1" borderWidth="1px" borderRadius="l1" overflow="hidden" direction={{ base: "column", lg: "row" }}>
            <Box flex="1" hideBelow="lg">
                <Image
                    src={imgUrl}
                    alt="fashion bag"
                    objectFit="cover"
                    height="100%"
                />
            </Box>

            <Stack gap={{ base: "6", md: "10" }} flex="1" px="8" py="12">
                <Stack gap={{ base: "1", md: "2" }}>
                    <Heading size={{ base: "2xl", md: "3xl" }}>Unlock an Extra 15% Off</Heading>
                    <Text color="fg.muted">And get access to exclusive deals and limited sales.</Text>
                </Stack>

                <Stack gap={{ base: "6", md: "10" }}>
                    <Fieldset.Root>
                        <Fieldset.Legend>Product Preference</Fieldset.Legend>
                        <RadioGroup.Root defaultValue="mens">
                            <HStack gap="6">
                                {productPreference.map((item) => (
                                    <RadioGroup.Item key={item.value} value={item.value}>
                                        <RadioGroup.ItemHiddenInput />
                                        <RadioGroup.ItemIndicator />
                                        <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
                                    </RadioGroup.Item>
                                ))}
                            </HStack>
                        </RadioGroup.Root>
                    </Fieldset.Root>

                    <Stack gap="3">
                        <Input type="email" placeholder="Email Address" textAlign="center" />
                        <Button type="submit" size="lg">
                            Sign up
                        </Button>
                        <Link variant="underline" href="#" alignSelf="center" textStyle="sm">
                            Maybe later
                        </Link>
                    </Stack>
                </Stack>

                <Text textStyle="xs" color="fg.muted" textAlign="center">
                    <Link variant="underline" href="#">
                        Terms and Conditions
                    </Link>{" "}
                    apply. View our{" "}
                    <Link variant="underline" href="#">
                        Privacy Policy
                    </Link>
                </Text>
            </Stack>
        </Flex>
    </Container >
)

const productPreference = [
    { label: "Mens", value: "mens" },
    { label: "Womens", value: "womens" },
    { label: "I want both", value: "both" },
]
