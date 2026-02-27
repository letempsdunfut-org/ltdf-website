"use client"

import {
    Button, Container, Heading, Input, Stack
    , Text, Textarea
} from "@chakra-ui/react"
import { Avatar } from "@/components/ui/avatar"
import { Field } from "@/components/ui/field"


const avatarUrl = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150"

export const Block = () => {
    return (
        <Container py="20" maxW="xl">
            <Stack gap="8">
                <Stack gap="1">
                    <Heading as="h2" textStyle="xl">
                        Profile Settings
                    </Heading>
                    <Text color="fg.muted">Update your profile information.</Text>
                </Stack>

                <Stack gap="6">
                    <Field label="Profile Picture">
                        <Stack direction="row" gap="6" align="center">
                            <Avatar size="2xl" name="Segun Adebayo" src={avatarUrl} />
                            <Stack gap="3">
                                <Button variant="outline" size="sm">Change Avatar</Button>
                                <Text textStyle="xs" color="fg.muted">JPG, GIF or PNG. Max size of 800K</Text>
                            </Stack>
                        </Stack>
                    </Field>

                    <Stack gap="4">
                        <Field label="Full Name">
                            <Input defaultValue="Segun Adebayo" />
                        </Field>
                        <Field label="Email">
                            <Input defaultValue="sage@chakra-ui.com" type="email" />
                        </Field>
                        <Field label="Bio">
                            <Textarea defaultValue="Software Engineer at Chakra UI. I love building tools for developers." rows={3} />
                        </Field>
                    </Stack>
                </Stack>

                <Button alignSelf="start">Save Changes</Button>
            </Stack>
        </Container>
    )
}
