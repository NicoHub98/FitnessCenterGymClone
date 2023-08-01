import styles from "./styles.module.css";
import {useNavigate } from "react-router-dom";

const SideMenu = ({ isOpen}) => {

  const navigate = useNavigate()
  

  return (


    <div 
      style={{ right: isOpen ? 0 : -250 }}
      className={styles.container}
    >
      <nav className={styles.navMenu}>
        <a href="#galeria">Galería</a>
        <a href="#colaboradores">Colaboradores</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <button className={styles.login} onClick={() => {
        navigate('/login')
    }}> Ingresar</button>
    </div>
  

  );
};

export default SideMenu;