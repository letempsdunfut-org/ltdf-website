"use client"
import {
    Container, Flex, Grid, HStack
} from "@chakra-ui/react"
import { useState } from "react"
import { items } from "./data"
import { Logo as LogoText } from "./logo"
import { NavigationMenu } from "./navigation-menu"
import { NotificationPopover } from "./notification-popover"
import { SearchPopover } from "./search-popover"
import { SecondaryNavigation } from "./secondary-navigation"
import { UserMenu } from "./user-menu"

export const Block = () => {
    // This is just for demo purposes. Use the router to get the current route and manage state
    const [selected, setSelected] = useState<string>("dashboard")
    const secondaryNav = items.find((item) => item.value === selected)?.secondary

    return (
        <Container py={{
            base: "4", md: "6", lg: "8"
        }}>
            <Grid templateColumns="auto 1fr auto" gap="3" alignItems="center">
                <HStack>
                    <NavigationMenu items={items} onSelect={setSelected} />
                    <LogoText />
                </HStack>
                <Flex justify="center">
                    <SecondaryNavigation items={secondaryNav} hideBelow="sm" />
                </Flex>
                <HStack gap={{ base: "2", md: "3" }} justify="flex-end">
                    <HStack gap="0">
                        <SearchPopover />
                        <NotificationPopover />
                    </HStack>
                    <UserMenu />
                </HStack>
            </Grid>
        </Container>
    )
}
