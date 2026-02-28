import { Box, type BoxProps } from "@chakra-ui/react"
import Image from "next/image"

export const ImagePlaceholder = (props: BoxProps) => (
    <Box bg="bg.muted" h="full" position="relative" overflow="hidden" {...props}>
        <Image
            src="/images/onboarding-hero.png"
            alt="Onboarding"
            fill
            style={{ objectFit: "cover" }}
        />
    </Box>
)
