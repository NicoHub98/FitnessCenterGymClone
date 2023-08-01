export enum Rol {
  Admin = "Administrador",
  Employees = "Empleados",
  Client = "Clientes",
}

export interface IEmployees {
  id?: string;
  name: string;
  email: string;
  contact: string;
  occupation: string;
}
