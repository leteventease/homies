import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './style/Navbar.css'

const Navbar = () => {
    let path = useLocation()
    let x = path.pathname.startsWith("/adminportal")

    return (
        <div className="navbar">
            {x ? (
                <div className="nav-container">
                    <NavLink to="/adminportal/home" className="nav-link">HOME</NavLink>
                    <NavLink to="/adminportal/about" className="nav-link">ABOUT</NavLink>
                    <NavLink to="/adminportal/books" className="nav-link">BOOKS</NavLink>
                    <NavLink to="/adminportal/users" className="nav-link">USERS</NavLink>
                    <NavLink to="/adminportal/adduser" className="nav-link">ADD USERS</NavLink>
                    <NavLink to="/adminportal/addbooks" className="nav-link">ADD BOOKS</NavLink>
                    <NavLink to="/" className="nav-link logout">LOGOUT</NavLink>
                </div> 
            ) : (
                <div className="nav-container">
                    <NavLink to="/userportal/home" className="nav-link">HOME</NavLink>
                    <NavLink to="/userportal/about" className="nav-link">ABOUT</NavLink>
                    <NavLink to="/userportal/books" className="nav-link">BOOKS</NavLink>
                    <NavLink to="/userportal/cart" className="nav-link">CART</NavLink>
                    <NavLink to="/" className="nav-link logout">LOGOUT</NavLink>
                </div>
            )}
        </div>
    )
}

export default Navbar