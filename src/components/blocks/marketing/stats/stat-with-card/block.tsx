import {
 Card, Container, Icon, SimpleGrid, Stack, Text 
} from "@chakra-ui/react"
import {
 LuArrowUp, LuChartPie, LuHeart 
} from "react-icons/lu"
import { SectionHeader } from "./section-header"

export const Block = () => {
    return (
        <Container py="16">
            <SectionHeader
                tagline="How we do"
                headline="Performance Metrics"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            >
                <SimpleGrid columns={{ base: 1, md: 3 }} gap="4">
                    {data.map((item) => (
                        <Card.Root key={item.label} minH={{ md: "60" }}>
                            <Card.Body gap="2">
                                <Icon size="lg">{item.icon}</Icon>
                                <Stack gap="0" flex="1" justify="flex-end">
                                    <Text textStyle={{ base: "4xl", md: "5xl" }} fontWeight="medium">
                                        {item.value}
                                    </Text>
                                    <Text fontSize="sm">{item.label}</Text>
                                </Stack>
                            </Card.Body>
                        </Card.Root>
                    ))}
                </SimpleGrid>
            </SectionHeader>
        </Container>
    )
}

const data = [
    {
        value: "72%",
        label: "Increase in Revenue",
        icon: <LuChartPie />,
    },
    {
        value: "4.8/5",
        label: "Customer Satisfaction",
        icon: <LuHeart />,
    },
    {
        value: "99.9%",
        label: "System Uptime",
        icon: <LuArrowUp />,
    },
]
