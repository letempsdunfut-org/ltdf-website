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
    highlights: ["Best Seller"],
    currency: "USD",
    average_rating: 4.8,
    rating_count: 124,
    images: [
      {
        id: "1",
        src: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          {
 title: "Red", value: "red", color: "#FF0000" 
},
          {
 title: "Black", value: "black", color: "#000000" 
},
        ],
      },
    ],
    default_variants: [{ id: "1-1", value: "gray" }],
  },

  {
    id: "2",
    sku: "PROD-002-PUFFER",
    title: "Olive Green Puffer Vest",
    slug: "olive-green-puffer-vest",
    description:
      "A sleek and modern olive green puffer vest with a minimalist quilted design. Features a high collar, zip-front closure, and a slim fit silhouette that works perfectly as a layering piece.",
    short_description: "Versatile quilted vest for layered looks",
    on_sale: true,
    regular_price: "199",
    sale_price: "149",

    currency: "USD",
    average_rating: 4.7,
    rating_count: 156,
    images: [
      {
        id: "2",
        src: "https://images.unsplash.com/photo-1654512697945-9936dc2ca5b9?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    variants: [
      {
        id: "2-1",
        title: "Color",
        options: [
          {
 title: "Brown", value: "brown", color: "#CD7F32" 
},
          {
 title: "Red", value: "red", color: "#FF0000" 
},
          {
 title: "Green", value: "green", color: "#008000" 
},
        ],
      },
    ],
    default_variants: [{ id: "2-1", value: "brown" }],
  },

  {
    id: "3",
    sku: "PROD-003-JACKET",
    title: "Black Leather Jacket",
    slug: "black-leather-jacket",
    description:
      "A sleek black leather jacket with a modern edge. Features a classic motorcycle style with asymmetrical zipper, quilted shoulder panels, and premium hardware for an edgy yet sophisticated look.",
    short_description: "Edgy black leather biker jacket",
    on_sale: false,
    regular_price: "399",
    sale_price: "399",
    highlights: ["New Arrival"],
    currency: "USD",
    average_rating: 4.9,
    rating_count: 56,
    images: [
      {
        id: "3",
        src: "https://images.unsplash.com/photo-1579493934830-eab45746b51b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    variants: [
      {
        id: "3-1",
        title: "Color",
        options: [
          {
 title: "Black", value: "black", color: "#000000" 
},
          {
 title: "Teal", value: "teal", color: "#008080" 
},
        ],
      },
    ],
    default_variants: [{ id: "3-1", value: "black" }],
  },
]
