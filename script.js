// Enhanced JavaScript for animations
document.addEventListener('DOMContentLoaded', function() {
    // Fix typing animation - This is the key fix
    const typingElement = document.getElementById('typing-name');
    if (typingElement) {
        // Reset animation
        typingElement.style.animation = 'none';
        // Force reflow to restart animation
        void typingElement.offsetWidth;
        // Reapply animation
        typingElement.style.animation = 'typing 3.5s steps(40, end) forwards, blink-caret 0.75s step-end infinite';
    }

    // Animate subtitle after typing completes
    setTimeout(() => {
        const subtitle = document.getElementById('typing-subtitle');
        if (subtitle) {
            subtitle.classList.add('transition-all', 'duration-800', 'ease-out');
            subtitle.classList.remove('opacity-0', 'translate-y-4');
            subtitle.classList.add('opacity-100', 'translate-y-0');
        }
    }, 3500);

    // Mobile Menu Toggle
    document.getElementById('menu-toggle').addEventListener('click', function() {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');
    });

    // Certificate Modal Functionality
    const modal = document.getElementById('certificateModal');
    const closeModal = document.getElementById('closeModal');
    const certificateFrame = document.getElementById('certificateFrame');
    const modalTitle = document.getElementById('modalTitle');

    document.querySelectorAll('.view-certificate').forEach(button => {
        button.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const pdf = this.getAttribute('data-pdf');
            
            modalTitle.textContent = title;
            certificateFrame.src = pdf;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    closeModal.addEventListener('click', function() {
        modal.classList.remove('active');
        certificateFrame.src = '';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            certificateFrame.src = '';
            document.body.style.overflow = 'auto';
        }
    });

    // Enhanced Scroll Animation with Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skill bars
                if (entry.target.classList.contains('skill-progress')) {
                    const width = entry.target.getAttribute('data-width');
                    setTimeout(() => {
                        entry.target.style.width = width + '%';
                    }, 200);
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    document.querySelectorAll('.project-card').forEach(el => {
        observer.observe(el);
    });

    document.querySelectorAll('.certificate-card').forEach(el => {
        observer.observe(el);
    });

    document.querySelectorAll('.timeline-item').forEach(el => {
        observer.observe(el);
    });

    document.querySelectorAll('.skill-progress').forEach(el => {
        observer.observe(el);
    });

    // Enhanced 3D Card Effect
    const card3d = document.querySelector('.card-3d');
    
    if (card3d) {
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card3d.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateY(-10px)`;
        });

        // Reset card when mouse leaves
        document.addEventListener('mouseleave', () => {
            card3d.style.transform = 'rotateY(0deg) rotateX(0deg) translateY(0)';
        });
    }

    // Enhanced smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});