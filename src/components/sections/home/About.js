import React from 'react'
import { Link } from 'react-router-dom'

import illustration from '../../../assets/img/illustration/01.png'

function About(props) {
    return (
        <section className="about-section about-illustration-img section-gap">
            <div className="container">
                <div className="illustration-img">
                    <img src={illustration} alt="" />
                </div>
                <div className="row no-gutters justify-content-lg-end justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="about-text">
                            <div className="section-title left-border mb-40">
                                <span className="title-tag">Sobre Nosotros</span>
                                <h2 className="title">RT <br /> Salud </h2>
                            </div>
                            <p className="mb-25">
                            RT Salud es una compañía comprometida con sus clientes, para dar soluciones
                             y soporte a sus necesidades, a través de nuestros servicios en el área farmacéutica, cosmética y de alimentos.
                                </p>
                            {/* <p>
                            RT Salud se constituye como empresa en el año 2015, con la iniciativa
                            de dar  soporte técnico a diferentes empresas y nuevos emprendedores que deseaban formalizar o crear nichos de trabajo frente a entidades públicas y privadas del Estado Peruano. 
                                </p> */}
                            <ul className="about-list">
                                <li> <i className="far fa-check" /> Buenas Prácticas de Manufactura</li>
                                <li> <i className="far fa-check" /> Buenas Prácticas de Almacenamiento.</li>
                            </ul>
                            <Link to="/about" className="main-btn">Leer Más</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;