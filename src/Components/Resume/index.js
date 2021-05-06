import React,{useState,useEffect} from 'react';

export default function Resume() {
    const [addAnimation,setAnimation] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            const windowOffsetTop = window.scrollY;
            if(windowOffsetTop>600){
                setAnimation(true);
            }
        })
    }, [])
    return (
        <section className="resume" name="Resume">
            <div className="resume__container">
                <div className="resume__title">Resume</div>
                <div className={`blankSpace ${addAnimation ? "animationUnderline" : ""}`}></div>
                <div className="resume__contentTitle">Education</div>
                <div className="resume__content">
                    <div className={`resume__item ${addAnimation ? "fadeInLeft" : ""}`}>
                        <div className="resume__itemContainer">
                            <div className="resume__schoolName">NGUYEN TRAI HIGHSCHOOL</div>
                            <div className="resume__schoolTime">September 2015 - 2019</div>
                            <div className="resume__subject">Grade: 
                                <span className="resume__text">Graduate 12/12</span>
                            </div>
                        </div>
                    </div>
                    <div className={`resume__item ${addAnimation ? "fadeInRight" : ""}`}>
                        <div className="resume__itemContainer">
                            <div className="resume__schoolName">CYBERSOFT - CYBERLEARN PROGRAMMING EDUCATION CENTER</div>
                            <div className="resume__schoolTime">August 2020 - Present</div>
                            <div className="resume__subject">Programming Course: 
                                <span className="resume__text">thinking in programming, problem-solving, Java language, OOP</span>
                            </div>
                            <div className="resume__subject">Front-End Programming Course: 
                                <span className="resume__text">basic knowledge of HTML5, CSS3, Bootstrap4, SASS/SCSS, 
                                Javascript(ES5/ES6), Git, Reactjs, React Hook, Router, Redux</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
