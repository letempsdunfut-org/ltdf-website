export const apiKeyData: ApiKeyItem[] = [
    {
        id: "1",
        name: "Stripe API",
        value: "stripe_api_placeholder_xxxxxxxxxxx",
        created: "2023-01-15",
        lastUsed: "2023-05-20",
        permission: "write",
    },
    {
        id: "2",
        name: "SendGrid API",
        value: "SG.Kw8p4y2pT4y2pT4y2pT4y.Kw8p4y2pT4y2pT4y2pT4y",
        created: "2023-02-10",
        lastUsed: "2023-06-05",
        permission: "read-only",
    },
    {
        id: "3",
        name: "Twilio API",
        value: "AC39HqLyjWDarjtT1zdp7dc4eC39HqLyjW",
        created: "2023-03-05",
        lastUsed: "2023-06-10",
        permission: "restricted",
    },
]

export interface ApiKeyItem {
    id: string
    name: string
    value: string
    created: string
    lastUsed: string
    permission: string
}

export interface ColumnDef<T> {
    name: string
    key: keyof T | "actions"
    hidden?: boolean
    hideBelow?: string
    width?: string
    align?: string // 'start' | 'center' | 'end'
    render: (item: T) => React.ReactNode
}

export const maskSecret = (secret: string) => {
    return `${secret.slice(0, 4)}...${secret.slice(-4)}`
}
