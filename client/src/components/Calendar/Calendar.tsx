import { DAYS_OF_WEEK } from "@/constants/daysOfWeek";
import {
  StyledDayWeek,
  StyledDaysOfMonthList,
  StyledDaysOfWeek,
} from "./styled";

interface CalendarProps {
  selectedDate: Date;
  currentDate: Date;
  getStartOfMonth: (date: Date) => Date;
  getDaysInMonth: (date: Date) => number;
  getDaysArray: (startOfMonth: Date, daysInMonth: number) => (number | null)[];
}

export const Calendar = ({
  currentDate,
  selectedDate,
  getStartOfMonth,
  getDaysArray,
  getDaysInMonth,
}: CalendarProps) => {
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
  );
};
