import {PageProps} from "@/types";
import {router, useForm} from "@inertiajs/react";
import {
    Button,
    Card,
    Center,
    Image,
    MantineTheme,
    PasswordInput,
    Text,
    TextInput,
    useMantineTheme,
} from "@mantine/core";
import {Dropzone, FileWithPath} from "@mantine/dropzone";
import {useState} from "react";
import FrontendLayoutDashboard from "@/Layouts/frontend/dashboard/FrontendLayoutDashboard";

const FDProfile = ({ auth, flash,ziggy }: PageProps) => {
    const theme :MantineTheme = useMantineTheme();
    const form = useForm({
        name: auth.user.name,
        email: auth.user.email,
        image: null,
    });
    const formPassword = useForm({
        current_password: "",
        new_password: "",
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

    const handleUpdateProfile = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.post(route("user.profile.update"), form.data, {
            onSuccess: () => {
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
    };
    const handleUpdatePassword = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.post(route("user.password.update"), formPassword.data, {
            onSuccess: () => {
                formPassword.clearErrors();
                router.reload();
            },
            onError: (e: any) => {
                formPassword.setError(e);
            },
            onFinish: () =>
                formPassword.setData({
                    current_password: "",
                    new_password: "",
                }),
        });
    };



    return (
        <FrontendLayoutDashboard flash={flash} title="Profile" user={auth.user}>
            <div className="flex flex-col gap-5">
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section
                        p="xs"
                        className={`border-b-2 mb-5 ${
                            theme.colorScheme === "dark"
                                ? "border-gray-700"
                                : "border-gray-200"
                        }`}
                    >
                        <Text size="xl">Update Profile</Text>
                    </Card.Section>
                    <form onSubmit={(e) => handleUpdateProfile(e)}>
                        <div>
                            <Dropzone
                                accept={[
                                    "image/jpg",
                                    "image/jpeg",
                                    "image/png",
                                ]}
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

                                <Center my="md">
                                    <Card
                                        shadow="sm"
                                        padding="lg"
                                        radius="md"
                                        withBorder
                                        w={400}
                                    >
                                        {previews.length > 0 ? previews : (
                                            <Image
                                                key={auth.user.image}
                                                src={`${ziggy.url}/storage/profiles/${auth.user.image}`}
                                                imageProps={{ onLoad: () => URL.revokeObjectURL(`${ziggy.url}/storage/profiles/${auth.user.image}`) }}
                                            />
                                        )}
                                    </Card>
                                </Center>
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
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section
                        p="xs"
                        className={`border-b-2 mb-5 ${
                            theme.colorScheme === "dark"
                                ? "border-gray-700"
                                : "border-gray-200"
                        }`}
                    >
                        <Text size="xl">Update Password</Text>
                    </Card.Section>
                    <form onSubmit={(e) => handleUpdatePassword(e)}>
                        <div className="flex flex-col md:flex-row w-full gap-2">
                            <PasswordInput
                                label="Current Password"
                                name="current_password"
                                className="flex-auto"
                                value={formPassword.data.current_password}
                                onChange={(e) =>
                                    formPassword.setData(
                                        "current_password",
                                        e.target.value
                                    )
                                }
                                error={formPassword.errors.current_password}
                            />
                            <PasswordInput
                                label="New Password"
                                name="new_password"
                                className="flex-auto"
                                value={formPassword.data.new_password}
                                onChange={(e) =>
                                    formPassword.setData(
                                        "new_password",
                                        e.target.value
                                    )
                                }
                                error={formPassword.errors.new_password}
                            />
                        </div>
                        <Button fullWidth mt="lg" type="submit">
                            Update
                        </Button>
                    </form>
                </Card>
            </div>
        </FrontendLayoutDashboard>
    );
};

export default FDProfile;
