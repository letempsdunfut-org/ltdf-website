export interface StepData {
  id: string
  title: string
  description: string
  href?: string
}

export const stepsData: StepData[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    description:
      "Initial instructions to help you begin your journey with our documentation system.",
    href: "/learn/docs/writing-content/components/steps#getting-started",
  },
  {
    id: "configuration",
    title: "Configuration",
    description: "Configure your environment and setup the necessary tools for development.",
    href: "/learn/docs/writing-content/components/steps#configuration",
  },
  {
    id: "completion",
    title: "Completion",
    description: "Final instructions to wrap up the setup process and verify everything works.",
    href: "/learn/docs/writing-content/components/steps#completion",
  },
]

export const advancedStepsData: StepData[] = [
  {
    id: "prerequisites",
    title: "Prerequisites",
    description:
      "Ensure you have all the required dependencies and tools installed before proceeding.",
  },
  {
    id: "installation",
    title: "Installation",
    description: "Install the package and configure your development environment.",
  },
  {
    id: "configuration-advanced",
    title: "Advanced Configuration",
    description: "Configure advanced settings and customize the behavior to match your needs.",
  },
  {
    id: "integration",
    title: "Integration",
    description:
      "Integrate the component with your existing application and test the functionality.",
  },
  {
    id: "deployment",
    title: "Deployment",
    description: "Deploy your application to production and monitor its performance.",
  },
]
