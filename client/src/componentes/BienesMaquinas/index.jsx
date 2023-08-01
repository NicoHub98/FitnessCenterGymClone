import { useState } from "react"
import Table from "../Table"
import { ToastContainer, toast } from "react-toastify"
import ButtonAdd from "../Table/ButtonAdd"
import Title from "../Title"

import { useEffect } from "react"
import axios from "axios"
import { axiosGetElement } from "../../hooks/axiosElement"

const BienesMaquinas = () => {
  const title = "Bienes / Máquinas"
  const type = "bienesMaquinas"

  const tableHeader = [
    "Maquina",
    "Estado",
    "Descripcion",
    "Stock",
    "Valor actual",
    "Fecha",

  ]
  const tableBody = [

    {
      id: 1,
      name: "Polea",
      estado: "nueva",
      mantenimiento: "Text",
      repuestos: "Text",
      valorActual: "1999",
      fecha: "Text",

    },

  ]
  // const [tBody, setTBody] = useState(tableBody);
  const [tBody, setTBody] = useState([])
  const [error, setTError] = useState("")

  axiosGetElement(setTBody, setTError)
  useEffect(() => {
    axiosGetElement(setTBody, setTError)
  }, [])

  return (
    <main className="flex flex-col w-full gap-2 m-2 sm:m-5">
      <ToastContainer autoClose={1000} />
      <Title title={title} />
      <div className="w-[80vw] flex flex-col gap-10 mt-5 mx-auto">
        <Table
          tHeader={tableHeader}
          tBody={tBody}
          setTBody={setTBody}
          type={type}
          error={error}
        />
        <ButtonAdd
          tBody={tBody}
          setTBody={setTBody}
          tHeader={tableHeader}
          type={type}
          setTError={setTError}
        />
      </div>
    </main>
  )
}
export default BienesMaquinas