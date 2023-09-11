import {PageProps} from "@/types";
import ProfilePage from "@/Components/pages/ProfilePage";

const VendorProfile = ({ auth, flash,ziggy }: PageProps) => {
    return <ProfilePage auth={auth} flash={flash} ziggy={ziggy} profileUpdateRoute={'vendor.profile.update'} passwordUpdateRoute={'vendor.password.update'}/>;
};

export default VendorProfile;
