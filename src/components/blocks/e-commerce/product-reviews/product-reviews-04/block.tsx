import {
  Heading,
  HStack,
  Input,
  InputGroup,
  RatingGroup,
  Span,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"
import { reviewData } from "./data"
import { ReviewItem } from "./review-item"

export const Block = () => (
  <Stack
    maxW="7xl"
    mx="auto"
    px={{
 base: "4", md: "8", lg: "12" 
}}
    py={{
 base: "6", md: "8", lg: "12" 
}}
    gap="6"
  >
    <VStack>
      <Heading textStyle="3xl">Reviews</Heading>
      <HStack>
        <RatingGroup.Root readOnly defaultValue={4} size="sm">
          <RatingGroup.HiddenInput />
          <RatingGroup.Control />
        </RatingGroup.Root>
        <Span> 4 | </Span>
        <Text>Based on 3 reviews</Text>
      </HStack>
    </VStack>
    <InputGroup w={{ base: "100%", lg: "40%" }} startElement={<LuSearch />}>
      <Input placeholder="Search reviews" />
    </InputGroup>
    {reviewData.slice(0, 3).map((data) => (
      <ReviewItem key={data.id} data={data} />
    ))}
  </Stack>
)
