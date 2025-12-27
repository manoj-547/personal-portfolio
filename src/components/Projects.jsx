import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
    const projects = [
        {
            id: 1,
            title: 'Project One',
            description: 'Description of your first project. Include the technologies used and the key features.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            link: '#'
        },
        {
            id: 2,
            title: 'Project Two',
            description: 'Description of your second project. Include the technologies used and the key features.',
            tags: ['React', 'Node.js', 'MongoDB'],
            link: '#'
        },
        {
            id: 3,
            title: 'Project Three',
            description: 'Description of your third project. Include the technologies used and the key features.',
            tags: ['Vue.js', 'Firebase', 'Tailwind'],
            link: '#'
        }
    ]

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
