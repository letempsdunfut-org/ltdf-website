import {
 Container, SimpleGrid, Text, VStack 
} from "@chakra-ui/react"
import { LuStar } from "react-icons/lu"
import { SectionHeader } from "./section-header"

export const Block = () => {
    return (
        <Container py="16">
            <VStack gap="12">
                <SectionHeader textAlign="center" headline="Enterprise customer results" />
                <SimpleGrid columns={{ base: 2, lg: 4 }} gap="4">
                    {data.map((item) => (
                        <VStack key={item.label} gap="2" px="8" textAlign="center">
                            <Text textStyle="4xl" fontWeight="semibold">
                                {item.value}
                            </Text>
                            <Text whiteSpace="nowrap" color="fg.muted">
                                {item.label}
                            </Text>
                        </VStack>
                    ))}
                </SimpleGrid>
            </VStack>
        </Container>
    )
}

const data = [
    {
        value: "1M+",
        label: "Users trust us",
    },
    {
        value: "$56.5B",
        label: "Transactions processed",
    },
    {
        icon: <LuStar />,
        value: "4.8",
        label: "App Store Rating",
    },
    {
        value: "200+",
        label: "Countries supported",
    },
]
