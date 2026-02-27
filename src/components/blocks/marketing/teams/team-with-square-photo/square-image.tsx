import {
 Box, Image, type ImageProps 
} from "@chakra-ui/react"

export const SquareImage = (props: ImageProps) => (
    <Box pos="relative">
        <Image
            position="relative"
            zIndex="1"
            boxSize={{ base: "20", md: "28" }}
            borderRadius="l3"
            objectFit="cover"
            {...props}
        />
        <Box
            pos="absolute"
            zIndex="0"
            w={{ base: "20", md: "28" }}
            top="-1.5"
            left="1.5"
            h="100%"
            bg="colorPalette.solid"
            borderRadius="l3"
        />
    </Box>
)
