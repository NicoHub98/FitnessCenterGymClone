
import Logo from "./assets/FitnessCenterLogoGym.png"

const Title = ({ title }) => {
  return (
    <>
      <header className='hidden sm:flex justify-center items-center '>
        <img className='w-32 ' src={Logo} alt="FitnessCenterLogoGym logo de la marca y aplicación web Fitness Center" />
      </header>
      <h3 className='self-start text-xl sm:text-xl md:text-2xl mx-auto sm:m-0 px-4 sm:p-0 font-PoppinsBold border-b-2 border-spacing-14 text-pallete-black border-pallete-green inline'>
        {title}
      </h3>
    </>
  )
}

export default Title

