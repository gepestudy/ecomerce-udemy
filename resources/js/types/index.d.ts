export interface User {
    id: number;
    name: string;
    email: string;
    image?: string;
    email_verified_at: string;
}

export interface Flash {
    message: string;
    error: string;
    success: string;
}

export interface Ziggy {
    default?: any[];
    location: string;
    port?: number | null;
    query?: {
        [key: string]: string;
    };
    url: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    flash: Flash;
    ziggy: Ziggy;
};
