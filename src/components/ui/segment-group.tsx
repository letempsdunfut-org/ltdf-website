import { SegmentGroup as ChakraSegmentGroup } from "@chakra-ui/react"
import { forwardRef } from "react"

export const SegmentGroup = forwardRef<HTMLDivElement, ChakraSegmentGroup.RootProps>(
    function SegmentGroup(props, ref) {
        return <ChakraSegmentGroup.Root ref={ref} {...props} />
    },
)
