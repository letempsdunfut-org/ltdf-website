import { Flex, type FlexProps } from "@chakra-ui/react"
import {
    LuActivity,
    LuCircle,
    LuFile,
    LuHouse,
    LuLayoutDashboard,
    LuSettings,
    LuTrendingUp,
    LuUser,
    LuUsers,
} from "react-icons/lu"
import { Logo } from "./logo"
import { SearchField } from "./search-field"
import { SideNavbar } from "./side-navbar"
import { SidebarLink } from "./sidebar-link"

export const Sidebar = (props: FlexProps) => {
    return (
        <Flex
            flex="1"
            height="100dvh"
            overflow="hidden"
            maxW={{ base: "full", md: "xs" }}
            borderRightWidth="1px"
            {...props}
        >
            <SideNavbar />
            <Flex direction="column" flex="1" py="6" px="4" bg="bg.panel" justifyContent="space-between">
                <Flex direction="column" gap="8">
                    <Logo />
                    <SearchField />
                    <Flex direction="column" gap="1">
                        <SidebarLink aria-current="page">
                            <LuHouse />
                            Home
                        </SidebarLink>
                        <SidebarLink>
                            <LuLayoutDashboard />
                            Dashboard
                        </SidebarLink>
                        <SidebarLink>
                            <LuSettings />
                            Settings
                        </SidebarLink>
                        <SidebarLink>
                            <LuUsers />
                            Team
                        </SidebarLink>
                        <SidebarLink>
                            <LuUser />
                            Role & Permission
                        </SidebarLink>
                    </Flex>
                    <Flex direction="column" gap="1">
                        <SidebarLink>
                            <LuActivity />
                            Overview
                        </SidebarLink>
                        <SidebarLink>
                            <LuTrendingUp />
                            Trends
                        </SidebarLink>
                        <SidebarLink>
                            <LuCircle />
                            Distribution
                        </SidebarLink>
                        <SidebarLink>
                            <LuFile />
                            Daily Reports
                        </SidebarLink>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
