export interface Sender {
    id: string
    email?: string
    phone?: string
    image?: string
}

export interface MessageAction {
    /** Status of the message action */
    status?: "pending" | "done"
    /** List of buttons associated with the message action */
    buttons?: MessageButton[]
}

export interface MessageButton {
    /** content of the button */
    content: string
    /** type of the button */
    type: "primary" | "secondary"
    /** action to be performed when the button is clicked */
    onClick?: () => void
}

export interface Notification {
    title: string
    id: string
    sender: Sender
    message: string
    created_at: string
    read: boolean
    actions?: MessageAction
    type?: "message" | "alert" | "update" | "request" | "promo"
}

export const notifications: Notification[] = [
    {
        id: "1",
        message: "Can you please review the latest design updates?",
        created_at: "2023-11-23T09:30:00Z",
        sender: {
            id: "sender-1",
            image: "https://cdn.usegalileo.ai/sdxl10/f574d754-001c-433a-9e53-4613204d1933.png",
        },
        title: "New Design Review Request",
        read: false,
        actions: {
            status: "pending",
            buttons: [
                { content: "Review", type: "primary" },
                { content: "Decline", type: "secondary" },
            ],
        },
        type: "request",
    },
    {
        id: "2",
        message: "We have updated our terms of service.",
        created_at: "2023-11-22T14:45:00Z",
        sender: {
            id: "sender-2",
            image: "https://cdn.usegalileo.ai/sdxl10/487373f7-5b65-4af6-bb92-06b29be305e9.png",
        },
        title: "Terms of Service Update",
        read: false,
        type: "update",
    },
    {
        id: "3",
        message: "Your order #12345 has been shipped!",
        created_at: "2023-11-21T18:00:00Z",
        sender: {
            id: "sender-3",
            image: "https://cdn.usegalileo.ai/sdxl10/0ddcc4eb-116e-4ccb-8b5e-de295325c276.png",
        },
        title: "Order Shipped",
        read: false,
        type: "update",
    },
    {
        id: "4",
        message: "Get 20% off your next purchase!",
        created_at: "2023-11-20T10:15:00Z",
        sender: {
            id: "sender-4",
            image: "https://cdn.usegalileo.ai/sdxl10/a4683056-bb66-4184-a82f-2d6de6c57208.png",
        },
        title: "Exclusive Offer",
        read: true,
        type: "promo",
    },
    {
        id: "5",
        message: "A new device has signed in to your account.",
        created_at: "2023-11-19T22:30:00Z",
        sender: {
            id: "sender-5",
            image: "https://cdn.usegalileo.ai/sdxl10/3932b55f-862d-4876-88a4-07153b7c7689.png",
        },
        title: "Security Alert",
        read: true,
        type: "alert",
    },
    {
        id: "6",
        message: "Your subscription will expire in 3 days.",
        created_at: "2023-11-18T12:00:00Z",
        sender: {
            id: "sender-6",
            image: "https://cdn.usegalileo.ai/sdxl10/c30076a0-523e-4286-9a25-e41da8d0af95.png",
        },
        title: "Subscription Expiry",
        read: true,
        actions: {
            status: "pending",
            buttons: [{ content: "Renew Now", type: "primary" }],
        },
        type: "alert",
    },
]
