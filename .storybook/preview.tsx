import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import type { Preview } from "@storybook/react";
import { NextIntlClientProvider } from "next-intl";
import React from "react";
import messages from "../src/messages/en-CA.json";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <NextIntlClientProvider locale="en-CA" messages={messages}>
                <ChakraProvider value={defaultSystem}>
                    <Story />
                </ChakraProvider>
            </NextIntlClientProvider>
        ),
    ],
};

export default preview;
