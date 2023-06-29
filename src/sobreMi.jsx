import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './sobreMi.css'
import { Route, Routes, Link} from 'react-router-dom'

export const SobreMi = () => {
    return (
        <div className='divbox1'>
            <h1>Sobre Mi</h1>
            
            <div className="rar">
            <img className='ok' src="/src/assets/klipartz.com.png" alt="" />
                <h3>Soy una persona humilde, trabajadora, <br />caracterizada por tener disposición <br />a nuevos aprendizajes, <br />buen trabajo en equipo, pensamiento lgico,<br />con capacidad de trabajar bajo presión.</h3>
            </div>
        </div>
    )
}