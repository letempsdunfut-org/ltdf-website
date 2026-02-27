import {
    Badge, Button, Image as ChakraImage, Flex, Icon, SimpleGrid, Stack
} from "@chakra-ui/react"
import { LuRocket } from "react-icons/lu"
import { HeroHeader } from "./hero-header"


const description = "Transform your ideas into reality with our cutting-edge tools and features. Create seamless, professional experiences that drive results."

export const Block = () => (
    <SimpleGrid columns={{ base: 1, lg: 2 }}>
        <Flex
            align="center"
            justify="center"
            ps={{
                base: "4", md: "6", lg: "8"
            }}
            pe={{ base: "4", md: "16" }}
            py={{ base: "16", md: "24" }}
        >
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
        </Flex>
        <ChakraImage
            src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=2000"
            alt="Tech setup"
            objectFit="cover"
            minH={{ base: "96", lg: "3xl" }}
            w="full"
        />
    </SimpleGrid>
)
