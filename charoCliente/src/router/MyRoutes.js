import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { NavBar } from '../components/layout/NavBar'
import { Home } from '../components/Home'
import { Footer } from '../components/layout/Footer'
import { Galería } from '../components/pages/Galería'
import { SobreMi } from '../components/pages/SobreMi'
import { Contacto } from '../components/pages/Contacto'

export const MyRoutes = () => {
    return (
        <BrowserRouter >
            <Header />
            <NavBar />
            <section className='content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/galeria' element={<Galería />} />
                    <Route path='/sobre-mi' element={<SobreMi />} />
                    <Route path='/contacto' element={<Contacto />} />


                </Routes>
            </section>
            <Footer />

        </BrowserRouter>
    )
}
