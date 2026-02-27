"use client"

import {
    Button,
    Input,
    Stack,
 Text 
} from "@chakra-ui/react"
import { useState } from "react"
import { CloseButton } from "@/components/ui/close-button"
import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
} from "@/components/ui/dialog"
import { Field } from "@/components/ui/field"
import { NativeSelectField, NativeSelectRoot } from "@/components/ui/native-select"
import { Switch } from "@/components/ui/switch"


interface CreateApiKeyDialogProps {
    open: boolean
    onOpenChange: (details: { open: boolean }) => void
}

export const CreateApiKeyDialog = (props: CreateApiKeyDialogProps) => {
    const [neverExpires, setNeverExpires] = useState(false)
    const [days, setDays] = useState(90)

    const expirationOptions = [
        {
 label: "7 days", value: 7, expiryDate: "Sat, 14 Dec 2024" 
},
        {
 label: "30 days", value: 30, expiryDate: "Mon, 06 Jan 2025" 
},
        {
 label: "60 days", value: 60, expiryDate: "Thu, 05 Feb 2025" 
},
        {
 label: "90 days", value: 90, expiryDate: "Fri, 07 Mar 2025" 
},
    ]

    return (
        <DialogRoot size="sm" placement="center" {...props}>
            <DialogContent>
                <DialogHeader>
                    <DialogCloseTrigger asChild>
                        <CloseButton size="sm" colorPalette="gray" variant="ghost" />
                    </DialogCloseTrigger>
                    <DialogTitle textStyle="lg">New API key</DialogTitle>
                </DialogHeader>

                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        props.onOpenChange({ open: false })
                    }}
                >
                    <DialogBody>
                        <Stack gap="5">
                            <Field label="Name" helperText="Add a name to identify this new API key">
                                <Input size="sm" name="name" placeholder="API key name..." />
                            </Field>

                            <Switch
                                checked={neverExpires}
                                onCheckedChange={(e) => setNeverExpires(e.checked)}
                            >
                                Never expires
                            </Switch>
                            <Field label="Expiration date" disabled={neverExpires}>
                                <NativeSelectRoot>
                                    <NativeSelectField
                                        defaultValue={String(days)}
                                        onChange={(e) => setDays(Number(e.target.value))}
                                        aria-label="Select expiration"
                                    >
                                        {expirationOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </NativeSelectField>
                                </NativeSelectRoot>
                                {!neverExpires && (
                                    <Text mt="2" color="fg.muted" textStyle="sm">
                                        The API key will expire on{" "}
                                        {expirationOptions.find((o) => o.value === days)?.expiryDate}
                                    </Text>
                                )}
                            </Field>
                        </Stack>
                    </DialogBody>

                    <DialogFooter pb="6">
                        <DialogActionTrigger asChild>
                            <Button variant="outline" colorPalette="gray">
                                Cancel
                            </Button>
                        </DialogActionTrigger>
                        <Button type="submit">Save</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </DialogRoot>
    )
}
