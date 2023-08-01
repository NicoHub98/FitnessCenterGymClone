import logoConNombre from "../../img/LogoConNombre.png";
import "./clases.css";

//https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/yoga-regla.jpg.webp?itok=PNVZueQF

const GroupClasses = () => {
  return (
    <div className='flex '>


      <div>
        <div className='custom-hidden'>
          <img src={logoConNombre} alt="" className='w-[200px] mt-[40px]  ml-[800px]  xxxl:ml-[700px] xxl:ml-[600px] xl:ml-[540px] lg:ml-[540px] md:ml-[540px] sm:ml-[540px] xxs:ml-[540px] xxxs:ml-[500px] ' />
        </div>

        <div>
          <div className='xxxs:flex xxs:flex xxxxs:inline-block'>
            <div>
              <p className='ml-6 xxxxs:ml-[120px] xxxs:mt-[1px] xxs:mt-[1px] xxxxs:mt-[30px]'><b>Clases Grupales</b></p>
              <hr className='h-10 text-black' />
            </div>

            <div className=''>
              <button className=" btn-primary text-12px w-[120px] h-[22px] rounded-lg ml-[50px] xxxxs:ml-[120px]">Hoy 25/7</button>
            </div>
          </div>
        </div>

        <div className='flex mb-100 xxxxl:flex xxxl:flex  xxl:flex xl:flex lg:flex md:flex sm:flex xxs:flex xxxs:flex xxxxs:inline-block'>

          <div className='flex-direction: colum xxxxl:ml-[220px] mt-[20px] xxxl:ml-[120px] xxl:ml-[40px]        '>

            <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg ml-[120px]">Mañana</button>
            <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]">
              <div className='flex'>
                <div className="avatar float-left h-[80px] mt-[25px]">
                  <div className="w-24 rounded-full">
                    <img src="https://contenidos.imq.es/hubfs/Imported_Blog_Media/crossfit-entrenamiento-1.jpg" />
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title text-[15px] text-white b">CROSSFIT</h2>
                  <p className='text-white'>09:30 am - 60 min</p>
                  <div className="card-actions float-right ">
                    <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Noe</button>
                    <div className='text-white text-[12px] ml-[40px]'>
                      <p>5 Lugares</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]">
              <div className='flex'>
                <div className="avatar float-left h-[80px] mt-[25px]">
                  <div className="w-24 rounded-full">
                    <img src="https://www.musculacion.net/biceps-triceps-a-muerte.png" />
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title text-[15px] text-white b">Musculacion</h2>
                  <p className='text-white'>09:30 am - 60 min</p>
                  <div className="card-actions float-right ">
                    <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Maria</button>
                    <div className='text-white text-[12px] ml-[40px]'>
                      <p>5 Lugares</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]">
              <div className='flex'>
                <div className="avatar float-left h-[80px] mt-[25px]">
                  <div className="w-24 rounded-full">
                    <img src="https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/yoga-regla.jpg.webp?itok=PNVZueQF" />
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title text-[15px] text-white b">YOGA</h2>
                  <p className='text-white'>09:30 am - 60 min</p>
                  <div className="card-actions float-right ">
                    <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Carla</button>
                    <div className='text-white text-[12px] ml-[40px]'>
                      <p>5 Lugares</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]">
              <div className='flex'>
                <div className="avatar float-left h-[80px] mt-[25px]">
                  <div className="w-24 rounded-full">
                    <img src="https://pymstatic.com/6843/conversions/spinning-wide.jpg" />
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title text-[15px] text-white b">Spinning</h2>
                  <p className='text-white'>09:30 am - 60 min</p>
                  <div className="card-actions float-right ">
                    <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Carla</button>
                    <div className='text-white text-[12px] ml-[40px]'>
                      <p>5 Lugares</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className='flex-direction: colum ml-[30px] mt-[20px] xxxxs:ml-[5px]'>

            <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg ml-[120px] xxxxs:ml-[140px]">Tarde</button>
            <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]">
              <div className='flex'>
                <div className="avatar float-left h-[80px] mt-[25px]">
                  <div className="w-24 rounded-full">
                    <img src="https://pymstatic.com/6843/conversions/spinning-wide.jpg" />
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title text-[15px] text-white b">Spinning</h2>
                  <p className='text-white'>09:30 am - 60 min</p>
                  <div className="card-actions float-right ">
                    <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Noe</button>
                    <div className='text-white text-[12px] ml-[40px]'>
                      <p>5 Lugares</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]">
              <div className='flex'>
                <div className="avatar float-left h-[80px] mt-[25px]">
                  <div className="w-24 rounded-full">
                    <img src="https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/yoga-regla.jpg.webp?itok=PNVZueQF" />
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title text-[15px] text-white b">Yoga</h2>
                  <p className='text-white'>09:30 am - 60 min</p>
                  <div className="card-actions float-right ">
                    <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Maria</button>
                    <div className='text-white text-[12px] ml-[40px]'>
                      <p>5 Lugares</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]">
              <div className='flex'>
                <div className="avatar float-left h-[80px] mt-[25px]">
                  <div className="w-24 rounded-full">
                    <img src="https://www.musculacion.net/biceps-triceps-a-muerte.png" />
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title text-[15px] text-white b">Musculacion</h2>
                  <p className='text-white'>09:30 am - 60 min</p>
                  <div className="card-actions float-right ">
                    <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Carla</button>
                    <div className='text-white text-[12px] ml-[40px]'>
                      <p>5 Lugares</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]">
              <div className='flex'>
                <div className="avatar float-left h-[80px] mt-[25px]">
                  <div className="w-24 rounded-full">
                    <img src="https://uvn-brightspot.s3.amazonaws.com/assets/vixes/imj/vivirsalud/L/Los-SI-y-NO-del-aerobox-4.jpg" />
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title text-[15px] text-white b">Aero Box</h2>
                  <p className='text-white'>09:30 am - 60 min</p>
                  <div className="card-actions float-right ">
                    <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Maria</button>
                    <div className='text-white text-[12px] ml-[40px]'>
                      <p>5 Lugares</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className='flex-direction: colum ml-[30px] mt-[20px] xxxxs:ml-[5px]'>

            <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg ml-[120px]">Noche</button>
            <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]">
              <div className='flex'>
                <div className="avatar float-left h-[80px] mt-[25px]">
                  <div className="w-24 rounded-full">
                    <img src="https://uvn-brightspot.s3.amazonaws.com/assets/vixes/imj/vivirsalud/L/Los-SI-y-NO-del-aerobox-4.jpg" />
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title text-[15px] text-white b">Aero Box</h2>
                  <p className='text-white'>09:30 am - 60 min</p>
                  <div className="card-actions float-right ">
                    <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Noe</button>
                    <div className='text-white text-[12px] ml-[40px]'>
                      <p>5 Lugares</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]">
              <div className='flex'>
                <div className="avatar float-left h-[80px] mt-[25px]">
                  <div className="w-24 rounded-full">
                    <img src="https://www.musculacion.net/biceps-triceps-a-muerte.png" />
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title text-[15px] text-white b">Musculacion</h2>
                  <p className='text-white'>09:30 am - 60 min</p>
                  <div className="card-actions float-right ">
                    <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Maria</button>
                    <div className='text-white text-[12px] ml-[40px]'>
                      <p>5 Lugares</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]">
              <div className='flex'>
                <div className="avatar float-left h-[80px] mt-[25px]">
                  <div className="w-24 rounded-full">
                    <img src="https://contenidos.imq.es/hubfs/Imported_Blog_Media/crossfit-entrenamiento-1.jpg" />
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title text-[15px] text-white b">CROSSFIT</h2>
                  <p className='text-white'>09:30 am - 60 min</p>
                  <div className="card-actions float-right ">
                    <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Carla</button>
                    <div className='text-white text-[12px] ml-[40px]'>
                      <p>5 Lugares</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]">
              <div className='flex'>
                <div className="avatar float-left h-[80px] mt-[25px]">
                  <div className="w-24 rounded-full">
                    <img src="https://pymstatic.com/6843/conversions/spinning-wide.jpg" />
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title text-[15px] text-white b">Spinning</h2>
                  <p className='text-white'>09:30 am - 60 min</p>
                  <div className="card-actions float-right ">
                    <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Carla</button>
                    <div className='text-white text-[12px] ml-[40px]'>
                      <p>5 Lugares</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>


        </div>





      </div>

    </div>
  );
};

export default GroupClasses

/*

import React from 'react'
import Sidebar from '../../pages/Home/Components/Sidebar'
import logoConNombre from "../../img/logoConNombre.png"

//https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/yoga-regla.jpg.webp?itok=PNVZueQF

const GroupClasses = () => {
  return (
    <div className='flex '>
        <div >
            <Sidebar/>
        </div>

        <div>
             <div>
                 <img src={logoConNombre} alt="" className='w-[200px] mt-[40px]  ml-[800px]'/>
             </div>

          
             <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Mañana</button>
             <div className='flex ml-[300px] mt-[50px]'>
              
              <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]"> 
                 <div className='flex'>
                    <div className="avatar float-left h-[80px] mt-[25px]">
                         <div className="w-24 rounded-full">
                             <img src="https://uvn-brightspot.s3.amazonaws.com/assets/vixes/imj/vivirsalud/L/Los-SI-y-NO-del-aerobox-4.jpg" />
                         </div>
                   </div>
                  <div className="card-body">
                    <h2 className="card-title text-[15px] text-white b">Aero Box</h2>
                    <p className='text-white'>09:30 am - 60 min</p>
                    <div className="card-actions float-right ">
                      <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Noe</button>
                      <div className='text-white text-[12px] ml-[40px]'>
                         <p>5 Lugares</p>
                      </div>
                      
                    </div>
                  </div>
              </div>
               </div>

               <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]"> 
                 <div className='flex'>
                    <div className="avatar float-left h-[80px] mt-[25px]">
                         <div className="w-24 rounded-full">
                             <img src="https://www.musculacion.net/biceps-triceps-a-muerte.png" />
                         </div>
                   </div>
                  <div className="card-body">
                    <h2 className="card-title text-[15px] text-white b">Musculacion</h2>
                    <p className='text-white'>09:30 am - 60 min</p>
                    <div className="card-actions float-right ">
                      <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Maria</button>
                      <div className='text-white text-[12px] ml-[40px]'>
                         <p>5 Lugares</p>
                      </div>
                      
                    </div>
                  </div>
              </div>
               </div>

               <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]"> 
                 <div className='flex'>
                    <div className="avatar float-left h-[80px] mt-[25px]">
                         <div className="w-24 rounded-full">
                             <img src="https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/yoga-regla.jpg.webp?itok=PNVZueQF" />
                         </div>
                   </div>
                  <div className="card-body">
                    <h2 className="card-title text-[15px] text-white b">YOGA</h2>
                    <p className='text-white'>09:30 am - 60 min</p>
                    <div className="card-actions float-right ">
                      <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Carla</button>
                      <div className='text-white text-[12px] ml-[40px]'>
                         <p>5 Lugares</p>
                      </div>
                      
                    </div>
                  </div>
              </div>
               </div>
            
             </div>

             <div className='flex  ml-[300px]'>
              
             <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]"> 
                 <div className='flex'>
                    <div className="avatar float-left h-[80px] mt-[25px]">
                         <div className="w-24 rounded-full">
                             <img src="https://static.abc.es/media/bienestar/2021/04/23/michelle-lewin-kZ5E--1200x630@abc.jpg" />
                         </div>
                   </div>
                  <div className="card-body">
                    <h2 className="card-title text-[15px] text-white b">Zumba</h2>
                    <p className='text-white'>09:30 am - 60 min</p>
                    <div className="card-actions float-right ">
                      <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Noe</button>
                      <div className='text-white text-[12px] ml-[40px]'>
                         <p>5 Lugares</p>
                      </div>
                      
                    </div>
                  </div>
              </div>
               </div>

               <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]"> 
                 <div className='flex'>
                    <div className="avatar float-left h-[80px] mt-[25px]">
                         <div className="w-24 rounded-full">
                             <img src="https://uvn-brightspot.s3.amazonaws.com/assets/vixes/imj/vivirsalud/L/Los-SI-y-NO-del-aerobox-4.jpg" />
                         </div>
                   </div>
                  <div className="card-body">
                    <h2 className="card-title text-[15px] text-white b">Aero Box</h2>
                    <p className='text-white'>09:30 am - 60 min</p>
                    <div className="card-actions float-right ">
                      <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Juan</button>
                      <div className='text-white text-[12px] ml-[40px]'>
                         <p>5 Lugares</p>
                      </div>
                      
                    </div>
                  </div>
              </div>
               </div>

                <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]"> 
                 <div className='flex'>
                    <div className="avatar float-left h-[80px] mt-[25px]">
                         <div className="w-24 rounded-full">
                             <img src="https://www.musculacion.net/biceps-triceps-a-muerte.png" />
                         </div>
                   </div>
                  <div className="card-body">
                    <h2 className="card-title text-[15px] text-white b">Musculacion</h2>
                    <p className='text-white'>09:30 am - 60 min</p>
                    <div className="card-actions float-right ">
                      <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Maria</button>
                      <div className='text-white text-[12px] ml-[40px]'>
                         <p>5 Lugares</p>
                      </div>
                      
                    </div>
                  </div>
              </div>
               </div>
            
             </div>

             <div className='flex  ml-[300px]'>
              
             <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]"> 
                 <div className='flex'>
                    <div className="avatar float-left h-[80px] mt-[25px]">
                         <div className="w-24 rounded-full">
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjNifxTwpPWX-kXU07w0oVqQReWdktOiaNfw&usqp=CAU" />
                         </div>
                   </div>
                  <div className="card-body">
                    <h2 className="card-title text-[15px] text-white b">Spinning</h2>
                    <p className='text-white'>09:30 am - 60 min</p>
                    <div className="card-actions float-right ">
                      <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Ale</button>
                      <div className='text-white text-[12px] ml-[40px]'>
                         <p>5 Lugares</p>
                      </div>
                      
                    </div>
                  </div>
              </div>
               </div>

               <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]"> 
                 <div className='flex'>
                    <div className="avatar float-left h-[80px] mt-[25px]">
                         <div className="w-24 rounded-full">
                             <img src="https://static.abc.es/media/bienestar/2021/04/23/michelle-lewin-kZ5E--1200x630@abc.jpg" />
                         </div>
                   </div>
                  <div className="card-body">
                    <h2 className="card-title text-[15px] text-white b">Zumba</h2>
                    <p className='text-white'>09:30 am - 60 min</p>
                    <div className="card-actions float-right ">
                      <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Juan</button>
                      <div className='text-white text-[12px] ml-[40px]'>
                         <p>5 Lugares</p>
                      </div>
                      
                    </div>
                  </div>
              </div>
               </div>

               <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]"> 
                 <div className='flex'>
                    <div className="avatar float-left h-[80px] mt-[25px]">
                         <div className="w-24 rounded-full">
                             <img src="https://www.musculacion.net/biceps-triceps-a-muerte.png" />
                         </div>
                   </div>
                  <div className="card-body">
                    <h2 className="card-title text-[15px] text-white b">Musculacion</h2>
                    <p className='text-white'>09:30 am - 60 min</p>
                    <div className="card-actions float-right ">
                      <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Noe</button>
                      <div className='text-white text-[12px] ml-[40px]'>
                         <p>5 Lugares</p>
                      </div>
                      
                    </div>
                  </div>
              </div>
               </div>
            
             </div>

             <div className='flex  ml-[300px]'>
              
             <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]"> 
                 <div className='flex'>
                    <div className="avatar float-left h-[80px] mt-[25px]">
                         <div className="w-24 rounded-full">
                             <img src="https://static.abc.es/media/bienestar/2021/04/23/michelle-lewin-kZ5E--1200x630@abc.jpg" />
                         </div>
                   </div>
                  <div className="card-body">
                    <h2 className="card-title text-[15px] text-white b">Zumba</h2>
                    <p className='text-white'>09:30 am - 60 min</p>
                    <div className="card-actions float-right ">
                      <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Ale</button>
                      <div className='text-white text-[12px] ml-[40px]'>
                         <p>5 Lugares</p>
                      </div>
                      
                    </div>
                  </div>
              </div>
               </div>

               <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]"> 
                 <div className='flex'>
                    <div className="avatar float-left h-[80px] mt-[25px]">
                         <div className="w-24 rounded-full">
                             <img src="https://uvn-brightspot.s3.amazonaws.com/assets/vixes/imj/vivirsalud/L/Los-SI-y-NO-del-aerobox-4.jpg" />
                         </div>
                   </div>
                  <div className="card-body">
                    <h2 className="card-title text-[15px] text-white b">Aero Box</h2>
                    <p className='text-white'>09:30 am - 60 min</p>
                    <div className="card-actions float-right ">
                      <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Juan</button>
                      <div className='text-white text-[12px] ml-[40px]'>
                         <p>5 Lugares</p>
                      </div>
                      
                    </div>
                  </div>
              </div>
               </div>

               <div className="card w-96  bg-[#343A40]  shadow-xl h-[140px]  m-[9px]"> 
                 <div className='flex'>
                    <div className="avatar float-left h-[80px] mt-[25px]">
                         <div className="w-24 rounded-full">
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjNifxTwpPWX-kXU07w0oVqQReWdktOiaNfw&usqp=CAU" />
                         </div>
                   </div>
                  <div className="card-body">
                    <h2 className="card-title text-[15px] text-white b">Spinning</h2>
                    <p className='text-white'>09:30 am - 60 min</p>
                    <div className="card-actions float-right ">
                      <button className=" btn-primary text-[13px] w-[120px] h-[20px] rounded-lg">Profe Ro</button>
                      <div className='text-white text-[12px] ml-[40px]'>
                         <p>5 Lugares</p>
                      </div>
                      
                    </div>
                  </div>
              </div>
               </div>
            
             </div>
        </div>

    </div>
  )
}

export default GroupClasses
*/