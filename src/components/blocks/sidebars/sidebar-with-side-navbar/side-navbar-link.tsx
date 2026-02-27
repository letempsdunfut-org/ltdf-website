import { IconButton, type IconButtonProps } from "@chakra-ui/react"
import React from "react"
import { Tooltip } from "@/components/ui/tooltip"

interface SideNavbarLinkProps extends IconButtonProps {
    label: string
}

export const SideNavbarLink = React.forwardRef<HTMLButtonElement, SideNavbarLinkProps>(
    (props, ref) => {
        const {
 label, children, ...buttonProps 
} = props
        return (
            <Tooltip content={label} positioning={{ placement: "right" }}>
                <IconButton
                    variant="ghost"
                    aria-label={label}
                    ref={ref}
                    {...buttonProps}
                >
                    {children}
                </IconButton>
            </Tooltip>
        )
    }
)
