import {
 Breadcrumb, Button, Container, HStack, IconButton, Spacer 
} from "@chakra-ui/react"
import { Fragment } from "react"
import {
 LuCode, LuPlus, LuSettings 
} from "react-icons/lu"

export const Block = () => {
    return (
        <Container maxW="6xl" py={{ base: "4", md: "6" }}>
            <HStack gap="4" flexWrap="wrap">
                <PageBreadcrumb
                    crumbs={[
                        { label: "Collections", href: "#" },
                        { label: "Users", href: "#" },
                    ]}
                />

                <IconButton variant="ghost" colorPalette="gray" size="sm">
                    <LuSettings />
                </IconButton>

                <Spacer hideBelow="md" />

                <HStack gap="3" width={{ base: "full", md: "auto" }}>
                    <Button variant="outline" bg="bg" colorPalette="gray" flex={{ base: "1", md: "initial" }}>
                        <LuCode /> API Preview
                    </Button>

                    <Button flex={{ base: "1", md: "initial" }}>
                        <LuPlus /> New record
                    </Button>
                </HStack>
            </HStack>
        </Container>
    )
}

interface PageBreadcrumbProps {
    crumbs: Array<{ label: string; href: string }>
}

const PageBreadcrumb = ({ crumbs }: PageBreadcrumbProps) => {
    return (
        <Breadcrumb.Root color="fg.muted" size="lg">
            <Breadcrumb.List>
                {crumbs.map((crumb, index) => {
                    const isLast = index === crumbs.length - 1
                    return (
                        <Fragment key={index}>
                            <Breadcrumb.Item textStyle="xl">
                                {isLast ? (
                                    <Breadcrumb.CurrentLink>{crumb.label}</Breadcrumb.CurrentLink>
                                ) : (
                                    <Breadcrumb.Link href={crumb.href}>{crumb.label}</Breadcrumb.Link>
                                )}
                            </Breadcrumb.Item>
                            {!isLast && <Breadcrumb.Separator textStyle="xl">/</Breadcrumb.Separator>}
                        </Fragment>
                    )
                })}
            </Breadcrumb.List>
        </Breadcrumb.Root>
    )
}
