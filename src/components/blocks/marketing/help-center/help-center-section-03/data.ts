interface HelpCenterAuthor {
    id: string
    name: string
    avatarUrl: string | null
}

interface HelpCenterArticle {
    id: string
    parentId?: string
    parentIds: string[]
    title: string
    description?: string
    authorId?: string // Reference to HelpCenterAuthor
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
            avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8" +
                "fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80",
        },
        {
            id: "author2",
            name: "Segun A.",
            avatarUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8" +
                "fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
        },
        {
            id: "author3",
            name: "Sola O.",
            avatarUrl: null,
        },
    ] as HelpCenterAuthor[],
    collections: [
        {
            id: "about",
            icon: "✨",
            title: "About the Platform",
            description: "Learn about our mission, vision, and the team behind the platform.",
            order: 1,
        },
        {
            id: "getting-started",
            icon: "🚀",
            title: "Getting Started",
            description: "Everything you need to know to get started.",
            order: 2,
        },
    ] as HelpCenterCollection[],
    articles: [
        {
            id: "our-mission",
            parentId: "about",
            parentIds: ["about"],
            title: "Our Mission Statement",
            description: "What drives us and what we aim to achieve.",
            authorId: "author1",
        },
        {
            id: "company-history",
            parentId: "about",
            parentIds: ["about"],
            title: "Company History",
            description: "A look back at how we started and grew.",
            authorId: "author2",
        },
        {
            id: "meet-the-team",
            parentId: "about",
            parentIds: ["about"],
            title: "Meet the Team",
            description: "Get to know the people behind the product.",
            authorId: "author3",
        },
        {
            id: "careers",
            parentId: "about",
            parentIds: ["about"],
            title: "Careers at Our Company",
            description: "Join our team and help us build the future.",
            authorId: "author1",
        },
        {
            id: "press-kit",
            parentId: "about",
            parentIds: ["about"],
            title: "Press Kit",
            description: "Resources for media and press.",
            authorId: "author2",
        },
    ] as HelpCenterArticle[],
}

export const collectionQuery = {
    get() {
        return data.collections.map((collection) => ({
            ...collection,
            articles: data.articles.filter((article) => article.parentId === collection.id),
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
        return data.articles.filter((article) => article.parentId === collectionId)
    },
}

export const articleQuery = {
    find(id: string) {
        return data.articles.find((article) => article.id === id)
    },
    findByParentId(parentId: string) {
        return data.articles.filter((article) => article.parentId === parentId)
    },
    findByParentIds(parentIds: string[]) {
        return data.articles.filter((article) =>
            parentIds.some((pid) => article.parentIds.includes(pid)),
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

        const relatedArticles = this.findByParentIds(article.parentIds)
        return relatedArticles
            .sort((a, b) => {
                const aShared = a.parentIds.filter((pid) => article.parentIds.includes(pid)).length
                const bShared = b.parentIds.filter((pid) => article.parentIds.includes(pid)).length
                return bShared - aShared
            })
            .slice(0, limit)
    },
    group(articles: HelpCenterArticle[]) {
        return articles.reduce((acc, article) => {
            if (!article.parentId) return acc
            const collection = collectionQuery.find(article.parentId)
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
