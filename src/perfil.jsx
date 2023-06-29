import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './perfil.css'
import { Route, Routes, Link } from 'react-router-dom'



export const Inicio = () => {
    return (
        <div className='divbox1'>
            <div className="divbox5">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/src/assets/1.png" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="/src/assets/2.png" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="/src/assets/3.png" class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}