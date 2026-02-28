import { MobileNavbar } from "./mobile-navbar"
import { Sidebar } from "./sidebar"

export const Block = () => {
    return (
        <>
            <MobileNavbar hideFrom="md" />
            <Sidebar hideBelow="md" />
        </>
    )
}
