import type { Product } from "./types"

export const data: Product[] = [
    {
        id: "1",
        sku: "SNEAK-001-AIR",
        title: "Impressive Flirt Black Mesh Ruched Mock Neck Midi Dress",
        slug: "#",
        description:
            "This stunning black mesh midi dress features a flattering ruched design and elegant mock neck. Perfect for special occasions.",
        short_description: "Elegant mesh midi dress with ruched details",
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
                src: "https://images.unsplash.com/photo-1568251188392-ae32f898cb3b?q=80&w=3524&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                id: "2",
                src: "https://images.unsplash.com/photo-1568251723346-462c2abfd420?q=80&w=2575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
        ],
        default_variants: [
            {
                id: "color",
                value: "teal",
            },
        ],
        variants: [
            {
                id: "color",
                title: "Color",
                options: [
                    {
                        title: "Teal",
                        value: "teal",
                        color: "#008080",
                    },
                    {
                        title: "Pink",
                        value: "pink",
                        color: "#ffc0cb",
                    },
                ],
            },
        ],
    },
]
