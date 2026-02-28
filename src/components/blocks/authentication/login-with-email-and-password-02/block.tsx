import {
    Button,
    Card,
    Container,
    Heading,
    HStack,
    Input,
    Link,
    Stack,
    Text,
    VisuallyHidden,
} from "@chakra-ui/react"
import {
 BsGithub, BsGoogle, BsTwitter 
} from "react-icons/bs"
import { Field } from "@/components/ui/field"
import { PasswordInput } from "@/components/ui/password-input"
import { Logo } from "./logo"

export const Block = () => (
    <Container maxW="md" py={{ base: "12", md: "24" }}>
        <Stack gap="8">
            <Logo />
            <Heading size={{ base: "2xl", md: "3xl" }} textAlign="center">
                Log in to your account
            </Heading>
            <Card.Root>
                <Card.Body gap="6">
                    <Stack gap="5">
                        <Field label="Email">
                            <Input type="email" />
                        </Field>
                        <Field label="Password">
                            <PasswordInput />
                        </Field>
                    </Stack>
                    <HStack justify="space-between">
                        <Link variant="plain" href="#">
                            Forgot password?
                        </Link>
                    </HStack>
                    <Stack gap="4">
                        <Button>Sign in</Button>
                        <HStack>
                            <Button variant="outline" flex="1">
                                <VisuallyHidden>Sign in with Google</VisuallyHidden>
                                <BsGoogle />
                            </Button>
                            <Button variant="outline" flex="1">
                                <VisuallyHidden>Sign in with Twitter</VisuallyHidden>
                                <BsTwitter />
                            </Button>
                            <Button variant="outline" flex="1">
                                <VisuallyHidden>Sign in with GitHub</VisuallyHidden>
                                <BsGithub />
                            </Button>
                        </HStack>
                    </Stack>
                </Card.Body>
            </Card.Root>

            <Text textStyle="sm" color="fg.muted" textAlign="center">
                Don't have an account?{" "}
                <Link variant="underline" href="#">
                    Sign up
                </Link>
            </Text>
        </Stack>
    </Container>
)
