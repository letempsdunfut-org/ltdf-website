import {
 Badge, Button, Card, HStack, Icon, Stack, Text 
} from "@chakra-ui/react"
import { LuArrowRight, LuMapPin } from "react-icons/lu"
import { MdAccessTime } from "react-icons/md"
import type { Job } from "./data"

interface Props {
    job: Job
}

export const JobCard = (props: Props) => {
    const { job } = props
    return (
        <Card.Root>
            <Card.Header>
                <HStack justify="space-between">
                    <Card.Title textStyle="xl">{job.title}</Card.Title>
                    <Badge colorPalette={job.colorPalette}>{job.department}</Badge>
                </HStack>
            </Card.Header>
            <Card.Body pt="3">
                <Stack gap="4">
                    <Card.Description textStyle="md">{job.description}</Card.Description>
                    <HStack gap={{ base: "5", md: "6" }}>
                        <HStack>
                            <Icon>
                                <LuMapPin />
                            </Icon>
                            <Text color="fg.muted">{job.location}</Text>
                        </HStack>
                        <HStack>
                            <Icon>
                                <MdAccessTime />
                            </Icon>
                            <Text color="fg.muted">{job.type}</Text>
                        </HStack>
                    </HStack>
                </Stack>
            </Card.Body>
            <Card.Footer>
                <Button variant="subtle" colorPalette="gray">
                    Learn more <LuArrowRight />
                </Button>
            </Card.Footer>
        </Card.Root>
    )
}
