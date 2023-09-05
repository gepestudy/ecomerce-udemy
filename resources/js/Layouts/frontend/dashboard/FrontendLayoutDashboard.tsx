import { AppShell } from "@mantine/core";
import React, { useState } from "react";
import { Flash, User } from "@/types";
import { Head } from "@inertiajs/react";
import FlashMessage from "@/Components/flash/FLashMessage";
import FDNavbar from "@/Layouts/frontend/dashboard/components/FDNavbar";
import FDHeader from "@/Layouts/frontend/dashboard/components/FDHeader";

const FrontendLayoutDashboard = ({
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
                navbar={<FDNavbar opened={opened} user={user} />}
                header={
                    <FDHeader
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

export default FrontendLayoutDashboard;
