import ItemCard from "../SingleCard";
import imgCaro from "../../../assets/imgs/photos/image 41.png";
import imgJerlib from "../../../assets/imgs/photos/image 42.png";
import imgOctavio from "../../../assets/imgs/photos/image 43.png";
import imgNico from "../../../assets/imgs/photos/image 44.png";
import imgPieri from "../../../assets/imgs/photos/image 45.png";
import imgFranco from "../../../assets/imgs/photos/image 47.png";
import imgAndy from "../../../assets/imgs/photos/image 48.png";
import imgCarlos from "../../../assets/imgs/photos/image 49.png";
import imgJoaco from "../../../assets/imgs/photos/image 50.png";
const Card = () => {
  const data = [
    {
      id: 0,
      name: "Jerlib González",
      position: "Desarrollador Back end",
      logo: imgJerlib,
      link1: "https://github.com/JerlibGnzlz",
      link2: "https://www.linkedin.com/in/jerlibgnzlz/",
    },
    {
      id: 1,
      name: "Octavio Salas",
      position: "Desarrollador Front end",
      logo: imgOctavio,
      link1: "https://github.com/octaviosalas",
      link2: "https://www.linkedin.com/in/octaviosalaspro/",
    },
    {
      id: 2,
      name: "Pierina Sabino",
      position: "QA",
      logo: imgPieri,
      link1: "",
      link2: "https://www.linkedin.com/in/pierina-sabino-camacho/",
    },
    {
      id: 3,
      name: "Carolina Maiquez ",
      position: "UX UI Designer",
      logo: imgCaro,
      link1: "https://www.behance.net/carolinamaiquez",
      link2: "https://www.linkedin.com/in/carolina-maiquez-870666255/",
    },
    {
      id: 4,
      name: "Nicolás Ludueño",
      position: "Desarrollador Front end",
      logo: imgNico,
      link1: "https://github.com/NicoHub98",
      link2: "https://www.linkedin.com/in/nicol%C3%A1s-ludue%C3%B1o-937bb8208/",
    },
    {
      id: 5,
      name: "Franco Saldaño",
      position: "Desarrollador Front end",
      logo: imgFranco,
      link1: "https://github.com/FrancoSaldano",
      link2: "https://www.linkedin.com/in/franco-salda%C3%B1o/",
    },
    {
      id: 6,
      name: "Andy Mancuso",
      position: "Desarrollador Front end",
      logo: imgAndy,
      link1: "https://github.com/andyMancuso",
      link2: "https://www.linkedin.com/in/andymancuso/",
    },
    {
      id: 7,
      name: "Carlos Martínez",
      position: "Desarrollador Back end",
      logo: imgCarlos,
      link1: "https://github.com/Cemb93",
      link2: "https://www.linkedin.com/in/carlos-mart%C3%ADnez-7491776a/",
    },
    {
      id: 8,
      name: "Joaquín Romero",
      position: "Desarrollador Front end",
      logo: imgJoaco,
      link1: "https://github.com/JDR89",
      link2: "https://www.linkedin.com/in/joaquin-romero-360141191/",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap xl:mx-52 gap-5 justify-center">
        {data.map(({ id }) => (
          <div key={id}>
            <ItemCard data={data[id]} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
