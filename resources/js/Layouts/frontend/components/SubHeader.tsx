import React from "react";
import {Text} from "@mantine/core";
import {Link, usePage} from "@inertiajs/react";
import {User} from "@/types";

const SubHeader = () => {
    // @ts-ignore
    const {auth}:{auth:{user:User | null}} = usePage().props
    return (
        <div className="flex justify-between">
            <div className="">
                <Text>SubHeader</Text>
            </div>
            <div className="">
                {auth.user !== null ? (
                    <div className={`flex gap-5`}>
                        <Text>{auth?.user?.name}</Text>
                        <Link href={route('logout')} method='post' as='button'>logout</Link>
                    </div>
                ):(
                    <div className={`flex gap-5`}>
                        <Link href={route('login')} as='button'>Login</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SubHeader;
