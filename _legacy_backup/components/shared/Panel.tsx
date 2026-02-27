import {Box, Container} from "@chakra-ui/react";
import React from "react";
import Image, {StaticImageData} from "next/image";
import {ACCENT_COLOR, PRIMARY_COLOR} from "./utils";

export default function Panel({isInvert, children, imageData, imageAltName}: {
    isInvert: boolean,
    imageData?: StaticImageData,
    imageAltName?: string
    children: React.ReactNode
}) {

    const child =
        (imageData && imageAltName) ?
            (
                <Box>
                    <Image
                        src={imageData}
                        alt={imageAltName}
                        loading="lazy"
                        fill={true}
                        style={{
                            filter: "grayscale(1)",
                            opacity: 0.3,
                            objectFit: 'cover',
                            objectPosition: 'center',
                            backgroundColor: 'gray'
                        }}
                    />
                    {children}
                </Box>
            ) : (
                <Box>
                    {children}
                </Box>
            )

    if (isInvert) {
        return (
            <Box minHeight={'calc(95vh)'} maxW='100%' paddingTop={'1'}
                       position={"relative"}
                       backgroundColor={PRIMARY_COLOR} color={ACCENT_COLOR}>
                {child}
            </Box>
        )
    } else {
        return (
            <Box minHeight={'calc(95vh)'} maxW='100%' position={"relative"} paddingTop={'1'}>
                {child}
            </Box>

        )
    }

}