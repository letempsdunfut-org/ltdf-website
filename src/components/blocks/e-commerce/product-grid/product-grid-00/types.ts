export interface ProductImage {
    id: string
    src: string
}

export interface Product {
    id: string
    sku: string
    title: string
    slug: string
    description: string
    short_description: string
    on_sale: boolean
    regular_price: string
    sale_price: string
    currency: string
    weight: string
    highlights?: string[]
    average_rating: number
    rating_count: number
    images: ProductImage[]
}
