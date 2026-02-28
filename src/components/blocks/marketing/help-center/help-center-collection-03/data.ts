interface HelpCenterAuthor {
    id: string
    name: string
    avatar_url: string | null
}

interface HelpCenterArticle {
    id: string
    parent_id?: string
    parent_ids: string[]
    title: string
    description?: string
    author_id?: string // Reference to HelpCenterAuthor
    url?: string
}

interface HelpCenterCollection {
    id: string
    icon: string | null
    title: string
    description: string
    order: number
}

interface CollectionWithArticles extends HelpCenterCollection {
    articles: HelpCenterArticle[]
    authors: HelpCenterAuthor[]
}

const data = {
    authors: [
        {
            id: "author1",
            name: "Christian N.",
            avatar_url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80",
        },
        {
            id: "author2",
            name: "Segun A.",
            avatar_url: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
        },
        {
            id: "author3",
            name: "Sola O.",
            avatar_url: null,
        },
    ] as HelpCenterAuthor[],
    collections: [
        {
            id: "getting-started",
            icon: "🚀",
            title: "Getting Started",
            description: "Everything you need to know to get started.",
            order: 1,
        },
        {
            id: "account-management",
            icon: "🔑",
            title: "Account Management",
            description: "Manage your account settings and preferences.",
            order: 2,
        },
        {
            id: "integrations",
            icon: "🔌",
            title: "Integrations",
            description: "Connect with your favorite tools.",
            order: 3,
        },
        {
            id: "troubleshooting",
            icon: "🔧",
            title: "Troubleshooting",
            description: "Resolve common issues and errors.",
            order: 4,
        },
        {
            id: "best-practices",
            icon: "✨",
            title: "Best Practices",
            description: "Learn how to get the most out of our platform.",
            order: 5,
        },
        {
            id: "customization",
            icon: "🎨",
            title: "Customization",
            description: "Tailor the platform to your needs.",
            order: 6,
        },
        {
            id: "api-reference",
            icon: "💻",
            title: "API Reference",
            description: "Detailed documentation for our API.",
            order: 7,
        },
        {
            id: "security-compliance",
            icon: "🔒",
            title: "Security & Compliance",
            description: "Information about our security measures and compliance.",
            order: 8,
        },
        {
            id: "billing-subscription",
            icon: "🔄",
            title: "Billing & Subscription",
            description: "Manage your subscription and billing details.",
            order: 9,
        },
        {
            id: "announcements",
            icon: "📢",
            title: "Announcements",
            description: "Stay updated with the latest news and updates.",
            order: 10,
        },
        {
            id: "community",
            icon: "👥",
            title: "Community",
            description: "Engage with other users and share knowledge.",
            order: 11,
        },
    ] as HelpCenterCollection[],
    articles: [
        {
            id: "intro-platform",
            parent_id: "getting-started",
            parent_ids: ["getting-started"],
            title: "Introduction to the Platform",
            description: "A brief overview of the platform and its features.",
            author_id: "author1",
        },
        {
            id: "setup-guide",
            parent_id: "getting-started",
            parent_ids: ["getting-started"],
            title: "Quick Setup Guide",
            description: "Step-by-step guide to setting up your account.",
            author_id: "author2",
        },
        {
            id: "reset-password",
            parent_id: "account-management",
            parent_ids: ["account-management"],
            title: "How to Reset Your Password",
            description: "Instructions for resetting your password.",
            author_id: "author3",
        },
        {
            id: "update-profile",
            parent_id: "account-management",
            parent_ids: ["account-management"],
            title: "Updating Your Profile Information",
            description: "How to update your profile details.",
            author_id: "author1",
        },
        {
            id: "slack-integration",
            parent_id: "integrations",
            parent_ids: ["integrations"],
            title: "Connecting with Slack",
            description: "Guide to integrating with Slack.",
            author_id: "author2",
        },
        {
            id: "zapier-integration",
            parent_id: "integrations",
            parent_ids: ["integrations"],
            title: "Using Zapier with Our Platform",
            description: "Automate workflows using Zapier.",
            author_id: "author3",
        },
        {
            id: "login-issues",
            parent_id: "troubleshooting",
            parent_ids: ["troubleshooting"],
            title: "Troubleshooting Login Issues",
            description: "Common login problems and solutions.",
            author_id: "author1",
        },
        {
            id: "error-messages",
            parent_id: "troubleshooting",
            parent_ids: ["troubleshooting"],
            title: "Understanding Error Messages",
            description: "List of error messages and their meanings.",
            author_id: "author2",
        },
        {
            id: "optimizing-workflow",
            parent_id: "best-practices",
            parent_ids: ["best-practices"],
            title: "Optimizing Your Workflow",
            description: "Tips for efficient workflow management.",
            author_id: "author3",
        },
        {
            id: "data-organization",
            parent_id: "best-practices",
            parent_ids: ["best-practices"],
            title: "Organizing Your Data",
            description: "Best practices for data organization.",
            author_id: "author1",
        },
        {
            id: "custom-themes",
            parent_id: "customization",
            parent_ids: ["customization"],
            title: "Creating Custom Themes",
            description: "How to create and apply custom themes.",
            author_id: "author2",
        },
        {
            id: "layout-options",
            parent_id: "customization",
            parent_ids: ["customization"],
            title: "Exploring Layout Options",
            description: "Overview of available layout options.",
            author_id: "author3",
        },
        {
            id: "authentication-endpoints",
            parent_id: "api-reference",
            parent_ids: ["api-reference"],
            title: "Authentication Endpoints",
            description: "Details on authentication API endpoints.",
            author_id: "author1",
        },
        {
            id: "data-retrieval",
            parent_id: "api-reference",
            parent_ids: ["api-reference"],
            title: "Data Retrieval API",
            description: "How to retrieve data via API.",
            author_id: "author2",
        },
        {
            id: "data-encryption",
            parent_id: "security-compliance",
            parent_ids: ["security-compliance"],
            title: "Data Encryption Standards",
            description: "Information on data encryption practices.",
            author_id: "author3",
        },
        {
            id: "gdpr-compliance",
            parent_id: "security-compliance",
            parent_ids: ["security-compliance"],
            title: "GDPR Compliance",
            description: "Our commitment to GDPR compliance.",
            author_id: "author1",
        },
        {
            id: "upgrade-plan",
            parent_id: "billing-subscription",
            parent_ids: ["billing-subscription"],
            title: "Upgrading Your Plan",
            description: "How to upgrade your subscription plan.",
            author_id: "author2",
        },
        {
            id: "invoice-history",
            parent_id: "billing-subscription",
            parent_ids: ["billing-subscription"],
            title: "Viewing Invoice History",
            description: "Accessing your past invoices.",
            author_id: "author3",
        },
        {
            id: "new-features-v2",
            parent_id: "announcements",
            parent_ids: ["announcements"],
            title: "New Features in Version 2.0",
            description: "Overview of new features in the latest release.",
            author_id: "author1",
        },
        {
            id: "maintenance-schedule",
            parent_id: "announcements",
            parent_ids: ["announcements"],
            title: "Scheduled Maintenance",
            description: "Information about upcoming maintenance.",
            author_id: "author2",
        },
        {
            id: "user-forum",
            parent_id: "community",
            parent_ids: ["community"],
            title: "Joining the User Forum",
            description: "How to join and participate in the user forum.",
            author_id: "author3",
        },
        {
            id: "community-events",
            parent_id: "community",
            parent_ids: ["community"],
            title: "Upcoming Community Events",
            description: "Details on upcoming events and meetups.",
            author_id: "author1",
        },
    ] as HelpCenterArticle[],
}

export const collectionQuery = {
    get() {
        return data.collections.map((collection) => ({
            ...collection,
            articles: data.articles.filter((article) => article.parent_id === collection.id),
            authors: data.authors, // Ideally filter authors per collection if needed
        }))
    },
    find(id: string) {
        const collection = data.collections.find((c) => c.id === id)
        if (!collection) {
            throw new Error(`Collection with ID ${id} not found`)
        }
        return collection
    },
    findArticles(collectionId: string) {
        return data.articles.filter((article) => article.parent_id === collectionId)
    },
}

export const articleQuery = {
    find(id: string) {
        return data.articles.find((article) => article.id === id)
    },
    findByParentId(parentId: string) {
        return data.articles.filter((article) => article.parent_id === parentId)
    },
    findByParentIds(parentIds: string[]) {
        return data.articles.filter((article) =>
            parentIds.some((pid) => article.parent_ids.includes(pid)),
        )
    },
    search(query: string) {
        const searchTerm = query.toLowerCase()
        return data.articles.filter((article) => {
            const titleMatch = article.title.toLowerCase().includes(searchTerm)
            const descriptionMatch = article.description?.toLowerCase().includes(searchTerm)
            return titleMatch || descriptionMatch
        })
    },
    findRelated(articleId: string, limit = 3) {
        const article = this.find(articleId)
        if (!article) return []

        const relatedArticles = this.findByParentIds(article.parent_ids)
        return relatedArticles
            .sort((a, b) => {
                const aShared = a.parent_ids.filter((pid) => article.parent_ids.includes(pid)).length
                const bShared = b.parent_ids.filter((pid) => article.parent_ids.includes(pid)).length
                return bShared - aShared
            })
            .slice(0, limit)
    },
    group(articles: HelpCenterArticle[]) {
        return articles.reduce((acc, article) => {
            if (!article.parent_id) return acc
            const collection = collectionQuery.find(article.parent_id)
            if (!collection) return acc
            const existing = acc.find((c) => c.id === collection.id)
            if (existing) {
                existing.articles.push(article)
                return acc
            }
            return acc.concat({
 ...collection, articles: [article], authors: data.authors 
})
        }, [] as CollectionWithArticles[])
    },
}

export const authorQuery = {
    find(id: string) {
        return data.authors.find((author) => author.id === id)
    },
    findOrThrow(id: string) {
        const author = this.find(id)
        if (!author) {
            throw new Error(`Author with ID ${id} not found`)
        }
        return author
    },
    findMany(ids: string[]) {
        return data.authors.filter((author) => ids.includes(author.id))
    },
}
