import styles from './styles.module.css'
import Draggable from "react-draggable"
import { Title } from "../../../../componentes/index"
import axios from 'axios'
import { useEffect, useState } from 'react'

const Horarios = () => {
  const [horarios, setHorarios] = useState([]);
  
  useEffect(() => {
    axios.get("/api/class-group")
      .then((res) => {
        setHorarios(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="flex flex-col w-full gap-2 px-auto py-2 sm:p-5">
      <Title title={"Horarios"} />
      <div className={styles.content}>
        <div className={styles.sidebar}>
          <div className={styles.hours}>
            <p>10:00</p>
            <p>11:00</p>
            <p>14:00</p>
            <p>15:00</p>
            <p>16:00</p>
            <p>17:00</p>
            <p>18:00</p>
            <p>19:00</p>
            <p>20:00</p>
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.header}>
            <p>Lunes</p>
            <p>Martes</p>
            <p>Miércoles</p>
            <p>Jueves</p>
            <p>Viernes</p>
            <p>Sábado</p>
            <p>Domingo</p>
          </div>

          <div className={styles.classTimes}>
            <div className={styles.tenAM}>
              {horarios.map(el => {
                return (
                  <div key={el.id} className={styles.box}>
                    <Draggable>
                      <>
                        <p>Clase: {el.name}</p>
                        <p>Trainer: {el.trainer}</p>
                      </>
                    </Draggable>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Horarios

// const Horarios = () => {
//   const [horarios, setHorarios] = useState([]);
//   console.log("horarios:", horarios)
//   useEffect(() => {
//     axios.get("/api/class-group")
//       .then((res) => {
//         setHorarios(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);
//   return (
//     <main className="flex flex-col w-full gap-2 px-auto py-2 sm:p-5">
//       <Title title={"Horarios"} />

//       <div className={styles.content}>
//         <div className={styles.sidebar}>
//           <div className={styles.hours}>
//             <p>10:00</p>
//             <p>11:00</p>
//             <p>14:00</p>
//             <p>15:00</p>
//             <p>16:00</p>
//             <p>17:00</p>
//             <p>18:00</p>
//             <p>19:00</p>
//             <p>20:00</p>
//           </div>
//         </div>

//         <div className={styles.wrapper}>
//           <div className={styles.header}>
//             <p>Lunes</p>
//             <p>Martes</p>
//             <p>Miércoles</p>
//             <p>Jueves</p>
//             <p>Viernes</p>
//             <p>Sábado</p>
//             <p>Domingo</p>
//           </div>


//           <div className={styles.classTimes}>
//             <div className={styles.tenAM}>
//               {horarios.map(el => {
//                 return (
//                   <Draggable>
//                     <div className={styles.box}>
//                       <p>{el.name}</p>
//                       <p>{el.trainer}</p>
//                     </div>
//                   </Draggable>
//                 );
//               })}
//             </div>
// {/* 
//             <div className={styles.twoPM}>

//               <Draggable>
//                 <div className={styles.box}>
//                   <p>Spinning</p>
//                   <p>#Profe Ro</p>
//                 </div>
//               </Draggable>
//               <Draggable>
//                 <div className={styles.box}>
//                   <p>Spinning</p>
//                   <p>#Profe Ro</p>
//                 </div>
//               </Draggable>


//               <Draggable>
//                 <div className={styles.customBox}>
//                   <p>Zumba</p>
//                   <span style={{ color: '#F96B6B', fontSize: '.7rem', wordWrap: 'break-word' }}>Suspendida del 7/4 al 19/4</span>
//                   <p>#Profe María</p>
//                   <span style={{ position: 'absolute', height: '12px', width: '12px', backgroundColor: '#F96B6B', borderRadius: '50%', top: '0', right: '0' }}></span>
//                 </div>
//               </Draggable>

//             </div> */}

//             {/* <div className={styles.threePM}>

//               <Draggable>
//                 <div className={styles.box}>
//                   <p>Yoga</p>
//                   <p>#Profe Noe</p>
//                 </div>
//               </Draggable>
//               <Draggable>
//                 <div className={styles.box}>
//                   <p>Yoga</p>
//                   <p>#Profe Noe</p>
//                 </div>
//               </Draggable>

//             </div> */}

//             {/* <div className={styles.twoPM}>

//               <Draggable>
//                 <div className={styles.box}>
//                   <p>Yoga</p>
//                   <p>#Profe Noe</p>
//                 </div>
//               </Draggable>
//               <Draggable>
//                 <div className={styles.box}>
//                   <p>Yoga</p>
//                   <p>#Profe Noe</p>
//                 </div>
//               </Draggable>

//             </div> */}

//             {/* <div className={styles.sixPM}>

//               <Draggable>
//                 <div className={styles.box}>
//                   <p>Crossfit</p>
//                   <p>#Profe Ale</p>
//                 </div>
//               </Draggable>
//               <Draggable>
//                 <div className={styles.box}>
//                   <p>Crossfit</p>
//                   <p>#Profe Ale</p>
//                 </div>
//               </Draggable>

//             </div> */}

//             {/* <div className={styles.threePM}>

//               <Draggable>
//                 <div className={styles.box}>
//                   <p>Aerobox</p>
//                   <p>#Profe Carla</p>
//                 </div>
//               </Draggable>
//               <Draggable>
//                 <div className={styles.box}>
//                   <p>Aerobox</p>
//                   <p>#Profe Carla</p>
//                 </div>
//               </Draggable>

//             </div> */}


//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }

// export default Horarios