"use client"
/* eslint-disable react-hooks/refs */

import {
    Button,
    createListCollection,
    IconButton,
    Input,
    Portal,
    Select,
    Stack,
    Text,
} from "@chakra-ui/react"
import { LuPlus, LuX } from "react-icons/lu"
import type { InviteState } from "./use-invite-state"

const roles = createListCollection({
    items: ["Admin", "Member", "Guest"],
})

export const TeamForm = (props: { state: InviteState }) => {
    const { state } = props
    return (
        <Stack gap="4">
            <Text fontWeight="medium" textStyle="sm">
                Team members
            </Text>

            <Stack gap="3" ref={state.containerRef}>
                {state.fields.map((member, index) => (
                    <Stack direction="row" key={index}>
                        <Input
                            data-index={index}
                            placeholder="Email address"
                            type="email"
                            value={member.email}
                            onChange={(e) => state.setEmail(e, index)}
                        />
                        <Select.Root
                            collection={roles}
                            width="9.5rem"
                            onValueChange={(e) => state.setRole(e.value[0], index)}
                            defaultValue={[member.role]}
                        >
                            <Select.HiddenSelect />
                            <Select.Control>
                                <Select.Trigger>
                                    <Select.ValueText placeholder="Role" />
                                </Select.Trigger>
                                <Select.IndicatorGroup>
                                    <Select.Indicator />
                                </Select.IndicatorGroup>
                            </Select.Control>
                            <Portal>
                                <Select.Positioner>
                                    <Select.Content>
                                        {roles.items.map((item) => (
                                            <Select.Item item={item} key={item}>
                                                {item}
                                                <Select.ItemIndicator />
                                            </Select.Item>
                                        ))}
                                    </Select.Content>
                                </Select.Positioner>
                            </Portal>
                        </Select.Root>
                        {state.fields.length > 1 && (
                            <IconButton
                                variant="ghost"
                                colorPalette="gray"
                                onClick={() => state.remove(index)}
                                aria-label="Remove member"
                            >
                                <LuX />
                            </IconButton>
                        )}
                    </Stack>
                ))}
            </Stack>
            <Button
                variant="subtle"
                alignSelf="flex-start"
                size="sm"
                onClick={() => state.add()}
                colorPalette="gray"
            >
                <LuPlus /> Add another
            </Button>
        </Stack>
    )
}
