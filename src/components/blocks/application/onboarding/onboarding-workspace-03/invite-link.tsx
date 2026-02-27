"use client"

import {
 Clipboard, IconButton, Input, InputGroup 
} from "@chakra-ui/react"
import { LuCheck, LuLink } from "react-icons/lu"

export const InviteLink = (props: { value: string }) => {
    return (
        <Clipboard.Root value={props.value}>
            <Clipboard.Context>
                {({ copied }) => (
                    <InputGroup
                        w="full"
                        endElement={
                            <Clipboard.Trigger asChild>
                                <IconButton variant="ghost" size="sm">
                                    {copied ? <LuCheck /> : <LuLink />}
                                </IconButton>
                            </Clipboard.Trigger>
                        }
                    >
                        <Input defaultValue={props.value} readOnly pr="10" />
                    </InputGroup>
                )}
            </Clipboard.Context>
        </Clipboard.Root>
    )
}
