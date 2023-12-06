import styled from "styled-components";
import AccentColorToggle from "../ui/AccentColorToggle";

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
`;

const SettingsPart = styled.div`
  display: flex;
  & div:first-of-type {
    margin-right: 3rem;
    width: 15rem;
  }
  & span {
    color: var(--color-grey-700);
    font-weight: 700;
    font-size: 1.125rem;
  }
  & p {
    color: var(--color-grey-500);
  }
`;

function Settings() {
  return (
    <>
      {/* <Heading as="h3">Settings</Heading> */}
      <SettingsContainer>
        <SettingsPart>
          <div>
            <span>Accent color</span>
            <p>Select your accent color</p>
          </div>
          <AccentColorToggle />
        </SettingsPart>
      </SettingsContainer>
    </>
  );
}

export default Settings;
