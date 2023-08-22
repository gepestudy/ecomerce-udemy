import {
    Burger,
    Header,
    MediaQuery,
    Text,
    useMantineTheme,
} from "@mantine/core";
import React from "react";
const AdminHeader = ({
    opened,
    setOpened,
}: {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
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

                <Text>Admin Dashboard</Text>
            </div>
        </Header>
    );
};

export default AdminHeader;
