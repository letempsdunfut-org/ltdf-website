import { Image, type ImageProps } from "@chakra-ui/react"

interface LogoProps extends ImageProps {
    monochrome?: boolean
}

export const LogoIcon1 = ({ monochrome, ...props }: LogoProps) => (
    <Image
        src="https://placehold.co/40x40?text=L1"
        alt="Logo 1"
        h="10"
        w="10"
        objectFit="contain"
        filter={monochrome ? "grayscale(100%)" : undefined}
        {...props}
    />
)

export const LogoIcon2 = ({ monochrome, ...props }: LogoProps) => (
    <Image
        src="https://placehold.co/40x40?text=L2"
        alt="Logo 2"
        h="10"
        w="10"
        objectFit="contain"
        filter={monochrome ? "grayscale(100%)" : undefined}
        {...props}
    />
)
