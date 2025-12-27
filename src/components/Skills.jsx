import React from 'react'

function Skills() {
    const skillCategories = [
        {
            id: 1,
            title: 'Frontend',
            skills: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React / Vue.js', 'Responsive Design']
        },
        {
            id: 2,
            title: 'Backend',
            skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs']
        },
        {
            id: 3,
            title: 'Tools & Others',
            skills: ['Git & GitHub', 'VS Code', 'npm/yarn', 'Problem Solving']
        }
    ]

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2>Skills</h2>
                <div className="skills-grid">
                    {skillCategories.map(category => (
                        <div key={category.id} className="skill-category observe">
                            <h3>{category.title}</h3>
                            <ul>
                                {category.skills.map(skill => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
