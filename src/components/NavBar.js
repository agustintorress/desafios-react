import React from 'react'
import "../apps/styles.css"
import { NavLink } from "react-router-dom"

const NavBar = ({ brand }) => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#000" }}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to='/'><img src={brand} alt="logo" width={200} /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link active text-uppercase" to="/">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active text-uppercase" to="/categoria/productos">Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active text-uppercase" to="/categoria/profesor">Profesor</NavLink>
                        </li>
                    </ul>
                    <ul className='navbar-nav lg-icons'>
                        <li><NavLink className='nav-link' to="/cart"><i className='bx bxs-cart'></i></NavLink></li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default NavBar