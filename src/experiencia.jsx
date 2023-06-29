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
            <div className="divbox3">
                <div class="card3">
                    <img className='p1' src="/src/assets/laravel.webp" alt="Avatar" />
                    <div class="container1">
                        <h4><b>Laravel</b></h4>
                        <p><b>App de escuela deportiva</b></p>
                    </div>
                </div>
                <div class="card3">
                    <img className='p1' src="/src/assets/DSpace.jpg" alt="Avatar" />
                    <div class="container1">
                        <h4><b>Dspace</b></h4>
                        <p><b>Repositorio para trabajos de grado</b></p>
                    </div>
                </div>
                <div class="card3">
                    <img className='p1' src="/src/assets/greenfoot.jpg" alt="Avatar" />
                    <div class="container1">
                        <h4><b>Greenfoot</b></h4>
                        <p><b>Videojuego<br />Ping-Pong</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}