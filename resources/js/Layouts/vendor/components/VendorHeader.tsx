import { ChangeColorScheme } from "@/Components/mantine/Button/ChangeColorScheme";
import { User } from "@/types";
import {
    Burger,
    Group,
    Header,
    MediaQuery,
    Text,
    useMantineTheme,
} from "@mantine/core";
import React from "react";
import VendorHeaderMenu from "./VendorHeaderMenu";
import {Link} from "@inertiajs/react";
const VendorHeader = ({
    opened,
    setOpened,
    user,
}: {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
    user: User;
}) => {
    const theme = useMantineTheme();
    return (
        <Header height={{ base: 50, md: 70 }} p="md">
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                    />
                </MediaQuery>

                <Group position="apart" w={"100%"}>
                    <Group>
                        <div className="hidden md:block">
                            <Link href="/">
                                <Text
                                    size="lg"
                                    weight="bold"
                                    className="text-green-500"
                                >
                                    G-Comerce
                                </Text>
                            </Link>
                        </div>
                    </Group>
                    <Group>
                        <VendorHeaderMenu user={user} />
                    </Group>
                </Group>
            </div>
        </Header>
    );
};

export default VendorHeader;
