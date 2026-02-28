"use client"

import {
 Button, Input, Stack 
} from "@chakra-ui/react"
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

interface CreateApiKeyDialogProps {
    open: boolean
    onOpenChange: (details: { open: boolean }) => void
}

export const CreateApiKeyDialog = (props: CreateApiKeyDialogProps) => {
    return (
        <DialogRoot size="sm" placement="center" {...props}>
            <DialogContent>
                <DialogHeader>
                    <DialogCloseTrigger asChild>
                        <CloseButton size="sm" colorPalette="gray" variant="ghost" />
                    </DialogCloseTrigger>
                    <DialogTitle textStyle="lg">New API key</DialogTitle>
                </DialogHeader>

                <DialogBody>
                    <Stack gap="4">
                        <Field label="Name" helperText="Add a name to identify this new API key">
                            <Input size="sm" name="name" placeholder="API key name..." />
                        </Field>

                        <Field label="Expiration date" helperText="Set expiration date for API key">
                            <NativeSelectRoot size="sm">
                                <NativeSelectField defaultValue="2026-02-14" name="expirationDate">
                                    <option value="2026-02-14">Sat, 14 Feb 2026</option>
                                    <option value="2025-12-31">Tue, 31 Dec 2025</option>
                                    <option value="2026-08-17">Mon, 17 Aug 2026</option>
                                    <option value="2027-02-14">Sun, 14 Feb 2027</option>
                                </NativeSelectField>
                            </NativeSelectRoot>
                        </Field>
                    </Stack>
                </DialogBody>

                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button size="sm" variant="outline" colorPalette="gray">
                            Cancel
                        </Button>
                    </DialogActionTrigger>
                    <Button type="submit" size="sm">
                        Create API key
                    </Button>
                </DialogFooter>
            </DialogContent>
        </DialogRoot>
    )
}
