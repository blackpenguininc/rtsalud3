import React from 'react'
import { Link } from 'react-router-dom'
import VisibilitySensor from "react-visibility-sensor"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"

function Skills(props) {
    return (
        <section className="skill-section">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        {/* Skill Text Block */}
                        <div className="skill-text">
                            <div className="section-title mb-40 left-border">
                                <span className="title-tag">Mejores Caracteríticas</span>
                                <h2 className="title">Tenemos Más de 10<br />Años Experiencia</h2>
                            </div>
                            <p>
                                Sedut perspiciatis unde omnis iste natus error sit voluptat em accusantium doloremque
                                laudantium, totam raperiaeaque ipsa quae ab illo inventore veritatis et quasi
                            </p>
                            <p>
                                But I must explain to you how all this mistaken idenouncing pleasure and praising pain was
                                born and I will give completey account of the system, and expound the actual teachings of
                                the great explorer of the truth, the master-builder of human happiness one rejects,
                                dislikes, or avoid
                            </p>
                            <Link to="/about" className="main-btn">Leer Más</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10">
                        <div className="piechart-boxes">
                            <div className="chart-box">
                                <div className="chart">
                                    <VisibilitySensor>
                                        {({ isVisible }) => {
                                            const percentage = isVisible ? 25 : 0
                                            return (
                                                <CircularProgressbar
                                                    value={percentage}
                                                    styles={buildStyles({
                                                        strokeLinecap: 'butt',
                                                        pathColor: '#12a51e',
                                                        trailColor: '#e8e8e8',
                                                        backgroundColor: '#f5f5f5',
                                                    })}
                                                />
                                            )
                                        }}
                                    </VisibilitySensor>
                                    <i className="flaticon-presentation" />
                                </div>
                                <h4 className="title">Buenas Prácticas de Manufactura</h4>
                            </div>
                            <div className="chart-box">
                                <div className="chart">
                                    <VisibilitySensor>
                                        {({ isVisible }) => {
                                            const percentage = isVisible ? 40 : 0
                                            return (
                                                <CircularProgressbar
                                                    value={percentage}
                                                    styles={buildStyles({
                                                        strokeLinecap: 'butt',
                                                        pathColor: '#12a51e',
                                                        trailColor: '#e8e8e8',
                                                        backgroundColor: '#f5f5f5',
                                                    })}
                                                />
                                            )
                                        }}
                                    </VisibilitySensor>
                                    <i className="flaticon-money-bags" />
                                </div>
                                <h4 className="title">Buenas Prácticas de Almacenamiento.</h4>
                            </div>
                            <div className="chart-box">
                                <div className="chart">
                                    <VisibilitySensor>
                                        {({ isVisible }) => {
                                            const percentage = isVisible ? 75 : 0
                                            return (
                                                <CircularProgressbar
                                                    value={percentage}
                                                    styles={buildStyles({
                                                        strokeLinecap: 'butt',
                                                        pathColor: '#12a51e',
                                                        trailColor: '#e8e8e8',
                                                        backgroundColor: '#f5f5f5',
                                                    })}
                                                />
                                            )
                                        }}
                                    </VisibilitySensor>
                                    <i className="flaticon-invest" />
                                </div>
                                <h4 className="title">Registros de Marca y Nombres Comerciales.</h4>
                            </div>
                            <div className="chart-box">
                                <div className="chart">
                                    <VisibilitySensor>
                                        {({ isVisible }) => {
                                            const percentage = isVisible ? 80 : 0
                                            return (
                                                <CircularProgressbar
                                                    value={percentage}
                                                    styles={buildStyles({
                                                        strokeLinecap: 'butt',
                                                        pathColor: '#12a51e',
                                                        trailColor: '#e8e8e8',
                                                        backgroundColor: '#f5f5f5',
                                                    })}
                                                />
                                            )
                                        }}
                                    </VisibilitySensor>
                                    <i className="flaticon-connector" />
                                </div>
                                <h4 className="title">Implementación y cumplimiento en BPM, BPA, BPD.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;