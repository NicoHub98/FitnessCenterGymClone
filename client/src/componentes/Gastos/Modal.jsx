import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../store/userContext";

const ModalGastos = ({ title, setGastoNuevo }) => {
  const userCtx = useContext(UserContext);

  const [name, setName] = useState("");
  const [expense, setExpense] = useState("");

  const sendNewExpense = () => {
    const newExpense = {
      name,
      expense,
      adminId: userCtx.userId,
    };
    axios.post(`/api/expense`, newExpense)
      .then((res) => {
        console.log(res.data);
        // setGastoNuevo(newExpense);
        setTimeout(() => {
          window.location.reload();
        }, 500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="text-black">
      <button
        className="btn btn-active btn-primary mb-5"
        onClick={() => window.my_modal_5.showModal()}
      >
        Agregar
      </button>
      <dialog id="my_modal_5" className="modal  sm:modal-middle mx-auto">
        <form method="dialog" className="modal-box bg-slate-400">
          <div className="px-4 py-6">
            <div className="text-center">
              <h3 className="font-bold text-lg">
                <b>{title}</b>
              </h3>
            </div>

            <div className="bg-white rounded-xl mt-4 p-4">
              <div className="mb-4">
                <p className="text-base font-semibold">
                  <b>Nombre</b>
                </p>
                <input
                  type="text"
                  className="w-full bg-slate-300 rounded-lg py-2 px-3"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>

              <div className="mb-4">
                <p className="text-base font-semibold">
                  <b>Importe</b>
                </p>
                <input
                  type="number"
                  className="w-full bg-slate-300 rounded-lg py-2 px-3"
                  onChange={(e) => setExpense(e.target.value)}
                ></input>
              </div>

              <div className="flex justify-center">
                <button
                  className="text-white btn btn-active btn-primary rounded-xxl w-[100px] mr-4"
                  onClick={() => sendNewExpense()}
                >
                  Agregar
                </button>
                <button className="text-white btn btn-active btn-primary rounded-xxl w-[100px]">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ModalGastos;
