"use client"

import {
 Button, Input, Link, Stack, Text 
} from "@chakra-ui/react"
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
import { SegmentGroup } from "@/components/ui/segment-group"

interface CreateApiKeyDialogProps {
    open: boolean
    onOpenChange: (details: { open: boolean }) => void
}

export const CreateApiKeyDialog = (props: CreateApiKeyDialogProps) => {
    return (
        <DialogRoot size="sm" placement="center" {...props}>
            <DialogContent>
                <DialogHeader>
                    <DialogCloseTrigger />
                    <DialogTitle>Create secret key</DialogTitle>
                </DialogHeader>

                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        // handle submit
                        props.onOpenChange({ open: false })
                    }}
                >
                    <DialogBody>
                        <Stack gap="5">
                            <Field label="Name">
                                <Input placeholder="e.g. My Secret Key" name="name" />
                            </Field>

                            <Field label="Project">
                                <NativeSelectRoot>
                                    <NativeSelectField defaultValue="default" name="project">
                                        <option value="default">Default project</option>
                                    </NativeSelectField>
                                </NativeSelectRoot>
                            </Field>

                            <Field label="Permissions">
                                <SegmentGroup name="permission" defaultValue="all" size="sm" p="0.5">
                                    {/* Simplified for demo as SegmentGroup implementation might vary */}
                                </SegmentGroup>
                            </Field>

                            <Text textStyle="sm" color="fg.muted">
                                Learn more in the{" "}
                                <Link href="#" colorPalette="primary">
                                    API reference
                                </Link>
                                .
                            </Text>
                        </Stack>
                    </DialogBody>

                    <DialogFooter pb="6">
                        <DialogActionTrigger asChild>
                            <Button variant="outline" colorPalette="gray">
                                Cancel
                            </Button>
                        </DialogActionTrigger>
                        <Button type="submit">Create secret key</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </DialogRoot>
    )
}
