import {
 Box, Flex, Heading, HStack, RatingGroup, Span, Stack, Text 
} from "@chakra-ui/react"
import { MdThumbDownOffAlt, MdThumbUpOffAlt } from "react-icons/md"
import type { ReviewData } from "./types"

interface ReviewItemProps {
  data: ReviewData
}

export const ReviewItem = (props: ReviewItemProps) => {
  const { data } = props
  return (
    <Flex gap={{ base: "8", lg: "24" }} my="6">
      <Stack maxW="200px">
        <Text fontSize="md" fontWeight="medium">
          {data.author}{" "}
          <Span>
            {data.user?.verifiedBuyer && (
              <Span fontWeight="normal" hideBelow="md">
                {" "}
                | Verified Buyer
              </Span>
            )}
          </Span>
        </Text>
        <Text textStyle="sm" color="fg.muted">
          {data.createdAt}
        </Text>
      </Stack>
      <Stack gap="4" maxWidth="xl" margin="auto">
        <RatingGroup.Root readOnly defaultValue={data.rating} size="sm">
          <RatingGroup.HiddenInput />
          <RatingGroup.Control />
        </RatingGroup.Root>
        <Heading size="md" fontWeight="medium">
          {data.title}
        </Heading>
        <Text>{data.comment}</Text>
      </Stack>
      <Box alignSelf="flex-end" hideBelow="md" color="fg.muted">
        <Text textStyle="sm">Was this review helpful?</Text>
        <HStack>
          <MdThumbUpOffAlt />1
          <MdThumbDownOffAlt />0
        </HStack>
      </Box>
    </Flex>
  )
}
