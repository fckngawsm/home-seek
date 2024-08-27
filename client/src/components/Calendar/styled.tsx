import styled from "styled-components";

export const CalendarWrapper = styled.div`
  padding: 32px;
  background-color: #ffffff;
`;

export const CalendarCurrentDateTitle = styled.h2`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #000000;
  margin: 0;
  text-align: center;
`;

export const StyledDaysOfMonthList = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  min-width: 350px;
`;

export const StyledDayWeek = styled.h4`
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #858585;
  line-height: 1;
  background-color: transparent;
  margin: 0;
  width: 20px;
  height: 20px;
`;

export const StyledDaysOfWeek = styled.h4<{
  $isCurrentDay?: boolean;
  $isDisabled?: boolean;
}>`
  font-weight: 400;
  font-size: 16px;
  color: ${({ $isCurrentDay, $isDisabled }) =>
    $isDisabled ? "#aaa" : $isCurrentDay ? "#ffffff" : "#313131"};
  background-color: ${({ $isCurrentDay, $isDisabled }) =>
    $isDisabled ? "transparent" : $isCurrentDay ? "#000000" : "transparent"};
  margin: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: ${({ $isDisabled }) =>
    $isDisabled ? "1px solid #ddd" : "1px solid transparent"};
  cursor: ${({ $isDisabled }) => ($isDisabled ? "not-allowed" : "pointer")};
  border-radius: 50%;

  &:hover {
    border: ${({ $isDisabled }) =>
      $isDisabled ? "1px solid #ddd" : "1px solid #000000"};
  }
`;
