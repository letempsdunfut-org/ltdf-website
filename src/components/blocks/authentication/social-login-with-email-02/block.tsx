import {
    Avatar,
    Box,
    Button,
    Card,
    Image as ChakraImage,
    Container,
    Field,
    Flex,
    Heading,
    HStack,
    Input,
    Link,
    Stack,
    Text,
} from "@chakra-ui/react"
import {
 LuCalendar, LuLock, LuMail 
} from "react-icons/lu"
import { InputGroup } from "@/components/ui/input-group"
import { Logo } from "./logo"

export const Block = () => (
    <Flex height="full" flex="1">
        <Box flex="1.5" py={{ base: "24", md: "32" }}>
            <Container maxW="md">
                <Stack gap="8">
                    <Logo />
                    <Stack gap={{ base: "2", md: "3" }} textAlign="center">
                        <Heading size={{ base: "2xl", md: "3xl" }}>Sign in to Chakra</Heading>
                        <Text color="fg.muted">Start using Chakra in your projects</Text>
                    </Stack>

                    <Stack gap="6">
                        <Stack gap="5">
                            <Field.Root>
                                <Field.Label>Email</Field.Label>
                                <InputGroup startElement={<LuMail />} width="full">
                                    <Input type="email" placeholder="me@example.com" />
                                </InputGroup>
                            </Field.Root>
                            <Field.Root>
                                <Field.Label>Password</Field.Label>
                                <InputGroup startElement={<LuLock />} width="full">
                                    <Input type="password" placeholder="••••••••" />
                                </InputGroup>
                            </Field.Root>
                            <Button>Sign in</Button>
                            <Link variant="plain">Forgot password?</Link>
                        </Stack>

                        <Card.Root size="sm" mt="10">
                            <Card.Body>
                                <HStack textStyle="sm">
                                    <Avatar.Root size="xs">
                                        <Avatar.Fallback />
                                        <Avatar.Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" />
                                    </Avatar.Root>
                                    <Text>Want to try Chakra?</Text>
                                    <Link variant="underline" href="#" fontWeight="medium">
                                        Request a demo <LuCalendar />
                                    </Link>
                                </HStack>
                            </Card.Body>
                        </Card.Root>
                    </Stack>
                </Stack>
            </Container>
        </Box>
        <Box flex="1" hideBelow="md">
            <ChakraImage
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000"
                alt="Workspace"
                objectFit="cover"
                h="full"
                w="full"
            />
        </Box>
    </Flex>
)
