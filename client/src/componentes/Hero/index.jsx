import LOGO from './FitnessCenterLogoGym.png'
import roundedIMG from './heroIMG.png'

import styles from "./styles.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>


        <div className={styles.content}>
          <span className={styles.fitLogo}>
            <img style={{width:'100%', height:'100%'}} src={LOGO} alt="fitness center logo" />
          </span>

          <span className={styles.img}>
            <img style={{width:'100%', height:'100%'}} src={roundedIMG} alt="rounded hero img" />
          </span>
        </div>




    </div>
  )
}

export default Hero