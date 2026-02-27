export interface Member {
    name: string
    email: string
    role: string
    avatar: string
}

export const members: Member[] = [
    {
        name: "Ryan Florence",
        email: "ryan@remix.run",
        role: "Co-founder",
        avatar: "https://bit.ly/ryan-florence",
    },
    {
        name: "Michael Jackson",
        email: "michael@remix.run",
        role: "Co-founder",
        avatar: "https://bit.ly/michael-jackson",
    },
    {
        name: "Kent C. Dodds",
        email: "kent@remix.run",
        role: "Director of DevRel",
        avatar: "https://bit.ly/kent-c-dodds",
    },
    {
        name: "Prosper Otemuyiwa",
        email: "prosper@chakra-ui.com",
        role: "Developer Advocate",
        avatar: "https://bit.ly/prosper-baba",
    },
    {
        name: "Christian Nwamba",
        email: "christian@chakra-ui.com",
        role: "Senior Developer",
        avatar: "https://bit.ly/code-beast",
    },
    {
        name: "Segun Adebayo",
        email: "segun@chakra-ui.com",
        role: "Creator",
        avatar: "https://bit.ly/sage-adebayo",
    },
]
