export interface CartData {
    items_subtotal_price: number
    total_discount: number
    total_delivery: number
    total_price: number
    item_count: number
    currency: string
    items: CartItemData[]
}

export interface CartItemData {
    id: string
    price: number
    sku: string
    currency: string
    title: string
    description: string
    available: boolean
    available_quantity: number
    quantity: number
    image: string
    gift_wrapping?: boolean
    variants?: {
        title: string
        value: string
        options: string[]
    }[]
}
