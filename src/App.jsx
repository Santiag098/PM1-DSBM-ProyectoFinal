import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './perfil.css'
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
              <img className='yo' src="/src/assets/yopack.jpg" alt="miyo" />
          </div>
          <div className='cont2'>
              <h2>Dylan Santiago Bautista Mantilla <br /> <h5>Tecnólogo en Gestión de Redes y Sistemas Teleinformáticos</h5> </h2>
          </div>
        </section>
        <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
                <div class="container px-5">
                    <a class="navbar-brand" href="index.html"><span class="fw-bolder text-dark"><Link to="/about">Sobre mi</Link></span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li class="nav-item"><Link to="/inicio" ><a className="nav-link" href="#"><b>Perfil</b></a></Link></li>
                            <li class="nav-item"><Link to="/estud" ><a className="nav-link" href="#"><b>Estudios</b></a></Link></li>
                            <li class="nav-item"><Link to="/skill" ><a className="nav-link" href="#"><b>Skills</b></a></Link></li>
                            <li class="nav-item"><Link to="/xp" ><a class="nav-link" href="#"><b>Experiencia</b></a></Link></li>
                            <li class="nav-item"><Link to="/cont"><a class="nav-link" href="contact.html"><b>Contacto</b></a></Link></li>
                        </ul>
                    </div>
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
          <h6>Copyright &#169; 2023 Santiago Bautista</h6>
        </footer>
      </body>
    
    </>
  )
}

export default App


