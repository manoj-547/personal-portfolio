import React, { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields')
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address')
            return
        }

        alert('Thank you for your message! I will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Let's Work Together</h2>
                <p>I'm always open to new opportunities and interesting projects. Feel free to reach out!</p>

                <div className="contact-links">
                    <a href="mailto:your.email@example.com" className="contact-link">📧 Email</a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">💼 LinkedIn</a>
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">💻 GitHub</a>
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">𝕏 Twitter</a>
                </div>

                <form className="contact-form" onSubmit={handleSubmit} style={{ marginTop: '2rem', maxWidth: '500px', margin: '2rem auto' }}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
                    ></textarea>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
