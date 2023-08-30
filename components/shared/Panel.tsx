import {TFunction} from "i18next";
import {Box, Button, Center, Container, Heading, Stack, VStack} from "@chakra-ui/react";
import React from "react";
import Image, {StaticImageData} from "next/image";
import imgCouverture from "../../public/images/couverture/bartender.jpg";

export default function Panel({isInvert, children, imageData, imageAltName}: {
    isInvert: boolean,
    imageData?: StaticImageData,
    imageAltName?: string
    children: React.ReactNode
}) {

    const child =
        (imageData && imageAltName) ?
            (
                <>
                    <Image
                        src={imageData}
                        alt={imageAltName}
                        loading="lazy"
                        fill={true}
                        style={{objectFit: 'cover', objectPosition: 'center', backgroundColor: 'gray'}}
                    />
                    {children}
                </>
            ) : (
                <>
                    {children}
                </>
            )

    if (isInvert) {
        return (
            <Container minHeight={'95vh'} maxW='100%' paddingTop={'16'} position={"relative"}
                       backgroundColor={'#095d78'} color={'white'}>
                {child}
            </Container>
        )
    } else {
        return (
            <Container minHeight={'95vh'} maxW='100%' paddingTop={'16'} position={"relative"}>
                {child}
            </Container>

        )
    }

}