import { Link } from "react-router-dom"
import Title from '../Title'
import machineIcon from "../../assets/imgs/machineIcon.png"
import weightsIcon from "../../assets/imgs/weightsIcon.png"
import gymIcon from "../../assets/imgs/gymIcon.png"


const MENU = [
  {
    id: 1,
    img: [machineIcon],
    title: ["Máquinas"],
    desc: ["aparatos de sala de musculación"],
    alt: "Máquinas",
    link: "/home/bienes/maquinas"
  }, {
    id: 2,
    img: [weightsIcon],
    title: ["Elementos"],
    desc: ["pesas, colchonetas, etc"],
    alt: "Elementos",
    link: "/home/bienes/elementos"
  }, {
    id: 3,
    img: [gymIcon],
    title: ["Mobiliario"],
    desc: ["muebles, estantes, etc"],
    alt: "Mobiliario",
    link: "/home/bienes/mobiliario"
  }]

const Bienes = () => {
  return (
    <main className='flex flex-col w-full gap-2 p-5'>
      <Title title={'Bienes'} />
      <section className='flex flex-col items-center justify-between gap-5'>
        {
          MENU.map((el) => (
            <Link
              key={el.id}
              to={el.link}
            >
              <div className='flex flex-row-reverse items-center gap-7'>
                <div className='peer peer/img group bg-pallete-white g-gradient-custom drop-shadow-md hover:shadow-custom w-[230px] sm:w-[380px] flex flex-col items-start justify-between px-6 pt-5 pb-7 gap-3 rounded-lg transition-all duration-500 ease-out cursor-pointer'>
                  <h3 className='text-base text-pallete-black group-hover:text-pallete-white font-PoppinsSemibold '>{`${el.title}`}</h3>
                  <p className='text-sm text-pallete-black group-hover:text-pallete-white font-PoppinsMedium '>{`${el.desc}`}</p>
                </div>
                <img className='peer-hover/img:-translate-x-2 w-12 transition-all' src={el.img} alt={`${el.alt}`} />
              </div>
            </Link>
          ))
        }
      </section>
    </main>
  )
}

export default Bienes