export interface ProductImage {
    id: string
    src: string
}

export interface ProductVariantOption {
    title: string
    value: string
    color?: string
}

export interface ProductVariant {
    id: string
    title: string
    options: ProductVariantOption[]
}

export interface ProductDefaultVariant {
    id: string
    value: string
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
    average_rating: number
    rating_count: number
    images: ProductImage[]
    variants: ProductVariant[]
    default_variants: ProductDefaultVariant[]
}
