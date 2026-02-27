export interface ProductVariantOption {
  title: string
  description?: string
  value: string
  image?: ProductImage
  color?: string
  available?: boolean
}

export interface ProductVariant {
  id: string
  title: string
  options: ProductVariantOption[]
}

export interface ProductImage {
  id: string
  src: string
}

export interface Product {
  id: string
  title: string
  slug: string
  description: string
  short_description: string
  sku: string
  currency: string
  regular_price: string
  sale_price: string
  on_sale: boolean
  weight?: string
  highlights?: string[]
  dimensions?: Record<"length" | "width" | "height", string>
  average_rating?: number
  rating_count?: number
  images?: ProductImage[]
  variants?: ProductVariant[]
  default_variants?: Array<{ id: string; value: string }>
}
