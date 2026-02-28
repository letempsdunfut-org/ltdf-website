export interface PlanData {
    value: string
    title: string
    features: string[]
    priceUnit: string
    price: number
    priceCurrency: string
    priceSymbol: string
    colorPalette?: string
    recommended?: boolean
}

export const plans: PlanData[] = [
    {
        value: "basic",
        title: "Basic",
        features: ["10 Projects", "5 GB Storage", "Basic Support"],
        priceUnit: "month",
        price: 9,
        priceCurrency: "USD",
        priceSymbol: "$",
        colorPalette: "gray",
        recommended: false,
    },
    {
        value: "pro",
        title: "Professional",
        features: ["Unlimited Projects", "50 GB Storage", "Priority Support"],
        priceUnit: "month",
        price: 29,
        priceCurrency: "USD",
        priceSymbol: "$",
        recommended: true,
    },
    {
        value: "enterprise",
        title: "Enterprise",
        features: ["Unlimited Projects", "Unlimited Storage", "Dedicated Manager"],
        priceUnit: "month",
        price: 99,
        priceCurrency: "USD",
        priceSymbol: "$",
        colorPalette: "gray",
        recommended: false,
    },
]
