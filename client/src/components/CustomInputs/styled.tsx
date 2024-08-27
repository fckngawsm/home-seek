import styled, { css } from "styled-components";

export const SearchVerticalSeparate = styled.span`
  width: 1px;
  height: 32px;
  background-color: #e5e7eb;
  display: block;
`;

export const StyledSearchLabel = styled.h3`
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 1;
  color: #000000;
  margin: 0;
`;

export const StyledSearchSubtitle = styled.h4`
  color: #6b7280;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.43;
  margin: 0;
  cursor: pointer;
`;

export const ListTitle = styled.h2`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1;
  color: #000000;
  margin: 0 0 15px 0;
`;

export const MenuWithItems = styled.ul<{ $isVisible: boolean }>`
  position: absolute;
  top: 65px;
  left: 0;
  z-index: 1000;
  background-color: #ffffff;
  padding: 20px 32px;
  width: 100%;
  border-radius: 32px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  box-sizing: border-box;
  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

export const RegionListImage = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 15px;
  object-fit: cover;
`;

export const RegionListTitle = styled.h4`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  color: #000000;
  max-width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 6px 0 0 0;
`;

export const RegionListItem = styled.li`
  list-style-type: none;
  margin: 0;
  width: 120px;
  height: 120px;
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  padding: 10px;
  cursor: pointer;
`;

export const StyledSearchInpurWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
