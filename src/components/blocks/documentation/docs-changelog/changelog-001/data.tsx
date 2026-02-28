export interface ChangelogEntry {
  version: string
  date: string
  tags: string[]
  title: string
  image: string
  description?: string
  changes: {
    title: string
    description?: string
    link?: string
    image?: string
  }[]
}

export const changelogData: ChangelogEntry[] = [
  {
    title: "Changelog v2.1.0",
    version: "v2.1.0",
    date: "Sept 15, 2025",
    tags: ["new", "improvement"],
    image: "https://placehold.co/600x400",
    changes: [
      {
        title: "New Timeline Component",
        description:
          "Added a flexible timeline component with multiple variants and customization options.",
        link: "#timeline",
        image: "https://placehold.co/600x400",
      },
      {
        title: "Dark Mode Support",
        description: "Full dark mode support across all components with automatic theme switching.",
      },
      {
        title: "Button Focus States",
        description: "Improved accessibility with better focus indicators on all button variants.",
        image: "https://placehold.co/600x400",
      },
    ],
  },
  {
    title: "Changelog v2.0.3",
    version: "v2.0.3",
    date: "Sept 1, 2025",
    image: "https://placehold.co/600x400",
    tags: ["bugfix"],
    changes: [
      {
        title: "TypeScript Definitions",
        description: "Fixed missing type definitions for component props.",
      },
      {
        title: "Modal Performance",
        description: "Optimized modal rendering performance for large content.",
      },
    ],
  },
  {
    title: "Changelog v2.0.0",
    version: "v2.0.0",
    date: "Aug 20, 2025",
    image: "https://placehold.co/600x400",
    tags: ["major"],
    changes: [
      {
        title: "Breaking: New Color System",
        description: "Updated color palette with improved contrast ratios and accessibility.",
      },
      {
        title: "Component Composition API",
        description: "New composition-based API for building complex components.",
      },
      {
        title: "Deprecated Legacy Components",
        description: "Removed legacy components that were deprecated in v1.x.",
      },
    ],
  },
  {
    title: "Changelog v1.9.2",
    version: "v1.9.2",
    date: "Aug 5, 2025",
    image: "https://placehold.co/600x400",
    tags: ["bugfix"],
    changes: [
      {
        title: "Form Validation",
        description: "Fixed validation state not updating correctly in form components.",
        image: "https://placehold.co/600x400",
      },
      {
        title: "SSR Hydration",
        description: "Resolved hydration mismatch issues with server-side rendering.",
        image: "https://placehold.co/600x400",
      },
    ],
  },
]

export const simpleChangelogData: ChangelogEntry[] = [
  {
    title: "Revamped timeline component with new features",
    version: "v2.1.0",
    date: "Sept 15, 2025",
    tags: ["new", "improvement"],
    image: "https://placehold.co/600x400",
    changes: [],
  },
  {
    title: "Update studio to support new components",
    version: "v2.0.3",
    date: "Sept 1, 2025",
    image: "https://placehold.co/600x400",
    tags: ["studio"],
    changes: [],
  },
  {
    title: "Image picker supports multiple images",
    version: "v2.0.0",
    date: "Aug 20, 2025",
    image: "https://placehold.co/600x400",
    tags: ["image picker", "studio"],
    changes: [],
  },
  {
    title: "Improve media library performance and pandacss-cli integration",
    version: "v1.9.2",
    date: "Aug 5, 2025",
    image: "https://placehold.co/600x400",
    tags: ["media-library", "pandacss-cli"],
    changes: [],
  },
]

export const chakraProChangelogData: ChangelogEntry[] = [
  {
    title: "Documentation blocks",
    description:
      "Added documentation blocks to help users build out documentation sites better and faster.",
    version: "v1.0.0",
    date: "Jul 10, 2025",
    tags: ["docs", "new", "table of contents", "code block", "changelog", "example preview"],
    image: "https://placehold.co/600x400",
    changes: [],
  },
  {
    title: "New explore page",
    description:
      "As our library of blocks continues to grow into the hundreds, browsing and discovering new designs was starting to feel overwhelming. To make exploration faster and more enjoyable, we've redesigned our block listings into a gallery-style layout. This new design lets you scan more blocks at a glance, and quickly find exactly what you need without endless scrolling.",
    version: "v0.9.0",
    date: "Jun 25, 2025",
    tags: ["explore", "blocks", "filters", "categories"],
    image: "",
    changes: [
      {
        title: "Improved block discovery",
      },
      {
        title: "Improved website performance",
      },
      {
        title: "Set the foundation for documentation blocks",
      },
    ],
  },
  {
    title: "Block responsiveness preview",
    description:
      "Added responsiveness preview feature to the block studio for better design adjustments.",
    version: "v0.8.0",
    date: "Jun 5, 2025",
    tags: ["studio", "responsiveness", "preview", "design"],
    image: "",
    changes: [],
  },
  {
    title: "Blocks search functionality",
    description:
      "Implemented search functionality in the block studio to quickly find and insert blocks.",
    version: "v0.7.0",
    date: "May 15, 2025",
    tags: ["studio", "search", "blocks", "categories"],
    image: "",
    changes: [],
  },
]
