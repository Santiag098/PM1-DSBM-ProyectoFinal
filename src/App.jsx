import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './perfil.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes, Link} from 'react-router-dom'
import { Inicio } from './perfil'
import { Study } from './estudios'
import { Atrib } from './skills'
import { SobreMi } from './sobreMi'
import { Xperience } from './experiencia'
import { Contact } from './contacto'

function App() {

  return (
    <>
      <body>
        <header>
          <h1>HOJA DE VIDA</h1>
        </header>
        <section className='containerr'>
          <div className='cont1'>
              <img className='yo' src="/src/assets/fotoperfil.jpg" alt="miyo" />
          </div>
          <div className='cont2'>
              <h2>Dylan Santiago Bautista Mantilla <br /> <h5>Tecnólogo en Gestión de Redes y Sistemas Teleinformáticos</h5> </h2>
          </div>
        </section>
        <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
                <div class="container px-5">
                    <a class="navbar-brand" href="/about"><span class="fw-bolder text-dark"><b>Sobre mi</b></span></a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li class="nav-item"><Link to="/inicio" ><a className="nav-link" href="#"><b>Perfil</b></a></Link></li>
                            <li class="nav-item"><Link to="/estud" ><a className="nav-link" href="#"><b>Estudios</b></a></Link></li>
                            <li class="nav-item"><Link to="/skill" ><a className="nav-link" href="#"><b>Skills</b></a></Link></li>
                            <li class="nav-item"><Link to="/xp" ><a class="nav-link" href="#"><b>Experiencia</b></a></Link></li>
                            <li class="nav-item"><Link to="/cont"><a class="nav-link" href="#"><b>Contacto</b></a></Link></li>
                        </ul>
                    </div>
                    <div className="overlay"></div>
                </div>
        </nav>
          <Routes>
            <Route exact path="/inicio" element={<Inicio/>}/>
            <Route exact path='/estud' element={<Study/>}/>
            <Route exact path="/skill" element={<Atrib/>}/>
            <Route exact path="/about" element={<SobreMi/>}/>
            <Route exact path='/xp' element={<Xperience/>}/>
            <Route exact path="/cont" element={<Contact/>}/>
          </Routes>
        <footer className='foot'>
          <h6>Copyright &#169; 2023 Derechos reservados</h6>
        </footer>
      </body>
    
    </>
  )
}

export default App


