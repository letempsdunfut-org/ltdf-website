import type { Product } from "./types"

export const data: Product[] = [
    {
        id: "1",
        sku: "PROD-001-CHI",
        title: "Chianti Classico Riserva",
        slug: "chianti-classico-riserva",
        description:
            "A distinguished Tuscan red wine made primarily from Sangiovese grapes. This Chianti Classico Riserva exhibits rich flavors of dark cherries, leather, and tobacco, with elegant tannins and a long, satisfying finish. Aged for 24 months in oak barrels for additional complexity.",
        short_description: "Premium Tuscan red wine with classic character",
        on_sale: false,
        regular_price: "100",
        sale_price: "80",
        currency: "USD",
        weight: "750ml",
        highlights: ["Best Seller", "New Arrival"],
        average_rating: 4.0,
        rating_count: 186,
        images: [
            {
                id: "1",
                src: "https://images.unsplash.com/photo-1610631787813-9eeb1a2386cc?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
        ],
    },
    {
        id: "2",
        sku: "PROD-002-RUM",
        title: "Ron Bacardi Superior",
        slug: "ron-bacardi-superior",
        description:
            "A crystal-clear premium rum with remarkable smoothness and subtle flavors. Features delicate notes of vanilla, almond, and citrus, with a clean finish that makes it perfect for cocktails or enjoying neat.",
        short_description: "Premium white rum with exceptional smoothness",
        on_sale: true,
        regular_price: "29",
        sale_price: "25",
        currency: "USD",
        weight: "750ml",
        highlights: ["Best Seller"],
        average_rating: 4.5,
        rating_count: 120,
        images: [
            {
                id: "1",
                src: "https://images.unsplash.com/photo-1614313511387-1436a4480ebb?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
        ],
    },
]
