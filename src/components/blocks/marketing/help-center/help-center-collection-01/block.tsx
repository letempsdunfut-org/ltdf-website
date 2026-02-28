import {
 Card, Container, SimpleGrid, Square, Text 
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
                    <Card.Root key={collection.id}>
                        <Card.Body gap="1">
                            <Square size="10" layerStyle="fill.solid" rounded="l2">
                                <CollectionIcon value={collection.icon} />
                            </Square>
                            <Card.Title mt="3">{collection.title}</Card.Title>
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
