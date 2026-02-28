import {
    Box, Button, Container, Heading, Input, Link, Stack, Text
} from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { PasswordInput } from "@/components/ui/password-input"
import { Logo as LogoIcon } from "./logo"

export const Block = () => (
    <Box height="100dvh">
        <Container
            maxW={{ base: "md", md: "xl" }}
            py={{ base: "12", md: "24" }}
            height="full"
            display="flex"
            alignItems="center"
        >
            <Stack gap="8" flex="1">
                <Stack gap={{ base: "2", md: "3" }} textAlign="center" align="center">
                    <LogoIcon />
                    <Heading size={{ base: "2xl", md: "3xl" }}>Log in to your account</Heading>
                    <Text color="fg.muted">Start using Chakra in your projects</Text>
                </Stack>

                <Stack gap="6">
                    <Stack gap="5">
                        <Field label="Email">
                            <Input type="email" />
                        </Field>
                        <Field label="Password">
                            <PasswordInput />
                        </Field>
                    </Stack>
                    <Stack gap="4">
                        <Button>Sign in</Button>
                        <Button variant="outline">Sign in with Google</Button>
                    </Stack>
                </Stack>

                <Stack gap="1" textAlign="center">
                    <Text textStyle="sm" color="fg.muted">
                        Don't have an account?{" "}
                        <Link variant="underline" href="#">
                            Sign up
                        </Link>
                    </Text>
                    <Link variant="underline" href="#" color="fg.muted">
                        Forgot password?
                    </Link>
                </Stack>
            </Stack>
        </Container>
    </Box>
)
