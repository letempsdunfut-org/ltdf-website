import {
    Button,
    Container,
    Field,
    Heading,
    Input,
    RatingGroup,
    Stack,
    Textarea,
} from "@chakra-ui/react"

export const Block = (props: React.ComponentProps<"form">) => (
    <Container maxW="xl" py={{ base: "12", md: "24" }}>
        <form {...props}>
            <Stack gap="6" borderWidth="1px" padding="12" borderRadius="l2">
                <Heading fontSize="2xl" fontWeight="semibold">
                    Write a review
                </Heading>
                <Field.Root>
                    <Field.Label>Name</Field.Label>
                    <Input
                        name="name"
                        placeholder="Your name"
                        css={{ "--focus-color": "colorPalette.solid" }}
                    />
                </Field.Root>

                <Field.Root>
                    <Field.Label>Email</Field.Label>
                    <Input
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        css={{ "--focus-color": "colorPalette.solid" }}
                    />
                </Field.Root>

                <Field.Root>
                    <Field.Label>Rating</Field.Label>
                    <RatingGroup.Root readOnly defaultValue={2} size="lg">
                        <RatingGroup.HiddenInput />
                        <RatingGroup.Control />
                    </RatingGroup.Root>
                </Field.Root>

                <Field.Root>
                    <Field.Label>Title</Field.Label>
                    <Input
                        name="title"
                        placeholder="Your title"
                        css={{ "--focus-color": "colorPalette.solid" }}
                    />
                </Field.Root>

                <Field.Root>
                    <Field.Label>Comment</Field.Label>
                    <Textarea
                        name="comment"
                        placeholder="Your comment"
                        rows={4}
                        css={{ "--focus-color": "colorPalette.solid" }}
                        resize="none"
                    />
                </Field.Root>

                <Button type="submit" alignSelf="start" size="lg">
                    Submit review
                </Button>
            </Stack>
        </form>
    </Container>
)
