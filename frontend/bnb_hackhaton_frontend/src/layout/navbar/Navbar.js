import Navbar from 'react-bootstrap/Navbar';
import {useState} from "react";
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

function CustomNavbar() {
    const [show, setShow] = useState(false);
    const callWallet = () =>{
            console.log("CEmo geldi");
    }
    const handleShow = () => setShow(true);
    return (
        <Navbar bg="danger" className="navbar-dark navbar-expand-lg fixed-top bg- portfolio-navbar gradient">
            <div className="container"><a className="navbar-brand logo" href="#">Brand</a>
                <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarNav"><span
                    className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <NavLink onClick={callWallet} className="nav-link active" to="/">
                            <li className="nav-item">Connect Wallet</li>
                        </NavLink>
                        
                    </ul>
                </div>
            </div>
        </Navbar>
    )
}

export default CustomNavbar;