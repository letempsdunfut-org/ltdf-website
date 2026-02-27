import {
 Box, HStack, IconButton, Text 
} from "@chakra-ui/react"
import { LuEllipsisVertical } from "react-icons/lu"
import { Avatar } from "@/components/ui/avatar"

export const UserProfile = () => {
    return (
        <HStack gap="3" justify="space-between">
            <HStack gap="3">
                <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150" />
                <Box>
                    <Text textStyle="sm" fontWeight="medium">
                        John Doe
                    </Text>
                    <Text textStyle="sm" color="fg.muted">
                        john@chakra-ui.com
                    </Text>
                </Box>
            </HStack>
            <IconButton variant="ghost" colorPalette="gray" aria-label="Open Menu">
                <LuEllipsisVertical />
            </IconButton>
        </HStack>
    )
}
