import {Box, Center, Heading, Stack} from "@chakra-ui/react";
import Image, {StaticImageData} from "next/image";
import Panel from "./Panel";
import React, {CSSProperties} from "react";
import {Namespace, TFunction} from "i18next";
import SplitPanel from "./SplitPanel";

export type SplitImageTextPanelProps = {
    t: TFunction<Namespace<string>, string>
    isInvert: boolean
    headingTextKey?: string
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


    const imageElement = (
        <Center >
                <Image
                    src={imageSrc}
                    alt={t(imageAltKey)}
                    loading={'lazy'}
                    style={imageStyle}
                />
        </Center>

    )

    const leftElement = isImageLeft ? imageElement : textElement
    const rightElement = isImageLeft ? textElement : imageElement

    return (
        <SplitPanel headingTextKey={headingTextKey} t={t} isInvert={isInvert} padding={2}
                    leftElement={leftElement}
                    rightElement={rightElement}/>
    )
}