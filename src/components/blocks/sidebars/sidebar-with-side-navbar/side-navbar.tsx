import { Stack } from "@chakra-ui/react"
import {
    LuChartNoAxesColumnDecreasing,
    LuHouse,
    LuInfo,
    LuSettings,
    LuSquareUser,
} from "react-icons/lu"
import { Avatar } from "@/components/ui/avatar"
import { LogoIcon } from "./logo-icon"
import { SideNavbarLink } from "./side-navbar-link"

const mainNavigation = [
    { icon: LuHouse, label: "Home" },
    { icon: LuSquareUser, label: "Contacts" },
    { icon: LuChartNoAxesColumnDecreasing, label: "Analytics" },
]

export const SideNavbar = () => {
    return (
        <Stack
            maxW="16"
            w="full"
            bg="bg.panel"
            alignItems="center"
            borderRightWidth="1px"
            py={{ base: "4", md: "6" }}
            justifyContent="space-between"
        >
            <Stack alignItems="center" gap="4">
                <LogoIcon style={{ alignSelf: "center" }} />
                <Stack>
                    {mainNavigation.map((link, index) => (
                        <SideNavbarLink
                            key={index}
                            aria-current={link.label === "Home" ? "page" : undefined}
                            label={link.label}
                        >
                            <link.icon />
                        </SideNavbarLink>
                    ))}
                </Stack>
            </Stack>
            <Stack alignItems="center" gap="2">
                <SideNavbarLink label="Help">
                    <LuInfo />
                </SideNavbarLink>
                <SideNavbarLink label="Settings">
                    <LuSettings />
                </SideNavbarLink>
                <Avatar size="xs" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" />
            </Stack>
        </Stack>
    )
}
