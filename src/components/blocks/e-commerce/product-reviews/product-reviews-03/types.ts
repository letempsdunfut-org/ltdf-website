interface User {
  id: string
  name: string
  avatarUrl?: string
  verifiedBuyer?: boolean
}

export interface ReviewImage {
  id: string
  src: string
}

export interface ReviewData {
  id: string
  productId: string
  author: string
  rating: number
  createdAt: string
  title?: string
  comment: string
  country?: string
  images?: ReviewImage[]
  user?: User
}
