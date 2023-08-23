import { AppShell } from "@mantine/core";
import React, { useState } from "react";
import AdminHeader from "./components/AdminHeader";
import { AdminNavbar } from "./components/AdminNavbar";
import { Flash, User } from "@/types";
import { Head } from "@inertiajs/react";
import FlashMessage from "@/Components/flash/FLashMessage";

const AdminLayout = ({
    children,
    user,
    title,
    flash,
}: {
    children: React.ReactNode;
    user: User;
    title: string;
    flash: Flash;
}) => {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Head title={title} />
            <AppShell
                padding="md"
                navbar={<AdminNavbar opened={opened} user={user} />}
                header={
                    <AdminHeader
                        user={user}
                        opened={opened}
                        setOpened={setOpened}
                    />
                }
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
                {flash && <FlashMessage flash={flash} />}
            </AppShell>
        </>
    );
};

export default AdminLayout;
