import React from "react";
import {PageProps} from "@/types";
import VendorLayout from "@/Layouts/vendor/VendorLayout";


export default function Dashboard({children,auth,flash}:PageProps&{children:React.ReactNode}) {
    return (
    <VendorLayout user={auth.user} title={'Vendor Dashboard'} flash={flash}>
        <h1>Hello world</h1>
    </VendorLayout>
    );
}
