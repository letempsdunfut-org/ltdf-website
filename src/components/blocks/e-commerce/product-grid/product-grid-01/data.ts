import type { Product } from "./types"

export const data: Product[] = [
    {
        id: "1",
        sku: "PROD-001-JACKET",
        title: "Brown Leopard Jacket",
        slug: "brown-leopard-jacket",
        description:
            "A stunning brown leopard print jacket featuring a luxurious faux fur texture. Perfect for making a bold fashion statement while staying warm and stylish.",
        short_description: "Fierce and fashionable leopard print outerwear",
        on_sale: true,
        regular_price: "299",
        sale_price: "199",
        currency: "USD",
        average_rating: 4.8,
        rating_count: 124,
        images: [
            {
                id: "1",
                src: "https://images.unsplash.com/photo-1542088216-a7aed3b59586?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
        ],
        variants: [
            {
                id: "1-1",
                title: "Color",
                options: [
                    {
 title: "Gray", value: "gray", color: "#808080" 
},
                    {
 title: "Brown", value: "brown", color: "#CD7F32" 
},
                ],
            },
        ],
        default_variants: [{ id: "1-1", value: "gray" }],
    },
    {
        id: "2",
        sku: "PROD-002-PUFFER",
        title: "Gray Puffer Jacket",
        slug: "gray-puffer-jacket",
        description:
            "A warm and stylish gray puffer jacket with quilted design. Features high-quality insulation, water-resistant exterior, and a comfortable fit perfect for cold weather.",
        short_description: "Cozy quilted puffer for winter adventures",
        on_sale: true,
        regular_price: "199",
        sale_price: "149",
        currency: "USD",
        average_rating: 4.6,
        rating_count: 85,
        images: [
            {
                id: "1",
                src: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=3336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
        ],
        variants: [
            {
                id: "2-1",
                title: "Color",
                options: [
                    {
 title: "Gray", value: "gray", color: "#808080" 
},
                    {
 title: "Black", value: "black", color: "#000000" 
},
                ],
            },
        ],
        default_variants: [{ id: "2-1", value: "gray" }],
    },
]
