import { CalendarCurrentDateTitle } from "@/components/Calendar/styled";
import { IconButton } from "@/components/IconButton";
import { dateFormatter } from "@/utlis/date/formatDate";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

interface DateInputHeaderProps {
  selectedDate: Date;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
}

export const DateInputHeader = ({
  handlePrevMonth,
  handleNextMonth,
  selectedDate,
}: DateInputHeaderProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "80px" }}>
        <IconButton onClick={handlePrevMonth}>
          <CaretLeft size={18} weight="regular" />
        </IconButton>
        <CalendarCurrentDateTitle>
          {dateFormatter.formatMonthYear(selectedDate)}
        </CalendarCurrentDateTitle>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "80px" }}>
        <CalendarCurrentDateTitle>
          {dateFormatter.formatMonthYear(selectedDate)}
        </CalendarCurrentDateTitle>
        <IconButton onClick={handleNextMonth}>
          <CaretRight size={18} weight="regular" />
        </IconButton>
      </div>
    </div>
  );
};
