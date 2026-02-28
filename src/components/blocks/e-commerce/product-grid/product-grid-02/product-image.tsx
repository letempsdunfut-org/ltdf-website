import { AspectRatio, Box } from "@chakra-ui/react"
import type { Product } from "./types"

interface ProductImageProps {
    data: Product
}

export const ProductImage = (props: ProductImageProps) => {
    const { data } = props
    return (
        <Box pos="relative" aspectRatio="0.65" isolation="isolate">
            {data.images?.slice(0, 2).map((image, index) => (
                <AspectRatio
                    pos="absolute"
                    inset="0"
                    ratio={0.65}
                    key={image.id}
                    data-index={index}
                    opacity={index === 0 ? 1 : 0}
                    _groupHover={{ opacity: index === 0 ? 0 : 1 }}
                >
                    <img src={image.src} alt={data.title} />
                </AspectRatio>
            ))}
        </Box>
    )
}
