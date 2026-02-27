import { Stack, type StackProps } from "@chakra-ui/react"
import {
 LuHouse, LuLayoutDashboard, LuSettings, LuUsers 
} from "react-icons/lu"
import { DocumentsLinks } from "./document-links"
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
                <Stack gap="1">
                    <SidebarLink>
                        <LuHouse />
                        Home
                    </SidebarLink>
                    <SidebarLink aria-current="page">
                        <LuLayoutDashboard />
                        Dashboard
                    </SidebarLink>
                    <DocumentsLinks />
                    <SidebarLink>
                        <LuUsers />
                        Team
                    </SidebarLink>
                    <SidebarLink>
                        <LuSettings />
                        Settings
                    </SidebarLink>
                </Stack>
            </Stack>
            <UserProfile />
        </Stack>
    )
}
