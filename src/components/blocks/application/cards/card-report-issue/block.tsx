"use client"

import {
    Button,
    Card,
    createListCollection,
    Field,
    Input,
    Portal,
    Select,
    Textarea,
} from "@chakra-ui/react"

const frameworks = createListCollection({
    items: ["React", "Solid", "Vue"],
})

const FrameworkSelect = () => {
    return (
        <Select.Root collection={frameworks} size="sm">
            <Select.HiddenSelect />
            <Select.Label>Framework</Select.Label>
            <Select.Control>
                <Select.Trigger>
                    <Select.ValueText placeholder="Framework" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                    <Select.Indicator />
                </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
                <Select.Positioner>
                    <Select.Content>
                        {frameworks.items.map((framework) => (
                            <Select.Item item={framework} key={framework}>
                                {framework}
                                <Select.ItemIndicator />
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Positioner>
            </Portal>
        </Select.Root>
    )
}

export const Block = () => {
    return (
        <Card.Root variant="elevated" boxShadow="lg">
            <Card.Header>
                <Card.Title>Report an issue</Card.Title>
                <Card.Description>Found a bug? Let us know so we can fix it.</Card.Description>
            </Card.Header>
            <Card.Body gap="4">
                <Field.Root>
                    <Field.Label>Title</Field.Label>
                    <Input />
                </Field.Root>
                <FrameworkSelect />
                <Field.Root>
                    <Field.Label>Description</Field.Label>
                    <Textarea placeholder="A brief description of the issue" rows={3} />
                </Field.Root>
            </Card.Body>
            <Card.Footer gap="3">
                <Button variant="outline" colorPalette="gray">
                    Cancel
                </Button>
                <Button>Submit</Button>
            </Card.Footer>
        </Card.Root>
    )
}
