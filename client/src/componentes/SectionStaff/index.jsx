import React, { useState } from "react"
import Table from "../Table"
import { ToastContainer } from "react-toastify"
import ButtonAdd from "../Table/ButtonAdd"
import Title from "../Title"
import { useEffect } from "react"
import { axiosGet } from "../../hooks/axiosGeneral"

const IndexTable = () => {

  const type = "employee"
  const tableHeader = ["Nombre completo", "Ocupación", "Celular", "Email"]

  const [tBody, setTBody] = useState([])
  const [error, setTError] = useState("")

  useEffect(() => {
    axiosGet(setTBody, setTError, "employees")
  }, [])

  // useEffect(() => {
  //   axiosGet(setTBody, setTError, "employees")
  // }, [tBody]);

  return (
    <main className="flex flex-col w-full gap-2 px-auto py-2 sm:p-5">
      <ToastContainer autoClose={1000} />
      <Title title={"Staff"} />
      <section className="w-[80vw] flex flex-col gap-10 mt-5 mx-auto">
        <Table
          tHeader={tableHeader}
          tBody={tBody}
          setTBody={setTBody}
          type={type}
          error={error}
          setTError={setTError}
        />
        <ButtonAdd
          tBody={tBody}
          setTBody={setTBody}
          tHeader={tableHeader}
          type={type}
          setTError={setTError}
        />
      </section>
    </main>
  )
}

export default IndexTable
