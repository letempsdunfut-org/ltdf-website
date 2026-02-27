import {
  Button, HStack, Text
} from "@chakra-ui/react";
import {
  DialogBody, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle
} from "./dialog";

export default function ConfirmDialog(
  {
    title,
    text,
    closeButtonText,
    confirmButtonText,
    isDestructive,
    isDialogOpen,
    onOpenChange,
    closeDialog,
    confirmDialog,
  }: Readonly<{
    title: string;
    text: string;
    closeButtonText: string;
    confirmButtonText: string;
    isDestructive?: boolean;
    isDialogOpen: boolean;
    onOpenChange?: ((details: { open: boolean }) => void);
    closeDialog: () => void;
    confirmDialog: () => void;
  }>) {
  return (
    <DialogRoot open={isDialogOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Text>{text}</Text>
        </DialogBody>
        <DialogFooter>
          <HStack gap={2} justifyContent="flex-end">
            <Button variant="outline" onClick={closeDialog}>
              {closeButtonText}
            </Button>
            <Button colorPalette={isDestructive ? "red" : undefined}  variant="solid" onClick={confirmDialog}>
              {confirmButtonText}
            </Button>
          </HStack>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  )
}
