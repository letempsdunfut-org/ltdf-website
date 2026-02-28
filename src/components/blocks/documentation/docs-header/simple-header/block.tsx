"use client"

import {
 Button, Container, Flex, Heading, Span, Stack, Text, useClipboard 
} from "@chakra-ui/react"
import { LuCheck, LuCopy } from "react-icons/lu"

export const Block = () => {
  return (
    <Container py={{ base: "8", md: "12" }} maxW="3xl">
      <Stack gap="4">
        <Span textStyle="sm" color="colorPalette.fg">
          Getting started
        </Span>

        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "stretch" }}
          gap="4"
          wrap="wrap"
        >
          <Heading size={{ base: "3xl", md: "4xl" }} fontWeight="bold" flex="1">
            What is Chakra UI?
          </Heading>

          <CopyButton value="**Markdown** page" />
        </Flex>

        <Text maxW="3xl" color="fg.muted">
          Get started with our platform in minutes. Follow this guide to set up your development
          environment and start building.
        </Text>
      </Stack>
    </Container>
  )
}

const CopyButton = (props: { value: string }) => {
  const { value } = props
  const clipboard = useClipboard({ value })
  return (
    <Button variant="outline" size="sm" onClick={clipboard.copy}>
      {clipboard.copied ? <LuCheck /> : <LuCopy />}
      {clipboard.copied ? "Copied" : "Copy page"}
    </Button>
  )
}
