import {
 Stack, type StackProps, Text 
} from "@chakra-ui/react"
import {
    LuActivity,
    LuCircle,
    LuFile,
    LuHouse,
    LuLayoutDashboard,
    LuList,
    LuSettings,
    LuTrendingUp,
    LuUser,
    LuUsers,
} from "react-icons/lu"
import { Logo } from "./logo"
import { SearchField } from "./search-field"
import { SidebarLink } from "./sidebar-link"
import { UserProfile } from "./user-profile"

export const Sidebar = (props: StackProps) => {
    return (
        <Stack
            flex="1"
            maxW={{ base: "full", md: "xs" }}
            py={{ base: "6", md: "8" }}
            px={{ base: "4", md: "6" }}
            bg="bg.panel"
            borderRightWidth="1px"
            justifyContent="space-between"
            {...props}
        >
            <Stack gap="8">
                <Logo />
                <SearchField />
                <Stack gap="6">
                    <Stack gap="1">
                        <Text fontWeight="medium" textStyle="sm" color="fg.muted" mb="1">
                            General
                        </Text>
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
                    </Stack>

                    <Stack gap="1">
                        <Text fontWeight="medium" textStyle="sm" color="fg.muted" mb="1">
                            Organization
                        </Text>
                        <SidebarLink>
                            <LuUsers />
                            Team
                        </SidebarLink>
                        <SidebarLink>
                            <LuUser />
                            Role & Permission
                        </SidebarLink>
                        <SidebarLink>
                            <LuList />
                            Projects
                        </SidebarLink>
                    </Stack>

                    <Stack gap="1">
                        <Text fontWeight="medium" textStyle="sm" color="fg.muted" mb="1">
                            Reporting
                        </Text>
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
                    </Stack>
                </Stack>
            </Stack>
            <UserProfile />
        </Stack>
    )
}
