import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './contacto.css'
import { Route, Routes, Link} from 'react-router-dom'

export const Contact = () => {
    return (
        <div className='divbox1'>
            <h1 className='tx1'>Contacto</h1>
            <div className="cont">
                <div className='fx'><img className='tel' src="/src/assets/telefono.png" alt="" /> <h5 className='tt'><b>Telefono:</b></h5></div>
                <h6 className='tt'>+57 310 7830288</h6>
                <div className='fx'><img className='tel' src="/src/assets/mail.png" alt="" /> <h5 className='tt'><b>Email:</b></h5></div>
                <h6 className='tt'>dylansan03.17@gmail.com</h6>
                <div className='fx'><img className='tel' src="/src/assets/verificar.png" alt="" /> <h5 className='tt'><b>Redes Sociales:</b></h5></div>
                <h6 className='tt'><a href="https://taplink.cc/santiisco_17" target='_blank'>Enlace</a></h6>
            </div>
        </div>
    )
}