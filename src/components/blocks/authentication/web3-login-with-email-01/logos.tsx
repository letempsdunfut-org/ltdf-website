import { Image, type ImageProps } from "@chakra-ui/react"

export const MetamaskLogo = (props: ImageProps) => (
    <Image
        src="https://placehold.co/35x33?text=MetaMask"
        alt="MetaMask"
        boxSize="6"
        {...props}
    />
)

export const CoinbaseLogo = (props: ImageProps) => (
    <Image
        src="https://placehold.co/32x32?text=Coinbase"
        alt="Coinbase"
        boxSize="6"
        {...props}
    />
)

export const WalletConnectLogo = (props: ImageProps) => (
    <Image
        src="https://placehold.co/32x32?text=WalletConnect"
        alt="WalletConnect"
        boxSize="6"
        {...props}
    />
)
