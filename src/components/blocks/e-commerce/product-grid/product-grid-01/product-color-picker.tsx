"use client"

import {
 type Color, ColorPicker, parseColor 
} from "@chakra-ui/react"
import { LuCheck } from "react-icons/lu"
import type { Product } from "./types"

interface ProductItemProps {
    data: Product
}

export const ProductColorPicker = (props: ProductItemProps) => {
    const { data } = props
    const { colors, defaultColor } = transform(data)
    return (
        <ColorPicker.Root open defaultValue={defaultColor}>
            <ColorPicker.HiddenInput />
            <ColorPicker.SwatchGroup>
                {colors?.options.map((option) => {
                    const color = option.color ?? "black"
                    return (
                        <ColorPicker.SwatchTrigger rounded="full" key={option.value} value={color}>
                            <ColorPicker.Swatch value={color} boxSize="5">
                                <ColorPicker.SwatchIndicator>
                                    <LuCheck />
                                </ColorPicker.SwatchIndicator>
                            </ColorPicker.Swatch>
                        </ColorPicker.SwatchTrigger>
                    )
                })}
            </ColorPicker.SwatchGroup>
        </ColorPicker.Root>
    )
}

function transform(data: Product) {
    const colors = data.variants?.[0]
    const defaultColors = data.default_variants?.[0]

    let defaultColor: Color | undefined

    for (const option of colors?.options ?? []) {
        if (option.color && option.value === defaultColors?.value) {
            defaultColor = parseColor(option.color)
            break
        }
    }

    return { colors, defaultColor }
}
