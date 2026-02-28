import {
 Container, HStack, Link, Text, Theme 
} from "@chakra-ui/react"
import {
 LuArrowRight, LuGlobe, LuMessageSquare, LuSearch 
} from "react-icons/lu"

export const Block = () => {
    return (
        <Theme appearance="dark" bg="bg" borderBottomWidth="1px">
            <Container maxW="7xl">
                <HStack py="4" justify="space-between">
                    <HStack gap="4">
                        <Text>Get the key insights from your data</Text>
                        <Link variant="underline" flexShrink="0" whiteSpace="nowrap">
                            Register now <LuArrowRight />
                        </Link>
                    </HStack>
                    <HStack gap="6" hideBelow="lg">
                        <Link>+12 (345) 678-0123</Link>
                        <Link>
                            <LuMessageSquare /> Support
                        </Link>
                        <Link>
                            <LuSearch /> Search
                        </Link>
                        <Link>
                            <LuGlobe />
                            United States
                        </Link>
                    </HStack>
                    <Link hideFrom="lg" hideBelow="md">
                        <LuGlobe />
                        United States
                    </Link>
                </HStack>
            </Container>
        </Theme>
    )
}
