import FrontendLayout from "@/Layouts/frontend/FrontendLayout";
import { PageProps } from "@/types";
import React from "react";

const Home = (props: PageProps) => {
    console.log(props);

    return (
        <FrontendLayout
            flash={props.flash}
            title="1st E-Commerce in Indonesia"
            user={props.auth.user}
        >
            <h1>Home</h1>
        </FrontendLayout>
    );
};

export default Home;
