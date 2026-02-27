import {
    Button,
    Container,
    Flex,
    Heading,
    HStack,
    Icon,
    Link,
    List,
    RadioCard,
    Span,
    Stack,
    Text,
} from "@chakra-ui/react"
import {
 LuArrowRight, LuCheck, LuMessageSquare, LuStar 
} from "react-icons/lu"

export const Block = () => {
    return (
        <Container maxW="5xl" py="20">
            <Flex direction={{ base: "column", md: "row" }} gap={{ base: "6", md: "0" }}>
                <Stack gap="8" p={{ md: "8" }} flex="1.5">
                    <HStack gap="4">
                        <Icon size="lg" color="colorPalette.fg">
                            <LuStar />
                        </Icon>
                        <Heading size="2xl" color="colorPalette.fg">
                            Upgrade to Plus
                        </Heading>
                    </HStack>
                    <Text color="fg.muted">
                        Get access to premium features and unlock your full potential. With Plus, you can manage
                        your projects, buy more credits, and enjoy priority support.
                    </Text>
                    <RadioCard.Root defaultValue="plus-monthly" orientation="horizontal">
                        <Stack align="stretch" gap="2">
                            {items.map((item) => (
                                <RadioCard.Item key={item.value} value={item.value}>
                                    <RadioCard.ItemHiddenInput />
                                    <RadioCard.ItemControl>
                                        <Text textStyle="4xl" fontWeight="medium" me="1">
                                            {item.priceCurrency}
                                            {item.monthlyPrice}
                                        </Text>
                                        <RadioCard.ItemContent>
                                            <RadioCard.ItemText>{`per ${item.period}, billed annually`}</RadioCard.ItemText>
                                            <RadioCard.ItemDescription>{`${item.priceCurrency}${item.yearlyPrice} per year`}</RadioCard.ItemDescription>
                                        </RadioCard.ItemContent>
                                        <RadioCard.ItemIndicator />
                                    </RadioCard.ItemControl>
                                </RadioCard.Item>
                            ))}
                        </Stack>
                    </RadioCard.Root>

                    <Stack gap="4">
                        <Text color="fg.muted">
                            You will be charged{" "}
                            <Span fontWeight="medium" color="fg">
                                $10 USD
                            </Span>{" "}
                            today for your first month.
                        </Text>
                        <Button size="xl">
                            Continue to Checkout <LuArrowRight />
                        </Button>
                    </Stack>
                </Stack>

                <Stack p="8" flex="1" gap="4" bg="colorPalette.subtle" rounded="l2">
                    <Text textStyle="lg" fontWeight="medium">
                        Plus features
                    </Text>
                    <List.Root flex="1" variant="plain" gap="2">
                        {features.map((feature) => (
                            <List.Item key={feature.title}>
                                <List.Indicator asChild color="colorPalette.fg">
                                    <LuCheck />
                                </List.Indicator>
                                {feature.title}
                            </List.Item>
                        ))}
                    </List.Root>
                    <HStack gap="4">
                        <Icon size="lg" color="colorPalette.fg">
                            <LuMessageSquare />
                        </Icon>
                        <Text lineHeight="normal">
                            Want to upgrade for your team? <Link fontWeight="medium">Speak to sales</Link>
                        </Text>
                    </HStack>
                </Stack>
            </Flex>
        </Container>
    )
}

const features = [
    { title: "Unlimited projects" },
    { title: "Buy more credits" },
    { title: "Priority support" },
    { title: "Advanced analytics" },
    { title: "Dedicated account manager" },
]

const items = [
    {
        value: "plus-monthly",
        priceCurrency: "$",
        period: "month",
        monthlyPrice: 10,
        yearlyPrice: 100,
    },
    {
        value: "plus-yearly",
        priceCurrency: "$",
        period: "year",
        monthlyPrice: 12,
        yearlyPrice: 144,
    },
]
