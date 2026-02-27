import {
 Box, Button, Card, HStack, Icon, Stack, Text 
} from "@chakra-ui/react"
import { LuCircleCheck } from "react-icons/lu"
import { PopularBadge } from "./popular-badge"

export const Block = () => {
    const features = [
        "Unlimited Users",
        "Unlimited Secure Cloud Storage",
        "24/7 Dedicated Support",
        "Premium Analytics",
        "Custom Integration",
    ]
    return (
        <Card.Root variant="elevated" boxShadow="lg" position="relative" overflow="hidden">
            <Card.Header>
                <Card.Title textStyle="xl">Starter Plan</Card.Title>
                <Card.Description textStyle="md">Kickstart your digital journey.</Card.Description>
            </Card.Header>
            <Card.Body gap="8">
                <Text textStyle="5xl" fontWeight="semibold">
                    $19
                    <Text as="span" textStyle="xl">
                        /month
                    </Text>
                </Text>
                <Stack as="ul" gap="4">
                    {features.map((feature) => (
                        <Box key={feature} as="li">
                            <HStack gap="4">
                                <Icon color="colorPalette.solid">
                                    <LuCircleCheck />
                                </Icon>
                                <Text textStyle="sm">{feature}</Text>
                            </HStack>
                        </Box>
                    ))}
                </Stack>
            </Card.Body>
            <Card.Footer>
                <Button width="full">Buy Now</Button>
            </Card.Footer>
            <PopularBadge />
        </Card.Root>
    )
}
