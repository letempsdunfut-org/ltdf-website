import {
    Avatar,
    Box,
    Card,
    Container,
    Heading,
    HStack,
    Image,
    Link,
    SimpleGrid,
    Span,
    Stack,
    Text,
} from "@chakra-ui/react"
import { posts } from "./data"

export const Block = () => {
    return (
        <Container py={{ base: "16", md: "24" }}>
            <Stack gap="6">
                <Heading size="4xl">All Articles</Heading>
                <SimpleGrid columns={{
 base: 1, md: 2, lg: 3 
}} gap={{ base: "12", lg: "8" }}>
                    {posts.map((post) => (
                        <Card.Root as="article" size="lg" rounded="xl" key={post.id} overflow="hidden">
                            <Link href="#" variant="plain" _hover={{ textDecoration: "none" }} className="group">
                                <Box height="48" overflow="hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        objectFit="cover"
                                        width="full"
                                        height="full"
                                        transition="scale 0.2s"
                                        _groupHover={{ scale: 1.05 }}
                                    />
                                </Box>
                                <Card.Body gap="3">
                                    <Span color="fg.muted" textStyle="sm" textTransform="uppercase">
                                        {post.publishedAt}
                                    </Span>
                                    <Heading as="h3" size="2xl" _groupHover={{ color: "colorPalette.600" }}>
                                        {post.title}
                                    </Heading>
                                    <Text lineClamp={3}>{post.excerpt}</Text>
                                </Card.Body>
                                <Card.Footer>
                                    <HStack gap="4">
                                        <Avatar.Root shape="rounded">
                                            <Avatar.Fallback name={post.author.name} />
                                            <Avatar.Image src={post.author.avatarUrl} />
                                        </Avatar.Root>
                                        <Stack gap="0">
                                            <Box fontWeight="medium">{post.author.name}</Box>
                                            <Box textStyle="sm" color="fg.muted">
                                                {post.readTime} read
                                            </Box>
                                        </Stack>
                                    </HStack>
                                </Card.Footer>
                            </Link>
                        </Card.Root>
                    ))}
                </SimpleGrid>
            </Stack>
        </Container>
    )
}
