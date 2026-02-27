import {
    AspectRatio, Badge, Button, Image as ChakraImage, Container, Icon, SimpleGrid, Stack
} from "@chakra-ui/react"
import { LuRocket } from "react-icons/lu"
import { HeroHeader } from "./hero-header"


const description = "Transform your ideas into reality with our cutting-edge tools and features. Create seamless, professional experiences that drive results."

export const Block = () => (
    <Container py={{ base: "16", md: "24" }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "12", md: "16" }}>
            <HeroHeader
                tagline={
                    <Badge size="lg" colorPalette="gray">
                        <Icon size="sm">
                            <LuRocket />
                        </Icon>
                        Now Available
                    </Badge>
                }
                headline="Build Powerful Digital Solutions"
                description={description}
                justifyContent="center"
            >
                <Stack direction={{ base: "column", md: "row" }} gap="3">
                    <Button size={{ base: "lg", md: "2xl" }}>Get Started</Button>
                    <Button variant="outline" size={{ base: "lg", md: "2xl" }} colorPalette="gray">
                        Learn more
                    </Button>
                </Stack>
            </HeroHeader>
            <AspectRatio ratio={1}>
                <ChakraImage
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000"
                    alt="Team learning"
                    objectFit="cover"
                    rounded="md"
                />
            </AspectRatio>
        </SimpleGrid>
    </Container>
)
