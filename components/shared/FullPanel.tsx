import {Namespace, TFunction} from "i18next";
import Panel from "./Panel";
import {Box, Center, Heading, Stack} from "@chakra-ui/react";
import React from "react";

export type FullPanelProps = {
    t: TFunction<Namespace<string>, string>
    isInvert: boolean
    headingTextKey?: string
    children: JSX.Element
}



export default function FullPanel({t, isInvert, headingTextKey, children}: FullPanelProps) {

    const heading = (headingTextKey) ? (
        <Heading as='h2' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                 lineHeight={'110%'} textAlign='center'>
            {t(headingTextKey)}
        </Heading>
    ) : null

    return (
        <Panel isInvert={isInvert}>
            <Center>
                <Stack  h={'100%'} as={Box} align={'center'} spacing={{base: 4, md: 8}} py={{base: 5, md: 10}}>
                    {heading}
                    {children}
                </Stack>
            </Center>
        </Panel>
    )
}