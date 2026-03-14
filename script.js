document.addEventListener('DOMContentLoaded', function() {
    // Create ambient page sparkles
    function createPageSparkles() {
        const container = document.querySelector('.page-sparkles');
        if (!container) return;
        for (let i = 0; i < 25; i++) {
            const s = document.createElement('div');
            s.className = 'ambient-sparkle';
            s.style.left = Math.random() * 100 + 'vw';
            s.style.top = Math.random() * 100 + 'vh';
            s.style.animationDelay = Math.random() * 4 + 's';
            s.style.animationDuration = (3 + Math.random() * 2) + 's';
            container.appendChild(s);
        }
    }
    createPageSparkles();

    // Video functionality
    const video = document.getElementById('memoriesVideo');
    const videoOverlay = document.getElementById('videoOverlay');
    const playButton = document.querySelector('.play-button');
    
    // Create enhanced farewell-themed sparkles - gold, champagne, rose
    function createSparkles() {
        const sparkleContainer = document.querySelector('.sparkle-container');
        if (!sparkleContainer) return;
        
        const sparkleCount = 35;
        for (let i = 0; i < sparkleCount; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.animationDelay = Math.random() * 2.5 + 's';
                sparkle.style.animationDuration = (2.5 + Math.random() * 1.5) + 's';
                const size = Math.random() * 8 + 3;
                sparkle.style.width = sparkle.style.height = size + 'px';
                
                // Farewell-themed sparkle colors: gold, champagne, rose
                const colors = [
                    'rgba(244, 228, 188, 0.95)',
                    'rgba(212, 175, 55, 0.9)',
                    'rgba(255, 248, 240, 0.95)',
                    'rgba(232, 180, 184, 0.85)',
                    'rgba(245, 230, 211, 0.9)'
                ];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                sparkle.style.background = randomColor;
                sparkle.style.boxShadow = `0 0 18px ${randomColor}, 0 0 35px rgba(212, 175, 55, 0.5), 0 0 55px rgba(232, 180, 184, 0.3)`;
                
                sparkleContainer.appendChild(sparkle);
                
                setTimeout(() => {
                    if (sparkle.parentNode) {
                        sparkle.parentNode.removeChild(sparkle);
                    }
                }, 4000);
            }, i * 100);
        }
    }
    
    // Start sparkles - more frequent for extra sparkle
    createSparkles();
    setInterval(createSparkles, 2200);
    
    // Check if video has source
    function checkVideoSource() {
        if (video.src && video.src !== window.location.href) {
            videoOverlay.style.display = 'none';
            return true;
        }
        return false;
    }
    
    // Play button click handler
    if (playButton) {
        playButton.addEventListener('click', function() {
            if (!checkVideoSource()) {
                showMessage('🌟 Video will be available after the farewell event! 🌟');
            }
        });
    }
    
    // Animate statistics
    function animateStats() {
        const stats = [
            { id: 'daysCount', target: 365, duration: 2000, suffix: '' },
            { id: 'memoriesCount', target: 1000, duration: 2500, suffix: '+' }
        ];
        
        stats.forEach(stat => {
            const element = document.getElementById(stat.id);
            if (element) {
                animateNumber(element, 0, stat.target, stat.duration, stat.suffix || '');
            }
        });
    }
    
    function animateNumber(element, start, end, duration, suffix = '') {
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = Math.floor(start + (end - start) * easeOutQuad(progress));
            element.textContent = current.toLocaleString() + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }
    
    function easeOutQuad(t) {
        return t * (2 - t);
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('stats')) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);
    
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
    
    // Message system
    function showMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'video-message';
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, rgba(74, 28, 35, 0.95) 0%, rgba(45, 27, 46, 0.98) 100%);
            color: #F5E6D3;
            padding: 24px 36px;
            border-radius: 16px;
            font-size: 1.25rem;
            z-index: 1000;
            max-width: 420px;
            text-align: center;
            animation: fadeIn 0.3s ease-out;
            border: 2px solid rgba(212, 175, 55, 0.4);
            box-shadow: 0 15px 40px rgba(0,0,0,0.4), 0 0 50px rgba(212, 175, 55, 0.25);
        `;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                document.body.removeChild(messageDiv);
            }, 300);
        }, 3000);
    }
    
    // Add fade animations to styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            to { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
    `;
    document.head.appendChild(style);
    
    // Check for existing video on load
    checkVideoSource();
    
    // Add parallax effect to header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Remove quote carousel functionality
    // animateQuotes();
    
    // Add smooth scrolling
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
