import { useNavigate } from "react-router-dom";
import EditProfileForm from "../features/authentication/EditProfileForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import PrimaryButton from "../ui/PrimaryButton";

function EditProfile() {
  const navigate = useNavigate();
  return (
    <>
      <Row>
        <Heading as="h3">Edit Profile</Heading>
        <PrimaryButton onClick={() => navigate("/app/profile")}>
          Go back
        </PrimaryButton>
      </Row>

      <EditProfileForm />
    </>
  );
}

export default EditProfile;
