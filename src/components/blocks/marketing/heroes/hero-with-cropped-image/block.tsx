import {
    Badge, Box, Button, Image as ChakraImage, Container, Icon, Stack
} from "@chakra-ui/react"
import { LuRocket } from "react-icons/lu"
import { HeroHeader } from "./hero-header"


const description = "Transform your ideas into reality with our cutting-edge tools and features. Create seamless, professional experiences that drive results."

export const Block = () => (
    <Box position="relative" height={{ lg: "720px" }}>
        <Container py={{ base: "16", md: "24" }} height="full">
            <Stack
                direction={{ base: "column", lg: "row" }}
                gap={{ base: "16" }}
                align={{ lg: "center" }}
                height="full"
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
                    maxW={{
                        md: "xl", lg: "md", xl: "xl"
                    }}
                >
                    <Stack direction={{ base: "column", md: "row" }} gap="3">
                        <Button size={{ base: "lg", md: "2xl" }}>Get Started</Button>
                        <Button variant="outline" size={{ base: "lg", md: "2xl" }} colorPalette="gray">
                            Learn more
                        </Button>
                    </Stack>
                </HeroHeader>

                <Box
                    pos={{ lg: "absolute" }}
                    right="0"
                    bottom="0"
                    w={{ base: "full", lg: "50%" }}
                    height={{ base: "96", lg: "full" }}
                    css={{
                        clipPath: { lg: "polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%)" },
                    }}
                >
                    <ChakraImage
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000"
                        alt="Meeting room"
                        objectFit="cover"
                        w="full"
                        h="full"
                    />
                </Box>
            </Stack>
        </Container>
    </Box>
)
