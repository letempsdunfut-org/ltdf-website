import {
 AspectRatio, Avatar, Box, Heading, HStack, Image, Link, Stack, Text 
} from "@chakra-ui/react"
import type { Post } from "./data"

interface ArticlePreviewProps {
    post: Post
    hero?: boolean
}

export const ArticlePreview = (props: ArticlePreviewProps) => {
    const { post, hero } = props
    return (
        <Link href="#" variant="plain" _hover={{ textDecoration: "none" }} className="group">
            <Stack direction={{ base: "column", lg: hero ? "row" : "column" }} gap={{ base: "4", lg: hero ? "8" : "4" }}>
                <Box
                    overflow="hidden"
                    borderRadius="lg"
                    flex={hero ? "1" : undefined}
                    width="full"
                    maxW={hero ? { lg: "50%" } : undefined}
                >
                    <AspectRatio ratio={16 / 9}>
                        <Image
                            src={post.image}
                            alt={post.title}
                            objectFit="cover"
                            transition="scale 0.2s"
                            _groupHover={{ scale: 1.05 }}
                            width="full"
                            height="full"
                        />
                    </AspectRatio>
                </Box>
                <Stack gap="3" flex={hero ? "1" : undefined} justify={hero ? "center" : undefined}>
                    <HStack textStyle="sm" color="fg.muted">
                        <Text color="colorPalette.fg" fontWeight="medium">{post.category}</Text>
                        <Text>•</Text>
                        <Text>{post.publishedAt}</Text>
                    </HStack>
                    <Heading size={hero ? "2xl" : "xl"} _groupHover={{ color: "colorPalette.600" }}>{post.title}</Heading>
                    <Text color="fg.muted" lineClamp={3} textStyle={hero ? "lg" : "md"}>
                        {post.excerpt}
                    </Text>
                    <HStack gap="3" pt="2">
                        <Avatar.Root size={hero ? "md" : "sm"}>
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
