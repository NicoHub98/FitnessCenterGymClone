export enum Types {
  Machine = "Maquina",
  Element = "Elemento",
  Office = "Oficina",
}

export enum State {
  Nuevo = "Nuevo",
  Usado = "Usado",
  En_reparacion = "En reparacion",
}

//* Interface del Modelo Elements
export interface IElements {
  id?: string,
  name: string,
  // type: Types,
  stock: string,
  // description: string,
  price: number,
  date: string,
  // state: State,
  state: string,
}
