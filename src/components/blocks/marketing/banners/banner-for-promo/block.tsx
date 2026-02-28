import {
 Box, Container, HStack, Link, Span, Text 
} from "@chakra-ui/react"
import { LuPercent } from "react-icons/lu"

export const Block = () => {
    return (
        <Box bg="colorPalette.solid" color="colorPalette.contrast">
            <Container py="2">
                <HStack justify="space-between">
                    <Text
                        textStyle="sm"
                        textAlign={{ md: "center" }}
                        fontWeight="medium"
                        flex="1"
                        _icon={{ display: "inline-block" }}
                    >
                        <LuPercent /> Black Friday Sale.
                        <Span me="3">
                            Use code <strong>WINTER30</strong> to get 30% off
                        </Span>
                        <Link textStyle="sm" variant="underline" href="/pricing" color="inherit">
                            Buy Now
                        </Link>
                    </Text>
                </HStack>
            </Container>
        </Box>
    )
}
