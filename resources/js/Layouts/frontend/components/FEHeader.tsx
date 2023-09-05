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
import SubHeader from "./SubHeader";
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
            <Header
                height={{ base: 90, md: 90 }}
                px="md"
                className="flex flex-col gap-2 justify-center"
            >
                <div className="container mx-auto">
                    <div className="flex items-center h-full ">
                        <MediaQuery
                            largerThan="sm"
                            styles={{ display: "none" }}
                        >
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>

                        <div className="flex gap-5 justify-center items-center sm:justify-between w-full">
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
                            <div className="w-full  md:w-7/12 shrink">
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
                </div>
                <div className="container mx-auto px-2 max-w-4xl">
                    <SubHeader  />
                </div>
            </Header>
        </>
    );
};

export default FEHeader;
