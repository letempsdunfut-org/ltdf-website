import {
 Badge, Box, Float, IconButton 
} from "@chakra-ui/react"
import type { PopoverRootProps } from "@chakra-ui/react"
import { LuBell } from "react-icons/lu"
import {
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverRoot,
    PopoverTrigger,
} from "@/components/ui/popover"

export const NotificationPopover = (props: Omit<PopoverRootProps, "children">) => {
    return (
        <PopoverRoot positioning={{ placement: "bottom-end" }} {...props}>
            <PopoverTrigger asChild>
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
            </PopoverTrigger>
            <PopoverContent minW="240px">
                <PopoverArrow />
                <PopoverBody textStyle="sm">
                    <Box fontWeight="medium">Notifications</Box>
                    <Box color="fg.muted" mt="2">
                        You have 3 unread notifications
                    </Box>
                </PopoverBody>
            </PopoverContent>
        </PopoverRoot>
    )
}
