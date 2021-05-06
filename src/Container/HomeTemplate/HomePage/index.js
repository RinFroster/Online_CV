import React from 'react';
import NavbarHome from "./../../../Components/NavbarHome";
import Introduce from "./../../../Components/Introduce";
import About from "./../../../Components/About";
import Resume from "./../../../Components/Resume";
import Skills from "./../../../Components/Skills";
import Portfolio from "./../../../Components/Portfolio";
import Contact from "./../../../Components/Contact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
    const openNav = () => {
        document.getElementsByClassName("navbarHome")[0].style.left = "0";
        document.getElementById("openBtn").style.display = "none";
    }
    return (
        <div className="main">
            <NavbarHome/>
            <div className="main__content">
                <Introduce/>
                <About/>
                <Resume/>
                <Skills/>
                <Portfolio/>
                <Contact/>
            </div>
            <button className="collapseBtn" id="openBtn" onClick={openNav}>
                <FontAwesomeIcon icon={faBars} className="collapseBar"/>
            </button>
        </div>
    )
}
