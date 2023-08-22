import AdminLayout from "@/Layouts/admin/AdminLayout";
import { User } from "@/types";
import { useForm } from "@inertiajs/react";
import {
    Button,
    Card,
    Flex,
    Text,
    TextInput,
    useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";

const Profile = ({ auth }: { auth: { user: User } }) => {
    const form = useForm({
        name: auth.user.name,
        email: auth.user.email,
    });

    return (
        <AdminLayout title="Profile" user={auth.user}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section p="xs">
                    <Text size="xl">Update Profile</Text>
                </Card.Section>
                <form>
                    <div className="flex flex-col md:flex-row w-full gap-2">
                        <TextInput
                            label="Name"
                            name="name"
                            defaultValue={auth.user.name}
                            type="text"
                            className="flex-auto"
                        />
                        <TextInput
                            label="Email"
                            name="email"
                            defaultValue={auth.user.email}
                            type="email"
                            className="flex-auto"
                        />
                    </div>
                    <Button fullWidth mt="lg">
                        Update
                    </Button>
                </form>
            </Card>
        </AdminLayout>
    );
};

export default Profile;
