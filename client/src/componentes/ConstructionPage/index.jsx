import { Link } from "react-router-dom";
import "./Construction.css";

const ConstructionPage = () => {
  return (

    <div className="w-full flex flex-col min-h-screen contenedor">
      <div className="text-center">
        <h2 className="font-[Poppins] text-[#333333] font-black md:text-6xl text-4xl text-center mb-[12rem]">
          Página en construcción
        </h2>

        <button className="font-[Poppins] btn md:px-[4rem] md:btn-md lg:btn-lg bg-[#5FCA56] text-black hover:bg-[#aceca6] mt-[150px]">
          <Link to="/home/bienes">Volver</Link>
        </button>
      </div>
    </div>

  );
};

export default ConstructionPage;
