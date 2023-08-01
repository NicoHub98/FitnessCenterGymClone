import gmail from './assets/gmail.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Section from '../Section'
import { CgAsterisk } from 'react-icons/cg'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import swAlert from "@sweetalert/with-react"
import logo from "./assets/Group 409ss.png"
const { VITE_BACKEND_URL } = import.meta.env;


const Register = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const navigate = useNavigate()

  const register = (e) => {
    e.preventDefault();

    const userData = {
      user: name,
      password: password,
      email: email,
    }

    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    {
      if (userData.user === '' || userData.password === '') {
        toast.error('Los campos no pueden estar vacíos');
        return;
      }

      if (email !== '' && !regexEmail.test(email)) {
        toast.error('El e-mail no es válido');
        return;
      }
    }

    axios.post(`/api/auth`, userData)

      .then(res => {
        localStorage.setItem('user', userData.user)
        swAlert(<h2> {name},  Te has registrado correctamente</h2>)
        navigate('/login')
        console.log(res.data)
      })
      .catch(err => {
        swAlert(<h2>{err.response.data.msg}</h2>)
        console.log(err)
      })
  }

  let token = sessionStorage.getItem('userToken');

  useEffect(() => {
    token && navigate('/home');
  }, [token, navigate]);

  const callBack = async (e) => {
    e.preventDefault();
    window.location.href = `${VITE_BACKEND_URL}/google`;
    console.log(window.location.href);
  };


  return (
    <>
      <ToastContainer />
      <main className='flex items-center justify-center gap-10 sm:gap-0 my-4 mx-2 sm:mx-5 md:mx-10'>

        <Link to="/" className='basis-1/2 mx-auto hidden md:block'>
          <img src={logo} alt="Logo de Fitness Center Gym" className='basis-1/2 w-[30vw] mx-auto ' />
        </Link> 
        <div className="basis-1/2 w-[50vh] flex flex-1 flex-col sm:gap-0 justify-center p-6 py-8 sm:py-6 lg:px-8 rounded-lg bg-gray-200 bg-opacity-60 shadow-md">
          <h2 className="text-center text-2xl font-PoppinsBold leading-9 tracking-tight text-pallete-black">
            Registrarse
          </h2>

          <form className='w-full' action="#" onSubmit={register}>
            <div className="flex flex-col gap-6 sm:gap-4 mt-9 sm:mx-auto sm:w-full sm:max-w-sm">
              <div>
                <div className="flex items-center align-middle">
                  <label htmlFor="email" className="block text-sm font-PoppinsSemibold leading-6 text-pallete-black after:content-['*']" >
                    Usuario
                  </label>
                </div>

                <div className="mt-2">
                  <input onChange={(e) => setName(e.target.value)}
                    id="user"
                    name="user"
                    placeholder="Usuario"
                    type="text"
                    required
                    className="input input-sm block w-full rounded-md font-PoppinsRegular bg-pallete-black text-pallete-white ring-1 ring-inset ring-pallete-grey focus:ring-2 focus:ring-inset focus:ring-pallete-blue sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center">
                  <label
                    htmlFor="email"
                    className="block text-sm font-PoppinsSemibold leading-6 text-pallete-black after:content-['*']"
                  >
                    Correo
                  </label>
                </div>

                <div className="mt-2">
                  <input onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    placeholder="Correo"
                    type="email"
                    autoComplete="email"
                    required
                    className="input input-sm block w-full rounded-md font-PoppinsRegular bg-pallete-black text-pallete-white ring-1 ring-inset ring-pallete-grey focus:ring-2 focus:ring-inset focus:ring-pallete-blue sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center">
                  <label
                    htmlFor="email"
                    className="block text-sm font-PoppinsSemibold leading-6 text-pallete-black after:content-['*']"
                  >
                    Contraseña
                  </label>
                </div>

                <div className="mt-2">
                  <input onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    placeholder="Contraseña"
                    type="password"
                    required
                    className="input input-sm block w-full rounded-md font-PoppinsRegular bg-pallete-black text-pallete-white ring-1 ring-inset ring-pallete-grey focus:ring-2 focus:ring-inset focus:ring-pallete-blue sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center">
                  <label
                    htmlFor="email"
                    className="block text-sm font-PoppinsSemibold leading-6 text-pallete-black after:content-['*']"
                  >
                    Repetir contraseña
                  </label>
                </div>

                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    placeholder="Repetir contraseña"
                    type="password"
                    required
                    className="input input-sm block w-full rounded-md font-PoppinsRegular bg-pallete-black text-pallete-white ring-1 ring-inset ring-pallete-grey focus:ring-2 focus:ring-inset focus:ring-pallete-blue sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <button
                onClick={register}
                type="submit"
                className="btn btn-md px-10 py-1.5 mt-5 mx-auto rounded-xl flex justify-center text-sm shadow-sm font-PoppinsSemibold bg-pallete-yellow hover:bg-pallete-yellow  leading-6 text-pallete-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pallete-blue"
              >
                Aceptar
              </button>

              <div className='flex flex-col gap-3 mt-5 mx-auto items-center justify-center'>              
                <p className=" text-center text-xs sm:text-sm font-PoppinsSemibold text-pallete-grey">
                  ¿Ya estás registrado?
                  <Link Link to="/login" className="px-2 font-PoppinsSemibold leading-6 text-pallete-green">Iniciar sesión</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default Register