export interface Member {
    name: string
    email: string
    role: string
    avatar: string
}

export const members: Member[] = [
    {
        name: "Segun Adebayo",
        email: "segun@chakra-ui.com",
        role: "Owner",
        avatar: "https://bit.ly/sage-adebayo",
    },
    {
        name: "Lazar Nikolov",
        email: "lazar@chakra-ui.com",
        role: "Admin",
        avatar: "https://bit.ly/lazarnikolov",
    },
    {
        name: "Jocelyn",
        email: "jocelyn@chakra-ui.com",
        role: "Member",
        avatar: "https://bit.ly/jocelyn",
    },
    {
        name: "Dan Abramov",
        email: "dan@chakra-ui.com",
        role: "Member",
        avatar: "https://bit.ly/dan-abramov",
    },
]
