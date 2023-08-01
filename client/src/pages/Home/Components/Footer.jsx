import {MdOutlineExitToApp} from "react-icons/md"
import { Link } from "react-router-dom";



export const Footer = () => {
  return (
    
    <footer className="footer  bottom-0 left-0 w-full p-5 bg-[#343A40] text-base-content">
      <div className="flex items-center ">
        <div>
          <Link to={"/login"} className="ml-0">
            <MdOutlineExitToApp className="text-lg"/>
          </Link>
        </div>
        <div className="flex  justify-center">
          <p className="text-center sm:mx-auto text-[#FFFFFF]">
            Fitness Center Gym / Lugones 24 Capital Federal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer