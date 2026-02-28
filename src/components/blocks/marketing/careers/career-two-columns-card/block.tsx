import {
 Container, SimpleGrid, Stack 
} from "@chakra-ui/react"
import { jobs } from "./data"
import { JobCard } from "./job-card"
import { PageHeader } from "./page-header"

export const Block = () => {
    return (
        <Container py={{ base: "16", md: "24" }} maxW="7xl">
            <Stack gap={{ base: "12", md: "16" }}>
                <PageHeader
                    headline="Open Positions"
                    description="Explore exciting job opportunities at our company and join a dynamic team dedicated to innovation and excellence."
                    tagline="Careers"
                    align="center"
                    textAlign="center"
                />
                <SimpleGrid columns={{ base: 1, md: 2 }} gap="8">
                    {jobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </SimpleGrid>
            </Stack>
        </Container>
    )
}
