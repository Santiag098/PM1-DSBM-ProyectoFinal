import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './experiencia.css'
import { Route, Routes, Link } from 'react-router-dom'

export const Xperience = () => {
    return (
        <div className="divbox1">
            <h1>Experiencia</h1>
            <div className="divbox4">
                <div class="card3">
                    <img className='p1' src="/src/assets/Laravel-logo.jpg" alt="Avatar" />
                    <div class="container1">
                        <h4><b>Laravel</b></h4>
                        <p><b>Sistema de información</b></p>
                    </div>
                </div>
                <div class="card3">
                    <img className='p1' src="/src/assets/DSpace.jpg" alt="Avatar" />
                    <div class="container1">
                        <h4><b>Dspace</b></h4>
                        <p><b>Repositorio</b></p>
                    </div>
                </div>
                <div class="card3">
                    <img className='p1' src="/src/assets/greenfoot.jpg" alt="Avatar" />
                    <div class="container1">
                        <h4><b>Greenfoot</b></h4>
                        <p><b>Videojuego<br />Ping-Pong</b></p>
                    </div>
                </div>
                <div class="card3">
                    <img className='p1' src="/src/assets/django.jpg" alt="Avatar" />
                    <div class="container1">
                        <h4><b>Django</b></h4>
                        <p><b>Sistema de información</b></p>
                    </div>
                </div>
                <div class="card3">
                    <img className='p1' src="/src/assets/react2.svg" alt="Avatar" />
                    <div class="container1">
                        <h4><b>React</b></h4>
                        <p><b>Aplicativos Web</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}