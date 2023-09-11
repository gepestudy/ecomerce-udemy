import {PageProps} from "@/types";
import ProfilePage from "@/Components/pages/ProfilePage";

const AdminProfile = ({ auth, flash,ziggy }: PageProps) => {
    return <ProfilePage auth={auth} flash={flash} ziggy={ziggy} profileUpdateRoute={'admin.profile.update'} passwordUpdateRoute={'admin.password.update'}/>;
};

export default AdminProfile;
