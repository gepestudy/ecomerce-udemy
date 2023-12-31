import AdminLayout from "@/Layouts/admin/AdminLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, ...props }: PageProps) {
    return (
        <AdminLayout flash={props.flash} title="Dashboard" user={auth.user}>
            <Head title="Admin | Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
