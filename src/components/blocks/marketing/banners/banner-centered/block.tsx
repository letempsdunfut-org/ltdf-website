import {
 Box, Button, Container, Span, Stack 
} from "@chakra-ui/react"
import { LuTriangleAlert } from "react-icons/lu"

export const Block = () => {
    return (
        <Box bg="colorPalette.subtle">
            <Container py="2">
                <Stack
                    gap="4"
                    justify="center"
                    align={{ md: "center" }}
                    direction={{ base: "column", md: "row" }}
                >
                    <LuTriangleAlert />
                    <Box>
                        Your have <Span fontWeight="medium">9 days</Span> left in your trial. Renew now to
                        continue using the platform.
                    </Box>
                    <Button size="xs" textStyle="sm">
                        Upgrade
                    </Button>
                </Stack>
            </Container>
        </Box>
    )
}
