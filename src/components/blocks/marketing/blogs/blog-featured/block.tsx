import {
 Avatar, Box, Container, Flex, Heading, HStack, Image, Stack, Text 
} from "@chakra-ui/react"

export const Block = () => {
    return (
        <Container maxW="6xl" py="12">
            <Flex direction={{ base: "column", md: "row" }} gap="12" align={{ md: "center" }}>
                <Box flex="1">
                    <Image
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="AI in Healthcare"
                        minH="xs"
                        rounded="lg"
                        objectFit="cover"
                    />
                </Box>
                <Stack flex="1" gap="3">
                    <HStack color="fg.muted" textStyle="sm">
                        <div>September 26, 2024</div>
                        <span>•</span>
                        <div>10 min read</div>
                    </HStack>
                    <Heading size="3xl">The Future of AI in Healthcare - Chakra Conference '24</Heading>
                    <Text color="fg.muted">
                        Learn how AI is transforming healthcare and what it means for the future of medicine in
                        the Chakra Conference '24.
                    </Text>
                    <HStack mt="2">
                        <Avatar.Root size="sm">
                            <Avatar.Fallback />
                            <Avatar.Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
                        </Avatar.Root>
                        <Text fontWeight="medium" textStyle="sm">
                            John Doe
                        </Text>
                    </HStack>
                </Stack>
            </Flex>
        </Container>
    )
}
