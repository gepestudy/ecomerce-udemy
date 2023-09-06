import { User } from "@/types";
import { Link, router } from "@inertiajs/react";
import {
    ActionIcon,
    Button,
    Menu,
    Text,
    useMantineColorScheme,
} from "@mantine/core";
import {
    IconLogout,
    IconMoonStars,
    IconSun,
    IconUser,
} from "@tabler/icons-react";

const HeaderMenu = ({ user }: { user: User }) => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    return (
        <Menu shadow="md" width={200} trigger="hover">
            <Menu.Target>
                <Text className="cursor-pointer">Hi, {user.name}</Text>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Menu</Menu.Label>
                <Link href={route("admin.profile")}>
                    <Menu.Item icon={<IconUser size={14} />}>Profile</Menu.Item>
                </Link>

                <Menu.Divider />
                <Menu.Label>Settings</Menu.Label>
                <Menu.Item
                    icon={
                        colorScheme === "dark" ? (
                            <IconSun
                                size="1.2rem"
                                className="text-yellow-500"
                            />
                        ) : (
                            <IconMoonStars
                                size="1.2rem"
                                className="text-blue-500"
                            />
                        )
                    }
                >
                    <Text
                        onClick={() => {
                            toggleColorScheme();
                        }}
                    >
                        {colorScheme == "dark" ? "Light" : "Dark"}
                    </Text>
                </Menu.Item>

                <Menu.Divider />

                <Menu.Item color="red" icon={<IconLogout size={14} />}>
                    <Text
                        onClick={() => {
                            router.post(route("logout"));
                        }}
                    >
                        Logout
                    </Text>
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
};

export default HeaderMenu;
