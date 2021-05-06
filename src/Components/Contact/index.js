import React,{useState,useEffect} from 'react';
import { FaEnvelope, FaFacebook, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { IconContext } from "react-icons";

export default function Contact() {
    const [addAnimation,setAnimation] = useState(false);
    const [addAnimationContact,setAnimationContact] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            const windowOffsetTop = window.scrollY;
            if(windowOffsetTop>1850){
                setAnimation(true);
                setAnimationContact(true);
            }
        })
    }, [])
    return (
        <section className="contact" name="Contact">
            <div className="contact__container">
                <div className="contact__title">Contact</div>
                <div className={`blankSpace ${addAnimation ? " animationUnderline" : ""}`}></div>
                <p className="contact__section">
                    Thank you for spend your time visiting my page. Please feel free to message me and hope that we can have a chance to work together in the future
                </p>
                <div className="contact__content">
                    <div className={`contact__contentRight ${addAnimationContact ? "fadeInTop" : ""}`}>
                        <div className="contact__infoRow">
                            <IconContext.Provider value={{ className: 'contact__infoIcon' }}>
                                <a href="https://www.facebook.com/hao.truong.77582359/"><FaMapMarkerAlt/></a>
                            </IconContext.Provider>
                            <div className="contact__infoTitle">Location: 
                                <a className="contact__info" href="https://www.google.com/maps/place/Trần+Xuân+Soạn,+Quận+7,+Thành+phố+Hồ+Chí+Minh,+Việt+Nam/@10.751744,106.6958236,17z/data=!3m1!4b1!4m5!3m4!1s0x31752f706ac823e1:0x586a60ab71ebb338!8m2!3d10.7517387!4d106.6980177">Trần Xuân Soạn, P.Tân Hưng, Q.7, TP.HCM</a>
                            </div>
                        </div>
                        <div className="contact__infoRow">
                            <IconContext.Provider value={{ className: 'contact__infoIcon' }}>
                                <a href="https://www.facebook.com/hao.truong.77582359/"><FaPhone/></a>
                            </IconContext.Provider>
                            <div className="contact__infoTitle">Phone: 
                                <span className="contact__info" href="#">077-538-7526</span>
                            </div>
                        </div>
                        <div className="contact__infoRow">
                            <IconContext.Provider value={{ className: 'contact__infoIcon' }}>
                                <a href="https://www.facebook.com/hao.truong.77582359/"><FaFacebook/></a>
                            </IconContext.Provider>
                            <div className="contact__infoTitle">Facebook: 
                                <a className="contact__info" href="https://www.facebook.com/hao.truong.77582359/">Trương Vĩ Hào</a>
                            </div>
                        </div>
                        <div className="contact__infoRow">
                            <IconContext.Provider value={{ className: 'contact__infoIcon' }}>
                                <a href="https://www.facebook.com/hao.truong.77582359/"><FaEnvelope/></a>
                            </IconContext.Provider>
                            <div className="contact__infoTitle">Email: 
                                <a className="contact__info" href="#">truongvihao99@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className={`contact__contentLeft ${addAnimationContact ? "fadeInTop" : ""}`}>
                        <form action="">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name" className="inputTitle">Your Name</label>
                                    <input type="text" name="name" className="form-control" id="name" required></input>
                                    <span></span>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email" className="inputTitle">Your Email</label>
                                    <input type="email" name="email" className="form-control" id="email" required></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject" className="inputTitle">Subject</label>
                                <input type="text" className="form-control" name="subject" id="subject"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="inputTitle">Message</label>
                                <input type="text" className="form-control" name="message" id="message"></input>
                            </div>
                            <button className="btn btn-secondary" type="submit" id="send">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
