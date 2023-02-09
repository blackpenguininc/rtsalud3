import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import illustration from '../../../assets/img/illustration/man-with-earth-02.png'

class Content extends Component {
    render() {

        return (
            <section className="contact-section contact-page section-gap-top">
                <div className="container">
                    <div className="contact-info">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="illustration-img text-center">
                                    <img src={illustration} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10 order-1 order-lg-2">
                                <div className="contact-info-content">
                                    <div className="section-title left-border mb-40">
                                        <span className="title-tag">Hablemos</span>
                                        <h2 className="title">¿Necesitas ayuda en <br />Consultoria?</h2>
                                    </div>
                                    <p>
                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                                        pain was
                                    </p>
                                    <ul>
                                        <li className="phone">
                                            <Link to="tel:+0123456789"><i className="far fa-phone" />+51 926 669 034</Link>
                                        </li>
                                        <li><i className="far fa-envelope-open" /><Link to="#">info@rtsalud3.com</Link></li>
                                        <li><i className="far fa-map-marker-alt" />Lima, Perú</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form grey-bg">
                        <div className="row no-gutters justify-content-center">
                            <div className="col-10">
                                <div className="section-title text-center mb-40">
                                    <h2 className="title">Escribenos</h2>
                                </div>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="input-group mb-30">
                                                <input type="text" placeholder="Nombre Completo" />
                                                <span className="icon"><i className="far fa-user-circle" /></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="input-group mb-30">
                                                <input type="email" placeholder="Email" />
                                                <span className="icon"><i className="far fa-envelope-open" /></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="input-group mb-30">
                                                <input type="text" placeholder="Celular" />
                                                <span className="icon"><i className="far fa-phone" /></span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-group textarea mb-30">
                                                <textarea placeholder="Escribe tu mensaje" defaultValue={""} />
                                                <span className="icon"><i className="far fa-pencil" /></span>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button type="submit" className="main-btn">Enviar Mensaje</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid container-1600">
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26248.132215544843!2d-77.0494168240398!3d-12.05671403551504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c108863d3f%3A0x8fe305ea2ef86a7a!2sMuseo%20de%20Arte%20de%20Lima!5e0!3m2!1sen!2spe!4v1675909005916!5m2!1sen!2spe" style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} ></iframe>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;