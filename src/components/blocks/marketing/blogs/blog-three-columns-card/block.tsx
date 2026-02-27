import {
    Container, SimpleGrid, Stack
} from "@chakra-ui/react"
import { ArticlePreviewCard } from "./article-preview-card"
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
                    alignItems="center"
                    textAlign="center"
                />
                <SimpleGrid columns={{
                    base: 1, md: 2, lg: 3
                }} gap={{ base: "12", lg: "8" }}>
                    {posts.map((post) => (
                        <ArticlePreviewCard key={post.id} post={post} />
                    ))}
                </SimpleGrid>
            </Stack>
        </Container>
    )
}
