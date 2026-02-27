import {
 Avatar, Box, Flex, HStack, IconButton, Stack, Text 
} from "@chakra-ui/react"
import {
 LuArrowDown, LuFolderPlus, LuHeart, LuLandmark 
} from "react-icons/lu"
import { ImagePlaceholder } from "./image-placeholder"

export const Block = () => {
    return (
        <Stack minW="sm" gap="4">
            <Box className="group" height="64" pos="relative" borderWidth="1px" rounded="l3">
                <ImagePlaceholder rounded="inherit" />
                <Flex
                    opacity={{ base: "0", _groupHover: "1" }}
                    transition="opacity 0.2s ease-in-out"
                    rounded="inherit"
                    pos="absolute"
                    inset="0"
                    bgGradient="to-t"
                    gradientFrom="black/20"
                    gradientTo="transparent"
                    gradientVia="transparent"
                    direction="column"
                    justify="flex-end"
                    p="4"
                >
                    <HStack className="chakra-theme dark" colorPalette="gray">
                        <IconButton size="sm" aria-label="Like project">
                            <LuHeart />
                        </IconButton>
                        <IconButton size="sm" aria-label="Add to favorite">
                            <LuFolderPlus />
                        </IconButton>
                        <IconButton size="sm" aria-label="Download">
                            <LuArrowDown />
                        </IconButton>
                    </HStack>
                </Flex>
            </Box>

            <HStack gap="3">
                <Avatar.Root shape="rounded">
                    <Avatar.Fallback>
                        <LuLandmark />
                    </Avatar.Fallback>
                </Avatar.Root>
                <Stack gap="0">
                    <Text fontWeight="medium">Project Name</Text>
                    <Text textStyle="sm" color="fg.muted">
                        Last Edited 3 days ago
                    </Text>
                </Stack>
            </HStack>
        </Stack>
    )
}
