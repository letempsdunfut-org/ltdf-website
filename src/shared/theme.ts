import {
  createSystem, defaultConfig, defineConfig
} from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    "html": {
      fontSize: "14px", // Shrinks overall rem scaling
    },
    "body": {
      color: "fg",
    }
  },
  theme: {
    tokens: {
      colors: {
        brand: {
          overlay: { value: "#1A3A5A" },
          1: { "value": "#e6e9ed" },
          2: { "value": "#d8e0ea" },
          3: { "value": "#ccd4db" },
          4: { "value": "#99a9b9" },
          5: { "value": "#667d96" },
          6: { "value": "#335274" },
          7: { "value": "#03274c" }, // main color
          8: { "value": "#032344" },
          9: { "value": "#021f3c" },
          10: { "value": "#021a33" },
          11: { "value": "#01162b" },
          12: { "value": "#010d1a" },
          green: { "value": "#4A8D49" },
          beige: { "value": "#DFD098" },
          orange: { "value": "#EDA741" },
          lime: { "value": "#91B84B" },
          red: { "value": "#DC2626" },
          dark: { "value": "#071925" }
        },
      },
      // Typographie
      fonts: {
        body: {
          value: "Roboto, sans-serif",
        },
        heading: {
          value: "Roboto, sans-serif",
        },
        mono: {
          value: "Roboto, sans-serif",
        },
      },
    },
    semanticTokens: {
      colors: {
        fg: {
          default: { value: { base: "{colors.brand.7}", _dark: "{colors.brand.1}" } },
          muted: { value: { base: "{colors.brand.5}", _dark: "{colors.brand.2}" } },
          inverse: { value: { base: "{colors.brand.1}", _dark: "{colors.brand.12}" } },
          error: { value: { base: "{colors.brand.red}", _dark: "{colors.brand.red}" } },
          indicator: {
            positive: { value: { base: "{colors.brand.green}", _dark: "{colors.brand.green}" } },
            neutral: { value: { base: "{colors.brand.6}", _dark: "{colors.brand.6}" } },
            warning: { value: { base: "{colors.brand.orange}", _dark: "{colors.brand.orange}" } },
            negative: { value: { base: "{colors.brand.red}", _dark: "{colors.brand.red}" } },
          }
        },
        bg: {
          default: { value: { base: "white", _dark: "{colors.brand.12}" } },
          solid: { value: { base: "{colors.brand.7}", _dark: "{colors.brand.7}" } },
          overlay: { value: { base: "{colors.brand.overlay.light}", _dark: "{colors.brand.overlay.dark}" } },
          sidebar: { value: { base: "{colors.brand.7}", _dark: "{colors.brand.7}" } },
        },
        sidebar: {
          text: { value: { base: "{colors.brand.1}", _dark: "{colors.brand.1}" } },
        },
        // Palettes consommées par colorPalette="<name>"
        colorPalette: {
          solid: { value: { base: "{colors.brand.7}", _dark: "{colors.brand.1}" } },
          contrast: { value: { base: "{colors.brand.1}", _dark: "{colors.brand.7}" } },
        },
      }
    }
  },
})

export const system = createSystem(defaultConfig, config)