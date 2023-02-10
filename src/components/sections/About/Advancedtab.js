import React from 'react'
import { Tab, Nav } from 'react-bootstrap'

import img from '../../../assets/img/tab-block.jpg'

const missiontab = [
    { icon: 'fas fa-check', text: 'Misión: Ser junto a su empresa el soporte necesario en las metas conjuntas en el área de regulación, garantizando el crecimiento y un servicio excepcional a nuestros clientes.' },
    { icon: 'fas fa-check', text: 'Visión:  Mantenernos entre las empresas líder en el área de regulación farmacéutica y alimentaria con la excelencia en los servicios requeridos que siempre nos ha caracterizado, contribuyendo de manera continua a la capacitación y el bienestar de nuestro equipo de trabajo para seguir ofreciendo un servicio de vanguardia y calidad.' },
]
const historytab = [
    // { icon: 'fas fa-check', text: 'There are many variations of passages of LoreIpsum available, but the majority have suffered' },
    // { icon: 'fas fa-check', text: 'There are many variations of passages of LoreIpsum available, but the majority have suffered' },
    // { icon: 'fas fa-check', text: 'There are many variations of passages of LoreIpsum available, but the majority have suffered' },
]
const businessgoalstab = [
    { icon: 'fas fa-check', text: 'There are many variations of passages of LoreIpsum available, but the majority have suffered' },
    { icon: 'fas fa-check', text: 'There are many variations of passages of LoreIpsum available, but the majority have suffered' },
    { icon: 'fas fa-check', text: 'There are many variations of passages of LoreIpsum available, but the majority have suffered' },
]



function Advancedtab(props) {

    return (
        <section className="advanced-tab section-gap">
            <div className="container">
                {/* Tabs Buttons */}
                <div className="tab-buttons">
                    <Tab.Container defaultActiveKey="mission">
                        <Nav variant="tabs">
                            <Nav.Item>
                                <Nav.Link eventKey="mission">Nuestra Misión &amp;  Visión</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="history">Historia</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="businessgoals">Nuestras Metas</Nav.Link>
                            </Nav.Item>

                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="mission">
                                <div className="tab-text-block left-image with-left-circle">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-lg-6 col-md-10">
                                            <div className="block-image">
                                                <img src={img} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-10">
                                            <div className="block-text">
                                                <h2 className="title">Misióy y Visión</h2>
                                                <p>
                                                   
                                                    </p>
                                                <ul>
                                                    {missiontab.map((item, i) => (
                                                        <li key={i}>
                                                            <i className={item.icon} />
                                                            {item.text}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="history">
                                <div className="tab-text-block right-image with-right-circle">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-lg-6 col-md-10 order-2 order-lg-1">
                                            <div className="block-text">
                                                <h2 className="title">Nuestra Historia</h2>
                                                <p>
                                                RT Salud se constituye como empresa en el año 2015, con la iniciativa de dar  soporte técnico a diferentes empresas y nuevos emprendedores que deseaban formalizar o crear nichos de trabajo frente a entidades públicas y privadas del Estado Peruano.
                                                    </p>
                                                <ul>
                                                    {historytab.map((item, i) => (
                                                        <li key={i}>
                                                            <i className={item.icon} />
                                                            {item.text}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-10 order-1 order-lg-2">
                                            <div className="block-image">
                                                <img src={img} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="businessgoals">
                                <div className="tab-text-block left-image with-left-circle">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-lg-6 col-md-10">
                                            <div className="block-image">
                                                <img src={img} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-10">
                                            <div className="block-text">
                                                <h2 className="title">Nuestras Metas</h2>
                                                <p>
                                                    Sedut perspiciatis unde omnis iste natus error sit voluptat em accusantium
                                                    doloremque laudantium, totam raperiaeaque ipsa quae ab illo inventore
                                                    veritatis et quasi
                                                    </p>
                                                <ul>
                                                    {businessgoalstab.map((item, i) => (
                                                        <li key={i}>
                                                            <i className={item.icon} />
                                                            {item.text}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>

                        </Tab.Content>
                    </Tab.Container>
                </div>
            </div>
        </section>
    );
}
export default Advancedtab;