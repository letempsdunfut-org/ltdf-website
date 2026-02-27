import { Image, type ImageProps } from "@chakra-ui/react"

export const LightModeIcon = (props: ImageProps) => (
    <Image
        src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=300&auto=format&fit=crop"
        alt="Light mode"
        rounded="md"
        objectFit="cover"
        {...props}
    />
)

export const DarkModeIcon = (props: ImageProps) => (
    <Image
        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=300&auto=format&fit=crop"
        alt="Dark mode"
        rounded="md"
        objectFit="cover"
        {...props}
    />
)
