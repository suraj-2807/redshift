// ===== GSAP Animations & Smooth Scrolling =====

// Register GSAP ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

// ===== Detect Mobile Device =====
const isMobile = window.innerWidth <= 768;

// ===== Navigation Functionality =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

function handleNavbarScroll() {
    // On mobile (<=768px), always add scrolled class when scrolling
    if (window.innerWidth <= 768) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    } 
    // On desktop (>768px), add scrolled class after 100px
    else if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleNavbarScroll);
window.addEventListener('resize', handleNavbarScroll);

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Smooth Scrolling for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== ANIMATIONS (Desktop Only) =====
if (!isMobile) {
    // ===== Hero Section Animations =====
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTimeline
        .from('.hero-title-main', {
            y: 60,
            opacity: 0,
            duration: 1,
            delay: 0.3
        })
        .from('.hero-title-sub', {
            y: 40,
            opacity: 0,
            duration: 0.8
        }, '-=0.5')
        .from('.hero-subtitle', {
            y: 30,
            opacity: 0,
            duration: 0.8
        }, '-=0.4')
        .from('.hero-buttons', {
            y: 20,
            opacity: 0,
            duration: 0.6
        }, '-=0.3')
        .from('.hero-circle', {
            scale: 0,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2
        }, '-=0.8')
        .from('.hero-line', {
            scaleX: 0,
            duration: 1,
            stagger: 0.15
        }, '-=1');

    // ===== Section Header Animations =====
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    // ===== Services Cards Animation =====
    gsap.utils.toArray('.service-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            y: 60,
            opacity: 0,
            duration: 0.7,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });

    // ===== Features Animation =====
    gsap.utils.toArray('.feature-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            x: index % 2 === 0 ? -50 : 50,
            opacity: 0,
            duration: 0.7,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });

    // ===== About Section Animation =====
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: -60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out'
    });

    gsap.from('.about-visual', {
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: 60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out'
    });

    // About stats counter animation
    gsap.utils.toArray('.stat-number').forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        gsap.from(stat, {
            scrollTrigger: {
                trigger: stat,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            textContent: 0,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            onUpdate: function () {
                stat.textContent = Math.ceil(this.targets()[0].textContent) + '+';
            }
        });
    });

    // ===== Contact Section Animation =====
    gsap.from('.contact-form-container', {
        scrollTrigger: {
            trigger: '.contact-wrapper',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: -60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out'
    });

    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact-wrapper',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: 60,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out'
    });

    // ===== Footer Animation =====
    gsap.from('.footer-content', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 95%',
            toggleActions: 'play none none none'
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
    });

    // ===== Parallax Effect for Hero Background Elements =====
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const circles = document.querySelectorAll('.hero-circle');
        const lines = document.querySelectorAll('.hero-line');

        circles.forEach((circle, index) => {
            const speed = 0.1 + (index * 0.05);
            circle.style.transform = `translate(${scrolled * speed}px, ${scrolled * speed}px)`;
        });

        lines.forEach((line, index) => {
            const speed = 0.05 + (index * 0.03);
            line.style.transform = `scaleX(${1 + scrolled * 0.0005})`;
        });
    });

    // ===== Button Hover Effect =====
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function () {
            gsap.to(this, {
                scale: 1.02,
                duration: 0.2,
                ease: 'power2.out'
            });
        });

        btn.addEventListener('mouseleave', function () {
            gsap.to(this, {
                scale: 1,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
    });

    // ===== Service Card Hover Effect =====
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            gsap.to(this.querySelector('.service-icon svg'), {
                scale: 1.15,
                rotation: 5,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', function () {
            gsap.to(this.querySelector('.service-icon svg'), {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// ===== Contact Form Handling with EmailJS =====
const EMAILJS_PUBLIC_KEY = 'vyV6jqbBnzrlqYnze';
const EMAILJS_SERVICE_ID = 'service_ehfkx71';
const EMAILJS_TEMPLATE_ID = 'template_znlt2iq';

// Initialize EmailJS
(function () {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
})();

const contactForm = document.getElementById('contactForm');

// Helper function to show field-specific errors
function showFieldError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}Error`);
    const inputElement = document.getElementById(fieldId);

    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    if (inputElement) {
        inputElement.classList.add('form-input-error');
    }
}

// Helper function to clear field errors
function clearFieldError(fieldId) {
    const errorElement = document.getElementById(`${fieldId}Error`);
    const inputElement = document.getElementById(fieldId);

    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }

    if (inputElement) {
        inputElement.classList.remove('form-input-error');
    }
}

// Clear all errors
function clearAllErrors() {
    ['name', 'email', 'message'].forEach(clearFieldError);
}

// Real-time validation for message field
const messageField = document.getElementById('message');
messageField.addEventListener('input', function () {
    const messageLength = this.value.trim().length;
    const errorElement = document.getElementById('messageError');

    if (messageLength > 0 && messageLength < 20) {
        errorElement.textContent = `Message must be at least 20 characters (${messageLength}/20)`;
        errorElement.style.display = 'block';
        errorElement.style.color = '#fbbf24';
    } else if (messageLength >= 20) {
        clearFieldError('message');
    }
});

// Real-time validation for email field
const emailField = document.getElementById('email');
emailField.addEventListener('blur', function () {
    const email = this.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email && !emailRegex.test(email)) {
        showFieldError('email', 'Please enter a valid email address');
    } else {
        clearFieldError('email');
    }
});

emailField.addEventListener('input', function () {
    if (this.value.trim()) {
        clearFieldError('email');
    }
});

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    clearAllErrors();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    if (!name) {
        showFieldError('name', 'Name is required');
        isValid = false;
    } else if (name.length < 2) {
        showFieldError('name', 'Name must be at least 2 characters');
        isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
        showFieldError('email', 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }

    if (!message) {
        showFieldError('message', 'Message is required');
        isValid = false;
    } else if (message.length < 20) {
        showFieldError('message', `Message must be at least 20 characters (currently ${message.length} characters)`);
        isValid = false;
    }

    if (!isValid) {
        showNotification('Please fix the errors in the form', 'error');
        return;
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        reply_to: email
    };

    if (!window.emailjs) {
        fallbackMailto(name, email, message);
        resetBtn();
        return;
    }

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(() => {
            showNotification('Message sent successfully! 🚀', 'success');
            contactForm.reset();
            resetBtn();
        })
        .catch(() => {
            fallbackMailto(name, email, message);
            resetBtn();
        });

    function resetBtn() {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }

    function fallbackMailto(name, email, message) {
        const subject = encodeURIComponent(`Contact Form: Message from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );
        window.location.href = `mailto:redshiftwebsolutions@gmail.com?subject=${subject}&body=${body}`;
        showNotification('Opening email client as backup...', 'success');
    }
});

// Notification function
function showNotification(message, type) {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;

    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        padding: 16px 24px;
        background-color: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: #fff;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 16px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        z-index: 9999;
        font-family: 'Inter', sans-serif;
        font-size: 0.95rem;
    `;

    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: #fff;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;

    document.body.appendChild(notification);

    if (!isMobile) {
        gsap.from(notification, {
            x: 100,
            opacity: 0,
            duration: 0.4,
            ease: 'power3.out'
        });
    }

    closeBtn.addEventListener('click', () => {
        if (!isMobile) {
            gsap.to(notification, {
                x: 100,
                opacity: 0,
                duration: 0.3,
                ease: 'power3.in',
                onComplete: () => notification.remove()
            });
        } else {
            notification.remove();
        }
    });

    setTimeout(() => {
        if (notification.parentElement) {
            if (!isMobile) {
                gsap.to(notification, {
                    x: 100,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power3.in',
                    onComplete: () => notification.remove()
                });
            } else {
                notification.remove();
            }
        }
    }, 5000);
}