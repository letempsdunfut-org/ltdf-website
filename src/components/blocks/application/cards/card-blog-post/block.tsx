import {
 AspectRatio, Avatar, Box, Card, Heading, HStack, Stack, Text 
} from "@chakra-ui/react"
import { ImagePlaceholder } from "./image-placeholder"

export const Block = () => {
    return (
        <Card.Root overflow="hidden" variant="elevated" boxShadow="lg">
            <Card.Header p="0">
                <AspectRatio ratio={16 / 9} w="full">
                    <ImagePlaceholder />
                </AspectRatio>
            </Card.Header>
            <Card.Body gap={{ base: "5", md: "6" }}>
                <Stack gap="3" flex="1">
                    <Stack>
                        <Text textStyle="sm" fontWeight="medium" color="colorPalette.fg">
                            Industry Insights
                        </Text>
                        <Heading textStyle="2xl">
                            The Future of SaaS: Trends to Watch in {new Date().getFullYear()}
                        </Heading>
                    </Stack>
                    <Text color="fg.muted">
                        Discover the latest trends in SaaS that are shaping the future of digital solutions and
                        how your business can benefit.
                    </Text>
                </Stack>
            </Card.Body>
            <Card.Footer>
                <HStack gap="3">
                    <Avatar.Root>
                        <Avatar.Fallback />
                        <Avatar.Image src="https://avatars.githubusercontent.com/u/53586167?v=4" />
                    </Avatar.Root>
                    <Box textStyle="sm">
                        <Text fontWeight="medium">Esther Adebayo</Text>
                        <Text color="fg.muted">January 15, {new Date().getFullYear()}</Text>
                    </Box>
                </HStack>
            </Card.Footer>
        </Card.Root>
    )
}
