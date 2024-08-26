import { useCallback, useState } from "react";

export const useCalendar = (currentDate: Date) => {
  const [selectedDate, setSelectedDate] = useState<Date>(currentDate);

  const handlePrevMonth = useCallback(() => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  }, []);

  const handleNextMonth = useCallback(() => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  }, []);

  const getStartOfMonth = useCallback((date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }, []);

  const getDaysInMonth = useCallback((date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }, []);

  const getDaysArray = (startOfMonth: Date, daysInMonth: number) => {
    const daysArray = [];
    const startDay = startOfMonth.getDay(); // Получаем день недели для начала месяца

    // Заполняем предыдущие дни (пустыми значениями)
    for (let i = 0; i < startDay; i++) {
      daysArray.push(null); // Пустые значения для выравнивания
    }

    // Заполняем дни текущего месяца
    for (let day = 1; day <= daysInMonth; day++) {
      daysArray.push(day);
    }

    // Заполняем дни следующего месяца (пустыми значениями)
    const endDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    ).getDay();
    for (let i = endDay + 1; i < 7; i++) {
      daysArray.push(null);
    }

    return daysArray;
  };

  return {
    getDaysArray,
    getDaysInMonth,
    getStartOfMonth,
    handleNextMonth,
    handlePrevMonth,
    selectedDate,
  };
};
