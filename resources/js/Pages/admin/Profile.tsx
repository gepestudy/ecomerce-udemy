import AdminLayout from "@/Layouts/admin/AdminLayout";
import { PageProps, User } from "@/types";
import { router, useForm } from "@inertiajs/react";
import { Button, Card, Center, Image, Text, TextInput } from "@mantine/core";
import { Dropzone, FileWithPath } from "@mantine/dropzone";
import { useState } from "react";

const Profile = ({ auth, flash }: PageProps) => {
    const form = useForm({
        name: auth.user.name,
        email: auth.user.email,
        image: null,
    });
    const [files, setFiles] = useState<FileWithPath[]>([]);
    const [errorImageFile, setErrorImageFile] = useState<string | null>(null);
    const previews = files.map((file) => {
        const imageUrl = URL.createObjectURL(file);
        return (
            <Image
                key={imageUrl}
                src={imageUrl}
                imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
            />
        );
    });

    return (
        <AdminLayout flash={flash} title="Profile" user={auth.user}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section p="xs">
                    <Text size="xl">Update Profile</Text>
                </Card.Section>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        router.post(route("admin.profile.update"), form.data, {
                            onSuccess: (e) => {
                                form.clearErrors();
                                router.reload();
                            },
                            onError: (e: any) => {
                                form.setError(e);
                            },
                        });
                        setFiles([]);
                        form.setData({
                            name: auth.user.name,
                            email: auth.user.email,
                            image: null,
                        });
                    }}
                >
                    <div>
                        <Dropzone
                            accept={["image/jpg", "image/jpeg", "image/png"]}
                            multiple={false}
                            onDrop={(files: any) => {
                                setFiles(files);
                                form.setData("image", files[0]);
                            }}
                            onReject={(e) =>
                                setErrorImageFile(e[0].errors[0].message)
                            }
                            maxSize={5120 * 1024}
                        >
                            <Text align="center">
                                update image profile here
                            </Text>
                        </Dropzone>
                        {errorImageFile && (
                            <Text align="center" color="red" my="md">
                                {errorImageFile}
                            </Text>
                        )}

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
