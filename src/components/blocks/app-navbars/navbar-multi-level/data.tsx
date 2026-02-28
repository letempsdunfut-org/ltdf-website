import {
 LuFile, LuUser
} from "react-icons/lu"

export interface SecondaryNavItem {
    value: string
    label: string
}

export interface NavItem {
    value: string
    label: string
    icon: React.ElementType
    secondary?: SecondaryNavItem[]
}

export const items: NavItem[] = [
    {
        value: "dashboard",
        label: "Dashboard",
        icon: LuFile,
        secondary: [
            { value: "overview", label: "Overview" },
            { value: "updates", label: "Updates" },
            { value: "reports", label: "Reports" },
        ],
    },
    {
        value: "analytics",
        label: "Analytics",
        icon: LuFile,
        secondary: [
            { value: "overview", label: "Overview" },
            { value: "performance", label: "Performance" },
            { value: "conversions", label: "Conversions" },
            { value: "sources", label: "Sources" },
        ],
    },
    {
        value: "documents",
        label: "Documents",
        icon: LuFile,
        secondary: [
            { value: "all", label: "All Files" },
            { value: "shared", label: "Shared" },
            { value: "recent", label: "Recent" },
            { value: "favorites", label: "Favorites" },
        ],
    },
    {
        value: "settings",
        label: "Settings",
        icon: LuUser,
        secondary: [
            { value: "profile", label: "Profile" },
            { value: "account", label: "Account" },
            { value: "notifications", label: "Notifications" },
            { value: "billing", label: "Billing" },
        ],
    },
]

export const secondaryItems = [
    {
 value: "overview", label: "Overview", icon: LuFile
},
    {
 value: "projects", label: "Projects", icon: LuFile
},
    {
 value: "tasks", label: "Tasks", icon: LuFile
},
    {
 value: "reports", label: "Reports", icon: LuFile
},
    {
 value: "settings", label: "Settings", icon: LuUser
},
]
