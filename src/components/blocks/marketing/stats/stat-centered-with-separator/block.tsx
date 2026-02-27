import {
 Container, HStack, Icon, SimpleGrid, Text, VStack 
} from "@chakra-ui/react"
import { LuStar } from "react-icons/lu"
import { SectionHeader } from "./section-header"

export const Block = () => {
    return (
        <Container py="16">
            <VStack gap="10">
                <SectionHeader
                    textAlign="center"
                    headline="Ready to build your product?"
                    description="Empower your business with our comprehensive SaaS platform designed to streamline operations and boost productivity."
                />
                <SimpleGrid columns={{ base: 2, lg: 4 }} gap="4" divideX="1px">
                    {data.map((item) => (
                        <VStack
                            key={item.label}
                            gap="2"
                            px="8"
                            textAlign="center"
                            _first={{ borderStartWidth: { base: "1px", lg: "0" } }}
                        >
                            <HStack textStyle="3xl" fontWeight="medium">
                                {item.value} {item.icon && <Icon size="lg">{item.icon}</Icon>}
                            </HStack>
                            <Text fontSize="sm" whiteSpace="nowrap">
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
