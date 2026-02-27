import {
    Button,
    Center,
    CloseButton,
    Dialog,
    Field,
    Input,
    Portal,
    Stack,
    Textarea,
} from "@chakra-ui/react"

export const Block = () => {
    return (
        <Center minH="2xl">
            <Dialog.Root defaultOpen placement="center" size={{ base: "cover", md: "sm" }}>
                <Dialog.Trigger asChild>
                    <Button size="lg">Open Dialog</Button>
                </Dialog.Trigger>
                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content>
                            <Dialog.Header>
                                <Stack gap="1">
                                    <Dialog.Title fontWeight="medium">Let's Start a Conversation</Dialog.Title>
                                    <Dialog.Description>
                                        Have questions? We'd love to hear from you. Send us a message and we'll respond
                                        as soon as possible.
                                    </Dialog.Description>
                                </Stack>
                            </Dialog.Header>
                            <Dialog.Body px="6">
                                <Stack gap={{ base: "6", md: "8" }} as="form">
                                    <Stack gap={{ base: "4", md: "6" }}>
                                        <Field.Root>
                                            <Field.Label>Name</Field.Label>
                                            <Input />
                                        </Field.Root>
                                        <Field.Root>
                                            <Field.Label>E-Mail</Field.Label>
                                            <Input />
                                        </Field.Root>
                                        <Field.Root>
                                            <Field.Label>Message</Field.Label>
                                            <Textarea placeholder="Tell us how we can assist you today" rows={4} />
                                        </Field.Root>
                                    </Stack>
                                </Stack>
                            </Dialog.Body>
                            <Dialog.Footer>
                                <Dialog.ActionTrigger asChild>
                                    <Button variant="outline" colorPalette="gray">
                                        Cancel
                                    </Button>
                                </Dialog.ActionTrigger>
                                <Button>Submit</Button>
                            </Dialog.Footer>
                            <Dialog.CloseTrigger asChild>
                                <CloseButton size="sm" colorPalette="gray" />
                            </Dialog.CloseTrigger>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>
        </Center>
    )
}
