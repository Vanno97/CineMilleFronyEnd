export class DateInterval {
  private startDate: string;
  private endDate: string;

  constructor(startDate: string, endDate: string) {
    this.startDate = new Date(startDate).toISOString()
    let end = new Date(endDate);
    end.setHours(23,59);
    this.endDate = end.toISOString();
  }


  getStartDate(): string {
    return this.startDate;
  }

  setStartDate(value: string) {
    this.startDate = value;
  }

  getEndDate(): string {
    return this.endDate;
  }

  setEndDate(value: string) {
    this.endDate = value;
  }
}
