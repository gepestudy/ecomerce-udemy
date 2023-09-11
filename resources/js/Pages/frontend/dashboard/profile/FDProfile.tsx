import {PageProps} from "@/types";
import ProfilePage from "@/Components/pages/ProfilePage";

const FDProfile = ({ auth, flash,ziggy }: PageProps) => {
    return <ProfilePage auth={auth} flash={flash} ziggy={ziggy} profileUpdateRoute={'user.profile.update'} passwordUpdateRoute={'user.password.update'}/>;
};

export default FDProfile;
