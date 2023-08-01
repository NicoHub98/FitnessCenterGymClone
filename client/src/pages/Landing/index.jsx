import {   Footer } from '../../componentes/index'
import { Section, Hero, Carrusel, Cards } from '../../componentes/index'
import AdminPage from '../../componentes/AdminPage'



const Landing = () => {

  return (

<div className='flex flex-col gap-32 bg-white'>

    <Section>
      <Hero />
    </Section>

    <Section>
      <Carrusel />
    </Section>

    <div className='flex flex-col text-center gap-10'>
        <h2 id="colaboradores" className='text-4xl text-black font-bold'>Colaboradores</h2>
      <Section>
        

        <Cards />
      </Section>
    </div>

    <Footer />

</div>
      

  )
}

export default Landing