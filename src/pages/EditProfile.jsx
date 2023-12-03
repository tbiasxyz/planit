import { useNavigate } from "react-router-dom";
import EditProfileForm from "../features/authentication/EditProfileForm";
import BackButton from "../ui/BackButton";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function EditProfile() {
  const navigate = useNavigate();
  return (
    <>
      <Row>
        <Heading as="h3">Edit Profile</Heading>
        <BackButton onClick={() => navigate("/app/profile")}>
          Go back
        </BackButton>
      </Row>

      <EditProfileForm />
    </>
  );
}

export default EditProfile;
