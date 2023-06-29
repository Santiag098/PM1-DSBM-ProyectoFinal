import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './perfil.css'
import { Route, Routes, Link} from 'react-router-dom'



export const Inicio = () => {
    return (
        <div className='divbox1'>
            <h3 className='tx1'>Perfil Personal</h3>
            <p>Soy Tecnólogo en Gestión de Redes y Sistemas Teleinformáticos del Instituto Superior de Educación Rural (ISER).</p>
        </div>
    )
}