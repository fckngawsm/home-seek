import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { DAYS_OF_WEEK } from "../../constants/daysOfWeek";
import { useCalendar } from "../../hooks/useCalendar";
import { dateFormatter } from "../../utlis/date/formatDate";
import {
  CalendarCurrentDateTitle,
  StyledDayWeek,
  StyledDaysOfMonthList,
  StyledDaysOfWeek,
} from "./styled";

const currentDate = new Date();

export const Calendar = () => {
  const {
    getDaysArray,
    getDaysInMonth,
    getStartOfMonth,
    handleNextMonth,
    handlePrevMonth,
    selectedDate,
  } = useCalendar(currentDate);

  const startOfMonth = getStartOfMonth(selectedDate);
  const daysInMonth = getDaysInMonth(selectedDate);
  const daysArray = getDaysArray(startOfMonth, daysInMonth);
  const isToday = (day: number) => {
    return (
      day === currentDate.getDate() &&
      selectedDate.getMonth() === currentDate.getMonth() &&
      selectedDate.getFullYear() === currentDate.getFullYear()
    );
  };

  const isCurrentMonthDay = (day: number | null) => {
    if (day === null) return false;
    const date = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      day
    );
    return date.getMonth() === selectedDate.getMonth();
  };

  return (
    <div style={{ width: "450px" }}>
      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
          marginBottom: "24px",
          justifyContent: "center",
        }}
      >
        <IconButton onClick={handlePrevMonth}>
          <CaretLeft size={18} weight="regular" />
        </IconButton>
        <CalendarCurrentDateTitle>
          {dateFormatter.formatMonthYear(selectedDate)}
        </CalendarCurrentDateTitle>
        <CalendarButton onClick={handleNextMonth}>
          <CaretRight size={18} weight="regular" />
        </CalendarButton>
      </div>
      <StyledDaysOfMonthList>
        {DAYS_OF_WEEK.map((day) => (
          <StyledDayWeek key={day}>{day}</StyledDayWeek>
        ))}
        {daysArray.map((day, index) => {
          if (!day) return <p></p>;

          return (
            <StyledDaysOfWeek
              $isCurrentDay={isToday(day as number)}
              $isDisabled={!isCurrentMonthDay(day)}
              key={index}
            >
              {day || ""}
            </StyledDaysOfWeek>
          );
        })}
      </StyledDaysOfMonthList>
    </div>
  );
};
