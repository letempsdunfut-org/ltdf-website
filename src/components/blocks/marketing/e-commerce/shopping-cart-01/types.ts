export interface CartItemVariantOption {
    value: string
    label: string
}

export interface CartItemVariant {
    title: string
    value: string
    options: string[]
}

export interface CartItemData {
    id: string
    sku: string
    title: string
    description: string
    price: number
    currency: string
    quantity: number
    available_quantity: number
    available: boolean
    image: string
    variants?: CartItemVariant[]
    gift_wrapping?: boolean
}

export interface CartData {
    item_count: number
    subtotal: number
    shipping: number
    total: number
    currency: string
    items: CartItemData[]
}
