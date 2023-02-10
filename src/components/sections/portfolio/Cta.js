import React from 'react'
import { Link } from 'react-router-dom'

import ctaimg from '../../../assets/img/lines/16.png'

function Cta(props) {
    return (
        <section className="cta-aection">
            <div className="container">
                <div className="cta-wrap bg-img-c" style={{ backgroundImage: "url(" + ctaimg + ")" }}>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="cta-content text-center">
                                <div className="section-title both-border mb-30">
                                    <span className="title-tag">Obten un Presupuesto</span>
                                    <h2 className="title">Sientete libre de contactarnos para cualquier consultas</h2>
                                </div>
                                <Link to="/contact" className="main-btn main-btn-3">Iniciemos</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cta;