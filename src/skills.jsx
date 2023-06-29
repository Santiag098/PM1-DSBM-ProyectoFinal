import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, Link} from 'react-router-dom'

export const Atrib = () => {
    return (
        <div className='divbox1'>
            <h3>Skills</h3>
            <p>Programacion en C</p>
            <p>Programacion en Java</p>
            <p>Programacion en Python</p>
            <p>Programacion web:</p>
            <p>Html, CSS, SCSS, Javacript</p>
        </div>
    )
}