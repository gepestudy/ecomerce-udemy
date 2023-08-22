import { AppShell } from "@mantine/core";
import React, { useState } from "react";
import AdminHeader from "./components/AdminHeader";
import { AdminNavbar } from "./components/AdminNavbar";
import { User } from "@/types";

const AdminLayout = ({
    children,
    user,
}: {
    children: React.ReactNode;
    user: User;
}) => {
    const [opened, setOpened] = useState(false);

    return (
        <AppShell
            padding="md"
            navbar={<AdminNavbar opened={opened} user={user} />}
            header={<AdminHeader opened={opened} setOpened={setOpened} />}
            styles={(theme) => ({
                main: {
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            })}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
        >
            {children}
        </AppShell>
    );
};

export default AdminLayout;
