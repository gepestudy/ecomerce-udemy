import { ChangeColorScheme } from "@/Components/mantine/Button/ChangeColorScheme";
import { User } from "@/types";
import { Link } from "@inertiajs/react";
import {
    Burger,
    Container,
    Group,
    Header,
    Indicator,
    MediaQuery,
    Text,
    useMantineTheme,
} from "@mantine/core";
import React from "react";
import { Search } from "./Search";
import {
    IconBell,
    IconClover,
    IconHeart,
    IconShoppingBag,
} from "@tabler/icons-react";
const FEHeader = ({
    opened,
    setOpened,
}: {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const theme = useMantineTheme();
    return (
        <>
            <Header height={{ base: 50, md: 70 }} p="md">
                <div className="flex items-center h-full">
                    <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                        <Burger
                            opened={opened}
                            onClick={() => setOpened((o) => !o)}
                            size="sm"
                            color={theme.colors.gray[6]}
                            mr="xl"
                        />
                    </MediaQuery>

                    <div className="flex justify-center items-center sm:justify-between w-full">
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
                        <div className="w-full sm:w-7/12 shrink">
                            <Search />
                        </div>

                        <div className="hidden sm:flex w-fit items-center align-middle gap-3">
                            <Link href="#">
                                <Indicator
                                    label="99"
                                    size={16}
                                    position="top-end"
                                    color="red"
                                >
                                    <IconHeart />
                                </Indicator>
                            </Link>
                            <Link href="#">
                                <Indicator
                                    label="99"
                                    size={16}
                                    position="top-end"
                                    color="red"
                                >
                                    <IconShoppingBag />
                                </Indicator>
                            </Link>
                            <Link href="#">
                                <Indicator
                                    label="99"
                                    size={16}
                                    position="top-end"
                                    color="red"
                                >
                                    <IconBell />
                                </Indicator>
                            </Link>
                        </div>
                    </div>
                </div>
            </Header>
        </>
    );
};

export default FEHeader;
