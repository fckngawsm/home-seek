import { useToogle } from "../../hooks/useToogle";
import { Calendar } from "../Calendar/Calendar";
import { ClickAwayListener } from "../ClickAwayListener/ClickAwayListener";
import {
  MenuWithItems,
  StyledSearchInpurWrapper,
  StyledSearchLabel,
  StyledSearchSubtitle,
} from "./styled";

interface DateInputProps {
  label: string;
  subtitle: string;
}

export const DateInput = ({ label, subtitle }: DateInputProps) => {
  const [isListOpen, onToogleList] = useToogle();
  return (
    <ClickAwayListener isActive={isListOpen} onClickAway={onToogleList}>
      <StyledSearchInpurWrapper>
        <StyledSearchLabel>{label}</StyledSearchLabel>
        <StyledSearchSubtitle onClick={onToogleList}>
          {subtitle}
        </StyledSearchSubtitle>
      </StyledSearchInpurWrapper>
      <MenuWithItems $isVisible={isListOpen}>
        <Calendar />
      </MenuWithItems>
    </ClickAwayListener>
  );
};
