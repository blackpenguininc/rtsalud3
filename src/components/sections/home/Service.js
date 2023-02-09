import React from 'react'
import { Link } from 'react-router-dom'

import icon1 from '../../../assets/img/icons/01.png'
import icon2 from '../../../assets/img/icons/02.png'
import icon3 from '../../../assets/img/icons/03.png'
import lines from '../../../assets/img/lines/07.png'

const serviceblock = [
    { icon: icon1, title: 'Asuntos Regulatorios', text: 'Enfocada en el cumplimiento de las legislaciones dentro de las siguientes actividades... ' },
    { icon: icon2, title: 'Desarrollo y Gestión de Recursos Humanos', text: 'Esta unidad se encarga de capacitaciones en ...' },
    { icon: icon3, title: 'Asesoría y Consultoría', text: 'Esta unidad se encargará del asesoramiento requerido por usted en...' },
]

function Service(props) {
    return (
        <section className="service-section shape-style-one section-gap grey-bg">
            <div className="container">
                {/* Section Title */}
                <div className="section-title text-center both-border mb-30">
                    <span className="title-tag">Nuestros Servicios</span>
                    <h2 className="title">Se Concentrada en 4  <br /> Grandes Áreas</h2>
                </div>
                {/* Services Boxes */}
                <div className="row service-boxes justify-content-center">
                    {serviceblock.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-8 col-10 col-tiny-12 wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="400ms">
                            <div className="service-box text-center">
                                <div className="icon">
                                    <img src={item.icon} alt="Icon" />
                                </div>
                                <h3><Link to="/servicedetail">{item.title}</Link></h3>
                                <p>{item.text}</p>
                                <Link to="/servicedetail" className="service-link">
                                    <i className="fal fa-long-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="dots-line">
                <img src={lines} alt="" />
            </div>
        </section>
    );
}

export default Service;