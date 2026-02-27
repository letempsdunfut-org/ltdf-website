import {
 Center, Icon, Menu, Portal 
} from "@chakra-ui/react"
import { LuChevronsUpDown } from "react-icons/lu"
import { NavItem } from "./data"

interface NavigationMenuProps {
    items: NavItem[]
    onSelect: (value: string) => void
}

export const NavigationMenu = (props: NavigationMenuProps) => {
    const { items, onSelect } = props
    return (
        <Menu.Root onSelect={(e) => onSelect(e.value)}>
            <Menu.Trigger
                px="2"
                py="2.5"
                gap="2"
                borderRadius="l2"
                _hover={{ bg: "bg.subtle" }}
                cursor="pointer"
                display="flex"
                alignItems="center"
                transition="background 0.2s"
                outline="none"
            >
                <Center boxSize="6" bg="colorPalette.solid" borderRadius="xs" color="colorPalette.contrast">
                    <Icon size="xs">
                        <LuChevronsUpDown />
                    </Icon>
                </Center>
                Dashboard
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content minW="240px">
                        {items.map(({
 value, label, icon: ItemIcon 
}, index) => (
                            <Menu.Item key={value} value={value} gap="4" p="2">
                                <Center
                                    boxSize="7"
                                    borderRadius="l2"
                                    bg={getGradientMix(index, items.length)}
                                    color="colorPalette.contrast"
                                >
                                    <Icon size="sm">
                                        <ItemIcon />
                                    </Icon>
                                </Center>
                                {label}
                            </Menu.Item>
                        ))}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

const getGradientMix = (index: number, total: number) => {
    const startPercent = 90 - index * (80 / (total - 1))
    const endPercent = 10 + index * (80 / (total - 1))
    return `color-mix(in srgb, var(--color-start) ${startPercent}%, var(--color-end) ${endPercent}%)`
}
