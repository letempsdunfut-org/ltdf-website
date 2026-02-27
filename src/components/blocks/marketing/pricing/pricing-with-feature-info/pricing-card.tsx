import {
    Button,
    Card,
    Flex,
    For,
    List,
    Separator,
    Span,
    Stack,
    type StackProps,
} from "@chakra-ui/react"
import { LuCheck } from "react-icons/lu"
import { InfoTip } from "@/components/ui/toggle-tip"
import type { PlanData } from "./data"

interface PricingCardProps extends StackProps {
    data: PlanData
}

export const PricingCard = (props: PricingCardProps) => {
    const { data, ...rest } = props
    return (
        <Card.Root variant={data.recommended ? "outline" : "subtle"} {...rest}>
            <Card.Body>
                <Stack gap="6" pb="6">
                    <Card.Title color={data.recommended ? "colorPalette.fg" : undefined}>
                        {data.title}
                    </Card.Title>

                    <Flex gap="1" align="flex-end">
                        <Span textStyle="5xl" lineHeight="1">
                            {data.priceSymbol}
                            {data.price}
                        </Span>
                        <Span textStyle="xl" color="fg.muted">
                            / {data.priceUnit}
                        </Span>
                    </Flex>
                    <Button colorPalette={!data.recommended ? "gray" : undefined}>{data.callToAction}</Button>
                    <Card.Description minH="2lh">{data.description}</Card.Description>
                </Stack>

                <Separator variant="dashed" />

                <List.Root variant="plain" align="center" textStyle="sm" gap="3" pt="6">
                    <For each={data.features}>
                        {(item) => (
                            <List.Item alignItems="center" key={item.label}>
                                <List.Indicator asChild color={data.recommended ? "colorPalette.solid" : undefined}>
                                    <LuCheck />
                                </List.Indicator>
                                <Span me="1">{item.label}</Span>
                                {item.infoText && <InfoTip>{item.infoText}</InfoTip>}
                            </List.Item>
                        )}
                    </For>
                </List.Root>
            </Card.Body >
        </Card.Root >
    )
}
