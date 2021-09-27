export interface IActivities {
    id: number;
    nome: string;
    startDate: Date;
    endDate: Date;
    endDateInicial?: Date | null;
    color: string;
    percentual?: number
  }