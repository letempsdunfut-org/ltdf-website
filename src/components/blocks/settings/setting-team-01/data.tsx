export interface Member {
    name: string
    email: string
    role: string
    avatar: string
}

export const members: Member[] = [
    {
        name: "Christian Nwamba",
        email: "christian@chakra-ui.com",
        role: "Admin",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
    },
    {
        name: "Kent C. Dodds",
        email: "kent@chakra-ui.com",
        role: "Member",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    },
    {
        name: "Prosper Otemuyiwa",
        email: "prosper@chakra-ui.com",
        role: "Member",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150",
    },
]
