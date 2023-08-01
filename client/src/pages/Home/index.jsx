import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import {
  Bienes,
  BienesElementos,
  // BienesMaquinas,
  BienesMobiliario,
  ConstructionPage,
  SectionClients,
  SectionProvider,
  SectionStaff,
} from "../../componentes/index"


import Sidebar from './Components/Sidebar'
import Horarios from './Components/Horarios'
import Footer from './Components/Footer'
import { useEffect } from 'react'
import AdminPage from '../../componentes/AdminPage'
import GroupClasses from '../../componentes/GroupClasses'
import Gastos from '../../componentes/Gastos'
import NotFound from '../NotFound'


const HomePrincipal = () => {

  // const navigate = useNavigate();

  //let token = sessionStorage.getItem('userToken')

  /*useEffect(() => {
    !token && navigate('/') 
  }, [token, navigate])
*/
  return (

    <>
      {/*{token === "" 
    ? <Navigate to='/' />
    : */ }
      <>
        <div className="flex bg-pallete-white">
          <Sidebar />
          <Routes>

            <Route path='/admin' element={<AdminPage />} />
            <Route path='/bienes' element={<Bienes />} />
            <Route path='/bienes/maquinas' element={<ConstructionPage />} />
            <Route path='/bienes/elementos' element={<BienesElementos />} />
            <Route path='/bienes/mobiliario' element={<ConstructionPage />} />
            <Route path="/staff" element={<SectionStaff />} />
            <Route path="/clientes" element={<SectionClients />} />
            <Route path="/proveedores" element={<SectionProvider />} />
            <Route path='/horarios' element={<Horarios />} />
            <Route path='/clasesgrupales' element={<GroupClasses />} />
            <Route path='/gastos' element={<Gastos />} />

            <Route path='*' element={<NotFound />} />

          </Routes>
        </div>

        <Footer />
      </>
      {/* } */}
    </>
  )
}

export default HomePrincipal
