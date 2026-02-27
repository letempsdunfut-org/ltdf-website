import {
 Avatar, Box, Heading, HStack, Image, Link, Stack, Text 
} from "@chakra-ui/react"
import { Post } from "./data"

interface ArticlePreviewProps {
    post: Post
}

export const ArticlePreview = (props: ArticlePreviewProps) => {
    const { post } = props
    return (
        <Link href="#" variant="plain" _hover={{ textDecoration: "none" }} className="group">
            <Stack gap="4">
                <Box overflow="hidden" borderRadius="lg">
                    <Image
                        src={post.image}
                        alt={post.title}
                        aspectRatio="16/9"
                        objectFit="cover"
                        transition="scale 0.2s"
                        _groupHover={{ scale: 1.05 }}
                    />
                </Box>
                <Stack gap="3">
                    <HStack textStyle="sm" color="fg.muted">
                        <Text color="colorPalette.fg" fontWeight="medium">{post.category}</Text>
                        <Text>•</Text>
                        <Text>{post.publishedAt}</Text>
                    </HStack>
                    <Heading size="xl" _groupHover={{ color: "colorPalette.600" }}>{post.title}</Heading>
                    <Text color="fg.muted" lineClamp={3}>
                        {post.excerpt}
                    </Text>
                    <HStack gap="3" pt="2">
                        <Avatar.Root size="sm">
                            <Avatar.Fallback name={post.author.name} />
                            <Avatar.Image src={post.author.avatarUrl} />
                        </Avatar.Root>
                        <Stack gap="0" textStyle="sm">
                            <Text fontWeight="medium">{post.author.name}</Text>
                            <Text color="fg.muted">{post.readTime} read</Text>
                        </Stack>
                    </HStack>
                </Stack>
            </Stack>
        </Link>
    )
}
