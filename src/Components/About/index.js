import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState,useEffect} from 'react';

export default function About() {
    const [addAnimationTitle,setAnimationTitle] = useState(false)
    const [addAnimation,setAnimation] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            const windowOffsetTop = window.scrollY;
            if(windowOffsetTop>100){
                setAnimationTitle(true);
                setAnimation(true);
            }
        })
    }, [])
    return (
        <section className="about" name="About">
            <div className="about__container">
                <div className={`about__title`}>About Me</div>
                <div className={`blankSpace ${addAnimationTitle ? "animationUnderline" : ""}`}></div>
                <div className={`careerObjective ${addAnimation ? "fade" : ""}`}>
                    Career Objectives: <span>Improves and expand my abilities so that I can contribute more to the success of the company/team. Continue to learn new
                        skill and knowledge to become a better developer in the future.
                    </span>
                </div>
                <div className="about__content">
                    <div className="about__contentLeft">
                        <div className={`about__pic ${addAnimation ? "animationLeft" : ""}`}>
                            <img src={require("./../../Asset/img/test4.jpg").default} alt="about__profilePic"/>
                        </div>
                    </div>
                    <div className="about__contentRight">
                        <div className={`about__infoContainer ${addAnimation ? "animationRight" : ""}`}>
                            <p className="about__infoTitle">Fresher Front-End Developer</p>
                            <div className="about__info">
                                <FontAwesomeIcon icon={faChevronRight} className="about__infoIcon" />
                                Name: 
                                <span className="about__infoText">Truong Vi Hao</span>
                            </div>
                            <div className="about__info">
                                <FontAwesomeIcon icon={faChevronRight} className="about__infoIcon" />
                                Age: 
                                <span className="about__infoText">21</span>
                            </div>
                            <div className="about__info">
                                <FontAwesomeIcon icon={faChevronRight} className="about__infoIcon" />
                                Address: 
                                <span className="about__infoText">Trần Xuân Soạn, P.Tân Hưng, Q.7</span>
                            </div>
                            <div className="about__info">
                                <FontAwesomeIcon icon={faChevronRight} className="about__infoIcon" />
                                Email: 
                                <span className="about__infoText">truongvihao99@gmail.com</span>
                            </div>
                            <div className="about__info">
                                <FontAwesomeIcon icon={faChevronRight} className="about__infoIcon" />
                                Phone: 
                                <span className="about__infoText">0775387526</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
