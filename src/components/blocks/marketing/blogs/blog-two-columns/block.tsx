import {
    Container, SimpleGrid, Stack
} from "@chakra-ui/react"
import { ArticlePreview } from "./article-preview"
import { posts } from "./data"
import { PageHeader } from "./page-header"

const description = "Our database of component patterns and examples is constantly growing. " +
    "Check back often for new additions and updates."

export const Block = () => {
    return (
        <Container py={{ base: "16", md: "24" }}>
            <Stack gap={{ base: "12", md: "16" }}>
                <PageHeader
                    tagline="Blog"
                    headline="Latest Insights"
                    description={description}
                />
                <SimpleGrid columns={{ base: 1, md: 2 }} gap="12">
                    {posts.slice(0, 2).map((post) => (
                        <ArticlePreview key={post.id} post={post} />
                    ))}
                </SimpleGrid>
            </Stack>
        </Container>
    )
}
