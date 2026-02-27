import { Container } from "@chakra-ui/react"
import * as logos from "./logo-ipsum"
import { Marquee } from "./marquee"

export const Block = () => (
    <Container py="20">
        <Marquee
            gutter="3.75rem"
            items={Object.values(logos).map((Logo, index) => (
                <Logo height="32px" monochrome key={index} />
            ))}
        />
    </Container>
)
