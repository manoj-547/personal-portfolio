// =====================
// Mobile Menu Toggle
// =====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu when hamburger is clicked
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// =====================
// Smooth Scrolling
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =====================
// Scroll Animation - Fade In Elements
// =====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all project cards and skill categories
document.querySelectorAll('.project-card, .skill-category, .about-content').forEach(el => {
    el.classList.add('observe');
    observer.observe(el);
});

// =====================
// Active Nav Link Highlighting
// =====================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// =====================
// Scroll to Top Button
// =====================
const scrollTopButton = document.createElement('button');
scrollTopButton.innerHTML = '↑';
scrollTopButton.className = 'scroll-top';
document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// =====================
// Counter Animation for Skills/Experience
// =====================
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 20;
        
        const updateCounter = () => {
            const count = +counter.innerText;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 50);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when skills section is visible
const skillsSection = document.querySelector('.skills');
let skillsAnimated = false;

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !skillsAnimated) {
            animateCounters();
            skillsAnimated = true;
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// =====================
// Form Validation (if contact form is added)
// =====================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// =====================
// Navbar Background on Scroll
// =====================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// =====================
// Page Load Animation
// =====================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Console welcome message
console.log('%cWelcome to B. Manoj Portfolio!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cLooking for the code? Check out the source on GitHub!', 'color: #8b5cf6; font-size: 14px;');
