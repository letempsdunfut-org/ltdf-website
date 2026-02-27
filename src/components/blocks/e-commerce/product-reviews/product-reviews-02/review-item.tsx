import {
 Heading, RatingGroup, Stack, Text 
} from "@chakra-ui/react"
import type { ReviewData } from "./types"

interface ReviewItemProps {
  data: ReviewData
}

export const ReviewItem = (props: ReviewItemProps) => {
  const { data } = props
  return (
    <Stack>
      <RatingGroup.Root readOnly defaultValue={data.rating} size="sm">
        <RatingGroup.HiddenInput />
        <RatingGroup.Control />
      </RatingGroup.Root>
      <Text color="fg.muted" fontSize="sm">
        by {data.author}, {data.createdAt}
      </Text>
      <Heading size="md" fontWeight="medium">
        {data.title}
      </Heading>
      <Text>{data.comment}</Text>
    </Stack>
  )
}
