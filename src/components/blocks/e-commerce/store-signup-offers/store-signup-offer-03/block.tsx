import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react"
import { Logo } from "./logo"

const description = "Everything you need to build great products. " +
  "Our platform offers a wide range of features to help you succeed."

export const Block = () => (
  <Container maxW="4xl" px="0" py={{ base: "12", md: "24" }}>
    <Flex flex="1" borderWidth="1px" borderRadius="l1" overflow="hidden">
      <Stack gap={{ base: "6", md: "10" }} flex="1" px="8" py="12">
        <Logo />
        <Text fontSize="lg" color="fg.muted" maxW="2xl" mx="auto">
          {description}
        </Text>
        <Stack gap="1" textAlign="center">
          <Heading size="4xl">Enjoy 15% Off</Heading>
          <Text textStyle="lg" fontWeight="medium">
            When you spend $45 or more
          </Text>
        </Stack>

        <Stack gap="3">
          <Text textStyle="lg" fontWeight="medium">
            For new subscribers opting into email & SMS
          </Text>
          <Text textStyle="sm" color="fg.muted">
            By subscribing to CK Skincare, you agree to our{" "}
            <Link variant="underline" href="#">
              Terms of use
            </Link>{" "}
            &{" "}
            <Link variant="underline" href="#">
              Privacy policy
            </Link>
            . You also consent to receiving exclusive updates and marketing emails directly from us.
          </Text>

          <Stack mt="3">
            <Input type="email" placeholder="Email Address" textAlign="center" />
            <Button type="submit" size="lg">
              Sign up
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Box flex="1" hideBelow="lg">
        <Image
          src={"https://images.unsplash.com/photo-1643379852776-308d9bbf8645?w=800&auto=format" +
            "&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY0fHx8ZW58MHx8fHx8"}
          alt="fashion bag"
          objectFit="cover"
          width="full"
          height="full"
          maxH="lg"
        />
      </Box>
    </Flex>
  </Container>
)
