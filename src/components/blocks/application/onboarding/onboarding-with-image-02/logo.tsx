import { Image, type ImageProps } from "@chakra-ui/react"

export const Logo = (props: ImageProps) => (
    <Image
        src="https://placehold.co/140x40?text=Logo"
        alt="Logo"
        h="8"
        objectFit="contain"
        {...props}
    />
)
