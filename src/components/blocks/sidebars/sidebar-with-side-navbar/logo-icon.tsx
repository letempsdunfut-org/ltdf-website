import { Image, type ImageProps } from "@chakra-ui/react"

export const LogoIcon = (props: ImageProps) => (
    <Image
        src="https://placehold.co/50x50?text=Icon"
        alt="Logo Icon"
        boxSize="8"
        objectFit="contain"
        {...props}
    />
)
