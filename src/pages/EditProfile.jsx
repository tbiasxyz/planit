import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../features/authentication/useCurrentUser";

import EditProfileForm from "../features/authentication/EditProfileForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import PrimaryButton from "../ui/PrimaryButton";
import Spinner from "../ui/Spinner";

function EditProfile() {
  const navigate = useNavigate();
  const { user, isPending } = useCurrentUser();
  return (
    <>
      <Row>
        <Heading as="h3">Edit Profile</Heading>
        <PrimaryButton onClick={() => navigate(`/app/profile/${user.id}`)}>
          Go back
        </PrimaryButton>
      </Row>

      {isPending ? <Spinner size="page" /> : <EditProfileForm user={user} />}
    </>
  );
}

export default EditProfile;
