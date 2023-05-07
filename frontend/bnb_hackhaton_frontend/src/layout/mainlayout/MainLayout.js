import CustomNavbar from "../navbar/Navbar";
import React from "react";
import { Outlet, useNavigation } from 'react-router-dom';

function MainLayout(){

    return(
        <React.Fragment>
            <CustomNavbar/>
            <main>
                <Outlet/>
            </main>
        </React.Fragment>
        
    )
}
export default MainLayout;