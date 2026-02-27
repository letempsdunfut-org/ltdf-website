export interface Feature {
    label: string
    infoText?: string
}

export interface PlanData {
    value: string
    title: string
    description: string
    features: Feature[]
    priceSymbol: string
    price: number
    priceUnit: string
    callToAction?: string
    recommended?: boolean
}

export const plans: PlanData[] = [
    {
        value: "basic",
        title: "Free Plan",
        description: "Perfect for testing and personal projects.",
        priceSymbol: "$",
        price: 0,
        priceUnit: "month",
        callToAction: "Get Started",
        features: [
            { label: "1 Project" },
            { label: "500MB Storage", infoText: "Storage for your assets" },
            { label: "Community Support" },
        ],
    },
    {
        value: "pro",
        title: "Professional",
        description: "For individuals and freelancers.",
        priceSymbol: "$",
        price: 29,
        priceUnit: "month",
        callToAction: "Get Started",
        recommended: true,
        features: [
            { label: "Unlimited Projects" },
            { label: "50GB Storage" },
            { label: "Priority Email Support", infoText: "Response within 24h" },
            { label: "Advanced Analytics" },
        ],
    },
    {
        value: "business",
        title: "Business",
        description: "For small teams and businesses.",
        priceSymbol: "$",
        price: 49,
        priceUnit: "month",
        callToAction: "Get Started",
        features: [
            { label: "Unlimited Projects" },
            { label: "500GB Storage" },
            { label: "Dedicated Support" },
            { label: "Team Collaboration" },
            { label: "SSO Integration" },
        ],
    },
]
