import type { CartData } from "./types"

export const data: CartData = {
    items_subtotal_price: 397,
    total_discount: 0,
    total_delivery: 0,
    total_price: 397,
    item_count: 3,
    currency: "USD",
    items: [
        {
            id: "1",
            price: 39.99,
            currency: "GBP",
            sku: "PT-123-456",
            title: "Ferragamo bag",
            description: "Luxury leather handbag with gold-tone hardware",
            available_quantity: 6,
            available: true,
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
            quantity: 3,
            gift_wrapping: true,
            image:
                "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        },
        {
            id: "2",
            price: 39.99,
            currency: "GBP",
            sku: "PT-123-4UR",
            title: "Bamboo Tan",
            description: "Premium bamboo leather wallet with minimalist design",
            available_quantity: 2,
            available: true,
            variants: [
                {
                    title: "Color",
                    value: "Red",
                    options: ["Red", "Blue", "Green"],
                },
                {
                    title: "Size",
                    value: "M",
                    options: ["S", "M", "L", "XL"],
                },
            ],
            quantity: 3,
            image:
                "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
        },
        {
            id: "3",
            price: 39.99,
            currency: "GBP",
            sku: "PT-42-456",
            title: "Yeezy Sneakers",
            gift_wrapping: true,
            description: "Premium athletic sneakers with iconic design and superior comfort",
            available_quantity: 4,
            available: true,
            variants: [
                {
                    title: "Color",
                    value: "White",
                    options: ["White", "Black", "Red"],
                },
                {
                    title: "Size",
                    value: "8",
                    options: ["8", "9", "10", "11"],
                },
            ],
            quantity: 1,
            image:
                "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
        },
    ],
}
