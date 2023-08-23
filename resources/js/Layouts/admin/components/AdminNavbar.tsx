import { Logo } from "@/Components/Logo";
import { UserButton } from "@/Components/mantine/Button/UserButton";
import { NavbarLinksGroup } from "@/Components/mantine/links/NavbarLinksGroup";
import { User } from "@/types";
import {
    Code,
    Group,
    Navbar,
    ScrollArea,
    createStyles,
    rem,
} from "@mantine/core";
import { IconGauge } from "@tabler/icons-react";

interface Link {
    label: string;
    link: string;
}

export interface NavbarMockData {
    label: string;
    icon: any;
    initiallyOpened?: boolean;
    link?: string;
    links?: Link[];
}

export function AdminNavbar({ opened, user }: { opened: boolean; user: User }) {
    const { classes } = useStyles();
    const mockdata: NavbarMockData[] = [
        { label: "Dashboard", icon: IconGauge, link: "/admin/dashboard" },
        {
            label: "Market news",
            icon: 98,
            initiallyOpened: true,
            links: [
                { label: "Overview", link: "/test" },
                { label: "Forecasts", link: "/" },
                { label: "Outlook", link: "/" },
                { label: "Real time", link: "/" },
            ],
        },
    ];
    const links = mockdata.map((item) => (
        <NavbarLinksGroup {...item} key={item.label} />
    ));

    return (
        <Navbar
            p="md"
            className={classes.navbar}
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 250, lg: 300 }}
        >
            <Navbar.Section className={classes.header}>
                <Group position="apart">
                    <Logo width={rem(120)} />
                    <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
                </Group>
            </Navbar.Section>

            <Navbar.Section
                grow
                className={classes.links}
                component={ScrollArea}
            >
                <div className={classes.linksInner}>{links}</div>
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <UserButton
                    image={`https://ecomerce.me/storage/profiles/${user.image}`}
                    name={user.name}
                    email={user.email}
                />
            </Navbar.Section>
        </Navbar>
    );
}

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
        paddingBottom: 0,
    },

    header: {
        padding: theme.spacing.md,
        paddingTop: 0,
        marginLeft: `calc(${theme.spacing.md} * -1)`,
        marginRight: `calc(${theme.spacing.md} * -1)`,
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        borderBottom: `${rem(1)} solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[3]
        }`,
    },

    links: {
        marginLeft: `calc(${theme.spacing.md} * -1)`,
        marginRight: `calc(${theme.spacing.md} * -1)`,
    },

    linksInner: {
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
    },

    footer: {
        marginLeft: `calc(${theme.spacing.md} * -1)`,
        marginRight: `calc(${theme.spacing.md} * -1)`,
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[3]
        }`,
    },
}));
