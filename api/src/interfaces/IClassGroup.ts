export enum InDay {
  Morning = "Mañana",
  Afternoon = "Tarde",
  Night = "Noche",
}

export enum WeekDays {
  Monday = "Lunes",
  Tuesday = "Martes",
  Wednesday = "Miercoles",
  Thursday = "Jueves",
  Friday = "Viernes",
  Saturday = "Sabado",
  Sunday = "Domingo",
}

export interface IClassGroup {
  id?: string;
  name: string;
  trainer: string;
  duration: string;
  schedule: string; // HORARIO
  inDay: InDay;
  weekDays: WeekDays
  img: string
}
