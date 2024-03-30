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

export type SimpleAccordionItem = {
    titleKey: string
    itemContent: JSX.Element
}

export type SimpleAccordionProps = {
    t: TFunction<Namespace<string>, undefined, string>
    items: SimpleAccordionItem[]
}

export default function SimpleAccordion({t, items}: SimpleAccordionProps) {
    return (
        <Accordion defaultIndex={[0]} w={'100%'}>
            {items.map((value, index) =>
                <AccordionItem key={index}>
                    <Heading as='h2' fontWeight={600}
                             fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                             lineHeight={'110%'}>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                <strong>
                                    {t(value.titleKey)}
                                </strong>
                            </Box>
                            <AccordionIcon/>
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