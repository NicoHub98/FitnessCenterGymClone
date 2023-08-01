import { useState } from "react";
import Table from "../Table";
import { ToastContainer, toast } from "react-toastify";
import ButtonAdd from "../Table/ButtonAdd";
import SectionTitle from "../Title";
import { useEffect } from "react";
import { axiosGet } from "../../hooks/axiosGeneral";
import axios from "axios";

const BienesElementos = () => {
    const title = "Bienes / Elementos";
    const type = "element-client";
  
    const tableHeader = [
      "Elemento",
      "Estado",
      // "Descripcion",
      "Stock",
      "Precio",
      "Fecha",
      "Proveedor"
    ];
    const [tBody, setTBody] = useState([]);
    const [error, setTError] = useState("");
    const [allProviders, setAllProviders] = useState([])
    useEffect(() => {
      axiosGet(setTBody, setTError, "elements")
      axios.get(`/api/providers`)
        .then((res)  => {
          setAllProviders(res.data)
        })
        .catch(error => console.log(error))
    }, []);

    useEffect(() => {
      axiosGet(setTBody, setTError, "elements")
      
      //Setear proveedores
      axios.get(`/api/providers`)
        .then((res)  => {
          setAllProviders(res.data)
        })
        .catch(error => console.log(error))
    }, []);

    // useEffect(() => {
    //   axiosGet(setTBody, setTError, "elements")
    // }, [allProviders])
  
    return (
      <div className="flex flex-col justify-center gap-10 w-full">
        <ToastContainer autoClose={1000} />
        <div className="flex flex-col mb-10">
          <div className="flex justify-center">
            <div className="md:w-36 w-32">
              
            </div>
          </div>
          <SectionTitle title={title} />
        </div>
        <div className="flex flex-col gap-10 mx-5">
          <Table
            tHeader={tableHeader}
            tBody={tBody}
            setTBody={setTBody}
            type={type}
            error={error}
            setTError={setTError}
            allProviders={allProviders}
          />
          <ButtonAdd
            tBody={tBody}
            setTBody={setTBody}
            tHeader={tableHeader}
            type={type}
            setTError={setTError}
            allProviders={allProviders}
          />
        </div>
      </div>
    );
}

export default BienesElementos