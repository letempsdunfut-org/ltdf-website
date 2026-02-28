import {
 Box, Flex, HStack, Text, VStack 
} from "@chakra-ui/react"
import { type StepData, stepsData } from "./data"

export const Block = () => {
  return (
    <Box p="6">
      <VStack gap="0" align="stretch">
        {stepsData.map((step: StepData, index: number) => (
          <Step key={step.id} step={step} stepNumber={index + 1} />
        ))}
      </VStack>
    </Box>
  )
}

interface DocsStepProps {
  step: StepData
  stepNumber: number
}

const Step = ({ step, stepNumber }: DocsStepProps) => {
  return (
    <Box
      pl="6"
      py="4"
      id={step.id}
      position="relative"
      borderLeftWidth="1px"
      borderLeftColor="border.muted"
    >
      <HStack gap="4" align="flex-start">
        <Flex
          top="4"
          left="-4"
          boxSize="8"
          rounded="l2"
          bg="bg.muted"
          borderWidth={1}
          position="absolute"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="fg.muted" textStyle="sm" fontWeight="semibold">
            {stepNumber}
          </Text>
        </Flex>

        <VStack gap="3" align="stretch" flex={1} ml="4">
          <Text as="h3" textStyle="xl" fontWeight="bold" color="fg">
            {step.title}
          </Text>
          <Text color="fg.muted" textStyle="md">
            {step.description}
          </Text>
        </VStack>
      </HStack>
    </Box>
  )
}
