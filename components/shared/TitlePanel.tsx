import {Box, Center, Heading, Text, VStack} from "@chakra-ui/react";
import Image, {StaticImageData} from "next/image";
import Panel from "./Panel";
import React from "react";
import {Namespace, TFunction} from "i18next";

export type TitlePanelProps = {
    t: TFunction<Namespace<string>, undefined, string>
    pageNameKey: string
    pageTitleColor: string
    pageLogo?: StaticImageData
    pageLogoBg?: string,
    bgImage?: StaticImageData
    bgImageAlt?: string
    titleKey: string
    children: React.ReactNode
}

export default function TitlePanel({
                                       t,
                                       pageNameKey,
                                       pageTitleColor,
                                       pageLogo,
                                       pageLogoBg,
                                       bgImage,
                                       bgImageAlt,
                                       titleKey,
                                       children
                                   }: TitlePanelProps) {

    const pageLogoChild = (pageLogo) ? (
        <Box paddingTop={5}>
            <Image
                src={pageLogo!}
                alt={t(pageNameKey)}
                loading="lazy"
                style={{position: 'relative', backgroundColor: pageLogoBg!, borderRadius: '50%'}}
            />
        </Box>
    ) : (
        <></>
    )

    return (
        <Panel isInvert={false} imageData={bgImage} imageAltName={bgImageAlt}>
            <Center minH={'90vh'}>
                <VStack spacing={5}>
                    {pageLogoChild}
                    <Box>
                        <Heading as='h1' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                 lineHeight={'110%'} textAlign='center' position={'relative'}
                                 textTransform={'uppercase'}
                                 margin={'44px'}
                                 color={pageTitleColor}>
                            {t(titleKey)}
                        </Heading>
                    </Box>
                    <Box marginBottom={'10px'}>
                        {children}
                    </Box>
                </VStack>
            </Center>
        </Panel>
    )
}