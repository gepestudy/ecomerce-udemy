import React from "react";
import {PageProps} from "@/types";
import FrontendLayoutDashboard from "@/Layouts/frontend/dashboard/FrontendLayoutDashboard";


export default function Dashboard({children,auth,flash}:PageProps&{children:React.ReactNode}) {
    return (
        <FrontendLayoutDashboard user={auth.user} title={'User Dashboard'} flash={flash}>
            <h1>Hello world</h1>
        </FrontendLayoutDashboard>
    );
}
