import {
 Center, Flex, type FlexProps 
} from "@chakra-ui/react"

const Mirror = (props: FlexProps) => (
    <>
        <Flex {...props} />
        <Flex aria-hidden {...props} />
    </>
)

interface MarqueeProps extends FlexProps {
    items: React.ReactNode[]
    gutter?: FlexProps["marginEnd"]
    speed?: FlexProps["animationDuration"]
}

export const Marquee = (props: MarqueeProps) => {
    const {
 items, gutter = "3.75rem", speed = "10s", ...rest 
} = props
    const animation = `slide-to-left-full ${speed} linear infinite`
    return (
        <Flex
            {...rest}
            overflow="hidden"
            maskImage="linear-gradient(var(--mask-direction,to right),#0000,#000 10%,#000 90%,#0000)"
        >
            <Mirror animation={animation}>
                {items.map((item, index) => (
                    <Center marginEnd={gutter} key={index}>
                        {item}
                    </Center>
                ))}
            </Mirror>
        </Flex>
    )
}
