import React from "react";
import {Text} from "@mantine/core";
import {Link, router, usePage} from "@inertiajs/react";
import {User} from "@/types";
import {Router} from "ziggy-js";
import FDHeaderMenu from "@/Layouts/frontend/components/FDHeaderMenu";

const SubHeader = () => {
    // @ts-ignore
    const {auth}:{auth:{user:User | null}} = usePage().props
    return (
        <div className="flex justify-between items-center">
            <div className="">
                <Text>SubHeader</Text>
            </div>
            <div className="">
                {auth.user !== null ? (
                    <div className={`flex items-center gap-5`}>
                        <FDHeaderMenu user={auth.user} />
                    </div>
                ):(
                    <div className={`flex items-center gap-5`}>
                        <Link href={route('login')}>Login</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SubHeader;
