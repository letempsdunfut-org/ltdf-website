import {Box, Center, Heading, Stack} from "@chakra-ui/react";
import Image, {StaticImageData} from "next/image";
import Panel from "./Panel";
import React, {CSSProperties} from "react";
import {Namespace, TFunction} from "i18next";

export type SplitImageTextPanelProps = {
    t: TFunction<Namespace<string>, string>
    isInvert: boolean
    headingTextKey: string
    isImageLeft: boolean
    textElement: JSX.Element
    imageSrc: StaticImageData
    imageAltKey: string
    imageStyle?: CSSProperties
}

export default function SplitImageTextPanel({
                                                t,
                                                isInvert,
                                                headingTextKey,
                                                isImageLeft,
                                                textElement,
                                                imageSrc,
                                                imageAltKey,
                                                imageStyle
                                            }: SplitImageTextPanelProps) {

    const magicRatio = ['95%', '85%', '80%', '70%'];

    const imageElement = (
        <Image
            src={imageSrc}
            alt={t(imageAltKey)}
            loading={'lazy'}
            style={imageStyle}
        />
    )

    const splitPanel = isImageLeft ?
        (
            <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minWidth={'95vw'} minHeight={'80vh'}
                   maxHeight='max' w={magicRatio}>
                <Box w='50%' alignItems={'center'}>
                    <Center>
                        {imageElement}
                    </Center>
                </Box>

                <Box w={magicRatio}>
                    {textElement}
                </Box>
            </Stack>
        ) : (
            <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minWidth={'95vw'} minHeight={'80vh'}
                   maxHeight='max' w={magicRatio}>

                <Box w={magicRatio} minW={magicRatio}>
                    {textElement}
                </Box>

                <Box w='50%' alignItems={'center'}>
                    <Center>
                        {imageElement}
                    </Center>
                </Box>
            </Stack>
        )


    return (
        <Panel isInvert={isInvert}>
            <Heading as='h2' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                     lineHeight={'110%'} textAlign='center'>
                {t(headingTextKey)}
            </Heading>
            {splitPanel}
        </Panel>
    )
}