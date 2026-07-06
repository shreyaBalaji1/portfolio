// Projects Data
const projectsData = [
    {
        title: "🔹 MediScan",
        description: "A full-stack medication lookup app with JWT-based accounts, real FDA drug data via the openFDA API, saved favorites, personal notes, and a drug interaction checker that cross-references FDA label text between two medications.",
        technologies: ["Angular", "C#/.NET Web API", "Entity Framework Core", "SQL", "JWT Auth"],
        githubUrl: "https://github.com/shreyaBalaji1/MediScan",
        liveUrl: "https://mediscan-ui.vercel.app",
        icon: "💊"
    },
    {
        title: "🔹 Physics-Informed ML for Battery Degradation",
        description: "Research project using LSTM, CNN, and Transformer architectures to predict State of Health (SOH) and Remaining Useful Life (RUL) on CALCE battery datasets. Emphasizes physics-informed features, extensive preprocessing, and model comparison for robust degradation forecasting.",
        technologies: ["Python", "LSTM", "CNN", "Transformer", "Data Preprocessing", "Physics-Informed ML"],
        githubUrl: "https://github.com/shreyaBalaji1/Physics-Informed-ML-for-Battery-Degradation", // Add your repository URL here
        icon: "�"
    },
    {
        title: "🔹 Friends of MLK - Reading Huddle Project",
        description: "A Vue.js-based web application for the Friends of MLK Reading Huddle program that provides families, parents, faculty, and administrators with interactive literacy resources, structured courses, and data-driven tools to support children’s learning and track educational progress.",
        technologies: ["Vue.js", "JavaScript", "Tailwind/CSS", "REST APIs", "Role-Based Access"],
        githubUrl: "https://github.com/UTDallasEPICS/Reading-MLK", // Add your repository URL here
        icon: "�"
    },
    {
        title: "🔹 Car Comparison App",
        description: "A Next.js application that lets users save favorites and compare multiple cars side-by-side. Includes features for bookmarking, detailed specification comparisons, and a clean, responsive UI for quick side-by-side analysis.",
        technologies: ["Next.js", "React", "TypeScript", "CSS", "Client-side State"],
        githubUrl: "https://github.com/shreyaBalaji1/HackUTD-Project", // Add your repository URL here
        icon: "�"
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initCursor();
    initNavigation();
    initProjects();
    initScrollEffects();
    initAnimations();
});

// Custom Cursor
function initCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    if (!cursor || !follower) return;
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
        
        setTimeout(() => {
            follower.style.left = e.clientX - 4 + 'px';
            follower.style.top = e.clientY - 4 + 'px';
        }, 100);
    });
    
    document.querySelectorAll('a, button, .btn').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            follower.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            follower.style.transform = 'scale(1)';
        });
    });
}

// Navigation
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link
        updateActiveNavLink();
    });
    
    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Projects
function initProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    if (projectsData.length === 0) {
        projectsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <p style="font-size: 1.2rem; color: var(--text-secondary);">
                    Projects will be displayed here. Add your projects to the projectsData array in script.js
                </p>
            </div>
        `;
        return;
    }
    
    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="project-card">
            ${project.liveUrl && project.liveUrl.trim() ?
                `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-header" aria-label="Open live demo of ${project.title}">
                    <span class="project-header-icon">${project.icon || '🚀'}</span>
                    <span class="project-header-hint"><i class="fas fa-arrow-up-right-from-square"></i> View Live Demo</span>
                </a>`
                : `<div class="project-header">
                    <span class="project-header-icon">${project.icon || '🚀'}</span>
                </div>`}
            <div class="project-body">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech =>
                        `<span class="tech-badge">${tech}</span>`
                    ).join('')}
                </div>
            </div>
            <div class="project-footer">
                ${project.githubUrl && project.githubUrl.trim() ?
                    `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-btn secondary">
                        <i class="fab fa-github"></i>
                        <span>View Repository</span>
                    </a>`
                    : '<div class="project-btn secondary" style="opacity: 0.5; cursor: not-allowed;"><i class="fab fa-github"></i><span>Repository Coming Soon</span></div>'}
            </div>
        </div>
    `).join('');
}

// Scroll Effects
function initScrollEffects() {
    // Scroll progress
    window.addEventListener('scroll', () => {
        const scrollProgress = document.querySelector('.scroll-progress');
        if (scrollProgress) {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            scrollProgress.style.width = scrolled + '%';
        }
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.timeline-item, .project-card, .skills-category, .contact-social-card, .contact-intro-card, .contact-form-card, .cert-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// Animations
function initAnimations() {
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // You can add form submission logic here
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
        });
    }
}
