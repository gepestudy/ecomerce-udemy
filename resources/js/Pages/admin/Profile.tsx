import AdminLayout from "@/Layouts/admin/AdminLayout";
import { User } from "@/types";
import { useForm } from "@inertiajs/react";
import { Button, Card, Center, Image, Text, TextInput } from "@mantine/core";
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useState } from "react";

const Profile = ({ auth }: { auth: { user: User } }) => {
    const form = useForm({
        name: auth.user.name,
        email: auth.user.email,
        image: null,
    });
    const [files, setFiles] = useState<FileWithPath[]>([]);

    const previews = files.map((file, index) => {
        const imageUrl = URL.createObjectURL(file);
        return (
            <Image
                key={index}
                src={imageUrl}
                imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
            />
        );
    });

    return (
        <AdminLayout title="Profile" user={auth.user}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section p="xs">
                    <Text size="xl">Update Profile</Text>
                </Card.Section>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        form.post(route("admin.profile.update"));
                    }}
                >
                    <div>
                        <Dropzone
                            accept={IMAGE_MIME_TYPE}
                            maxFiles={1}
                            onDrop={(files: any) => {
                                setFiles(files);
                                form.setData("image", files[0]);
                            }}
                        >
                            <Text align="center">
                                update image profile here
                            </Text>
                        </Dropzone>

                        {previews.length > 0 && (
                            <Center my="md">
                                <Card
                                    shadow="sm"
                                    padding="lg"
                                    radius="md"
                                    withBorder
                                    w={400}
                                >
                                    {previews}
                                </Card>
                            </Center>
                        )}
                    </div>
                    <div className="flex flex-col md:flex-row w-full gap-2">
                        <TextInput
                            label="Name"
                            name="name"
                            value={form.data.name}
                            type="text"
                            className="flex-auto"
                            onChange={(e) =>
                                form.setData("name", e.target.value)
                            }
                            error={form.errors.name}
                        />
                        <TextInput
                            label="Email"
                            name="email"
                            value={form.data.email}
                            type="email"
                            className="flex-auto"
                            onChange={(e) =>
                                form.setData("email", e.target.value)
                            }
                            error={form.errors.email}
                        />
                    </div>
                    <Button fullWidth mt="lg" type="submit">
                        Update
                    </Button>
                </form>
            </Card>
        </AdminLayout>
    );
};

export default Profile;
