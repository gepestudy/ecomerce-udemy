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
            <MP
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme,
                    colors: {
                        brand: [
                            "#f0fdf4",
                            "#dcfce7",
                            "#bbf7d0",
                            "#86efac",
                            "#4ade80",
                            "#22c55e",
                            "#16a34a",
                            "#15803d",
                            "#166534",
                            "#14532d",
                        ],
                    },
                    primaryColor: "brand",
                }}
            >
                {children}
            </MP>
        </ColorSchemeProvider>
    );
};

export default MantineProvider;
