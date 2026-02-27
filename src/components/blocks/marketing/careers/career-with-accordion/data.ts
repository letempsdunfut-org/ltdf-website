export const jobs = [
    {
        id: "job001",
        title: "Frontend Developer",
        department: "Engineering",
        description:
            "Develop and maintain visually appealing, responsive interfaces. Work closely with designers and backend developers.",
        location: "Remote",
        type: "Full-Time",
        colorPalette: "teal",
    },
    {
        id: "job002",
        title: "Backend Engineer",
        department: "Engineering",
        description:
            "Build robust APIs and services. Ensure efficient data processing and system reliability for our applications.",
        location: "Austin, TX",
        type: "Full-Time",
        colorPalette: "teal",
    },
    {
        id: "job003",
        title: "Marketing Specialist",
        department: "Marketing",
        description:
            "Drive campaigns from concept to launch. Craft content, target audiences, and help shape our brand’s voice across channels.",
        location: "New York, NY",
        type: "Full-Time",
        colorPalette: "blue",
    },
    {
        id: "job004",
        title: "Sales Associate",
        department: "Sales",
        description:
            "Connect with customers, showcase our products, and close deals. Be a key player in expanding our client base.",
        location: "Chicago, IL",
        type: "Part-Time",
        colorPalette: "purple",
    },
    {
        id: "job005",
        title: "Product Marketing Manager",
        department: "Marketing",
        description:
            "Lead marketing initiatives for our product portfolio. Define strategy, manage go-to-market plans, and drive adoption.",
        location: "Seattle, WA",
        type: "Full-Time",
        colorPalette: "orange",
    },
]

export type Job = (typeof jobs)[number]
