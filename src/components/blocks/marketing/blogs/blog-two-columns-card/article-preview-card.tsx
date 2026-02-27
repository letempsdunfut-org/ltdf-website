import {
    Avatar, Card, Heading, HStack, Image, Link, Stack, Text
} from "@chakra-ui/react"
import { Post } from "./data"

interface ArticlePreviewCardProps {
    post: Post
}

export const ArticlePreviewCard = (props: ArticlePreviewCardProps) => {
    const { post } = props
    return (
        <Card.Root size="lg" rounded="xl" overflow="hidden" _hover={{ shadow: "md" }} transition="all 0.2s">
            <Link href="#" variant="plain" _hover={{ textDecoration: "none" }} className="group">
                <Image
                    src={post.image}
                    alt={post.title}
                    aspectRatio="16/9"
                    objectFit="cover"
                />
                <Card.Body gap="3">
                    <HStack textStyle="sm" color="fg.muted">
                        <Text color="colorPalette.fg" fontWeight="medium">{post.category}</Text>
                        <Text>•</Text>
                        <Text>{post.publishedAt}</Text>
                    </HStack>
                    <Heading size="xl" _groupHover={{ color: "colorPalette.600" }}>{post.title}</Heading>
                    <Text color="fg.muted" lineClamp={3}>
                        {post.excerpt}
                    </Text>
                </Card.Body>
                <Card.Footer>
                    <HStack gap="3">
                        <Avatar.Root size="sm">
                            <Avatar.Fallback name={post.author.name} />
                            <Avatar.Image src={post.author.avatarUrl} />
                        </Avatar.Root>
                        <Stack gap="0" textStyle="sm">
                            <Text fontWeight="medium">{post.author.name}</Text>
                            <Text color="fg.muted">{post.readTime} read</Text>
                        </Stack>
                    </HStack>
                </Card.Footer>
            </Link>
        </Card.Root>
    )
}
