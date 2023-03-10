import React, { useState } from 'react'
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

const counterblock = [
    { icon: 'flaticon-graphic', count: '3568', title: 'Proyectos Completados' },
    { icon: 'flaticon-plan', count: '7859', title: 'clientes Satisfechos' },
    { icon: 'flaticon-target-1', count: '6352', title: 'Premios ' },
    { icon: 'flaticon-teamwork', count: '7856', title: 'Proyectos Completados' },
]

function Counter(props) {
    const [focus, setFocus] = useState(false)
    return (
        <section className="fact-section grey-bg">
            <div className="container">
                <div className="fact-boxes row justify-content-between align-items-center">
                    {counterblock.map((item, i) => (
                        <div key={i} className="col-lg-3 col-6">
                            <div className="fact-box text-center mb-40">
                                <div className="icon">
                                    <i className={item.icon} />
                                </div>
                                <CountUp start={focus ? 0 : null} end={parseInt(item.count)} duration={5} redraw={true}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span className="counter" ref={countUpRef} />
                                            <VisibilitySensor
                                                onChange={isVisible => {
                                                    if (isVisible) {
                                                        setFocus(true)
                                                    }
                                                }}
                                            >
                                                <span className="plus-icon">+</span>
                                            </VisibilitySensor>
                                        </div>
                                    )}
                                </CountUp>
                                <p className="title">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Counter;