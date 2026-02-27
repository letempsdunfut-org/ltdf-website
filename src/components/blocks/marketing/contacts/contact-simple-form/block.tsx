import { Container, Stack } from "@chakra-ui/react"
import { ContactForm } from "./contact-form"
import { PageHeader } from "./page-header"

export const Block = () => (
    <Container py={{ base: "16", md: "24" }}>
        <Stack gap={{ base: "12", md: "16" }} alignItems="center">
            <PageHeader
                tagline="Get in Touch"
                headline="Let's Start a Conversation"
                description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
                alignItems="center"
                textAlign="center"
            />
            <ContactForm />
        </Stack>
    </Container>
)
