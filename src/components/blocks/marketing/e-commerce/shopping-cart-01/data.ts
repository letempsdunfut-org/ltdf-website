import type { CartData } from "./types"

export const data: CartData = {
    item_count: 3,
    subtotal: 79.99,
    shipping: 0,
    total: 79.99,
    currency: "GBP",
    items: [
        {
            id: "1",
            sku: "PT-123-456",
            price: 39.99,
            currency: "GBP",
            title: "Bamboo Tan",
            description: "Premium bamboo leather wallet",
            available: true,
            quantity: 1,
            available_quantity: 6,
            variants: [
                {
                    title: "Color",
                    value: "Tan",
                    options: ["Tan", "Black", "Red"],
                },
                {
                    title: "Size",
                    value: "L",
                    options: ["S", "M", "L", "XL"],
                },
            ],
            gift_wrapping: true,
            image:
                "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        },
        {
            id: "2",
            sku: "PT-123-4UR",
            price: 39.99,
            currency: "GBP",
            title: "Yeezy Sneakers",
            description: "Comfortable urban sneakers",
            available: true,
            available_quantity: 2,
            quantity: 1,
            variants: [
                {
                    title: "Color",
                    value: "Red",
                    options: ["Red", "Blue", "Green"],
                },
                {
                    title: "Size",
                    value: "42",
                    options: ["40", "41", "42", "43"],
                },
            ],
            image:
                "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
        },
    ],
}
