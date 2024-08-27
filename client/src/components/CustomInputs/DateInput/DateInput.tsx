import { useCalendar } from "../../../hooks/useCalendar";
import { useToogle } from "../../../hooks/useToogle";
import { Calendar } from "../../Calendar/Calendar";
import { ClickAwayListener } from "../../ClickAwayListener/ClickAwayListener";
import {
  MenuWithItems,
  StyledSearchInpurWrapper,
  StyledSearchLabel,
  StyledSearchSubtitle,
} from "../styled";
import { DateInputHeader } from "./DateInputHeader";

interface DateInputProps {
  label: string;
  subtitle: string;
}

export const DateInput = ({ label, subtitle }: DateInputProps) => {
  const [isListOpen, onToogleList] = useToogle();
  const currentDate = new Date();
  const {
    getDaysArray,
    getDaysInMonth,
    getStartOfMonth,
    handleNextMonth,
    handlePrevMonth,
    selectedDate,
  } = useCalendar(currentDate);
  return (
    <ClickAwayListener isActive={isListOpen} onClickAway={onToogleList}>
      <StyledSearchInpurWrapper>
        <StyledSearchLabel>{label}</StyledSearchLabel>
        <StyledSearchSubtitle onClick={onToogleList}>
          {subtitle}
        </StyledSearchSubtitle>
      </StyledSearchInpurWrapper>
      <MenuWithItems $isVisible={isListOpen}>
        <div
          style={{
            padding: "32px 57px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <DateInputHeader
            handlePrevMonth={handlePrevMonth}
            handleNextMonth={handleNextMonth}
            selectedDate={selectedDate}
          />
          {/* {TODO:} */}
          <div
            style={{
              display: "flex",
              gap: "75px",
              justifyContent: "space-between",
            }}
          >
            <Calendar
              currentDate={currentDate}
              getDaysArray={getDaysArray}
              getDaysInMonth={getDaysInMonth}
              getStartOfMonth={getStartOfMonth}
              selectedDate={selectedDate}
            />
            <Calendar
              currentDate={currentDate}
              getDaysArray={getDaysArray}
              getDaysInMonth={getDaysInMonth}
              getStartOfMonth={getStartOfMonth}
              selectedDate={selectedDate}
            />
          </div>
        </div>
      </MenuWithItems>
    </ClickAwayListener>
  );
};
