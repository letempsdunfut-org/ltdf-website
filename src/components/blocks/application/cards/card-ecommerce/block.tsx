import {
    Badge,
    Box,
    Button,
    Card,
    Field,
    Heading,
    HStack,
    Icon,
    NumberInput,
    RatingGroup,
    Separator,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react"
import {
 LuCircleHelp, LuHeart, LuShield, LuShoppingBag 
} from "react-icons/lu"

export const Block = () => {
    return (
        <Card.Root variant="elevated" boxShadow="lg">
            <Card.Header>
                <Stack gap="4">
                    <Stack gap="3" align="flex-start">
                        <Badge variant="solid" size="md">
                            New in stock
                        </Badge>
                        <Heading as="h1" textStyle="2xl" fontWeight="semibold">
                            New Balance 574
                        </Heading>
                    </Stack>
                    <HStack justify="space-between" width="full">
                        <Text textStyle="xl" fontWeight="medium">
                            $79.99
                        </Text>
                        <HStack gap="1.5">
                            <RatingGroup.Root count={5} defaultValue={4} readOnly size="sm">
                                <RatingGroup.HiddenInput />
                                <RatingGroup.Control />
                            </RatingGroup.Root>
                            <Text textStyle="xs" textDecoration="underline">
                                12 Reviews
                            </Text>
                        </HStack>
                    </HStack>
                    <Text color="fg.muted">
                        With a sleek design and a captivating essence, this is a modern Classic made for every
                        occasion.
                    </Text>
                </Stack>
            </Card.Header>
            <Card.Body gap="4">
                <Separator />
                {/* <SizePicker /> */}
                <SimpleGrid columns={2} gap="4">
                    <Field.Root>
                        <Field.Label>Quantity</Field.Label>
                        <NumberInput.Root defaultValue="1" min={1} max={5}>
                            <NumberInput.Control />
                            <NumberInput.Input />
                        </NumberInput.Root>
                    </Field.Root>
                    <Button variant="outline" colorPalette="gray" alignSelf="end">
                        <LuHeart /> Favourite
                    </Button>
                </SimpleGrid>
                <Button width="full">Add to Cart</Button>
                <Box bg="bg.subtle" p="4" borderRadius="l2" width="full">
                    <Stack gap="4" color="fg.muted" fontWeight="medium">
                        <HStack gap="2">
                            <Icon boxSize="4" asChild>
                                <LuShoppingBag />
                            </Icon>
                            <Text textStyle="sm">Free shipping and returns</Text>
                        </HStack>
                        <HStack gap="2">
                            <Icon boxSize="4" asChild>
                                <LuShield />
                            </Icon>
                            <Text textStyle="sm">2 year extended warranty</Text>
                        </HStack>
                        <HStack gap="2">
                            <Icon boxSize="4" asChild>
                                <LuCircleHelp />
                            </Icon>
                            <Text textStyle="sm">We're here for you 24/7</Text>
                        </HStack>
                    </Stack>
                </Box>
            </Card.Body>
        </Card.Root>
    )
}
