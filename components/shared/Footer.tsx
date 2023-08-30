import {Box, Center, Container, Flex, Heading, HStack, IconButton, Spacer, Stack, Text, VStack} from "@chakra-ui/react";
import Image from "next/image";
import facebookLogo from "../../public/images/facebookLogo.svg";
import instagramLogo from "../../public/images/Instagram_logo_2016.svg";
import React from "react";
import {TFunction} from "i18next";

export default function Footer({t}: { t: TFunction<"common", undefined, "common"> }) {

    return (
        <Box backgroundColor={'white'} color={'#095d78'} py={8} borderTop={"1px #095d78 solid"}>
            <Stack direction={['column', 'row']} spacing={8} alignItems={'center'}
                   maxHeight='max' paddingTop={5}>
                <Box w='50%'>
                    <Center h='100%'>
                        <VStack>
                            <Heading as='h3' fontWeight={600} fontSize={{base: '2xl', sm: '1xl', md: '2xl'}}
                                     lineHeight={'110%'}>
                                {t('contactUs')}
                            </Heading>
                            <Text> <a href='mailto:contact@letempsdunfut.ca'> contact@letempsdunfut.ca</a>
                            </Text>
                            <Text>+1 (438)-793-6644</Text>
                        </VStack>
                    </Center>
                </Box>

                <Box w='50%'>
                    <Center h='100%'>
                        <VStack>
                            <Heading textAlign={'center'} as='h3' fontWeight={600}
                                     fontSize={{base: '2xl', sm: '1xl', md: '2xl'}}
                                     lineHeight={'110%'}>
                                {t('folowUs')}
                            </Heading>
                            <HStack spacing={8}>
                                <IconButton aria-label={t('facebookLogoLabel')} backgroundColor='white'
                                            icon={<Image src={facebookLogo} height={40} width={40}
                                                         alt={t('facebookLogoAlt')}/>}
                                            onClick={() => {
                                                window.open('https://www.facebook.com/people/Le-temps-dun-f%C3%BBt/100087660347259/')
                                            }}/>


                                <IconButton aria-label={t('instagramLogoLabel')} backgroundColor='white'
                                            icon={<Image src={instagramLogo} height={40} width={40}
                                                         alt={t('instagramLogoAlt')}/>}
                                            onClick={() => {
                                                window.open('https://www.instagram.com/ltdf_qc/')
                                            }}/>
                            </HStack>
                        </VStack>
                    </Center>
                </Box>
            </Stack>

            <Box textAlign={'center'} paddingTop={5} marginBottom={0}>
                <Text> {t('copyright')}</Text>
            </Box>
        </Box>
    )
}