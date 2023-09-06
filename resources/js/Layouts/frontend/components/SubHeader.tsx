import React from "react";
import {Text} from "@mantine/core";
import {Link, router, usePage} from "@inertiajs/react";
import {User} from "@/types";
import {Router} from "ziggy-js";

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
                        <Text>{auth?.user?.name}</Text>
                        <Text onClick={()=> router.post(route('logout'))} className={`cursor-pointer`}>
                            logout
                        </Text>
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
