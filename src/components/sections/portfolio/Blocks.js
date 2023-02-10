import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import img1 from '../../../assets/img/project/05.jpg'
import img2 from '../../../assets/img/project/03.jpg'
import img3 from '../../../assets/img/project/14.jpg'
import img4 from '../../../assets/img/project/02.jpg'
import img5 from '../../../assets/img/project/10.jpg'
import img6 from '../../../assets/img/project/11.jpg'
import img7 from '../../../assets/img/project/01.jpg'
import img8 from '../../../assets/img/project/12.jpg'
import img9 from '../../../assets/img/project/13.jpg'

const filtersbtn = [
    { name: "Todos", value: "All Project", isActive: true },
    { name: "Categoria_1", value: "Business", isActive: false },
    { name: "Categoria_2", value: "Finaance", isActive: false },
    { name: "Categoria_3", value: "Development", isActive: false },
    { name: "Categoria_4", value: "Consulting", isActive: false },

]

const projects = [
    {
        photo: img1,
        origin: ["Business", "Categoria_2", "Todos"],
        title: 'Servicio_1',
        text: 'Contáctanos para consultas',
    },
    {
        photo: img2,
        origin: ["Categoria_1", "Categoria_2", "Todos"],
        title: 'Servicio_1',
        text: 'Contáctanos para consultas',
    },
    {
        photo: img3,
        origin: ["Categoria_1", "Web", "Business", "Todos"],
        title: 'Servicio_3',
        text: 'Contáctanos para consultas',
    },
    {
        photo: img4,
        origin: ["Server", "Categoria_2", "Finaance", "Todos"],
        title: 'Servicio_2',
        text: 'Contáctanos para consultas',
    },
    {
        photo: img5,
        origin: ["Development", "Web", "Todos"],
        title: 'Servicio_4',
        text: 'Contáctanos para consultas',
    },
    {
        photo: img6,
        origin: ["Categoria_1", "Categoria_2", "Todos"],
        title: 'Servicio_3',
        text: 'Contáctanos para consultas',
    },
    {
        photo: img7,
        origin: ["Consulting", "Finaance", "Todos" , "Categoria_3"],
        title: 'Servicio_1',
        text: 'Contáctanos para consultas',
    },
    {
        photo: img8,
        origin: ["Categoria_1", "Categoria_2", "Todos"],
        title: 'Servicio_3',
        text: 'Contáctanos para consultas',
    },
    {
        photo: img9,
        origin: ["Categoria_1", "Categoria_2", "Todos", "Categoria_3"],
        title: 'Servicio_2',
        text: 'Contáctanos para consultas',
    },
]

function Blocks(props) {
    const [filterProject, setFilterProject] = useState(projects)


    const handleClick = name => {
        let newFilterProjects = []
        if (name === "All Project") {
            newFilterProjects = projects

        } else {
            newFilterProjects = projects.filter(
                (project, i) => project.origin.includes(name)
            )
        }

        const index = filtersbtn.map(function (e) { return e.name }).indexOf(name)
        if (index) {
            filtersbtn.forEach(item => {
                item.isActive = false
            })
            filtersbtn[index].isActive = true
        }
        setFilterProject(newFilterProjects)
    }

    const renderAll = filterProject.map((project, i) => (
        <div key={i} className="isotope-item col-lg-4 col-sm-6">
            <div className="project-box hover-style">
                <div className="project-thumb">
                    <div className="thumb bg-img-c" style={{ backgroundImage: "url(" + project.photo + ")" }} />
                </div>
                <div className="project-desc text-center">
                    <h4><Link to="/portfoliodetail">{project.title}</Link></h4>
                    <p>{project.text}</p>
                    <Link to="/portfoliodetail" className="project-link">
                        <i className="fal fa-long-arrow-right" />
                    </Link>
                </div>
            </div>
        </div>
    ))
    return (
        <section className="project-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12">
                        <ul className="project-nav project-isotope-filter">
                            {filtersbtn.map(({ name, value, isActive }) => (
                                <li key={name} value={value} className={isActive === true ? 'active' : ''} onClick={() => handleClick(name)}>{name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Project Boxes */}
                <div className="row project-boxes project-isotope mt-60">
                    {renderAll}
                </div>
            </div>
        </section>
    );
}

export default Blocks;