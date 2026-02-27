import {
    Accordion,
    Badge,
    Button,
    Container,
    HStack,
    Icon,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react"
import { LuArrowRight, LuMapPin } from "react-icons/lu"
import { MdAccessTime } from "react-icons/md"
import { jobs } from "./data"
import { SectionHeader } from "./section-header"

export const Block = () => {
    return (
        <Container py={{ base: "16", md: "24" }}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: "12", md: "16" }}>
                <SectionHeader
                    headline="Open Positions"
                    description="Explore exciting job opportunities at our company and join a dynamic team dedicated to innovation and excellence."
                    tagline="Careers"
                    alignItems="start"
                    maxW="lg"
                />

                <Accordion.Root defaultValue={[jobs[0].id]}>
                    {jobs.map((job) => (
                        <Accordion.Item key={job.id} value={job.id}>
                            <Accordion.ItemTrigger py="4" textStyle={{ base: "lg", md: "xl" }}>
                                <HStack flex="1">
                                    {job.title}
                                    <Badge colorPalette={job.colorPalette}>{job.department}</Badge>
                                </HStack>
                                <Accordion.ItemIndicator />
                            </Accordion.ItemTrigger>
                            <Accordion.ItemContent color="fg.muted" pb="8">
                                <Accordion.ItemBody>
                                    <Stack gap={{ base: "4", md: "5" }} alignItems="start">
                                        <Text color="fg.muted">{job.description}</Text>
                                        <HStack gap={{ base: "5", md: "6" }}>
                                            <HStack color="fg.muted">
                                                <Icon>
                                                    <LuMapPin />
                                                </Icon>
                                                <Text>{job.location}</Text>
                                            </HStack>
                                            <HStack color="fg.muted">
                                                <Icon>
                                                    <MdAccessTime />
                                                </Icon>
                                                <Text>{job.type}</Text>
                                            </HStack>
                                        </HStack>
                                        <Button variant="outline" size="sm">
                                            Apply now <LuArrowRight />
                                        </Button>
                                    </Stack>
                                </Accordion.ItemBody>
                            </Accordion.ItemContent>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </SimpleGrid>
        </Container>
    )
}
