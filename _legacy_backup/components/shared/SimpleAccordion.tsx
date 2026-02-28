import React from "react";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Heading,
} from "@chakra-ui/react";
import {Namespace, TFunction} from "i18next";
import {MAGIC_RATIO} from "./utils";

export type SimpleAccordionItem = {
    titleKey: string
    itemContent: JSX.Element
}

export type SimpleAccordionProps = {
    t: TFunction<Namespace<string>, string>
    items: SimpleAccordionItem[]
}

export default function SimpleAccordion({t, items}: SimpleAccordionProps) {
    return (
        <Accordion defaultIndex={[0]} >
            {items.map((value, index) =>
                <AccordionItem key={index}>
                    <Heading as='h2' fontWeight={600}
                             fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                             lineHeight={'110%'}>
                        <AccordionButton>
                            <AccordionIcon/>
                            <Box flex='1' textAlign='justify'>
                                <strong>
                                    {t(value.titleKey)}
                                </strong>
                            </Box>

                        </AccordionButton>
                    </Heading>
                    <AccordionPanel pb={4}>
                        {value.itemContent}
                    </AccordionPanel>
                </AccordionItem>
            )}
        </Accordion>
    )
}