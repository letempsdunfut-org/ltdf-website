import {
  AspectRatio,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  RatingGroup,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import { reviewData } from "./data"
import { ReviewItem } from "./review-item"

export const Block = () => (
  <Container py={{ base: "16", md: "24" }}>
    <Flex gap={{ base: "8", md: "24" }} flexDirection={{ base: "column", lg: "row" }}>
      <Stack gap={{ base: "4", md: 8 }}>
        <Heading size="3xl">Fashion Costume Items</Heading>
        <Text textStyle="5xl" fontWeight="bold">
          4.1/5
        </Text>
        <HStack>
          <RatingGroup.Root readOnly defaultValue={4} size="sm">
            <RatingGroup.HiddenInput />
            <RatingGroup.Control />
          </RatingGroup.Root>
          <Link variant="underline" color="fg.muted">
            480 reviews
          </Link>
        </HStack>
        <SimpleGrid columns={{ base: 2, md: 4 }} gap="4">
          {reviewData.slice(0, 4).flatMap((review) =>
            review.images?.map((image) => (
              <AspectRatio key={image.id} ratio={1 / 1}>
                <Image src={image.src} alt={`Review ${review.title}`} borderRadius="l2" />
              </AspectRatio>
            )),
          )}
        </SimpleGrid>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 2 }} flex="1" gap={{ base: "4", lg: "8" }}>
        {reviewData.map((data) => (
          <ReviewItem key={data.id} data={data} />
        ))}
      </SimpleGrid>
    </Flex>
  </Container>
)
