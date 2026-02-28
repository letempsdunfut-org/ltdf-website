import {
 Badge, Box, Float, IconButton, Popover, type PopoverRootProps, Portal 
} from "@chakra-ui/react"
import { LuBell } from "react-icons/lu"

export const NotificationPopover = (props: Omit<PopoverRootProps, "children">) => {
    return (
        <Popover.Root positioning={{ placement: "bottom-end" }} {...props}>
            <Popover.Trigger asChild>
                <IconButton variant="ghost" size="sm" colorPalette="gray" rounded="full">
                    <LuBell />
                    <Float placement="top-end" offsetX="1" offsetY="1">
                        <Badge
                            variant="solid"
                            size="sm"
                            rounded="full"
                            colorPalette="red"
                            boxSize="4"
                            p="0"
                            justifyContent="center"
                            alignItems="center"
                        >
                            3
                        </Badge>
                    </Float>
                </IconButton>
            </Popover.Trigger>
            <Portal>
                <Popover.Positioner>
                    <Popover.Content minW="240px">
                        <Popover.Arrow />
                        <Popover.Body textStyle="sm">
                            <Box fontWeight="medium">Notifications</Box>
                            <Box color="fg.muted" mt="2">
                                You have 3 unread notifications
                            </Box>
                        </Popover.Body>
                    </Popover.Content>
                </Popover.Positioner>
            </Portal>
        </Popover.Root>
    )
}
