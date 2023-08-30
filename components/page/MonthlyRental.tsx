import {Trans, useTranslation} from "next-i18next";
import {usePagesLinks} from "../../lib/pagesLinks";
import Layout from "../shared/layout";
import Head from "next/head";
import Panel from "../shared/Panel";
import {Box, Button, Center, Heading, List, ListIcon, ListItem, Stack, Text, VStack} from "@chakra-ui/react";
import Image from "next/image";
import kegkumImg from "../../public/images/kegkumLight.png";
import LinkComponent from "../shared/LinkComponent";
import imgLocation from "../../public/images/ltdf/tireuse-noel.jpg";
import {AddIcon} from "@chakra-ui/icons";


export default function MonthlyRental() {
    const {t} = useTranslation(['monthelyRental', 'common']);
    const name = t('monthelyRental:pageTitle');

    const magicRatio = ['95%', '95%', '90%', '80%', '70%', '60%'];
    const magicImageRatioVw = ['80vw', '60vw', '60vw', '40vw', '30vw', '30vw'];

    return (
        <>
            <Layout>
                <Head>
                    <title>{name}</title>
                </Head>
                <Panel isInvert={false}>
                    <VStack spacing={5}>
                        <Box boxSize={magicImageRatioVw} paddingTop={5}>
                            <Image
                                src={kegkumImg}
                                alt={name}
                                loading="lazy"
                                style={{position: 'relative', backgroundColor: '#095d78', borderRadius: '50%'}}
                            />
                        </Box>
                        <Box>
                            <Heading as='h1' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                     lineHeight={'110%'} textAlign='center' position={'relative'}
                                     textTransform={'uppercase'}
                                     margin={'44px'}>
                                Location mensuel (tout compris)
                            </Heading>
                        </Box>
                        <Box marginBottom={'10px'}>
                            <VStack alignItems={'center'}>
                                <Text fontSize={{base: '2xl', sm: 'xl', md: '3xl'}}>À PARTIR 259,99$ + TX / MOIS</Text>
                                <Text fontSize={{base: '2xl', sm: 'xl', md: '3xl'}}>
                                    <strong>DISTRIBUTRICE INCLUSE!</strong></Text>
                            </VStack>
                        </Box>
                    </VStack>
                </Panel>

                <Panel isInvert={true}>
                    <VStack alignItems={'center'}>
                        <Box>
                            <Heading as='h2' fontWeight={600} fontSize={{base: '3xl', sm: '1xl', md: '4xl'}}
                                     lineHeight={'110%'} textAlign='center' position={'relative'}
                                     textTransform={'uppercase'}
                                     margin={'44px'}>
                                DE LA KOMBUCHA
                            </Heading>
                        </Box>
                        <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'}
                               maxHeight='max'>
                            <Box w='50vw' h='100%'>
                                <Center>
                                    <VStack>
                                        <Text>Et si vous proposiez au
                                            quotidien des breuvages sans alcool à vos collaborateur ou clients?</Text>
                                        <br/>
                                        <br/>
                                        <Text>Une alternative a la caféine
                                            garantit vegan, naturel et sans aromes artificiel ? Toujours fraiche et en
                                            quantité adaptées a vos besoin ? Avec pour seul inconvénient mensuel, le
                                            choix du ou des parfums que vous souhaitez proposer ?</Text>

                                    </VStack>
                                </Center>

                            </Box>
                            <Box w='100%' h='100%'>
                                <Center>
                                    <Image
                                        src={kegkumImg}
                                        alt={name}
                                        loading="lazy"
                                        style={{position: 'relative', backgroundColor: '#095d78', borderRadius: '50%'}}
                                    />
                                </Center>
                            </Box>
                        </Stack>
                    </VStack>
                </Panel>

                <Panel isInvert={false}>
                    <VStack>
                        <Box>
                            <Heading as='h2' fontWeight={600} fontSize={{base: '3xl', sm: '1xl', md: '4xl'}}
                                     lineHeight={'110%'} textAlign='center' position={'relative'}
                                     textTransform={'uppercase'}
                                     margin={'44px'}>
                                L&apos;offre Kombu cha cha cha
                            </Heading>
                        </Box>

                        <Box>
                            <Text>
                                Notre offre est la réponse a toutes vos interrogations.
                                <br/>
                                <br/>
                                Amenez la qualité de service d&apos;un bar dans le confort de vos locaux et offrez à vos
                                employés,
                                convives ou clients une expérience de qualité supérieur.
                                <br/>
                                Ne vous préoccupez pas de
                                l&apos;entretien
                                du matériel ni de son évolution.
                                <br/>
                                Libérez vous des corvées de recyclage de canettes, réduisez
                                votre empreinte carbone et proposez des produits 100% biologique made in Quebec.
                                <br/>
                                <br/>
                                Et puisque désormais vous avez un systeme de tireuse professionel, bénéficiez de
                                l&apos;accès
                                a
                                des
                                offres de fûts de micro-brasserie quebecquoise pour vos evenements!
                            </Text>
                        </Box>
                        <Box backgroundColor={'gray.50'}>
                            <Box margin={'2vw'}>
                                Voici le contenu de notre offre:
                                <li> Distributrice pro incluse </li>
                                <li>Livraison et installation</li>
                                <li>Maintenance mensuelle</li>
                                <li> À partir de 20L de Kombucha Gutsy (lien vers le site gutsy)</li>
                                <li> Changez de saveur chaque mois</li>
                                <li> Augmentez ou réduisez votre forfait au besoin</li>
                                <li>Livraison des fûts</li>
                                <li> Gestion des consignes</li>
                                <li>Paiement en ligne et facturation mensuel</li>
                                <li> Accés aux offres de fûts des micro quebecquoise</li>
                            </Box>
                        </Box>

                    </VStack>


                </Panel>

                <Panel isInvert={true}>
                    <></>
                </Panel>
            </Layout>
        </>

    )
}