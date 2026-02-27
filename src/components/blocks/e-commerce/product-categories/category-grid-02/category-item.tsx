import {
 Box, type BoxProps, Button, Heading, Image, Stack, Text 
} from "@chakra-ui/react"
import type { CategoryItemData } from "./data"

interface CategoryItemProps extends BoxProps {
    data: CategoryItemData
    objectFit?: BoxProps["objectFit"]
}

export const CategoryItem = (props: CategoryItemProps) => {
    const {
 data, objectPosition = "cover", ...rest 
} = props
    return (
        <Box borderRadius="l3" overflow="hidden" position="relative" width="full" {...rest}>
            <Image
                boxSize="full"
                maxHeight={{ base: "240px", md: "100%" }}
                src={data.src}
                alt={data.title}
                objectFit="cover"
                objectPosition={objectPosition}
            />
            <Box
                position="absolute"
                inset="0"
                bg="black/20"
                bgImage="linear-gradient(to top, var(--gradient-from) 20%, var(--gradient-to))"
                gradientFrom="blackAlpha.300"
                gradientTo="blackAlpha.700"
                px={{ base: "6", md: "10" }}
                py={{ base: "6", md: "10" }}
                boxSize="full"
            >
                <Stack gap="3" color="white">
                    <Heading size="2xl">{data.title}</Heading>
                    {data.description && (
                        <Text maxW="xs" mb="2">
                            {data.description}
                        </Text>
                    )}
                    <Button variant="subtle" colorPalette="gray" alignSelf="start" asChild>
                        <a href={data.url}>Shop now</a>
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
}
