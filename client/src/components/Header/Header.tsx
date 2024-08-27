import globe from "@/images/globe.svg";
import logo from "@/images/logo.svg";
import { UserCircleDashed } from "@phosphor-icons/react";
import {
  HeaderActionsPart,
  HeaderHostAction,
  HeaderLanguageAction,
  HeaderListIcon,
  HeaderNavigation,
  HeaderNavigationActionProfile,
  HeaderNavigationItem,
  HeaderWrapper,
  HeaderWrapperCompanyPart,
} from "./styled";

export const Header = () => {
  return (
    <HeaderWrapper>
      <div style={{ width: "25%" }}>
        <HeaderWrapperCompanyPart src={logo} alt="logo" />
      </div>
      <HeaderNavigation>
        <HeaderNavigationItem>Places to stay</HeaderNavigationItem>
        <HeaderNavigationItem>Experiences</HeaderNavigationItem>
        <HeaderNavigationItem>Online Experiences</HeaderNavigationItem>
      </HeaderNavigation>
      <HeaderActionsPart>
        <HeaderHostAction>Become a Host</HeaderHostAction>
        <HeaderLanguageAction src={globe} alt="globe" />
        <HeaderNavigationActionProfile>
          <HeaderListIcon color="#000000" size={18} />
          <UserCircleDashed size={24} weight="regular" color="gray" />
        </HeaderNavigationActionProfile>
      </HeaderActionsPart>
    </HeaderWrapper>
  );
};
