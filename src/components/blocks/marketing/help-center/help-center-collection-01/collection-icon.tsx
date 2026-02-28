import {
    LuBell,
    LuCode,
    LuKey,
    LuLock,
    LuPaintbrush,
    LuPlug,
    LuRefreshCw,
    LuRocket,
    LuSparkles,
    LuUsers,
    LuWrench,
} from "react-icons/lu"

const iconMap = {
    "🚀": LuRocket,
    "🔑": LuKey,
    "🔌": LuPlug,
    "🔧": LuWrench,
    "✨": LuSparkles,
    "🎨": LuPaintbrush,
    "💻": LuCode,
    "🔒": LuLock,
    "🔄": LuRefreshCw,
    "📢": LuBell,
    "👥": LuUsers,
}

interface CollectionIconProps {
    value: string | null
}

export const CollectionIcon = (props: CollectionIconProps) => {
    const { value } = props
    if (!value || !(value in iconMap)) return null
    const Icon = iconMap[value as keyof typeof iconMap]
    return <Icon />
}
