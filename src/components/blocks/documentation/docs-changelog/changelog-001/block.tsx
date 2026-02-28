import {
 Box, Flex, Heading, Link, Stack, Text, Timeline 
} from "@chakra-ui/react"
import { changelogData } from "./data"

export const Block = () => {
  return (
    <Stack gap="20" align="stretch">
      <Stack textAlign="center">
        <Heading size="4xl">Changelog</Heading>
        <Text color="fg.muted" textStyle="lg">
          Stay up to date with the latest changes and improvements
        </Text>
      </Stack>

      <Box position="relative">
        <Timeline.Root size="sm" variant="solid">
          {changelogData.map((entry) => (
            <Timeline.Item key={entry.version}>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator />
              </Timeline.Connector>
              <Timeline.Content>
                <Flex
                  gap="6"
                  direction={{ base: "column", md: "row" }}
                  align={{ base: "stretch", md: "flex-start" }}
                >
                  <Box
                    top="6"
                    flex="none"
                    minW={{ base: "auto", md: "200px" }}
                    position={{ base: "static", md: "sticky" }}
                  >
                    <Stack gap="1">
                      <Timeline.Title fontSize="lg" fontWeight="bold">
                        {entry.version}
                      </Timeline.Title>
                      <Timeline.Description textStyle="sm" color="fg.muted">
                        {entry.date}
                      </Timeline.Description>
                    </Stack>
                  </Box>

                  <Box flex="1">
                    <Stack gap="4">
                      {entry.changes.map((change, changeIndex) => (
                        <Flex px={{ base: "0", md: "4" }} pb="4" gap="3" key={changeIndex}>
                          <Stack gap="1">
                            <Flex align="center" gap="2" wrap="wrap">
                              <Timeline.Title fontSize="md" fontWeight="medium">
                                {change.title}
                              </Timeline.Title>
                            </Flex>
                            {change.description && (
                              <Timeline.Description color="fg.muted" textStyle="sm">
                                {change.description}
                              </Timeline.Description>
                            )}
                            {change.link && (
                              <Link
                                textStyle="sm"
                                href={change.link}
                                fontWeight="medium"
                                textDecoration="underline"
                                _hover={{ textDecoration: "none" }}
                              >
                                Learn more →
                              </Link>
                            )}
                          </Stack>
                        </Flex>
                      ))}
                    </Stack>
                  </Box>
                </Flex>
              </Timeline.Content>
            </Timeline.Item>
          ))}
        </Timeline.Root>
      </Box>
    </Stack>
  )
}
