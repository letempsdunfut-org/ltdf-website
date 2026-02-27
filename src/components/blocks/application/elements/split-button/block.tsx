import { HStack } from "@chakra-ui/react"
import { SplitButton } from "./split-button"

export const Block = () => {
    const items = [
        { label: "Save as...", value: "save" },
        { label: "Save Copy", value: "copy" },
    ]
    return (
        <HStack gap="4">
            <SplitButton buttonLabel="Save" menuItems={items} />
            <SplitButton buttonLabel="Save" menuItems={items} variant="outline" colorPalette="gray" />
        </HStack>
    )
}
