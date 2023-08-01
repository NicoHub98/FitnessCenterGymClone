import Logo from '../Footer/FooterUI.png'
import {AiOutlineCopyrightCircle, AiFillInstagram} from 'react-icons/ai'
import {FaLocationDot} from 'react-icons/fa6'
import {BsFillTelephoneFill, BsFacebook} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'


const Footer = () => {
  return (
    <footer id='contacto' >
      
      <div style={{display:'flex', width:'100%', height:'100%', maxWidth:'2000px', alignItems:'center', boxShadow: "0px 0px 20px rgba(78, 78, 78, 0.1)"}}>
        <div style={{display:'flex', justifyContent:'space-between', maxHeight:'240px', width:'100%', maxWidth:'2400px', padding:'10px', gap:'55px' }}>
          <div style={{display:'flex', flexDirection:'column', width:'100%', maxWidth:'200px', alignItems:'center', marginBottom:'20px'}}>
            <img style={{
              width:'100%',
              maxWidth:'150px',
              height:'100%',
              maxHeight:'190px',
              backgroundColor:'white',
              marginLeft:'12px',
              marginBottom:'-30px'
            }} src={Logo} alt="footerLogo" />
            
            <p>Fitness Center Gym</p>
              
            <p style={{display:'flex', alignItems:'center', gap:'5px'}}>Copyright <AiOutlineCopyrightCircle style={{marginTop:'2px'}} />2023 </p>
          </div>

        

          <div style={{display:'flex', width:'100%', maxWidth:'180px', flexDirection:'column', gap:'40px', marginTop:'20px', marginRight:'15px'}}>

            <div style={{ display:'flex', flexDirection:'column', gap:'5px', marginBottom:'-10px'}}>
              <span style={{color:'black', fontSize:'1rem'}} className="footer-title">Nuestras redes</span> 
                <div style={{marginLeft:'5px'}} className="grid grid-flow-col">
                  <a style={{display:'flex', alignItems:'center', gap:'3px', cursor:'pointer'}} ><IoLogoWhatsapp size={20} /></a>
                  <a style={{display:'flex', alignItems:'center', gap:'3px', cursor:'pointer'}} ><AiFillInstagram size={20}/></a>
                  <a style={{display:'flex', alignItems:'center', gap:'3px', cursor:'pointer'}} ><BsFacebook size={18}/></a>
                </div>
            </div>

            <div style={{display:'flex', flexDirection:'column'}}>
              <span style={{color:'black', fontSize:'1rem'}} className="footer-title">Contacto</span> 
                <div className="grid grid-flow-row gap-2">
                  <p style={{display:'flex', alignItems:'center', gap:'4px'}} ><FaLocationDot /> Cerrito 239, C.A.B.A</p>
                  <p style={{display:'flex', alignItems:'center', gap:'4px'}} ><BsFillTelephoneFill /> 5493-4993</p>
                </div>
              </div>

          </div>

        </div>
      </div>

  </footer>
  )
}

export default Footer