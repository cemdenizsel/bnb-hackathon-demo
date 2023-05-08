import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '@particle-network/connect-react-ui/dist/index.css';
import { ConnectButton } from '@particle-network/connect-react-ui';
import { useConnectKit } from '@particle-network/connect-react-ui';


function CustomNavbar() {

    //use this in react component.
    const connectKit = useConnectKit();
    const userInfo = connectKit.particle.userInfo;
    console.log(userInfo);
  
    return (
        <Navbar bg="danger" className="navbar-dark navbar-expand-lg fixed-top bg- portfolio-navbar gradient">
            <div className="container"><a className="navbar-brand logo" href="#">Brand</a>
                <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarNav"><span
                    className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                     <ConnectButton />;
                    </ul>
                </div>
            </div>
        </Navbar>
    )
}

export default CustomNavbar;