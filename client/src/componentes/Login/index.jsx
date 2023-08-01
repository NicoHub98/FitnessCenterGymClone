import axios from "axios"
import { useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'
import swAlert from "@sweetalert/with-react"
import { useContext } from "react"
import { UserContext } from "../../store/userContext"
import logo from "./assets/Group 409ss.png"

const Login = () => {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [notName, setNotName] = useState(false)

  const userCtx = useContext(UserContext)

  const logUser = (e) => {
    e.preventDefault()
    const userData = {
      email: name,
      password: password

    };
    axios.post(`/api/login`, userData)
      .then((res) => {
        
         userCtx.updateUser(res.data.data.user.id)
         userCtx.updateUserNameRegistered(res.data.data.user.user)
         userCtx.updateUserEmailRegistered(res.data.data.user.email)
         userCtx.updateUserTokenRegistered(res.data.data.token)


         //estas 3 líneas son necesarias para loguear hasta que actualicemos todo lo que utiliza el token del sessionStorage
         const user = res.data;
         const newToken = user.data.token
         sessionStorage.setItem('userToken', newToken);
        
        swAlert(<h2> Bienvenido {user.data.user.user} </h2>);
        setTimeout(() => { 
          navigate('/home/admin');
        }, 500)

        if (name.length === 0) {
          setNotName(true)
        }
      })

      .catch(err => {
        console.log(err)
        swAlert(<h2>{err.response.data.msg}</h2>)
        if (err.response.data.msg === 'Esta cuenta no está registrada') {
          navigate('/register')
        }


        console.log(err.response.data.msg)
      })
  }

  let token = sessionStorage.getItem('userToken')
  // let token = userCtx.userTokenRegistered


  return (
    <div className="bg-white h-screen">
      {token !== null
        ? <Navigate to='/home' />
        :
        <main
          className='flex items-center justify-center gap-10 sm:gap-0 my-4 mx-2 sm:mx-5 md:mx-20 mt-10'>
          <div className='basis-1/2 mx-auto hidden md:block'>
            <img src={logo} alt="Logo de Fitness Center Gym" className='basis-1/2 w-[30vw] mx-auto ' />
          </div>
          <div className="basis-1/2 w-[50vh] flex flex-1 flex-col gap-5 justify-center p-6 sm:py-12 lg:px-8 rounded-lg bg-gray-200 bg-opacity-60 shadow-md ">
            <h2 className="text-center text-2xl font-PoppinsBold leading-9 tracking-tight text-pallete-black">Inicio de sesión</h2>
            <form className='w-full' action="#" method="POST" >
              <form className="w-full space-y-6" action="#" method="POST">
                <div>
                  <div className="flex items-center align-middle">
                    <label htmlFor="email" className="block text-sm font-PoppinsSemibold leading-6 text-pallete-black after:content-['*']"> Correo </label>
                  </div>

                  <div className="mt-2">
                    <input id="email" name="email" placeholder='Correo' type="email" autoComplete="email" required onChange={(e) => setName(e.target.value)}
                      className="input input-sm block w-full rounded-md font-PoppinsRegular bg-pallete-black text-pallete-white ring-1 ring-inset ring-pallete-grey focus:ring-2 focus:ring-inset focus:ring-pallete-blue sm:text-sm sm:leading-6" />
                  </div>
                </div>

                {!!notName && <p>Debes introducir el nombre</p>}

                <div>
                  <div className="flex items-center align-middle">
                    <label htmlFor="password" className="block text-sm font-PoppinsSemibold leading-6 text-pallete-black after:content-['*']">Contraseña</label>
                  </div>
                  <div className="mt-2">
                    <input id="password" name="password" placeholder='Contraseña' type="password" autoComplete="current-password" required onChange={(e) => setPassword(e.target.value)}
                      className="input input-sm block w-full rounded-md font-PoppinsRegular bg-pallete-black text-pallete-white ring-1 ring-inset ring-pallete-grey focus:ring-2 focus:ring-inset focus:ring-pallete-blue sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <button
                  onClick={logUser}
                  className="btn btn-md px-10 py-1.5 mx-auto rounded-xl flex justify-center text-sm shadow-sm font-PoppinsSemibold bg-pallete-yellow hover:bg-pallete-yellow  leading-6 text-pallete-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pallete-blue"
                >
                  Aceptar
                </button>
              </form>

              <div className='flex flex-col gap-3 mt-10 mx-auto items-center justify-center'>
                <p className="text-center text-xs sm:text-sm font-PoppinsSemibold text-pallete-grey">
                  ¿No estás registrado?
                  <Link to="/register" className="p-3 font-PoppinsSemibold leading-6 text-pallete-green">Crear cuenta</Link>
                </p>
              </div>
            </form>
          </div>
        </main>
      }
    </div>

  )
}

export default Login
