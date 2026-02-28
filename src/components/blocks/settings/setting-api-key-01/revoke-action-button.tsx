"use client"

import {
 Button, IconButton , Span 
} from "@chakra-ui/react"
import { LuTrash2 } from "react-icons/lu"
import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


export const RevokeActionButton = () => {
    return (
        <DialogRoot role="alertdialog">
            <DialogTrigger asChild>
                <IconButton size="xs" variant="ghost" colorPalette="red">
                    <LuTrash2 />
                </IconButton>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Revoke API Key</DialogTitle>
                    <DialogCloseTrigger />
                </DialogHeader>
                <DialogBody>
                    <DialogDescription>
                        Are you sure? This action cannot be undone. This will permanently revoke the URL{" "}
                        <Span fontWeight="bold">example.com</Span>.
                    </DialogDescription>
                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogActionTrigger>
                    <Button colorPalette="red">Revoke</Button>
                </DialogFooter>
            </DialogContent>
        </DialogRoot>
    )
}
