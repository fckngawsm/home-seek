import { useToogle } from "../../hooks/useToogle";
import { ClickAwayListener } from "../ClickAwayListener/ClickAwayListener";
import { GuestSelector } from "../GuestSelector/GuestSelector";
import {
  MenuWithItems,
  StyledSearchInpurWrapper,
  StyledSearchLabel,
  StyledSearchSubtitle,
} from "./styled";

export const GuestsNumberInput = () => {
  const [isListOpen, onToogleList] = useToogle();

  return (
    <ClickAwayListener isActive={isListOpen} onClickAway={onToogleList}>
      <div style={{ width: "250px" }}>
        <StyledSearchInpurWrapper>
          <StyledSearchLabel>Guests</StyledSearchLabel>
          <StyledSearchSubtitle onClick={onToogleList}>
            Add guests
          </StyledSearchSubtitle>
        </StyledSearchInpurWrapper>

        <MenuWithItems $isVisible={isListOpen}>
          <GuestSelector />
        </MenuWithItems>
      </div>
    </ClickAwayListener>
  );
};
