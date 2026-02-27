import { Image, type ImageProps } from "@chakra-ui/react"

interface LogoProps extends ImageProps {
    monochrome?: boolean
}

const Logo = ({
 text, monochrome, ...props 
}: LogoProps & { text: string }) => (
    <Image
        src={`https://placehold.co/150x40?text=${encodeURIComponent(text)}`}
        alt={text}
        h="8"
        objectFit="contain"
        filter={monochrome ? "grayscale(100%)" : undefined}
        {...props}
    />
)

export const Logo1 = (props: LogoProps) => <Logo text="Logo 1" {...props} />
export const Logo2 = (props: LogoProps) => <Logo text="Logo 2" {...props} />
export const Logo3 = (props: LogoProps) => <Logo text="Logo 3" {...props} />
export const Logo4 = (props: LogoProps) => <Logo text="Logo 4" {...props} />
export const Logo5 = (props: LogoProps) => <Logo text="Logo 5" {...props} />
