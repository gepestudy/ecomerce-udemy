import { Flash } from "@/types";
import { useId } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { useEffect } from "react";

const FlashMessage = ({ flash }: { flash: Flash | undefined }) => {
    const errorId = useId();
    const messageId = useId();
    const successId = useId();

    useEffect(() => {
        switch (true) {
            case flash?.error !== null:
                notifications.show({
                    id: errorId,
                    title: "Error",
                    message: flash?.error,
                    autoClose: 5000,
                    color: "red",
                    withBorder: true,
                    withCloseButton: true,
                    styles: (theme) => ({
                        title: {
                            color: theme.colors.red[6],
                            fontWeight: 700,
                        },
                        description: {
                            fontWeight: 500,
                        },
                    }),
                    // onClose: () => clearFlash(),
                });
                break;

            case flash?.info !== null:
                notifications.show({
                    id: messageId,
                    title: "Message",
                    message: flash?.info,
                    autoClose: 5000,
                    withBorder: true,
                    withCloseButton: true,
                    styles: (theme) => ({
                        title: {
                            fontWeight: 700,
                        },
                        description: {
                            fontWeight: 500,
                        },
                    }),
                    // onClose: () => clearFlash(),
                });
                break;
            case flash?.success !== null:
                notifications.show({
                    id: successId,
                    title: "Success",
                    message: flash?.success,
                    autoClose: 5000,
                    color: "green",
                    withBorder: true,
                    withCloseButton: true,
                    styles: (theme) => ({
                        title: {
                            color: theme.colors.green[6],
                            fontWeight: 700,
                        },
                        description: {
                            fontWeight: 500,
                        },
                    }),
                    // onClose: () => clearFlash(),
                });
                break;
            case flash?.warning !== null:
                notifications.show({
                    id: successId,
                    title: "Success",
                    message: flash?.warning,
                    autoClose: 5000,
                    color: "yellow",
                    withBorder: true,
                    withCloseButton: true,
                    styles: (theme) => ({
                        title: {
                            color: theme.colors.green[6],
                            fontWeight: 700,
                        },
                        description: {
                            fontWeight: 500,
                        },
                    }),
                    // onClose: () => clearFlash(),
                });
                break;

            default:
                null;
                break;
        }

        return () => {
            // clearFlash();
        };
    }, [flash?.error, flash?.info, flash?.success, flash?.warning]);

    return null;
};
export default FlashMessage;
