export const posts = [
    {
        id: "1",
        title: "The Future of SaaS: Trends to Watch in 2023",
        readTime: "4 min",
        excerpt: "Discover the latest trends in SaaS that are shaping the future of digital solutions and how your business can benefit.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        category: "Industry Insights",
        publishedAt: "January 15, 2023",
        author: {
            name: "John Doe",
            avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        },
    },
    {
        id: "2",
        title: "Boost Your Business with Custom Software Solutions",
        readTime: "5 min",
        excerpt: "Learn how custom software solutions can streamline your operations and drive growth in your business.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        category: "Business Growth",
        publishedAt: "February 20, 2023",
        author: {
            name: "Jane Smith",
            avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        },
    },
    {
        id: "3",
        title: "Case Study: How We Helped XYZ Corp Increase Efficiency",
        readTime: "4 min",
        excerpt: "A detailed case study on how our digital solutions helped XYZ Corp improve their efficiency by 30%.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        category: "Case Studies",
        publishedAt: "March 10, 2023",
        author: {
            name: "Alice Johnson",
            avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        },
    },
]

export interface Author {
    name: string
    avatarUrl: string
}

export interface Post {
    id: string
    title: string
    readTime: string
    excerpt: string
    image: string
    category: string
    publishedAt: string
    author: Author
}
