import {
    Card,
    Container,
    Icon,
    SimpleGrid,
    Text,
} from "@chakra-ui/react"
import { CollectionIcon } from "./collection-icon"
import { collectionQuery } from "./data"

export const Block = () => {
    const collections = collectionQuery.get()
    return (
        <Container maxW="6xl" py="16">
            <SimpleGrid columns={{
                base: 1, md: 2, lg: 3
            }} gap="8">
                {collections.map((collection) => (
                    <Card.Root variant="subtle" key={collection.id}>
                        <Card.Body gap="1">
                            <Icon size="md">
                                <CollectionIcon value={collection.icon} />
                            </Icon>
                            <Card.Title mt="4">{collection.title}</Card.Title>
                            <Text color="fg.muted" textStyle="sm">
                                {collection.description}
                            </Text>
                        </Card.Body>
                        <Card.Footer>
                            <Text color="fg.muted" textStyle="sm">
                                {collection.articles.length} articles
                            </Text>
                        </Card.Footer>
                    </Card.Root>
                ))}
            </SimpleGrid>
        </Container>
    )
}
