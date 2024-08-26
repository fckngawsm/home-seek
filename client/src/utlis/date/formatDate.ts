export class DateFormatter {
  private date: Date;

  constructor(date: Date) {
    this.date = date;
  }

  formatISO(): string {
    const year = this.date.getFullYear();
    const month = String(this.date.getMonth() + 1).padStart(2, "0");
    const day = String(this.date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  formatDMY(): string {
    const day = String(this.date.getDate()).padStart(2, "0");
    const month = String(this.date.getMonth() + 1).padStart(2, "0");
    const year = this.date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  formatLongDate(): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(this.date);
  }

  formatTime(): string {
    const hours = String(this.date.getHours()).padStart(2, "0");
    const minutes = String(this.date.getMinutes()).padStart(2, "0");
    const seconds = String(this.date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  formatMonthYear(date: Date): string {
    return date.toLocaleString("default", { month: "long", year: "numeric" });
  }
}

const date = new Date();
export const dateFormatter = new DateFormatter(date);
