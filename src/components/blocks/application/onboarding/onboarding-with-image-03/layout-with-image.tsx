import {
 Box, Center, Container, Flex, Heading, HStack, Stack, Text 
} from "@chakra-ui/react"
import { ImagePlaceholder } from "./image-placeholder"
import { Logo } from "./logo"

interface ProgressIndicatorProps {
    totalSteps: number
    currentStep: number
}

const ProgressIndicator = (props: ProgressIndicatorProps) => {
    const { totalSteps, currentStep } = props
    return (
        <HStack gap="3">
            {Array.from({ length: totalSteps }).map((_, index) => (
                <Box
                    key={index}
                    h="1.5"
                    w="8"
                    rounded="full"
                    bg={index < currentStep ? "colorPalette.solid" : "bg.muted"}
                />
            ))}
        </HStack>
    )
}

interface LayoutProps {
    totalSteps: number
    currentStep: number
    title: string
    description: string
    children: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
    const {
 title, description, children, totalSteps, currentStep 
} = props
    return (
        <Flex minH="100vh" direction={{ base: "column", lg: "row" }}>
            <Box flex="1" display={{ base: "none", lg: "block" }}>
                <ImagePlaceholder />
            </Box>
            <Center flex="1">
                <Container maxW="md" py={{ base: "16", lg: "32" }}>
                    <Stack gap="8">
                        <HStack justify="space-between">
                            <Logo />
                            <ProgressIndicator totalSteps={totalSteps} currentStep={currentStep} />
                        </HStack>
                        <Stack gap="2">
                            <Heading size="3xl" fontWeight="medium">
                                {title}
                            </Heading>
                            <Text textStyle="lg" color="fg.muted">
                                {description}
                            </Text>
                        </Stack>
                        <Box>{children}</Box>
                    </Stack>
                </Container>
            </Center>
        </Flex>
    )
}
