import React, { useState, useEffect } from 'react'

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button
            className={`scroll-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            ↑
        </button>
    )
}

export default ScrollToTop
