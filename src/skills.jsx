import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './skills.css'
import { Route, Routes, Link } from 'react-router-dom'

export const Atrib = () => {
    return (
        <div className='divbox1'>
            <h1>Skills</h1>
            <div className="divbox3">
                <div class="card2">
                    <img className='p' src="/src/assets/lenguajeC.webp" alt="Avatar" />
                    <div class="container">
                        <h4><b>C</b></h4>
                        <div class="barra-progreso">
                            <div class="progreso"></div>
                        </div>
                    </div>
                </div>
                <div class="card2">
                    <img className='p' src="/src/assets/python.jpg" alt="Avatar" />
                    <div class="container">
                        <h4><b>Python</b></h4>
                        <div class="barra-progreso1">
                            <div class="progreso1"></div>
                        </div>
                    </div>
                </div>
                <div class="card2">
                    <img className='p' src="/src/assets/java.jpg" alt="Avatar" />
                    <div class="container">
                        <h4><b>Java</b></h4>
                        <div class="barra-progreso2">
                            <div class="progreso2"></div>
                        </div>
                    </div>
                </div>
                <div class="card2">
                    <img className='p' src="/src/assets/html5.jpg" alt="Avatar" />
                    <div class="container">
                        <h4><b>HTML</b></h4>
                        <div class="barra-progreso3">
                            <div class="progreso3"></div>
                        </div>
                    </div>
                </div>
                <div class="card2">
                    <img className='p' src="/src/assets/css.jpg" alt="Avatar" />
                    <div class="container">
                        <h4><b>CSS</b></h4>
                        <div class="barra-progreso4">
                            <div class="progreso4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}