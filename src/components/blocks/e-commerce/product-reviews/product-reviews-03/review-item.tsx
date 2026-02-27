import {
 Flex, HStack, Icon, RatingGroup, Span, Stack, Text 
} from "@chakra-ui/react"
import { FiCheckCircle } from "react-icons/fi"
import type { ReviewData } from "./types"

interface ReviewItemProps {
  data: ReviewData
}

export const ReviewItem = (props: ReviewItemProps) => {
  const { data } = props
  return (
    <Stack gap="4" padding="6" borderWidth="1px" borderRadius="l1">
      <Flex justify="space-between">
        <RatingGroup.Root readOnly defaultValue={data.rating} size="sm">
          <RatingGroup.HiddenInput />
          <RatingGroup.Control />
        </RatingGroup.Root>
        <HStack>
          <Text color="fg.muted" fontSize="sm">
            {data.createdAt}
          </Text>
          {data.user?.verifiedBuyer && (
            <Icon color="colorPalette.solid">
              <FiCheckCircle />
            </Icon>
          )}
        </HStack>
      </Flex>
      <Text>{data.comment}</Text>
      <HStack>
        <Text fontWeight="medium">{data.author}</Text>
        <Span>•</Span>
        <Text>{data.country}</Text>
      </HStack>
    </Stack>
  )
}
