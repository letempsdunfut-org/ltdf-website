import type { CartData } from "./types"

export const data: CartData = {
  items_subtotal_price: 597,
  total_discount: 40,
  total_delivery: 24.65,
  total_price: 581.65,
  item_count: 2,
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
          title: "Quantity",
          value: "1",
          options: ["1", "2", "3", "4"],
        },
        {
          title: "Size",
          value: "XL",
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
      sku: "PT-123-4UR",
      currency: "GBP",
      title: "Bamboo Tan",
      description: "Premium bamboo leather wallet with minimalist design",
      available_quantity: 2,
      available: true,
      variants: [
        {
          title: "Quantity",
          value: "1",
          options: ["1", "2", "3", "4"],
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
  ],
}
