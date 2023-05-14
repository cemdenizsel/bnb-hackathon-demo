import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '@particle-network/connect-react-ui/dist/index.css';
import { ConnectButton } from '@particle-network/connect-react-ui';
import { useAccount } from '@particle-network/connect-react-ui';


function CustomNavbar() {

    //use this in react component.
    const account = useAccount();
    if (account) {
        console.log(account);   
    }  
  
    return (
        <Navbar bg="danger" className="navbar-dark navbar-expand-lg fixed-top bg- portfolio-navbar gradient">
            <div className="container"><a className="navbar-brand logo" href="#">SolTeam</a>
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