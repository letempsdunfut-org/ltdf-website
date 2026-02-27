import {
 Button, Field, Input, Stack, Textarea 
} from "@chakra-ui/react"

export const ContactForm = () => {
    return (
        <Stack as="form" gap={{ base: "6", md: "8" }} maxW="lg" width="full">
            <Stack gap={{ base: "4", md: "6" }}>
                <Field.Root>
                    <Field.Label>Name</Field.Label>
                    <Input size="lg" />
                </Field.Root>
                <Field.Root>
                    <Field.Label>E-Mail</Field.Label>
                    <Input size="lg" />
                </Field.Root>
                <Field.Root>
                    <Field.Label>Message</Field.Label>
                    <Textarea placeholder="Tell us how we can assist you today" size="lg" rows={4} />
                </Field.Root>
            </Stack>
            <Button size={{ base: "lg", md: "xl" }} alignSelf={{ base: "stretch", sm: "center" }}>
                Submit
            </Button>
        </Stack>
    )
}
