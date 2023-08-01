import { useState, useContext } from 'react'
import profesor from "../../assets/imgs/profesor.jpg"
import axios from "axios"
import "react-toastify/dist/ReactToastify.css"
import { UserContext } from "../../store/userContext"


const ModalEditarPerfil = () => {
  const [name, setName] = useState("")
  const [cargo, setCargo] = useState("")
  const [email, setEmail] = useState("")

  const userCtx = useContext(UserContext)

  console.log(userCtx.userId)

  const editProfile = () => {
    const dataUpdated = {
      name,
      cargo,
      email,
    }
    axios
      .put(`/api/update-user/${userCtx.userId}`, dataUpdated)
      .then((res) => {
        console.log(res.data.user)
        userCtx.updateUserEmailRegistered(res.data.user.email)
        userCtx.updateUserNameRegistered(res.data.user.name)
        userCtx.updateUserCargoRegistered(res.data.user.cargo)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <button
        className="btn btn-md px-5 sm:px-10 py-1.5 mx-auto rounded-xl flex justify-center text-sm shadow-sm font-PoppinsSemibold bg-pallete-yellow hover:bg-pallete-yellow  leading-6 text-pallete-black border-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pallete-blue dark:focus-visible:outline-amber-400"
        onClick={() => window.my_modal_3.showModal()}
      >
        Editar Perfil
      </button>

      <dialog id="my_modal_3" className="modal">
        <form
          method="dialog"
          className="modal-box bg-gradient-to-b from-[#B0BAC3] to-gray-100"
        >
          <div className="flex flex-col">
            <div>
              <h3 className=" text-center font-[Poppins] font-bold">
                Editar Perfil
              </h3>
            </div>

            <div className=" bg-pallete-white rounded-xl mt-2 ">
              <div className=" mt-4 md:mt-0 flex flex-col md:flex-row md:items-center  mx-[1rem]">
                <div className="flex flex-col md:mt-0 md:ml-8">
                  <p className="text-[15px]">
                    <b className="block text-sm font-PoppinsSemibold leading-6 text-pallete-black after:content-['*']">Nombre completo</b>
                  </p>
                  <input
                    type="text"
                    className=" input input-sm block w-full rounded-md font-PoppinsRegular bg-pallete-lightgrey text-pallete-white ring-1 ring-inset ring-pallete-grey focus:ring-2 focus:ring-inset focus:ring-pallete-blue sm:text-sm sm:leading-6"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                  <p className="text-[15px] mt-5">
                    <b className="block text-sm font-PoppinsSemibold leading-6 text-pallete-black after:content-['*']">Email</b>
                  </p>
                  <input
                    type="text"
                    className="input input-sm block w-full rounded-md font-PoppinsRegular bg-pallete-lightgrey text-pallete-white ring-1 ring-inset ring-pallete-grey focus:ring-2 focus:ring-inset focus:ring-pallete-blue sm:text-sm sm:leading-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>

                <div className="md:ml-5 md:mt-10 mb-4 md:mb-10">
                  <p className="text-[15px] mt-5">
                    <b className="block text-sm font-PoppinsSemibold leading-6 text-pallete-black after:content-['*']">Imagen</b>
                  </p>
                  <div className="avatar mt-2">
                    <div className="w-24 rounded-full">
                      <img src={profesor} alt="Imagen de perfil" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex mt-8 justify-center">
              <button
                className="hover:bg-[#FFFFFF] hover:text-[#1A1363] font-[Poppins] font-semibold px-14 py-4 text-white btn btn-active bg-[#1A1363] rounded-xxl w-[70px] mr-4 "
                onClick={() => editProfile()}
              >
                Guardar
              </button>
              <button className="hover:bg-[#FFFFFF] hover:text-[#1A1363] font-[Poppins] font-semibold px-14 py-4 text-white btn btn-active bg-[#1A1363] rounded-xxl w-[70px] mr-4 ">
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </dialog>

    </div>
  )
}



export default ModalEditarPerfil
