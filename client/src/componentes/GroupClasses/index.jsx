import "./clases.css";
import Logo from "../Title/assets/FitnessCenterLogoGym.png";
import { Cards } from "./Cards";
import { useFilter } from "./useFilter";
import { Buttons } from "./Buttons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../store/userContext";

const GroupClasses = () => {
  const { filteredCards, setFilter } = useFilter();

  const [todasLasClases, setTodasLasClases] = useState([]);
  const [name, setname] = useState("");
  const [trainer, setTrainer] = useState("");
  const [schedule, setSchedule] = useState("");
  const [duration, setDuration] = useState("");
  const [inDay, setInDay] = useState("");
  const [weekDays, setWeekDays] = useState("");
  const [img, setImg] = useState("");
  const userCtx = useContext(UserContext);

  const [horarioSeleccionado, setHorarioSeleccionado] = useState("Mañana");
  const [clasesFiltradas, setClasesFiltradas] = useState([]);

  const filtrarClasesPorHorario = (horario) => {
    setHorarioSeleccionado(horario);
    const clasesFiltradas = todasLasClases.filter(
      (clase) => clase.inDay === horario
    );
    setClasesFiltradas(clasesFiltradas);
  };

  useEffect(() => {
    axios
      .get("/api/class-group")
      .then((res) => {
        // console.log(res.data);
        setTodasLasClases(res.data);
        setClasesFiltradas(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const addClass = () => {
    const newClassToBeSaved = {
      name,
      trainer,
      schedule,
      inDay,
      weekDays,
      adminId: userCtx.userId,
      duration,
      img,
    };
    // console.log(newClassToBeSaved);
    axios
      .post("/api/class-group", newClassToBeSaved)
      .then((res) => {
        console.log(res.data);
        setTimeout(() => {
          window.location.reload();
        }, 200);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full">
      <div className="w-full mt-5 mx-[2rem]">
        <header className="flex justify-center items-center">
          <img
            className="w-32 "
            src={Logo}
            alt="FitnessCenterLogoGym logo de la marca y aplicación web Fitness Center"
          />
        </header>
        <h3 className="self-start text-2xl font-PoppinsBold border-b-2 border-spacing-14 border-pallete-green inline">
          Clases grupales
        </h3>
      </div>

      <div className="flex justify-center">
        <Buttons onChangeFilter={filtrarClasesPorHorario} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-4">
        {clasesFiltradas.map((card) => (
          <Cards key={card.id} card={card} />
        ))}
      </div>

      <div>
        <button className="btn btn-md px-10 py-1.5 mx-auto rounded-xl flex justify-center text-sm shadow-sm font-PoppinsSemibold bg-pallete-yellow hover:bg-pallete-yellow hover:shadow-md leading-6 text-pallete-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pallete-blue" onClick={() => window.my_modal_5.showModal()}>
          Agregar
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <form method="dialog" className="modal-box bg-slate-400">
            <div className="text-center">
              <button className="btn float-right w-2 h-[2px]">x</button>
              <input
                type="text"
                placeholder="name"
                className="input w-full bg-white rounded-lg py-2 px-3 mb-2 text-center"
                onChange={(e) => setname(e.target.value)}
              />
            </div>

            <div>
              <div className="mb-4">
                <input
                  type="text"
                  className="input w-full bg-white rounded-lg py-2 px-3 text-center"
                  placeholder="trainer"
                  onChange={(e) => setTrainer(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  className="input w-full bg-white rounded-lg py-2 px-3 text-center"
                  placeholder="duration"
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  className="input w-full bg-white rounded-lg py-2 px-3 text-center"
                  placeholder="schedule"
                  onChange={(e) => setSchedule(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <select
                  name=""
                  id=""
                  className="select w-full bg-white rounded-lg py-2 px-3 text-center"
                  onChange={(e) => setInDay(e.target.value)}
                >
                  <option value="Mañana">Mañana</option>
                  <option value="Tarde">Tarde</option>
                  <option value="Noche">Noche</option>
                </select>
              </div>

              <div className="mb-4">
                <select
                  name=""
                  id=""
                  className="select w-full bg-white rounded-lg py-2 px-3 text-center"
                  onChange={(e) => setWeekDays(e.target.value)}
                >
                  <option value="Lunes">Lunes</option>
                  <option value="Martes">Martes</option>
                  <option value="Miercoles">Miercoles</option>
                  <option value="Jueves">Jueves</option>
                  <option value="Viernes">Viernes</option>
                </select>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  className="input w-full bg-white rounded-lg py-2 px-3 text-center"
                  placeholder="img URL  "
                  onChange={(e) => setImg(e.target.value)}
                />
              </div>
            </div>

            <div className="text-center">
              <button onClick={() => addClass()} className="bg-green">
                Agregar clase
              </button>
            </div>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default GroupClasses;

/* <button className="btn btn-active btn-primary mb-5" onClick={() => window.my_modal_5.showModal()}>Agregar</button>
    <dialog id="my_modal_5" className="modal  sm:modal-middle mx-auto">
      <form method="dialog" className="modal-box bg-slate-400">
        <div className='px-4 py-6'>
  
          <div className='text-center'>
            <h3 className="font-bold text-lg">Agregar Cliente</h3>
          </div>
  
          <div className='bg-white rounded-xl mt-4 p-4'>
            <div className='mb-4'>
              <p className='text-base font-semibold'><b>Nombre</b></p>
              <input type='text' className='w-full bg-slate-300 rounded-lg py-2 px-3' onChange={(e) => setName(e.target.value)}></input>
            </div>
  
            <div className='mb-4'>
              <p className='text-base font-semibold'><b>Plan</b></p>
              <input type='text' className='w-full bg-slate-300 rounded-lg py-2 px-3' onChange={(e) => setPlan(e.target.value)}></input>
            </div>
            <div className='mb-4'>
              <p className='text-base font-semibold'><b>Contacto</b></p>
              <input type='text' className='w-full bg-slate-300 rounded-lg py-2 px-3' onChange={(e) => setContact(e.target.value)}></input>
            </div>


            <div className='mb-4'>
              <p className='text-base font-semibold'><b>Email</b></p>
              <input type='text' className='w-full bg-slate-300 rounded-lg py-2 px-3' onChange={(e) => setEmail(e.target.value)}></input>
            </div>

            <div className='mb-4'>
                <div className='flex'>
                   <p className='text-base font-semibold'><b>Fecha de Ingreso</b></p>
                   <input type='date' className='w-full bg-slate-300 rounded-lg py-2 px-3' onChange={(e) => setDateIn(e.target.value)}></input>

                   <p className='text-base font-semibold'><b>Fecha de Vencimiento</b></p>
                   <input type='date' className='w-full bg-slate-300 rounded-lg py-2 px-3' onChange={(e) => setDateOut(e.target.value)}></input>
                </div>
         
            </div>
  
            <div className='flex justify-center'>
              <button className='text-white btn btn-active btn-primary rounded-xxl w-[100px] mr-4' onClick={() => createNewClient()}>Agregar</button>
              <button className='text-white btn btn-active btn-primary rounded-xxl w-[100px]'>Cancelar</button>
            </div>
          </div>
        </div>
      </form>
    </dialog>*/
