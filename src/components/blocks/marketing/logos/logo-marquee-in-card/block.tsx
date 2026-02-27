import {
 Card, Container, Stack 
} from "@chakra-ui/react"
import * as logos from "./logo-ipsum"
import { Marquee } from "./marquee"

const logoSetA = Object.values(logos)
const logoSetB = [...logoSetA].reverse()

export const Block = () => (
    <Container py="20">
        <Stack gap="4">
            <Marquee
                gutter="4"
                items={logoSetA.map((Logo, index) => (
                    <Card.Root size="sm" key={index} minW="200px">
                        <Card.Body>
                            <Logo height="32px" monochrome />
                        </Card.Body>
                    </Card.Root>
                ))}
            />
            <Marquee
                gutter="4"
                items={logoSetB.map((Logo, index) => (
                    <Card.Root size="sm" key={index} minW="200px">
                        <Card.Body>
                            <Logo height="32px" monochrome />
                        </Card.Body>
                    </Card.Root>
                ))}
            />
        </Stack>
    </Container>
)
