import {
    HStack, IconButton, Input
} from "@chakra-ui/react"
import { LuMinus, LuPlus } from "react-icons/lu"

interface QuantitySelectProps {
    value?: number
    onChange?: (value: number) => void
}

export const QuantitySelect = (props: QuantitySelectProps) => {
    const {
        value = 1,
    } = props
    // Simple implementation using standard buttons and input for now
    return (
        <HStack maxW="150px">
            <IconButton variant="outline" size="sm" aria-label="Decrease quantity">
                <LuMinus />
            </IconButton>
            <Input value={value} readOnly textAlign="center" size="sm" />
            <IconButton variant="outline" size="sm" aria-label="Increase quantity">
                <LuPlus />
            </IconButton>
        </HStack>
    )
}
