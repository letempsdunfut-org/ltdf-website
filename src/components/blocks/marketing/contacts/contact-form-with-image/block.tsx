import {
 Container, Image, SimpleGrid, Stack 
} from "@chakra-ui/react"
import { ContactForm } from "./contact-form"
import { SectionHeader } from "./section-header"

export const Block = () => (
    <Container py={{ base: "16", md: "24" }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: "12", md: "16" }}>
            <Stack gap={{ base: "8", md: "12" }}>
                <SectionHeader
                    tagline="Get in Touch"
                    headline="Let's Start a Conversation"
                    description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
                />
                <ContactForm />
            </Stack>
            <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Contact Us"
                objectFit="cover"
                width="full"
                height={{ base: "sm", md: "full" }}
                rounded="2xl"
            />
        </SimpleGrid>
    </Container>
)
