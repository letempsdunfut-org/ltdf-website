import {
    Image as ChakraImage,
    Container,
    Heading,
    Highlight,
    HStack,
    Icon,
    SimpleGrid,
    Span,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react"
import {
 LuChartBar, LuChevronRight, LuFile, LuShare2, LuUsers 
} from "react-icons/lu"

export const Block = () => {
    return (
        <Container>
            <Stack gap={{ base: "8", md: "20" }}>
                <VStack maxW="2xl" mx="auto" textAlign="center">
                    <Heading as="h2" size="5xl">
                        <Highlight query="Say hello" styles={{ color: "colorPalette.fg" }}>
                            Say hello to LoremIpsum
                        </Highlight>
                    </Heading>
                    <Text color="fg.muted" textStyle="lg">
                        Streamline your workflow with our intuitive file management system. Upload, organize,
                        and collaborate on documents in real-time
                    </Text>
                </VStack>

                <SimpleGrid columns={{
 base: 1, md: 2, lg: 4 
}} gap="12">
                    {features.map((feature) => (
                        <VStack
                            asChild
                            key={feature.title}
                            className="group"
                            focusRing="inside"
                            textAlign="center"
                        >
                            <a href={feature.url}>
                                <Icon color="colorPalette.fg" size="lg" mb="2" asChild>
                                    {feature.icon}
                                </Icon>
                                <HStack fontWeight="medium" color="colorPalette.fg">
                                    <Span textStyle="lg">{feature.title}</Span>
                                    <Icon
                                        color="fg.muted"
                                        alignSelf="center"
                                        translate={{ _groupHover: "4px 0" }}
                                        transition="all"
                                    >
                                        <LuChevronRight />
                                    </Icon>
                                </HStack>
                                <Text color="fg.muted" maxW="xs" mx="auto">
                                    {feature.description}
                                </Text>
                            </a>
                        </VStack>
                    ))}
                </SimpleGrid>
            </Stack>
        </Container>
    )
}

const features = [
    {
        icon: <LuFile />,
        title: "Create with ease",
        description: "Streamline your workflow with our intuitive file management system.",
        url: "#",
    },
    {
        icon: <LuChartBar />,
        title: "Track engagement",
        description: "Monitor file engagement, downloads, and team collaboration.",
        url: "#",
        image: (
            <ChakraImage
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                alt="Engagement"
                objectFit="cover"
                minH="sm"
                rounded="lg"
            />
        ),
    },
    {
        icon: <LuShare2 />,
        title: "Share and collaborate",
        description: "Generate secure sharing links, set permissions, and work together.",
        url: "#",
        image: (
            <ChakraImage
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
                alt="Collaboration"
                objectFit="cover"
                minH="sm"
                rounded="lg"
            />
        ),
    },
    {
        icon: <LuUsers />,
        title: "Team management",
        description: "Organize teams, assign roles, and control access levels efficiently.",
        url: "#",
        image: (
            <ChakraImage
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                alt="Team management"
                objectFit="cover"
                minH="sm"
                rounded="lg"
            />
        ),
    },
]
