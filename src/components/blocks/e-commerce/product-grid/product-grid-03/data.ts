import type { Product } from "./types"

export const data: Product[] = [
  {
    id: "1",
    sku: "SNEAK-001-AIR",
    title: "Air Max 270",
    slug: "air-max-270",
    description:
      "The Air Max 270 combines lightweight comfort with a bold look. Featuring a large Air unit in the heel, this sneaker provides unparalleled cushioning and style for all-day wear. Perfect for both casual and athletic activities.",
    short_description: "Lightweight with  Air Max cushioning",
    on_sale: true,
    regular_price: "150",
    sale_price: "120",
    currency: "USD",
    weight: "1.2kg",
    highlights: ["Best Seller", "Trending"],
    average_rating: 4.8,
    rating_count: 340,
    images: [
      {
        id: "1",
        src: "https://images.unsplash.com/photo-1715692668424-8ae36c69d808?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      },
    ],
  },

  {
    id: "2",
    sku: "SNEAK-002-YEE",
    title: "Yeezy Boost 350 V2",
    slug: "yeezy-boost-350-v2",
    description:
      "The Yeezy Boost 350 V2 features a sleek design and premium materials. The Boost sole ensures superior comfort, while the signature Primeknit upper provides a snug, sock-like fit. A must-have for any sneaker enthusiast.",
    short_description: "Stylish sneaker with Boost technology",
    on_sale: false,
    regular_price: "220",
    sale_price: "220",
    currency: "USD",
    weight: "1.3kg",
    highlights: ["Limited Edition", "Premium"],
    average_rating: 4.9,
    rating_count: 450,
    images: [
      {
        id: "2",
        src: "https://images.unsplash.com/photo-1715693754047-4c0b56576495?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
      },
    ],
  },

  {
    id: "3",
    sku: "SNEAK-003-JRD",
    title: "Air Jordan 1 Retro High",
    slug: "air-jordan-1-retro-high",
    description:
      "The Air Jordan 1 Retro High is a timeless classic that combines basketball performance and streetwear style. Crafted with premium leather, this sneaker is perfect for making a bold statement.",
    short_description: "Iconic sneaker with premium materials",
    on_sale: false,
    regular_price: "170",
    sale_price: "170",
    currency: "USD",
    weight: "1.5kg",
    highlights: ["Classic", "Best Seller"],
    average_rating: 4.7,
    rating_count: 620,
    images: [
      {
        id: "3",
        src: "https://images.unsplash.com/photo-1715692965423-28e7b823a60d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
      },
    ],
  },

  {
    id: "4",
    sku: "SNEAK-004-ULB",
    title: "UltraBoost 22",
    slug: "ultraboost-22",
    description:
      "The UltraBoost 22 delivers superior energy return and comfort with every step. Featuring a Primeknit upper and Boost midsole, this sneaker is ideal for runners and lifestyle wearers alike.",
    short_description: "High-performance with Boost cushioning",
    on_sale: true,
    regular_price: "180",
    sale_price: "150",
    currency: "USD",
    weight: "1.2kg",
    highlights: ["Trending", "Highly Rated"],
    average_rating: 4.8,
    rating_count: 510,
    images: [
      {
        id: "4",
        src: "https://images.unsplash.com/photo-1715693268859-438b2136ef22?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
      },
    ],
  },
]
