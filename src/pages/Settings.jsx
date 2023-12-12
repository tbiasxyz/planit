import styled from "styled-components";
import AccentColorToggle from "../ui/AccentColorToggle";
import FontToggle from "../ui/FontToggle";

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
  gap: 2rem;
`;

const SettingsPart = styled.div`
  display: flex;
  & > div:first-of-type {
    margin-right: 3rem;
    width: 15rem;
    & span {
      color: var(--color-grey-700);
      font-weight: 700;
      font-size: 1.125rem;
    }
    & p {
      color: var(--color-grey-500);
    }
  }
`;

function Settings() {
  return (
    <>
      <SettingsContainer>
        <SettingsPart>
          <div>
            <span>Accent color</span>
            <p>Select your accent color</p>
          </div>
          <AccentColorToggle />
        </SettingsPart>
        <SettingsPart>
          <div>
            <span>Font</span>
            <p>Select your font</p>
          </div>
          <FontToggle />
        </SettingsPart>
      </SettingsContainer>
    </>
  );
}

export default Settings;
