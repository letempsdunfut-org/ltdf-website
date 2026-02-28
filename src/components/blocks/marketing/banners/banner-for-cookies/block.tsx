import {
 Box, Button, Container, HStack, Icon, Link, Stack, Text 
} from "@chakra-ui/react"
import { LuCookie } from "react-icons/lu"

export const Block = () => {
    return (
        <Box borderBottomWidth="1px" bg="bg.panel">
            <Container py={{ base: "4", md: "3.5" }}>
                <Stack
                    gap="4"
                    justifyContent={{ base: "start", md: "space-between" }}
                    flexDirection={{ base: "column", md: "row" }}
                >
                    <Stack
                        direction={{ base: "column", md: "row" }}
                        alignItems={{ base: "start", md: "center" }}
                        gap={{ base: "1", md: "2" }}
                    >
                        <HStack gap="2">
                            <Icon size="md">
                                <LuCookie />
                            </Icon>
                            <Text fontWeight="medium" display={{ md: "none" }}>
                                Cookie Consent
                            </Text>
                        </HStack>
                        <Text color="fg.muted">
                            We use third-party cookies in order to personalise your experience. Read our{" "}
                            <Link href="#">Cookie Policy</Link>.
                        </Text>
                    </Stack>
                    <HStack gap="3">
                        <Button variant="outline" colorPalette="gray">
                            Reject
                        </Button>
                        <Button>Allow</Button>
                    </HStack>
                </Stack>
            </Container>
        </Box>
    )
}
