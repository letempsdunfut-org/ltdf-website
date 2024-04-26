import {Box, Center, Heading, Stack, StackProps} from "@chakra-ui/react";
import Image, {StaticImageData} from "next/image";
import Panel from "./Panel";
import React, {CSSProperties} from "react";
import {Namespace, TFunction} from "i18next";
import FullPanel from "./FullPanel";

export type SplitPanelProp = {
    t: TFunction<Namespace<string>, string>
    isInvert: boolean
    headingTextKey?: string
    leftElement: JSX.Element
    rightElement: JSX.Element
} & StackProps

export default function SplitPanel(props: SplitPanelProp) {

    const {
        t,
        isInvert,
        headingTextKey,
        leftElement,
        rightElement,
    } = props

    return (
        <FullPanel t={t} isInvert={isInvert} headingTextKey={headingTextKey}>
            <Stack
                direction={{base: 'column', md: 'row'}}
                spacing={{base: '2', lg: '4'}}
                {...props}
                w={'100%'}
                h={'100%'}
            >
                <Box flex="1">
                    {leftElement}
                </Box>

                <Box flex="1">
                    {rightElement}
                </Box>
            </Stack>
        </FullPanel>
    )
}