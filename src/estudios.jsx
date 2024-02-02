import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './estudios.css'
import { Route, Routes, Link } from 'react-router-dom'

export const Study = () => {
    return (
        <div className='divbox1'>
            <h1 className='titulo'>Estudios</h1>
            <div className="divbox2">
                <div class="card text-dark border-dark  mb-3">
                    <div class="card-header"><b>Bachiller Académico</b></div>
                    <div class="card-body">
                        <h5 class="card-title ">Gimnasio Moderno Generación del Futuro</h5>
                        <p class="card-text">Culminado Diciembre, 2016.</p>
                    </div>
                </div>
                <div class="card text-dark border-dark mb-3">
                    <div class="card-header"><b>Tecnologia en Gestión de Redes y Sistemas Teleinformáticos</b></div>
                    <div class="card-body">
                        <h5 class="card-title">ISER</h5>
                        <p class="card-text">Culminado Diciembre, 2023.</p>
                    </div>
                </div>
                <div class="card text-dark border-dark mb-3">
                    <div class="card-header"><b>Scrum Foundation</b></div>
                    <div class="card-body">
                        <h5 class="card-title">CertiProf</h5>
                        <p class="card-text">Culminado Septiembre, 2022</p>
                    </div>
                </div>
            </div>
            <div className="divbox2">
                <div class="card text-dark border-dark mb-3">
                    <div class="card-header"><b>Empalme por fusión de fibra óptica e instalación de fibra</b></div>
                    <div class="card-body">
                        <h5 class="card-title">ISER</h5>
                        <p class="card-text">Culminado Julio, 2022</p>
                    </div>
                </div>
                <div class="card text-dark border-dark mb-3">
                    <div class="card-header"><b>Programa Ciudadano Digital</b></div>
                    <div class="card-body">
                        <h5 class="card-title">FUNTICS</h5>
                        <p class="card-text">Culminado Junio, 2019</p>
                    </div>
                </div>
                <div class="card text-dark border-dark mb-3">
                    <div class="card-header"><b>Caja de herramientas</b></div>
                    <div class="card-body">
                        <h5 class="card-title">Corporación de Educación Tecnológica Colsubsidio</h5>
                        <p class="card-text">Culminado Septiembre, 2019</p>
                    </div>
                </div>
            </div>
        </div>
    )
}