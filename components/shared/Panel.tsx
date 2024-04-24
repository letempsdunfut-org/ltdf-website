import {Box, Container} from "@chakra-ui/react";
import React from "react";
import Image, {StaticImageData} from "next/image";

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
            <Container minHeight={'calc(95vh)'} maxW='100%' paddingTop={'16'}
                       position={"relative"}
                       backgroundColor={'#095d78'} color={'white'}>
                {child}
            </Container>
        )
    } else {
        return (
            <Container minHeight={'calc(95vh)'} maxW='100%' paddingTop={'16'} position={"relative"}>
                {child}
            </Container>

        )
    }

}