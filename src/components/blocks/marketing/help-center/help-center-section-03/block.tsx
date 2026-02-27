import {
 Breadcrumb, Container, Heading, HStack, Icon, Stack, Text 
} from "@chakra-ui/react"
import { LuArrowRight, LuSquarePen } from "react-icons/lu"
import { CollectionIcon } from "./collection-icon"
import { collectionQuery } from "./data"

export const Block = () => {
    const collection = collectionQuery.find("about")
    const articles = collectionQuery.findArticles(collection.id)
    return (
        <Container maxW="6xl" py="16">
            <Stack gap="16">
                <Breadcrumb.Root>
                    <Breadcrumb.List>
                        <Breadcrumb.Item>
                            <Breadcrumb.Link href="#">All Collections</Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator />
                        <Breadcrumb.Item>
                            <Breadcrumb.CurrentLink>About</Breadcrumb.CurrentLink>
                        </Breadcrumb.Item>
                    </Breadcrumb.List>
                </Breadcrumb.Root>

                <Stack>
                    <Icon size="xl" mb="2">
                        <CollectionIcon value={collection.icon} />
                    </Icon>
                    <Heading as="h1" size="3xl">
                        {collection.title}
                    </Heading>
                    <Text color="fg.muted" textStyle="sm">
                        {collection.description}
                    </Text>
                    <HStack color="fg.muted" textStyle="sm">
                        <LuSquarePen /> {articles.length} articles
                    </HStack>
                </Stack>

                <Stack gap="2">
                    {articles.map((article) => (
                        <HStack
                            p="4"
                            bg="bg.muted"
                            rounded="l2"
                            key={article.id}
                            asChild
                            justify="space-between"
                            focusRing="inside"
                        >
                            <a href={article.url || "#"}>
                                <Text>{article.title}</Text>
                                <LuArrowRight />
                            </a>
                        </HStack>
                    ))}
                </Stack>
            </Stack>
        </Container>
    )
}
