import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoBehance } from "react-icons/bi";
const ItemCard = ({ data }) => {
  const { id, name, position, logo, link1, link2 } = data;

  return (
    <div className="card w-80 bg-slate-100 hover:scale-105  transition-all">
      <div className="card-body text-center">
        <div className="avatar justify-center">
          <div className="w-24 rounded-full">
            <img src={logo} />
          </div>
        </div>
        <h2 className="card-title block text-black">{name}</h2>
        <h3 className="block text-xl text-gray-600">{position}</h3>

        <div
          style={{ marginTop: "8px" }}
          className="card-actions justify-center"
        >
          {id !== 2 && (
            <a
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
              href={link1}
              className="btn btn-outline btn-circle hover:bg-pallete-green"
            >
              {id === 3 ? (
                <BiLogoBehance size={28} />
              ) : (
                <AiFillGithub size={28} />
              )}
            </a>
          )}
          <a
            style={{ color: "black" }}
            target="_blank"
            href={link2}
            className="btn btn-outline btn-circle hover:bg-pallete-green"
          >
            <AiFillLinkedin size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
