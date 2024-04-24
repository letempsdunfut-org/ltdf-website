import {Namespace, TFunction} from "i18next";
import Panel from "./Panel";
import {Box, Center, Heading, Stack} from "@chakra-ui/react";
import React from "react";

export type FullPanelProps = {
    t: TFunction<Namespace<string>, string>
    isInvert: boolean
    headingTextKey: string
    children: JSX.Element
}

const magicRatio = ['95%', '95%', '90%', '80%', '70%', '60%'];


export default function FullPanel({t, isInvert, headingTextKey, children}: FullPanelProps) {
    return (
        <Panel isInvert={isInvert}>
            <Center>
                <Stack as={Box} align={'center'} spacing={{base: 4, md: 8}} py={{base: 5, md: 10}} w={magicRatio}>
                    <Heading as='h2' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                             lineHeight={'110%'} textAlign='center'>
                        {t(headingTextKey)}
                    </Heading>
                    {children}
                </Stack>
            </Center>
        </Panel>
    )
}