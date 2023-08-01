export enum Rol {
  Admin = "Administrador",
  Employees = "Empleados",
  Client = "Clientes",
}

export interface IAdmin {
  id?: string;
  user: string;
  email: string;
  password: string;
}
