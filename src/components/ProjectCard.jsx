import React, { useEffect, useState } from 'react'

function ProjectCard({ project }) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            })
        }, { threshold: 0.1 })

        const element = document.querySelector(`[data-project-id="${project.id}"]`)
        if (element) observer.observe(element)

        return () => {
            if (element) observer.unobserve(element)
        }
    }, [project.id])

    return (
        <div className={`project-card ${isVisible ? 'fade-in' : 'observe'}`} data-project-id={project.id}>
            <div className="project-header">
                <h3>{project.title}</h3>
            </div>
            <p>{project.description}</p>
            <div className="project-tags">
                {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                ))}
            </div>
            <a href={project.link} className="project-link">View Project →</a>
        </div>
    )
}

export default ProjectCard
