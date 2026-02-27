import { Box, type BoxProps } from "@chakra-ui/react"
import Image from "next/image"

export const ImagePlaceholder = (props: BoxProps) => (
    <Box bg="bg.muted" w="full" h="full" position="relative" overflow="hidden" {...props}>
        <Image
            src="/images/blog-header.png"
            alt="Blog"
            fill
            style={{ objectFit: "cover" }}
        />
    </Box>
)
