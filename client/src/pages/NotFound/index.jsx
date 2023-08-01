import { Link } from "react-router-dom";
// import { Footer } from "../../componentes";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
    
      <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-[#211D1D] to-[#1A1363]">

        <div className="text-center">

          <h2 className="error mb-[5rem] text-9xl md:text-[480px] text-white mt-12 font-bold">404</h2>

          <h2 className="text-2xl md:text-5xl text-white mt-8">
            Ha ocurrido un error inesperado
          </h2>

          <p className="text-xl md:text-2xl text-white mt-6">
            Por favor, inténtalo de nuevo más tarde
          </p>

          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-[#5FCA56] text-black hover:bg-[#aceca6] mt-6">
            <Link to="/">Volver a inicio</Link>
          </button>

        </div>
        
      </div>


    </>
  );
};

export default NotFound;
