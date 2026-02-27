import type { ReviewData } from "./types"

export const reviewData: ReviewData[] = [
  {
    id: "1",
    productId: "p1001",
    author: "John Doe",
    rating: 5,
    createdAt: "July 15th 2020",
    title: "Amazing Product!",
    comment:
      "This product exceeded my expectations in every way possible. The quality is top-notch, and the attention to detail is truly impressive. ",
    country: "USA",
    images: [
      {
        id: "img1",
        src: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "img2",
        src: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=2872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    user: {
      id: "u1",
      name: "John Doe",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026700r",
      verifiedBuyer: true,
    },
  },
  {
    id: "2",
    productId: "p1002",
    author: "Alice Johnson",
    rating: 4,
    createdAt: "July 14th 2020",
    title: "Good Enough",
    comment:
      "The product itself is fantastic, and I am really happy with my purchase. The build quality is impressive, and it feels very premium to the touch.",
    country: "UK",
    images: [
      {
        id: "img3",
        src: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "img4",
        src: "https://images.unsplash.com/photo-1578998987066-88847474960c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    user: {
      id: "u2",
      name: "Alice Johnson",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026706t",
      verifiedBuyer: true,
    },
  },
  {
    id: "3",
    productId: "p1003",
    author: "Michael Smith",
    rating: 3,
    createdAt: "July 13th 2020",
    title: "Average experience",
    comment:
      "I had high expectations for this product based on the reviews, but unfortunately, it did not fully meet them. While the design is sleek and modern, the functionality leaves much to be desired.",
    country: "Canada",
    images: [
      {
        id: "img5",
        src: "https://images.unsplash.com/photo-1490915785914-0af2806c22b6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "img6",
        src: "https://images.unsplash.com/photo-1451477334999-a9321157a431?q=80&w=2810&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    user: {
      id: "u3",
      name: "Michael Smith",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026707f",
    },
  },
  {
    id: "4",
    productId: "p1004",
    author: "Emma Brown",
    rating: 5,
    createdAt: "July 12th 2020",
    title: "Fantastic!",
    comment:
      "Absolutely love this product! From the moment I opened the packaging, I could tell that it was made with care. It feels sturdy, and all the features work perfectly.",
    country: "USA",
    images: [
      {
        id: "img7",
        src: "https://images.unsplash.com/photo-1623832101940-647285e32a58?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "img8",
        src: "https://images.unsplash.com/photo-1623832101624-ecd47c803527?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    user: {
      id: "u4",
      name: "Emma Brown",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026701a",
      verifiedBuyer: true,
    },
  },
  {
    id: "5",
    productId: "p1001",
    author: "Liam Wilson",
    rating: 2,
    createdAt: "July 11th 2020",
    title: "Disappointed",
    comment:
      "I'm quite disappointed with this purchase. The product did not meet my expectations, and I feel that the quality is subpar.",
    country: "Germany",
    images: [
      {
        id: "img9",
        src: "https://images.unsplash.com/photo-1662138679794-110b0cba27b9?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "img10",
        src: "https://images.unsplash.com/photo-1618274158630-bc47a614b3a5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    user: {
      id: "u5",
      name: "Liam Wilson",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026705m",
      verifiedBuyer: true,
    },
  },
  {
    id: "6",
    productId: "p1005",
    author: "Sophia Martinez",
    rating: 4,
    createdAt: "July 10th 2020",
    title: "Very good quality",
    comment:
      "I was pleasantly surprised by how well this product performs. The materials used feel durable, and it has a premium look and feel.",
    country: "Spain",
    images: [
      {
        id: "img11",
        src: "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?q=80&w=2774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    user: {
      id: "u6",
      name: "Sophia Martinez",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026700e",
    },
  },
]
