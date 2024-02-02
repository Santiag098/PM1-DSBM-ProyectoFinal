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
            <div className="box">
                <h3>Busco oportunidades que me permitan continuar creciendo como desarrollador de software, enfrentando desafíos tecnológicos y contribuyendo al desarrollo de soluciones innovadoras. Aspiro a participar en proyectos que tengan un impacto significativo, tanto a nivel empresarial como en la vida de las personas.</h3>
            </div>
            </div>
        </div>
    )
}