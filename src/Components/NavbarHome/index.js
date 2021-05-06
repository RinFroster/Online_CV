import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faEnvelope, faFile, faHome, faServer, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { FaCodepen, FaFacebook, FaGithub, FaStackOverflow } from 'react-icons/fa';
import { IconContext } from "react-icons";

export default function NavbarHome() {
    const closeNav = () => {
        document.getElementsByClassName("navbarHome")[0].style.left = "-30rem";
        document.getElementById("openBtn").style.display = "block";
    }
    return (
        <header className="navbarHome" id="navbar">
            <FontAwesomeIcon icon={faTimes} className="closeBtn" onClick={closeNav}/>
            <div className="navbarHome__container">
                <div className="navbarHome__top">
                    <div className="navbarHome__pic">
                        <img src={require("./../../Asset/img/test4.jpg").default} alt="profilePic"/>
                    </div>
                    <div className="navbarHome__name">Trương Vĩ Hào</div>
                    <div className="navbarHome__socialNetwork">
                        <IconContext.Provider value={{ className: 'react__icons' }}>
                            <a href="https://www.facebook.com/hao.truong.77582359/"><FaFacebook/></a>
                            <a href="https://github.com/RinFroster"><FaGithub/></a>
                            <a href="https://stackoverflow.com/users/15588681/rin-froster"></a><FaStackOverflow/>
                            <a href="https://codepen.io/rinfroster"></a><FaCodepen/>
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="navbarHome__main">
                    <div className="nav navbarHome__nav">
                        <ul className="navbar-menu navbarHome__menu">
                            <li className="nav-item navbarHome__item">
                                <Link to="Introduce" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link navbarHome__link">
                                    <FontAwesomeIcon icon={faHome} className="navbarHome__icon"/>
                                    <span className="nav__text">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item navbarHome__item">
                                <Link to="About" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link navbarHome__link">
                                    <FontAwesomeIcon icon={faUser} className="navbarHome__icon"/>
                                    <span className="nav__text">About</span>
                                </Link>
                            </li>
                            <li className="nav-item navbarHome__item">
                                <Link to="Resume" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link navbarHome__link">
                                    <FontAwesomeIcon icon={faFile} className="navbarHome__icon" />
                                    <span className="nav__text">Resume</span>
                                </Link>
                            </li>
                            <li className="nav-item navbarHome__item">
                                <Link to="Skills" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link navbarHome__link">
                                    <FontAwesomeIcon icon={faBook} className="navbarHome__icon" />
                                    <span className="nav__text">Skills</span>
                                </Link>
                            </li>
                            <li className="nav-item navbarHome__item">
                                <Link to="Portfolio" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link navbarHome__link">
                                <FontAwesomeIcon icon={faServer} className="navbarHome__icon" />
                                    <span className="nav__text">Portfolio</span>
                                </Link>
                            </li>
                            <li className="nav-item navbarHome__item">
                                <Link to="Contact" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link navbarHome__link">
                                <FontAwesomeIcon icon={faEnvelope} className="navbarHome__icon" />
                                    <span className="nav__text">Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbarHome__bottom"></div>
            </div>
        </header>
    )
}
