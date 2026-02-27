import { Icon, Show } from "@chakra-ui/react"
import { JSX, ReactNode } from "react"
import { LuMinus } from "react-icons/lu"

/**
 * 
 * @param value used to verify the value of component
 * @param content used to render JSX component (example: MarketBadge)  
 * @returns return the component if the value is truthy.
 */
export function ShowComponent<T>(
    value: T, content: JSX.Element
): ReactNode {
        return(
            <Show when={value} fallback={<Icon ml={2} ><LuMinus /></Icon>}>
                {content}
            </Show>
        )
}