import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../../assets/img/logo-2.png'
import shape1 from '../../assets/img/lines/01.png'
import shape2 from '../../assets/img/lines/02.png'

import img1 from '../../assets/img/instagram/01.jpg'
import img2 from '../../assets/img/instagram/02.jpg'
import img3 from '../../assets/img/instagram/03.jpg'
import img4 from '../../assets/img/instagram/04.jpg'
import img5 from '../../assets/img/instagram/05.jpg'
import img6 from '../../assets/img/instagram/06.jpg'


const instapost = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
]
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="footer-widget">
                        <div className="row">
                            <div className="col-lg-4 col-sm-5 order-1">
                                <div className="widget site-info-widget">
                                    <div className="footer-logo">
                                        <img src={logo} alt="" />
                                    </div>
                                    <p>RT Salud es una compañía comprometida con sus clientes</p>
                                    <ul className="social-links">
                                        <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link to="#"><i className="fab fa-linkedin" /></Link></li>
                                        <li><Link to="#"><i className="fab fa-instagram" /></Link></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-8 col-sm-7 order-2">
                                <div className="widget newsletter-widget">
                                    <h4 className="widget-title">Subscribete al Boletín</h4>
                                    <div className="newsletter-form">
                                        <form action="#">
                                            <input type="email" placeholder="Ingresa tu Email" />
                                            <button type="submit" className="main-btn">¡Subscribete!</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 order-3">
                                <div className="widget nav-widget">
                                    <h4 className="widget-title">Enlaces Rapidos</h4>
                                    <ul>
                                        <li><Link to="#">Servicio 1</Link></li>
                                        <li><Link to="#">Servicio 2</Link></li>
                                        <li><Link to="#">Servicio 3</Link></li>
                                        <li><Link to="#">Servicio 4</Link></li>
                                        <li><Link to="#">Servicio 5</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5 order-lg-4 order-5">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="widget nav-widget">
                                            <h4 className="widget-title">Compañia</h4>
                                            <ul>
                                                <li><Link to="#">Sobre Nosotros</Link></li>
                                                <li><Link to="#">Nuestros Clientes</Link></li>
                                                <li><Link to="#">Testimonios</Link></li>
                                                <li><Link to="#">Servicios</Link></li>
                                                <li><Link to="#">Contacto</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="widget contact-widget">
                                            <h4 className="widget-title">Contáctanos</h4>
                                            <p>Sientete libre de escribirnos o llamarnos</p>
                                            <ul className="contact-infos">
                                                <li>
                                                    <Link to="tel:+0123456789">
                                                        <i className="far fa-phone" />
                                                        +51 926 669 034
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="mailto:info@rtsalud3.com">
                                                        <i className="far fa-envelope-open" />
                                                        info@rtsalud3.com
                                                    </Link>
                                                </li>
                                                <li> <i className="far fa-map-marker-alt" /> Lima, Peru</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 order-lg-5 order-4">
                                <div className="widget insta-feed-widget">
                                    <h4 className="widget-title">Siguenos en Instagram</h4>
                                    <div className="insta-images">
                                        {instapost.map((item, i) => (
                                            <div key={i} className="insta-img" style={{ backgroundImage: "url(" + item.img + ")" }}>
                                                <Link to="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <p className="copyright-text">
                            <span>Copy@ <Link to="#">RTSalud</Link>. 2023</span>
                            <span>All Right Reserved - Design By Untitled.pe</span>
                        </p>
                        <Link to="#" className="back-to-top" onClick={scrollToTop}><i className="far fa-angle-up" /></Link>
                    </div>
                </div>
                {/* Lines */}
                <img src={shape1} alt="line" className="line-one" />
                <img src={shape2} alt="line" className="line-two" />
            </footer>
        );
    }
}

export default Footer;