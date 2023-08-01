import LOGO from '../../../../assets/imgs/logoBlackTypo.png'


const Horarios = () => {
  return (
    <div style={{backgroundColor:'white', width:'100%', display:'flex'}}>

      
    <div style={{  marginTop:'25px'}} className="flex w-full flex-col gap-3 bg-white">
      
      <div style={{
        display:'flex',
        width:'100%',
        maxWidth:'1600px',
        gap:'550px',
        alignItems:'center',
        // border:'3px solid orange',
        margin:'0 auto'
      }}>
        <h2 
          className='text-4xl text-black font-bold'
          style={{borderBottom:'2px solid',borderColor:'#5FCA56', paddingBottom:'10px', marginTop:'80px'}}>
          Horarios
        </h2>

        <span style={{maxHeight:'240px', maxWidth:'200px', alignSelf:'center'}}>
          <img style={{height:'100%', width:'100%'}} src={LOGO} alt="logotipo del gym" />
        </span>

      </div>

        <div 
          style={{
          borderRight: '10px solid #1A1363',
          borderBottom:'10px solid #1A1363',
          margin:'0 auto',
          width:'100%',
          maxWidth:'800px'}}
          className="overflow-x-auto"
        >
      <table className="table table-xl table-pin-rows table-pin-cols gap-x-10">
        <thead>
          <tr style={{backgroundColor:'#1A1363', height:'80px', color:'white', fontSize:'1.3rem', fontWeight:'400'}} >
            <th style={{backgroundColor:'#1A1363'}}></th> 
            <td>Lunes</td> 
            <td>Martes</td> 
            <td>Miércoles</td> 
            <td>Jueves</td> 
            <td>Viernes</td> 
            <td>Sábado</td>
            <td>Domingo</td>
          </tr>
        </thead> 

        <tbody >

          <tr>
            <th style={{backgroundColor:'#1A1363', height:'35px'}}>10:00</th> 
            <td style={{backgroundColor:'#929199', width:'35px', color:'#343a40', fontWeight:'bold', border:'1px solid #343a40'}}>Zumba #profe María</td>
            <td style={{backgroundColor:'#929199', width:'35px', color:'#343a40', fontWeight:'bold', border:'1px solid #343a40'}}>Zumba #profe María</td>  
            <td></td> 
            <td></td> 
            <td style={{backgroundColor:'#929199', width:'35px', color:'#343a40', fontWeight:'bold', border:'1px solid #343a40'}}>Zumba #profe María</td> 
            <td></td>
          </tr>

          {/* <tr>
            <th style={{backgroundColor:'#1A1363', height:'80px'}}>11:00</th> 
            <td></td> 
            <td></td> 
            <td></td> 
            <td></td> 
            <td></td> 
            <td></td>
          </tr> */}

          
        <tr>
            <th style={{backgroundColor:'#1A1363', height:'35px'}}>14:00</th> 
            <td style={{backgroundColor:'#929199', width:'35px', color:'#343a40', fontWeight:'bold', border:'1px solid #343a40'}}>Zumba #profe María</td> 
            <td style={{backgroundColor:'#929199', width:'35px', color:'#343a40', fontWeight:'bold', border:'1px solid #343a40'}}>Spinning #Profe Ro</td>  
            <td style={{backgroundColor:'#929199', width:'35 px', color:'#343a40', fontWeight:'bold', border:'1px solid #343a40'}}>Spinning #Profe Ro</td>  
            <td></td> 
            <td style={{backgroundColor:'#929199', width:'35px', color:'#343a40', fontWeight:'bold', border:'1px solid #343a40'}}>Zumba #profe María</td> 
            <td style={{backgroundColor:'#929199', width:'35px', color:'#343a40', fontWeight:'bold', border:'1px solid #343a40'}}>Zumba #profe María
                </td>  
          </tr>
        

          <tr>
            <th style={{backgroundColor:'#1A1363', height:'35px'}}>15:00</th> 
            <td></td> 
            <td style={{backgroundColor:'#929199', width:'35px', color:'#343a40', fontWeight:'bold', border:'1px solid #343a40'}}>Yoga #Profe Noe</td> 
            <td></td> 
            <td style={{backgroundColor:'#929199', width:'35px', color:'#343a40', fontWeight:'bold', border:'1px solid #343a40'}}>Yoga #Profe Noe</td> 
            <td></td> 
            <td style={{backgroundColor:'#929199', color:'#343a40', width:'35px', fontWeight:'bold', border:'1px solid #343a40'}}>suspendida del 7/4 al 19</td>
          </tr>

  {/* 
          <tr>
            <th style={{backgroundColor:'#1A1363', height:'80px'}}>16:00</th> 
            <td></td> 
            <td></td> 
            <td></td> 
            <td></td> 
            <td></td> 
            <td></td>
          </tr> */}

          <tr>
            <th style={{backgroundColor:'#1A1363', height:'30px'}}>17:00</th> 
            <td style={{backgroundColor:'#929199', width:'35px', color:'#343a40', fontWeight:'bold', border:'1px solid #343a40'}}>Yoga #Profe Noe</td> 
            <td></td> 
            <td style={{backgroundColor:'#929199', width:'35px', color:'#343a40', fontWeight:'bold', border:'1px solid #343a40'}}>Yoga #Profe Noe</td>  
            <td></td> 
            <td></td> 
            <td></td>
          </tr>

          <tr>
            <th style={{backgroundColor:'#1A1363', height:'30px'}}>18:00</th> 
            <td></td> 
            <td></td> 
            <td style={{backgroundColor:'#929199', width:'35px', color:'#343a40', fontWeight:'bold', border:'1px solid #343a40'}}>Crossfit #Profe Ale</td> 
            <td></td> 
            <td style={{backgroundColor:'#929199', width:'35px', color:'#343a40', fontWeight:'bold', border:'1px solid #343a40'}}>Crossfit #Profe Ale</td> 
            <td></td>
          </tr>

          {/* <tr>
            <th style={{backgroundColor:'#1A1363', height:'80px'}}>19:00</th> 
            <td></td> 
            <td></td> 
            <td></td> 
            <td></td> 
            <td></td> 
            <td></td>
          </tr> */}

          <tr>
            <th style={{backgroundColor:'#1A1363', border:'1px solid #1A1363'}}>20:00</th> 
            <td></td> 
            <td style={{backgroundColor:'#929199', width:'40px', color:'#343a40', fontWeight:'bold', border:'1px solid #343a40'}}>Aerobox #Profe Carla</td> 
            <td></td> 
            <td></td> 
            <td></td> 
            <td></td>
          </tr>
          
        </tbody> 

      </table>
    </div>

    </div>
  </div>


)
}

export default Horarios

