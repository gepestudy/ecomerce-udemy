import React, { useState } from "react";
import {
    MantineProvider as MP,
    ColorScheme,
    ColorSchemeProvider,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

const MantineProvider = ({ children }: { children: React.ReactNode }) => {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: "mantine-color-scheme",
        defaultValue: "light",
        getInitialValueInEffect: true,
    });

    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

    useHotkeys([["mod+J", () => toggleColorScheme()]]);
    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MP withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
                {children}
            </MP>
        </ColorSchemeProvider>
    );
};

export default MantineProvider;
