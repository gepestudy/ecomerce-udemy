import { AppShell } from "@mantine/core";
import React, { useState } from "react";
import VendorHeader from "./components/VendorHeader";
import { Flash, User } from "@/types";
import { Head } from "@inertiajs/react";
import FlashMessage from "@/Components/flash/FLashMessage";
import VendorNavbar from "@/Layouts/vendor/components/VendorNavbar";

const VendorLayout = ({
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
                navbar={<VendorNavbar opened={opened} user={user} />}
                header={
                    <VendorHeader
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

export default VendorLayout;
