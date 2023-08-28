import FlashMessage from "@/Components/flash/FLashMessage";
import { Flash, User } from "@/types";
import { Head } from "@inertiajs/react";
import { AppShell } from "@mantine/core";
import React, { useState } from "react";
import FEHeader from "./components/FEHeader";
import SubHeader from "./components/SubHeader";

const FrontendLayout = ({
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
                // navbar={<AdminNavbar opened={opened} user={user} />}
                header={<FEHeader opened={opened} setOpened={setOpened} />}
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
                <SubHeader />
                <div className="container mx-auto">{children}</div>
                {flash && <FlashMessage flash={flash} />}
            </AppShell>
        </>
    );
};

export default FrontendLayout;
