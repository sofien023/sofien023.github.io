document.addEventListener('DOMContentLoaded', function() {

    // Typing effect for hero section
    const heroTitle = document.querySelector('.hero-text h1');
    const heroSubtitle = document.querySelector('.hero-text p');
    const originalTitle = heroTitle.textContent;
    const originalSubtitle = heroSubtitle.textContent;

    // Clear initial content for hero
    heroTitle.textContent = '';
    heroSubtitle.textContent = '';

    // Store and clear initial content for other sections
    const originalTexts = new Map();
    const otherSections = document.querySelectorAll('section:not(#hero)');
    otherSections.forEach(section => {
        const headings = section.querySelectorAll('h2');
        const paragraphs = section.querySelectorAll('p');
        [...headings, ...paragraphs].forEach(el => {
            originalTexts.set(el, el.textContent);
            el.textContent = '';
        });
    });

    // Typing effect function
    function typeWriter(element, text, speed = 100, callback = null) {
        let i = 0;

        function type() {
            if (i < text.length) {
                element.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
                i++;
                setTimeout(type, speed);
            } else {
                element.innerHTML = text;
                if (callback) callback();
            }
        }
        type();
    }

    // Start typing effects
    setTimeout(() => {
        typeWriter(heroTitle, originalTitle, 100, () => {
            setTimeout(() => {
                typeWriter(heroSubtitle, originalSubtitle, 50, () => {
                    // Mark hero as animated to prevent re-triggering
                    document.querySelector('#hero').classList.add('animated');
                });
            }, 500);
        });
    }, 500);

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navLinks.classList.remove('active');
        }
    });

    // Add scroll animations and typing effects
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animate', 'animated');

                // Apply typing effect to section text
                const section = entry.target;
                const headings = section.querySelectorAll('h2');
                const paragraphs = section.querySelectorAll('p');

                // Get original texts from Map
                const elements = [...headings, ...paragraphs];
                const localOriginalTexts = elements.map(el => originalTexts.get(el));

                // Type headings first, then paragraphs
                let currentIndex = 0;

                function typeNext() {
                    if (currentIndex < elements.length) {
                        const element = elements[currentIndex];
                        const text = localOriginalTexts[currentIndex];
                        typeWriter(element, text, currentIndex < headings.length ? 100 : 50, () => {
                            currentIndex++;
                            setTimeout(typeNext, 200);
                        });
                    }
                }

                setTimeout(typeNext, 300);
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Form submission (placeholder)
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
    });
});
