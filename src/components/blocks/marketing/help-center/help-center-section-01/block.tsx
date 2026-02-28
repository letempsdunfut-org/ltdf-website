import {
    Breadcrumb,
    Card,
    Container,
    Heading,
    HStack,
    Icon,
    Square,
    Stack,
    Text,
} from "@chakra-ui/react"
import { LuArrowRight } from "react-icons/lu"
import { CollectionIcon } from "./collection-icon"
import { collectionQuery } from "./data"

export const Block = () => {
    const collection = collectionQuery.find("getting-started")
    const articles = collectionQuery.findArticles(collection.id)
    return (
        <Container maxW="6xl" py="16">
            <Stack gap="8">
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

                <Stack gap="4">
                    <Square size="16" layerStyle="fill.subtle" rounded="l2">
                        <Icon size="xl">
                            <CollectionIcon value={collection.icon} />
                        </Icon>
                    </Square>
                    <Heading as="h1" size="3xl">
                        {collection.title}
                    </Heading>
                    <Text color="fg.muted" textStyle="sm">
                        {articles.length} articles
                    </Text>
                </Stack>

                <Card.Root size="sm">
                    <Card.Body>
                        <Stack gap="2">
                            {articles.map((article) => (
                                <HStack
                                    py="3"
                                    px="2.5"
                                    rounded="l2"
                                    key={article.id}
                                    asChild
                                    justify="space-between"
                                    focusRing="inside"
                                    transition="backgrounds"
                                    _hover={{ layerStyle: "fill.subtle" }}
                                >
                                    <a href={article.url || "#"}>
                                        <Text>{article.title}</Text>
                                        <LuArrowRight />
                                    </a>
                                </HStack>
                            ))}
                        </Stack>
                    </Card.Body>
                </Card.Root>
            </Stack>
        </Container>
    )
}
