import React,{useState,useEffect} from 'react';

export default function Portfolio() {
    const [addAnimation,setAnimation] = useState(false);
    const [addAnimationProject,setAnimationProject] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            const windowOffsetTop = window.scrollY;
            if(windowOffsetTop>1850){
                setAnimation(true);
                setAnimationProject(true);
            }
        })
    }, [])
    return (
        <section className="portfolio" name="Portfolio">
            <div className="portfolio__container">
                <div className="portfolio__title">My Portfolio</div>
                <div className={`blankSpace ${addAnimation ? " animationUnderline" : ""}`}></div>
                <div className="portfolio__content">
                    <div className={`portfolio__item ${addAnimationProject ? " fadeInTop" : ""}`}>
                        <div className="portfolio__overlay">
                            <div className="project__name">Mercedes Homepage</div>
                            <div className="project__textArea">
                                <div className="project__text">Description: 
                                    <span className="project__span">A clone UI Mercedes Homepage with full responsive</span>
                                </div>
                                <div className="project__text">Teamsize: 
                                    <span className="project__span">3</span>
                                </div>
                                <div className="project__text">Technology: 
                                    <span className="project__span">HTML5, CSS3, Bootstrap4, Javascript, SASS/SCSS</span>
                                </div>
                            </div>
                            <a className="projectLink__btn" href="https://rinfroster.github.io/Project__Mercedes__FE56/">Link GitHub</a>
                        </div>
                        <img src={require("./../../Asset/img/project1.png").default} className="project__img" alt="project1" />
                    </div>
                    <div className={`portfolio__item ${addAnimationProject ? " fadeInTop" : ""}`}>
                        <div className="portfolio__overlay">
                            <div className="project__name">Udemy Homepage</div>
                            <div className="project__textArea">
                                <div className="project__text">Description: 
                                    <span className="project__span">A clone UI Udemy Homepage with full responsive</span>
                                </div>
                                <div className="project__text">Teamsize: 
                                    <span className="project__span">1</span>
                                </div>
                                <div className="project__text">Technology: 
                                    <span className="project__span">HTML5, CSS3, Bootstrap4, SASS/SCSS</span>
                                </div>
                            </div>
                            <a className="projectLink__btn" href="https://rinfroster.github.io/Udemy/">Link GitHub</a>
                        </div>
                        <img src={require("./../../Asset/img/project2.png").default} className="project__img" alt="project2" />
                    </div>
                    <div className={`portfolio__item ${addAnimationProject ? " fadeInTop" : ""}`}>
                        <div className="portfolio__overlay">
                            <div className="project__name">Tix Web</div>
                            <div className="project__textArea">
                                <div className="project__text">Description: 
                                    <span className="project__span">A clone Tix Website with full responsive</span>
                                </div>
                                <div className="project__text">Teamsize: 
                                    <span className="project__span">2</span>
                                </div>
                                <div className="project__text">Technology: 
                                    <span className="project__span">HTML5, CSS3, Bootstrap4, Javascript, SASS/SCSS, ReactJs, Redux, Redux-Thunk, react-scroll, react-paginate, react-countdown, react-hook-form, react-custom-scrollbars and react-slick</span>
                                </div>
                            </div>
                            <a className="projectLink__btn" href="https://github.com/RinFroster/Final_Project_Cinema">Link GitHub</a>
                        </div>
                        <img src={require("./../../Asset/img/project3.png").default} className="project__img" alt="project3" />
                    </div>
                    <div className={`portfolio__item ${addAnimationProject ? " fadeInTop" : ""}`}>
                        <div className="portfolio__overlay">
                            <div className="project__name">Housing Homepage</div>
                            <div className="project__textArea">
                                <div className="project__text">Description: 
                                    <span className="project__span">A clone UI Housing Homepage not responsive</span>
                                </div>
                                <div className="project__text">Teamsize: 
                                    <span className="project__span">1</span>
                                </div>
                                <div className="project__text">Technology: 
                                    <span className="project__span">HTML5, CSS3, Bootstrap4</span>
                                </div>
                            </div>
                            <a className="projectLink__btn" href="https://rinfroster.github.io/Housing_Web/">Link GitHub</a>
                        </div>
                        <img src={require("./../../Asset/img/project4.png").default} className="project__img" alt="project4" />
                    </div>
                </div>
            </div>
        </section>
    )
}
