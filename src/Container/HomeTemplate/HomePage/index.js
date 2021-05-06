import React,{useEffect,useState} from 'react';
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
    const [addBackToTopBtn,setBackToTopBtn] = useState(false);
    const openNav = () => {
        document.getElementsByClassName("navbarHome")[0].style.left = "0";
        document.getElementById("openBtn").style.display = "none";
    }
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            const windowOffsetTop = window.scrollY;
            if(windowOffsetTop>1000){
                setBackToTopBtn(true);
            }else{
                setBackToTopBtn(false);
            }
        })
    }, [])
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
                <a className={`btn-back-to-top ${addBackToTopBtn ? "show" : "hide"}`} href="#">
                    <img src={require("./../../../Asset/img/arrowup.png").default} alt="back to top button" />
                </a>
            </div>
            <button className="collapseBtn" id="openBtn" onClick={openNav}>
                <FontAwesomeIcon icon={faBars} className="collapseBar"/>
            </button>
        </div>
    )
}
