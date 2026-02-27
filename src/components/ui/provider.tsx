"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { SessionProvider } from "next-auth/react";
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "@/components/ui/color-mode"
import { system } from "@/shared/theme";


export function Provider(props: ColorModeProviderProps) {
  return (
    <SessionProvider>
      <ChakraProvider value={system}>
        <ColorModeProvider {...props} storageKey="app.colorMode" defaultTheme="light">
          {props.children}
        </ColorModeProvider>
      </ChakraProvider>
    </SessionProvider>
  )
}