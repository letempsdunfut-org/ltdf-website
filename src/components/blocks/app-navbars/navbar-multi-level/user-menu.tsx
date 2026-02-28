import {
 Avatar, Menu, Portal 
} from "@chakra-ui/react"
import {
 LuCircleHelp, LuLogOut, LuSettings, LuUser 
} from "react-icons/lu"

export const UserMenu = () => {
    return (
        <Menu.Root positioning={{ placement: "bottom-end" }}>
            <Menu.Trigger rounded="full">
                <Avatar.Root size="sm">
                    <Avatar.Fallback />
                    <Avatar.Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" />
                </Avatar.Root>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        <Menu.Item value="profile">
                            <LuUser />
                            Profile
                        </Menu.Item>
                        <Menu.Item value="settings">
                            <LuSettings />
                            Settings
                        </Menu.Item>
                        <Menu.Item value="help">
                            <LuCircleHelp />
                            Help & Support
                        </Menu.Item>
                        <Menu.Separator />
                        <Menu.Item value="logout">
                            <LuLogOut />
                            Logout
                        </Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}
