import type { ContainerProps } from "@chakra-ui/react"
import {
 Container, HStack, IconButton 
} from "@chakra-ui/react"
import { LuAlignRight } from "react-icons/lu"
import {
    DrawerBackdrop,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerRoot,
    DrawerTrigger
} from "@/components/ui/drawer"
import { Logo } from "./logo"
import { Sidebar } from "./sidebar"

export const MobileNavbar = (props: ContainerProps) => {
    return (
        <Container py="2.5" background="bg.panel" borderBottomWidth="1px" {...props}>
            <HStack justify="space-between">
                <Logo />
                <DrawerRoot placement="start">
                    <DrawerBackdrop />
                    <DrawerTrigger asChild>
                        <IconButton aria-label="Open Menu" variant="ghost" colorPalette="gray">
                            <LuAlignRight />
                        </IconButton>
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerCloseTrigger />
                        <Sidebar />
                    </DrawerContent>
                </DrawerRoot>
            </HStack>
        </Container>
    )
}
