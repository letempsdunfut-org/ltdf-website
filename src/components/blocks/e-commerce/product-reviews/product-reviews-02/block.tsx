import {
  Box,
  Button,
  Heading,
  HStack,
  RatingGroup,
  Separator,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"
import { reviewData } from "./data"
import { ReviewItem } from "./review-item"

export const Block = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{
 base: "4", md: "8", lg: "12" 
}}
    py={{
 base: "6", md: "8", lg: "12" 
}}
  >
    <Stack gap="12">
      <Stack
        direction={{ base: "column", md: "row" }}
        gap="4"
        justifyContent="space-between"
        alignItems={{ base: "start", md: "center" }}
      >
        <Stack>
          <Heading textStyle="2xl">Customer reviews</Heading>
          <HStack>
            <RatingGroup.Root readOnly defaultValue={4} size="sm">
              <RatingGroup.HiddenInput />
              <RatingGroup.Control />
            </RatingGroup.Root>
            <Text color="fg.muted">Based on 12 reviews</Text>
          </HStack>
        </Stack>
        <Button size="lg" colorScheme="blue">
          Write a review
        </Button>
      </Stack>
      <Separator display={{ base: "none", md: "flex" }} />
      <SimpleGrid columns={{ base: 1, md: 2 }} columnGap="12" rowGap={{ base: "10", md: "12" }}>
        {reviewData.map((data) => (
          <ReviewItem key={data.id} data={data} />
        ))}
      </SimpleGrid>
      <Button size="lg" variant="outline" alignSelf="center" px="16">
        Load more
      </Button>
    </Stack>
  </Box>
)
