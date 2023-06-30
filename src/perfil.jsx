import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './perfil.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes, Link } from 'react-router-dom'



export const Inicio = () => {
    return (
        <div className='divbox1'>
            <h1>Perfil</h1>
            <div className="divbox5">
                <div className="img1">
                    <img className='i1' src="/src/assets/1.png" alt="1" />
                </div>
                <div className="img2">
                    <img className='i1' src="/src/assets/2.png" alt="2" />
                </div>
                <div className="img3">
                    <img className='i1' src="/src/assets/3.png" alt="3" />
                </div>
            </div>
        </div>
    )
}