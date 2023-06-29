import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './perfil.css'
import { Route, Routes, Link} from 'react-router-dom'
import { Inicio } from './perfil'
import { Study } from './estudios'
import { Atrib } from './skills'



function App() {

  return (
    <>
      <body>
        <header>
          <h1>HOJA DE VIDA</h1>
        </header>
        <section className='containerr'>
          <div className='cont1'>
              <img src="/src/assets/yopack.jpg" alt="miyo" />
          </div>
          <div className='cont2'>
              <h2>Dylan Santiago Bautista Mantilla <br /> <h5>Tecnólogo en Gestión de Redes y Sistemas Teleinformáticos</h5> </h2>
          </div>
        </section>
        
        <footer>
          <h5>Derechos reservados</h5>
        </footer>
      </body>
    
    </>
  )
}

export default App


