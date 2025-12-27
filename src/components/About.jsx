import React, { useEffect, useState } from 'react'

function About() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            })
        }, { threshold: 0.1 })

        const element = document.querySelector('.about')
        if (element) observer.observe(element)

        return () => {
            if (element) observer.unobserve(element)
        }
    }, [])

    return (
        <section id="about" className={`about ${isVisible ? 'fade-in' : 'observe'}`}>
            <div className="container">
                <h2>About Me</h2>
                <div className="about-content">
                    <p>I'm a passionate developer with expertise in web development. I love creating beautiful, functional websites and applications that solve real-world problems. With a strong foundation in both frontend and backend technologies, I enjoy turning ideas into reality.</p>
                    <p>When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing knowledge with the community.</p>
                </div>
            </div>
        </section>
    )
}

export default About
