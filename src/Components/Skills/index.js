import React,{useState,useEffect} from 'react';

export default function Skills() {
    const [addAnimation,setAnimation] = useState(false);
    const [addAnimationSkill,setAnimationSkill] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            const windowOffsetTop = window.scrollY;
            if(windowOffsetTop>1100){
                setAnimation(true);
                setAnimationSkill(true);
            }
        })
    }, [])
    
    return (
        <section className="skill" name="Skills">
            <div className="skill__container">
                <div className="skill__title">My Skills</div>
                <div className={`blankSpace ${addAnimation ? "animationUnderline" : ""}`}></div>
                {/* Desktop Skill Bars */}
                <div className="skill__content onDesktop">
                    <li className={`skill__bars ${addAnimationSkill ? "fadeInTop" : ""}`}>
                        <div className="skill__barTitle">HTML/CSS: </div>
                        <span className="skill__items">HTML5</span>
                        <span className="skill__items">CSS3</span>
                        <span className="skill__items">SASS/SCSS</span>
                        <span className="skill__items">Bootstrap4</span>
                        <span className="skill__items">Responsive</span>
                    </li>
                    <li className={`skill__bars ${addAnimationSkill ? "fadeInTop" : ""}`}>
                        <div className="skill__barTitle">Javascript: </div>
                        <span className="skill__items">ES5/ES6</span>
                        <span className="skill__items">RESTfull API</span>
                        <span className="skill__items">Axios</span>
                    </li>
                    <li className={`skill__bars ${addAnimationSkill ? "fadeInTop" : ""}`}>
                        <div className="skill__barTitle">ReactJs: </div>
                        <span className="skill__items">ReactJs Basic</span>
                        <span className="skill__items">Redux-Thunk</span>
                        <span className="skill__items">React Hooks</span>
                        <span className="skill__items">Router</span>
                    </li>
                    <li className={`skill__bars ${addAnimationSkill ? "fadeInTop" : ""}`}>
                        <div className="skill__barTitle">UI/UX: </div>
                        <span className="skill__items">Basis knowledge</span>
                    </li>
                    <li className={`skill__bars ${addAnimationSkill ? "fadeInTop" : ""}`}>
                        <div className="skill__barTitle">Git And GitHub: </div>
                        <span className="skill__items">Git Basic</span>
                        <span className="skill__items">GitHub Basic</span>
                    </li>
                    <li className={`skill__bars ${addAnimationSkill ? "fadeInTop" : ""}`}>
                        <div className="skill__barTitle">Knowledge Base: </div>
                        <span className="skill__items">OOP</span>
                        <span className="skill__items">Can read and understand Data Structure</span>
                        <span className="skill__items">Algorithms</span>
                    </li>
                    <li className={`skill__bars ${addAnimationSkill ? "fadeInTop" : ""}`}>
                        <div className="skill__barTitle">Soft Skills: </div>
                        <span className="skill__items">Teamwork</span>
                        <span className="skill__items">Self-research</span>
                        <span className="skill__items">Working under pressure</span>
                        <span className="skill__items">Patient</span>
                        <span className="skill__items">Responsible</span>
                    </li>
                    <li className={`skill__bars ${addAnimationSkill ? "fadeInTop" : ""}`}>
                        <div className="skill__barTitle">English: </div>
                        <span className="skill__items">Reading</span>
                        <span className="skill__items">Listening</span>
                        <span className="skill__items">Writing</span>
                        <span className="skill__items">Basic Communication</span>
                    </li>
                </div>
                
                {/* Mobile Skill Bars */}
                <div className="skill__content onMobile">
                    <div className={`skill__bars ${addAnimationSkill ? "fadeInTop" : ""}`} data-toggle="collapse" data-target="#skillItems1" aria-expanded="false" aria-controls="skillItems1">
                        <div className="collapse__header">
                            <div className="skill__barTitle">HTML/CSS </div>
                        </div>
                        <div className="collapse__body collapse" id="skillItems1">
                            <span className="skill__items">HTML5</span>
                            <span className="skill__items">CSS3</span>
                            <span className="skill__items">SASS/SCSS</span>
                            <span className="skill__items">Bootstrap4</span>
                            <span className="skill__items">Responsive</span>
                        </div>
                    </div>
                    <div className={`skill__bars ${addAnimationSkill ? "fadeInTop" : ""}`} data-toggle="collapse" data-target="#skillItems2" aria-expanded="false" aria-controls="skillItems2">
                        <div className="collapse__header">
                            <div className="skill__barTitle">Javascript </div>
                        </div>
                        <div className="collapse__body" id="skillItems2">
                            <span className="skill__items">ES5/ES6</span>
                            <span className="skill__items">RESTfull API</span>
                            <span className="skill__items">Axios</span>
                        </div>
                    </div>
                    <div className={`skill__bars ${addAnimationSkill ? "fadeInTop" : ""}`} data-toggle="collapse" data-target="#skillItems3" aria-expanded="false" aria-controls="skillItems3">
                        <div className="collapse__header">
                            <div className="skill__barTitle">ReactJs </div>
                        </div>
                        <div className="collapse__body" id="skillItems3">
                            <span className="skill__items">ReactJs Basic</span>
                            <span className="skill__items">Redux-Thunk</span>
                            <span className="skill__items">React Hooks</span>
                            <span className="skill__items">Router</span>
                        </div>
                    </div>
                    <div className={`skill__bars ${addAnimationSkill ? "fadeInTop" : ""}`} data-toggle="collapse" data-target="#skillItems4" aria-expanded="false" aria-controls="skillItems4">
                        <div className="collapse__header">
                            <div className="skill__barTitle">UI/UX </div>
                        </div>
                        <div className="collapse__body" id="skillItems4">
                            <span className="skill__items">Basis knowledge</span>
                        </div>
                    </div>
                    <div className={`skill__bars ${addAnimationSkill ? "fadeInTop" : ""}`} data-toggle="collapse" data-target="#skillItems5" aria-expanded="false" aria-controls="skillItems5">
                        <div className="collapse__header">
                            <div className="skill__barTitle">Git And GitHub </div>
                        </div>
                        <div className="collapse__body" id="skillItems5">
                            <span className="skill__items">Git Basic</span>
                            <span className="skill__items">GitHub Basic</span>
                        </div>
                    </div>
                    <div className={`skill__bars ${addAnimationSkill ? "fadeInTop" : ""}`} data-toggle="collapse" data-target="#skillItems6" aria-expanded="false" aria-controls="skillItems6">
                        <div className="collapse__header">
                            <div className="skill__barTitle">Knowledge Base </div>
                        </div>
                        <div className="collapse__body" id="skillItems6">
                            <span className="skill__items">OOP</span>
                            <span className="skill__items">Can read and understand Data Structure</span>
                            <span className="skill__items">Algorithms</span>
                        </div>
                    </div>
                    <div className={`skill__bars ${addAnimationSkill ? "fadeInTop" : ""}`} data-toggle="collapse" data-target="#skillItems7" aria-expanded="false" aria-controls="skillItems7">
                        <div className="collapse__header">
                            <div className="skill__barTitle">Soft Skills </div>
                        </div>
                        <div className="collapse__body" id="skillItems7">
                            <span className="skill__items">Teamwork</span>
                            <span className="skill__items">Self-research</span>
                            <span className="skill__items">Working under pressure</span>
                            <span className="skill__items">Patient</span>
                            <span className="skill__items">Responsible</span>
                        </div>
                    </div>
                    
                    <div className={`skill__bars ${addAnimationSkill ? "fadeInTop" : ""}`} data-toggle="collapse" data-target="#skillItems8" aria-expanded="false" aria-controls="skillItems8">
                        <div className="collapse__header">
                            <div className="skill__barTitle">English </div>
                        </div>
                        <div className="collapse__body" id="skillItems8">
                            <span className="skill__items">Reading</span>
                            <span className="skill__items">Listening</span>
                            <span className="skill__items">Writing</span>
                            <span className="skill__items">Basic Communication</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}