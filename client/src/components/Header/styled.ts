import { List } from "@phosphor-icons/react";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 9px 0;
  justify-content: space-between;
`;

export const HeaderWrapperCompanyPart = styled.img`
  cursor: pointer;
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  gap: 32px;
  align-items: center;
  width: 50%;
  justify-content: center;
`;

export const HeaderNavigationItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  list-style-type: none;
  cursor: pointer;
`;

export const HeaderActionsPart = styled.div`
  width: 410px;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: end;
  width: 30%;
`;

export const HeaderHostAction = styled.h2`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`;

export const HeaderLanguageAction = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const HeaderNavigationActionProfile = styled.div`
  display: flex;
  padding: 8px 12px 8px 12px;
  gap: 8px;
  background-color: #ffffff;
  border-radius: 100px;
  align-items: center;
`;

export const HeaderListIcon = styled(List)`
  cursor: pointer;
`;
