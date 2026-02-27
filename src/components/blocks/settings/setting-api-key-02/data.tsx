export const apiKeyData: ApiKeyItem[] = [
    {
        id: "1",
        name: "PublicKey",
        value: "pk_test_..._t1zdp7dc",
        created: "2023-01-15",
        status: "Active",
    },
    {
        id: "2",
        name: "Secret Key",
        value: "sk_test_..._T4y2pT4y",
        created: "2023-02-10",
        status: "Active",
    },
]

export interface ApiKeyItem {
    id: string
    name: string
    value: string
    created: string
    status: string
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
