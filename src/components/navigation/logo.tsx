import { Image } from '@chakra-ui/react';

export const Logo = (props: React.ComponentProps<typeof Image>) => (
    <Image src="/images/logoLtdf.svg" alt="LTDF Logo" height="24px" {...props} css={{ _dark: { src: '/images/logoLtdfWhite.svg' } }} />
)
