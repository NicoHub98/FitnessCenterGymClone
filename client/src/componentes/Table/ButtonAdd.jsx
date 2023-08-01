import React, { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../store/userContext";
import { axiosGet, axiosPost } from "../../hooks/axiosGeneral";


const ButtonAdd = ({ tBody, setTBody, tHeader, type, setTError, allProviders }) => {
  const { userId } = useContext(UserContext)

  let providers;
  if (type === "element-client") {
    providers = allProviders?.map(({ id, name }) => {
      return {id, name}
    });
  }
    
  const [inputField, setInputField] = useState([]);
  const addElement = () => {
    const notNull = inputField.filter((x) => x);

    if (notNull.length < tHeader.length) {
      return toast.error("Debes llenar todos los campos");
    }

    let newElement
    /* -------------------------------------------------------------------------- */
    /*                              Definiendo tipos                              */
    /* -------------------------------------------------------------------------- */
    if (type === "clientes") {
      newElement = {
          nombre: inputField[0],
          plan: inputField[1],
          celular: inputField[2],
          mail: inputField[3],
          inicio: inputField[4],
          vencimiento: inputField[5],
      }
    } else if (type === "provider") {
      newElement = {
          name: inputField[0],
          product: inputField[1],
          contact: inputField[2],
          email: inputField[3],
          // description: inputField[4],
          provider: inputField[4],
          adminId: userId,
      }
      console.log("NEW-ELEMENT:", newElement)
      axiosPost(newElement, "provider")
    } else if (type === "element-client") {
      const selectedProvider = inputField[5]// Nombre del Elemento
      const providerId = providers.find((item)=> selectedProvider === item.name)
      
      newElement = {
          name: inputField[0],
          state: inputField[1],
          // description: inputField[2],
          stock: inputField[2],
          price: inputField[3],
          date: inputField[4],
          providerId: providerId.id,
          adminId: userId,
      }
      axiosPost(newElement, "element-client")
    } else if (type === "employee") {
      newElement = {
          name: inputField[0],
          email: inputField[1],
          contact: inputField[2],
          occupation: inputField[3],
      }
      axiosPost(newElement, "employee")
    }
    // setTBody((items) => {
    //   console.log("ITEMS:", items)
    //   return [...items, newElement]
    // })
    setInputField([]);
    // toast.success("Nuevo elemento agregado");
  };
  function handleChange(i, e) {
    let event = e.target.value;
    const values = [...inputField];
    const number = /[0-9]/;
    if (i === 4) {
      if (!event.match(number)) {
        event;
      } else {
        if (event.length === 2 && event.match(number)) {
          event = event + "-";
        }
        if (event.length === 5 && event.match(number)) {
          event = event + "-";
        }
      }
    }
    values[i] = event;
    setInputField(values)
  }
  return (
    <div className="flex justify-center">
      {/* The button to open modal */}
      <label
        htmlFor="my_modal_add"
        className="btn btn-md px-10 py-1.5 mx-auto rounded-xl flex justify-center text-sm shadow-sm font-PoppinsSemibold bg-pallete-yellow hover:bg-pallete-yellow hover:shadow-md leading-6 text-pallete-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pallete-blue"
      >
        Agregar
      </label>

      <input type="checkbox" id="my_modal_add" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Agregar</h3>
          <div className="grid gap-4">
            {tBody &&
              tHeader.map((item, i) => {
                return (
                  <div key={i}>
                    <label className="block" htmlFor={`input-${i}`}>
                      {item}
                    </label>
                    {type === "element-client" && i === 5 ? (
                        <select className="select" onChange={(e) => handleChange(i, e)} >
                          <option>Seleccionar proveedor</option>
                          {providers.map((el) => {
                            return (
                              <option key={el.id}>{el.name}</option>
                            );
                          })}
                        </select>
                    ) : (
                      <input
                        id={`input-${i}`}
                        value={inputField[i] || ""}
                        onChange={(e) => handleChange(i, e)}
                        type="text"
                        className="w-full input input-sm input-bordered placeholder:font-PoppinsRegular font-PoppinsRegular"
                      />
                    )}
                  </div>
                );

              })}
          </div>
          <div className="modal-action">
            <label
              htmlFor="my_modal_add"
              className="btn btn-sm px-10 shadow-sm font-PoppinsSemibold text-pallete-grey bg-inherit border-pallete-grey hover:shadow-xl hover:bg-inherit "
            >
              Cancelar
            </label>
            <label
              onClick={addElement}
              className="btn btn-sm px-10 rounded-xl flex justify-center items-center text-sm shadow-sm font-PoppinsSemibold bg-pallete-yellow hover:bg-pallete-yellow hover:border-amber-400 leading-6 text-pallete-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pallete-blue"
              htmlFor="my_modal_add"
            >
              Guardar
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonAdd;
