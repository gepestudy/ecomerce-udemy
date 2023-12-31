import {
    TextInput,
    TextInputProps,
    ActionIcon,
    useMantineTheme,
} from "@mantine/core";
import { IconSearch, IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import React, { useRef } from "react";

export function Search(props: TextInputProps) {
    const theme = useMantineTheme();
    const searchRef = useRef<HTMLInputElement>(null);
    const handleSearch = (e?: React.FormEvent<HTMLFormElement> | any) => {
        e.preventDefault();
    };
    return (
        <form onSubmit={(e) => handleSearch(e)}>
            <TextInput
                icon={<IconSearch size="1.1rem" stroke={1.5} />}
                radius="xl"
                size="sm"
                ref={searchRef}
                rightSection={
                    <ActionIcon
                        size={28}
                        radius="xl"
                        variant="filled"
                        className="bg-green-500 hover:bg-green-600"
                        onClick={handleSearch}
                    >
                        {theme.dir === "ltr" ? (
                            <IconArrowRight size="1.1rem" stroke={1.5} />
                        ) : (
                            <IconArrowLeft size="1.1rem" stroke={1.5} />
                        )}
                    </ActionIcon>
                }
                placeholder="Search in G-Comerce"
                rightSectionWidth={42}
                {...props}
            />
        </form>
    );
}
