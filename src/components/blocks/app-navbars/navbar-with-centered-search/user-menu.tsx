import {
 LuCircleHelp, LuLogOut, LuSettings, LuUser 
} from "react-icons/lu"
import { Avatar } from "@/components/ui/avatar"
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuSeparator,
    MenuTrigger,
} from "@/components/ui/menu"

export const UserMenu = () => {
    return (
        <MenuRoot positioning={{ placement: "bottom" }}>
            <MenuTrigger rounded="full">
                <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" />
            </MenuTrigger>
            <MenuContent>
                <MenuItem value="profile">
                    <LuUser />
                    Profile
                </MenuItem>
                <MenuItem value="settings">
                    <LuSettings />
                    Settings
                </MenuItem>
                <MenuItem value="help">
                    <LuCircleHelp />
                    Help & Support
                </MenuItem>
                <MenuSeparator />
                <MenuItem value="logout">
                    <LuLogOut />
                    Logout
                </MenuItem>
            </MenuContent>
        </MenuRoot>
    )
}
