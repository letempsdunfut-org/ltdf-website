"use client"

import { CodeBlock } from "@chakra-ui/react"
import { reactComponentFile, shikiAdapter } from "./data"

export const Block = () => {
  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <CodeBlock.Root
        mb="8"
        mt="5"
        size="md"
        maxW="4xl"
        mx="auto"
        code={reactComponentFile.code}
        language={reactComponentFile.language}
      >
        <CodeBlock.Header borderBottomWidth="1px">
          <CodeBlock.Title>{reactComponentFile.title}</CodeBlock.Title>
        </CodeBlock.Header>
        <CodeBlock.Content>
          <CodeBlock.Code>
            <CodeBlock.CodeText />
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </CodeBlock.AdapterProvider>
  )
}
