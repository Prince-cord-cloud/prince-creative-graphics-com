// Header & Hamburger JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.site-header');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-menu-link');
    
    // Header scroll effect
    function handleHeaderScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        const isOpen = hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
        
        // Update ARIA attributes
        hamburger.setAttribute('aria-expanded', isOpen);
        mobileMenu.setAttribute('aria-hidden', !isOpen);
        
        // Toggle body scroll
        document.body.style.overflow = isOpen ? 'hidden' : '';
        
        // Play click sound
        playClickSound();
    }
    
    // Close mobile menu
    function closeMobileMenu() {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
    
    // Update active nav link
    function updateActiveNavLink() {
        const scrollPos = window.scrollY + 100;
        
        document.querySelectorAll('section[id]').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Update desktop nav
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
                
                // Update mobile nav
                const mobileLink = document.querySelector(`.mobile-menu-link[href="#${sectionId}"]`);
                if (mobileLink) {
                    mobileLink.classList.add('active');
                }
            }
        });
    }
    
    // Smooth scroll to section
    function smoothScrollToSection(e) {
        const href = this.getAttribute('href');
        
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (mobileMenu.classList.contains('open')) {
                    closeMobileMenu();
                }
                
                // Smooth scroll
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without page reload
                history.pushState(null, null, href);
            }
        }
    }
    
    // Click sound effect
    function playClickSound() {
        // Optional: Add subtle click sound
        /*
        const clickSound = new Audio('path/to/click-sound.mp3');
        clickSound.volume = 0.1;
        clickSound.play();
        */
    }
    
    // Keyboard navigation for mobile menu
    function handleKeyboardNavigation(e) {
        const isMenuOpen = mobileMenu.classList.contains('open');
        
        if (isMenuOpen) {
            if (e.key === 'Escape') {
                closeMobileMenu();
                hamburger.focus();
            }
            
            if (e.key === 'Tab') {
                const menuLinks = mobileMenu.querySelectorAll('a, button');
                const firstElement = menuLinks[0];
                const lastElement = menuLinks[menuLinks.length - 1];
                
                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        }
    }
    
    // Initialize header
    function initHeader() {
        // Initial header state
        handleHeaderScroll();
        updateActiveNavLink();
        
        // Event listeners
        window.addEventListener('scroll', function() {
            handleHeaderScroll();
            updateActiveNavLink();
        });
        
        // Hamburger click
        hamburger.addEventListener('click', toggleMobileMenu);
        
        // Mobile menu links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', smoothScrollToSection);
        });
        
        // Desktop nav links
        const desktopLinks = document.querySelectorAll('.nav-link');
        desktopLinks.forEach(link => {
            link.addEventListener('click', smoothScrollToSection);
        });
        
        // Close mobile menu on outside click
        document.addEventListener('click', function(e) {
            if (mobileMenu.classList.contains('open') &&
                !hamburger.contains(e.target) &&
                !mobileMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', handleKeyboardNavigation);
        
        // Handle resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 900 && mobileMenu.classList.contains('open')) {
                closeMobileMenu();
            }
        });
    }
    
    // Initialize everything
    initHeader();
    
    // Add loading animation to header
    setTimeout(() => {
        header.style.opacity = '0';
        header.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            header.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 100);
    }, 500);
});


// Enhanced service card interactions
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Create and insert icons (you'll need to add these SVG files to your Icons folder)
    const iconPaths = {
        'design-icon.svg': `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                <line x1="7" y1="2" x2="7" y2="22"></line>
                <line x1="17" y1="2" x2="17" y2="22"></line>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <line x1="2" y1="7" x2="7" y2="7"></line>
                <line x1="2" y1="17" x2="7" y2="17"></line>
                <line x1="17" y1="17" x2="22" y2="17"></line>
                <line x1="17" y1="7" x2="22" y2="7"></line>
            </svg>
        `,
        'graphic-icon.svg': `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="10" r="3"></circle>
                <path d="M12 21.8V13a1 1 0 0 0-1-1H5.1a10 10 0 0 0 6.9 9.8z"></path>
                <path d="M13 12a1 1 0 0 0 1-1V5.1A10 10 0 0 1 21.8 12H13z"></path>
            </svg>
        `,
        'code-icon.svg': `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
        `,
        'data-icon.svg': `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="20" x2="12" y2="10"></line>
                <line x1="18" y1="20" x2="18" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="16"></line>
            </svg>
        `,
        'brand-icon.svg': `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
        `,
        'consult-icon.svg': `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
        `
    };
    
    // Set up service card interactions
    serviceCards.forEach((card, index) => {
        // Add click interaction
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.service-link')) {
                // Toggle active state
                serviceCards.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                
                // Scroll to active card on mobile
                if (window.innerWidth < 768) {
                    this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }
        });
        
        // Mouse enter effects
        card.addEventListener('mouseenter', function() {
            // Add floating animation
            this.style.transform = 'translateY(-15px) scale(1.02)';
            
            // Play subtle sound (optional)
            playHoverSound();
        });
        
        // Mouse leave effects
        card.addEventListener('mouseleave', function() {
            // Reset transform if not active
            if (!this.classList.contains('active')) {
                this.style.transform = '';
            }
        });
        
        // Add keyboard navigation
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                serviceCards.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Initialize service icons
    function initializeServiceIcons() {
        const serviceIcons = document.querySelectorAll('.service-icon img');
        
        serviceIcons.forEach(icon => {
            const iconName = icon.getAttribute('src').split('/').pop();
            if (iconPaths[iconName]) {
                // Replace img with SVG
                const parent = icon.parentElement;
                parent.innerHTML = iconPaths[iconName];
                
                // Add animation to SVG
                const svg = parent.querySelector('svg');
                svg.style.transition = 'all 0.3s ease';
            }
        });
    }
    
    // Call icon initialization
    initializeServiceIcons();
    
    // Intersection Observer for service cards
    const serviceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add staggered animation
                const index = Array.from(serviceCards).indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 0.1}s`;
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe service cards
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        serviceObserver.observe(card);
    });
    
    // Hover sound effect (optional)
    function playHoverSound() {
        // You can add a subtle sound effect here if desired
        // For now, we'll just provide the structure
        /*
        const hoverSound = new Audio('path/to/hover-sound.mp3');
        hoverSound.volume = 0.1;
        hoverSound.play();
        */
    }
    
    // Service card click tracking (for analytics)
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceName = this.querySelector('h3').textContent;
            console.log(`Service selected: ${serviceName}`);
            // You can add analytics tracking here
            // trackServiceClick(serviceName);
        });
    });
    
    // Add parallax effect to service section
    window.addEventListener('scroll', function() {
        const servicesSection = document.querySelector('.services-section');
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        
        if (servicesSection) {
            servicesSection.style.backgroundPositionY = `${rate}px`;
        }
    });
});
// Portfolio Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    // Initialize portfolio filtering
    function initPortfolioFilter() {
        // Add click event to filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filterValue = this.dataset.filter;
                
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                // Filter portfolio items
                filterPortfolioItems(filterValue);
                
                // Play click sound
                playClickSound();
            });
        });
    }
    
    // Filter portfolio items based on selected category
    function filterPortfolioItems(filter) {
        if (filter === 'all') {
            // Show all items with animation
            portfolioItems.forEach(item => {
                showItemWithAnimation(item);
            });
        } else {
            // Filter items based on category
            portfolioItems.forEach(item => {
                const categories = item.dataset.category.split(' ');
                
                if (categories.includes(filter)) {
                    showItemWithAnimation(item);
                } else {
                    hideItemWithAnimation(item);
                }
            });
        }
        
        // Reinitialize animations after filtering
        setTimeout(initPortfolioAnimations, 300);
    }
    
    // Show item with animation
    function showItemWithAnimation(item) {
        item.style.display = 'block';
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1) translateY(0)';
        }, 50);
    }
    
    // Hide item with animation
    function hideItemWithAnimation(item) {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8) translateY(20px)';
        setTimeout(() => {
            item.style.display = 'none';
        }, 300);
    }
    
    // Initialize portfolio item animations
    function initPortfolioAnimations() {
        portfolioItems.forEach((item, index) => {
            if (item.style.display !== 'none') {
                item.style.opacity = '0';
                item.style.transform = 'translateY(30px)';
                item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                    item.style.transitionDelay = `${index * 0.1}s`;
                }, 100);
            }
        });
    }
    
    // Portfolio item hover effects
    function initPortfolioItemHover() {
        portfolioItems.forEach(item => {
            // Mouse enter
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
                this.style.zIndex = '10';
                
                const glow = this.querySelector('.portfolio-glow');
                if (glow) {
                    glow.style.opacity = '1';
                }
                
                playHoverSound();
            });
            
            // Mouse leave
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.zIndex = '1';
                
                const glow = this.querySelector('.portfolio-glow');
                if (glow) {
                    glow.style.opacity = '0';
                }
            });
            
            // Keyboard navigation
            item.setAttribute('tabindex', '0');
            item.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openPortfolioModal(this);
                }
            });
        });
    }
    
    // Portfolio modal functionality
    function initPortfolioModal() {
        const modal = document.getElementById('portfolioModal');
        const modalClose = modal.querySelector('.modal-close');
        const modalContent = document.getElementById('modalContent');
        
        // Close modal
        modalClose.addEventListener('click', function() {
            closePortfolioModal();
        });
        
        // Close on background click
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closePortfolioModal();
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('open')) {
                closePortfolioModal();
            }
        });
        
        // Portfolio item click to open modal
        portfolioItems.forEach(item => {
            item.addEventListener('click', function(e) {
                if (!e.target.closest('.portfolio-link')) {
                    openPortfolioModal(this);
                }
            });
        });
        
        // Portfolio link click (for external links)
        const portfolioLinks = document.querySelectorAll('.portfolio-link');
        portfolioLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Only handle if it's a view/details link (not external)
                if (!this.href.includes('#') && !this.href.includes('github.com')) {
                    e.preventDefault();
                    const item = this.closest('.portfolio-item');
                    openPortfolioModal(item);
                }
            });
        });
    }
    
    function openPortfolioModal(item) {
        const modal = document.getElementById('portfolioModal');
        const modalContent = document.getElementById('modalContent');
        
        // Get item data
        const title = item.querySelector('.portfolio-title-small').textContent;
        const category = item.querySelector('.portfolio-category').textContent;
        const description = item.querySelector('.portfolio-description').textContent;
        const image = item.querySelector('.portfolio-image').src;
        const techTags = Array.from(item.querySelectorAll('.tech-tag')).map(tag => tag.textContent);
        
        // Create modal content
        modalContent.innerHTML = `
            <div class="modal-header">
                <span class="modal-category">${category}</span>
                <h3 class="modal-title">${title}</h3>
            </div>
            
            <div class="modal-image">
                <img src="${image}" alt="${title}" loading="lazy">
            </div>
            
            <div class="modal-body">
                <p class="modal-description">${description}</p>
                
                <div class="modal-tech">
                    <h4>Technologies Used:</h4>
                    <div class="tech-tags">
                        ${techTags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                    </div>
                </div>
                
                <div class="modal-actions">
                    <button class="modal-action-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                        View Case Study
                    </button>
                    <button class="modal-action-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Live Demo
                    </button>
                </div>
            </div>
        `;
        
        // Open modal
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        
        // Play open sound
        playClickSound();
    }
    
    function closePortfolioModal() {
        const modal = document.getElementById('portfolioModal');
        modal.classList.remove('open');
        document.body.style.overflow = '';
        
        // Play close sound
        playClickSound();
    }
    
    // Sound effects
    function playClickSound() {
        // Optional: Add subtle click sound
        /*
        const clickSound = new Audio('path/to/click-sound.mp3');
        clickSound.volume = 0.1;
        clickSound.play();
        */
    }
    
    function playHoverSound() {
        // Optional: Add subtle hover sound
        /*
        const hoverSound = new Audio('path/to/hover-sound.mp3');
        hoverSound.volume = 0.1;
        hoverSound.play();
        */
    }
    
    // Initialize everything
    initPortfolioFilter();
    initPortfolioItemHover();
    initPortfolioModal();
    initPortfolioAnimations();
    
    // View More button interaction
    const viewMoreBtn = document.querySelector('.view-more-btn');
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', function(e) {
            // Smooth scroll to contact section
            const target = document.querySelector('#contact');
            if (target && e.target.tagName === 'A') {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // Add keyboard navigation for filter buttons
    filterButtons.forEach((button, index) => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight') {
                const nextBtn = filterButtons[(index + 1) % filterButtons.length];
                nextBtn.focus();
                nextBtn.click();
            } else if (e.key === 'ArrowLeft') {
                const prevBtn = filterButtons[(index - 1 + filterButtons.length) % filterButtons.length];
                prevBtn.focus();
                prevBtn.click();
            } else if (e.key === 'Home') {
                filterButtons[0].focus();
                filterButtons[0].click();
            } else if (e.key === 'End') {
                filterButtons[filterButtons.length - 1].focus();
                filterButtons[filterButtons.length - 1].click();
            }
        });
    });
});

// Service modal functionality (optional enhancement)
function openServiceModal(serviceId) {
    const modal = document.createElement('div');
    modal.className = 'service-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div id="modal-body"></div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .service-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(11, 0, 22, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            backdrop-filter: blur(10px);
        }
        
        .modal-content {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(179, 122, 255, 0.2);
            border-radius: 24px;
            padding: 40px;
            max-width: 800px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
        }
        
        .modal-close {
            position: absolute;
            top: 20px;
            right: 20px;
            background: none;
            border: none;
            color: #fff;
            font-size: 2rem;
            cursor: pointer;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        
        .modal-close:hover {
            background: rgba(179, 122, 255, 0.2);
            transform: rotate(90deg);
        }
    `;
    
    document.head.appendChild(style);
    
    // Close modal
    modal.querySelector('.modal-close').addEventListener('click', () => {
        document.body.removeChild(modal);
        document.head.removeChild(style);
    });
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.head.removeChild(style);
        }
    });
    
    // Escape key to close
    document.addEventListener('keydown', function closeOnEscape(e) {
        if (e.key === 'Escape') {
            document.body.removeChild(modal);
            document.head.removeChild(style);
            document.removeEventListener('keydown', closeOnEscape);
        }
    });
}

// Resume Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const resumeTabs = document.querySelectorAll('.resume-tab');
    const resumeContents = document.querySelectorAll('.resume-content');
    const resumeItems = document.querySelectorAll('.resume-item');
    const skillBars = document.querySelectorAll('.skill-fill');
    
    // Tab Switching
    resumeTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // Update active tab
            resumeTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update active content
            resumeContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${tabId}Content`) {
                    content.classList.add('active');
                }
            });
            
            // Animate skill bars when skills tab is active
            if (tabId === 'skills') {
                setTimeout(() => {
                    animateSkillBars();
                }, 300);
            }
        });
    });
    
    // Animate resume items on scroll
    const resumeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');  
                
                // Animate skill bars in this item
                const skillBars = entry.target.querySelectorAll('.skill-fill');
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 300);
                });
                
                resumeObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe resume items
    resumeItems.forEach(item => {
        resumeObserver.observe(item);
    });
    
    // Animate skill bars
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }
    
    // Hover effects for resume items
    resumeItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
            playHoverSound();
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.zIndex = '';
        });
    });
    
    // Hover effects for skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const bar = this.querySelector('.skill-fill');
            if (bar) {
                const currentWidth = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = currentWidth;
                }, 50);
            }
        });
    });
    
    // Download button animation
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'translateY(-2px) scale(0.98)';
            
            // Reset animation
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
            
            // Track download
            console.log('Resume download initiated');
            // Add analytics tracking here
        });
    }
    
    // Print resume functionality
    const printBtn = document.createElement('button');
    printBtn.className = 'resume-tab';
    printBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 6 2 18 2 18 9"/>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
            <rect x="6" y="14" width="12" height="8"/>
        </svg>
        Print Resume
    `;
    printBtn.style.marginLeft = '15px';
    
    printBtn.addEventListener('click', function() {
        window.print();
    });
    
    // Add print button to tabs
    const resumeTabsContainer = document.querySelector('.resume-tabs');
    if (resumeTabsContainer) {
        resumeTabsContainer.appendChild(printBtn);
    }
    
    // Hover sound effect
    function playHoverSound() {
        // Optional: Add subtle hover sound
        /*
        const hoverSound = new Audio('path/to/hover-sound.mp3');
        hoverSound.volume = 0.1;
        hoverSound.play();
        */
    }
    
    // Stats counter animation
    const statValues = document.querySelectorAll('.stat-value');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statValue = entry.target;
                const value = parseInt(statValue.textContent);
                
                if (!isNaN(value)) {
                    animateCounter(statValue, value);
                }
                
                statsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    // Observe stat values
    statValues.forEach(value => {
        statsObserver.observe(value);
    });
    
    // Animate counter
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
        }, 30);
    }
    
    // Resume item click to expand
    resumeItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (!e.target.closest('.skill-item') && !e.target.closest('a')) {
                this.classList.toggle('expanded');
                
                if (this.classList.contains('expanded')) {
                    const description = this.querySelector('.item-description');
                    description.style.maxHeight = description.scrollHeight + 'px';
                } else {
                    const description = this.querySelector('.item-description');
                    description.style.maxHeight = 'none';
                }
            }
        });
    });
    
    // Add expanded styles
    const expandedStyles = document.createElement('style');
    expandedStyles.textContent = `
        .resume-item.expanded {
            transform: translateX(20px) !important;
            background: rgba(179, 122, 255, 0.05) !important;
        }
        
        .resume-item.expanded .item-description {
            max-height: 500px !important;
            transition: max-height 0.6s ease !important;
        }
        
        .resume-item .item-description {
            max-height: 4.8em;
            overflow: hidden;
            transition: max-height 0.6s ease;
        }
    `;
    document.head.appendChild(expandedStyles);
    
    // Add keyboard navigation for tabs
    resumeTabs.forEach((tab, index) => {
        tab.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight') {
                const nextTab = resumeTabs[(index + 1) % resumeTabs.length];
                nextTab.focus();
                nextTab.click();
            } else if (e.key === 'ArrowLeft') {
                const prevTab = resumeTabs[(index - 1 + resumeTabs.length) % resumeTabs.length];
                prevTab.focus();
                prevTab.click();
            } else if (e.key === 'Home') {
                resumeTabs[0].focus();
                resumeTabs[0].click();
            } else if (e.key === 'End') {
                resumeTabs[resumeTabs.length - 1].focus();
                resumeTabs[resumeTabs.length - 1].click();
            }
        });
    });
});

// Skills Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const skillCategoryBtns = document.querySelectorAll('.skill-category-btn');
    const skillsContents = document.querySelectorAll('.skills-content');
    const progressFills = document.querySelectorAll('.progress-fill');
    const skillCards = document.querySelectorAll('.skill-card');
    
    // Initialize all progress bars to 0
    progressFills.forEach(fill => {
        fill.style.width = '0%';
    });
    
    // Category Switching
    skillCategoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Update active button
            skillCategoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update active content
            skillsContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${category}Skills`) {
                    content.classList.add('active');
                }
            });
            
            // Animate progress bars in active category
            setTimeout(() => {
                animateProgressBarsInCategory(category);
            }, 300);
        });
    });
    
    // Animate progress bars in specific category
    function animateProgressBarsInCategory(category) {
        const activeContent = document.getElementById(`${category}Skills`);
        if (!activeContent) return;
        
        const progressBars = activeContent.querySelectorAll('.progress-fill');
        
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            if (width) {
                // Reset to 0
                bar.style.width = '0%';
                
                // Animate to target width
                setTimeout(() => {
                    bar.style.width = `${width}%`;
                }, 100);
            }
        });
    }
    
    // Animate progress bars on scroll
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressFill = entry.target;
                const width = progressFill.getAttribute('data-width');
                
                if (width) {
                    // Reset to 0
                    progressFill.style.width = '0%';
                    
                    // Animate to target width
                    setTimeout(() => {
                        progressFill.style.width = `${width}%`;
                    }, 300);
                }
                
                progressObserver.unobserve(progressFill);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all progress fills
    progressFills.forEach(fill => {
        progressObserver.observe(fill);
    });
    
    // Skill card hover effects
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
            
            // Play hover sound (optional)
            playHoverSound();
            
            // Pause shimmer animation on hover
            const progressFill = this.querySelector('.progress-fill');
            if (progressFill) {
                progressFill.style.animationPlayState = 'paused';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '';
            
            // Resume shimmer animation
            const progressFill = this.querySelector('.progress-fill');
            if (progressFill) {
                progressFill.style.animationPlayState = 'running';
            }
        });
        
        // Add keyboard navigation
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.classList.toggle('expanded');
            }
        });
    });
    
    // Skill tag hover effects
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Click to filter by tag
        tag.addEventListener('click', function() {
            const tagText = this.textContent;
            console.log(`Filtering by tag: ${tagText}`);
            // Add filtering functionality here if needed
        });
    });
    
    // Skills button interaction
    const skillsBtn = document.querySelector('.skills-btn');
    if (skillsBtn) {
        skillsBtn.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'translateY(-2px) scale(0.98)';
            
            // Reset animation
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
            
            // Smooth scroll to contact section
            const target = document.querySelector('#work-together');
            if (target && e.target.tagName === 'A') {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // Hover sound effect
    function playHoverSound() {
        // Optional: Add subtle hover sound
        /*
        const hoverSound = new Audio('path/to/hover-sound.mp3');
        hoverSound.volume = 0.1;
        hoverSound.play();
        */
    }
    
    // Skill level tooltip
    progressFills.forEach(fill => {
        fill.addEventListener('mouseenter', function() {
            const value = this.getAttribute('data-width');
            const tooltip = document.createElement('div');
            tooltip.className = 'skill-tooltip';
            tooltip.textContent = `${value}% Proficiency`;
            tooltip.style.cssText = `
                position: absolute;
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(0, 0, 0, 0.9);
                color: white;
                padding: 8px 16px;
                border-radius: 8px;
                font-size: 0.9rem;
                white-space: nowrap;
                z-index: 1000;
                pointer-events: none;
                margin-bottom: 10px;
            `;
            
            this.parentElement.style.position = 'relative';
            this.parentElement.appendChild(tooltip);
        });
        
        fill.addEventListener('mouseleave', function() {
            const tooltip = this.parentElement.querySelector('.skill-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
    
    // Animate all progress bars on page load (for active category)
    function animateInitialProgressBars() {
        const activeBtn = document.querySelector('.skill-category-btn.active');
        if (activeBtn) {
            const category = activeBtn.dataset.category;
            setTimeout(() => {
                animateProgressBarsInCategory(category);
            }, 1000);
        }
    }
    
    // Call initial animation
    animateInitialProgressBars();
    
    // Add keyboard navigation for category buttons
    skillCategoryBtns.forEach((btn, index) => {
        btn.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight') {
                const nextBtn = skillCategoryBtns[(index + 1) % skillCategoryBtns.length];
                nextBtn.focus();
                nextBtn.click();
            } else if (e.key === 'ArrowLeft') {
                const prevBtn = skillCategoryBtns[(index - 1 + skillCategoryBtns.length) % skillCategoryBtns.length];
                prevBtn.focus();
                prevBtn.click();
            } else if (e.key === 'Home') {
                skillCategoryBtns[0].focus();
                skillCategoryBtns[0].click();
            } else if (e.key === 'End') {
                skillCategoryBtns[skillCategoryBtns.length - 1].focus();
                skillCategoryBtns[skillCategoryBtns.length - 1].click();
            }
        });
    });
    
    // Responsive adjustments
    function handleResize() {
        const width = window.innerWidth;
        
        if (width < 768) {
            // Mobile adjustments
            skillCards.forEach(card => {
                card.style.minHeight = 'auto';
            });
        } else {
            // Desktop adjustments
            skillCards.forEach(card => {
                card.style.minHeight = '320px';
            });
        }
    }
    
    // Initial call
    handleResize();
    
    // Listen for resize
    window.addEventListener('resize', handleResize);
    
    // Print functionality
    const printBtn = document.createElement('button');
    printBtn.className = 'skill-category-btn';
    printBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 6 2 18 2 18 9"/>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
            <rect x="6" y="14" width="12" height="8"/>
        </svg>
        Print Skills
    `;
    printBtn.style.marginLeft = '15px';
    
    printBtn.addEventListener('click', function() {
        window.print();
    });
    
    // Add print button to skills navigation
    const skillsNav = document.querySelector('.skills-nav');
    if (skillsNav) {
        skillsNav.appendChild(printBtn);
    }
    
    // Load progress bars on page load with slight delay
    window.addEventListener('load', function() {
        setTimeout(() => {
            const activeBtn = document.querySelector('.skill-category-btn.active');
            if (activeBtn) {
                const category = activeBtn.dataset.category;
                animateProgressBarsInCategory(category);
            }
        }, 500);
    });
});

// Testimonials Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const paginationDots = document.querySelectorAll('.pagination-dot');
    const prevBtn = document.querySelector('.nav-arrow.prev');
    const nextBtn = document.querySelector('.nav-arrow.next');
    const testimonialCardsContainer = document.querySelector('.testimonial-cards');
    let currentIndex = 0;
    let autoSlideInterval;
    const slideInterval = 5000; // 5 seconds
    
    // Initialize slider
    function initSlider() {
        // Set initial positions
        updateSliderPosition();
        
        // Start auto slide
        startAutoSlide();
        
        // Add keyboard navigation
        document.addEventListener('keydown', handleKeyboardNavigation);
        
        // Add swipe support for mobile
        initSwipeSupport();
        
        // Animate initial card
        animateActiveCard();
    }
    
    // Update slider position
    function updateSliderPosition() {
        const cardWidth = testimonialCards[0].offsetWidth + 40; // card width + gap
        testimonialCardsContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        
        // Update active states
        testimonialCards.forEach((card, index) => {
            card.classList.toggle('active', index === currentIndex);
        });
        
        // Update pagination dots
        paginationDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
        
        // Animate active card
        animateActiveCard();
    }
    
    // Go to specific slide
    function goToSlide(index) {
        if (index < 0) index = testimonialCards.length - 1;
        if (index >= testimonialCards.length) index = 0;
        
        currentIndex = index;
        updateSliderPosition();
        resetAutoSlide();
    }
    
    // Next slide
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    // Previous slide
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }
    
    // Start auto slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, slideInterval);
    }
    
    // Reset auto slide timer
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    // Animate active card
    function animateActiveCard() {
        const activeCard = testimonialCards[currentIndex];
        
        // Reset all cards
        testimonialCards.forEach(card => {
            card.style.opacity = '0.5';
            card.style.transform = 'scale(0.9)';
        });
        
        // Animate active card
        if (activeCard) {
            activeCard.style.opacity = '1';
            activeCard.style.transform = 'scale(1)';
        }
    }
    
    // Handle keyboard navigation
    function handleKeyboardNavigation(e) {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextSlide();
        } else if (e.key === 'Home') {
            e.preventDefault();
            goToSlide(0);
        } else if (e.key === 'End') {
            e.preventDefault();
            goToSlide(testimonialCards.length - 1);
        }
    }
    
    // Initialize swipe support for mobile
    function initSwipeSupport() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        testimonialCardsContainer.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        testimonialCardsContainer.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - next slide
                    nextSlide();
                } else {
                    // Swipe right - previous slide
                    prevSlide();
                }
            }
        }
    }
    
    // Event Listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            prevSlide();
            playClickSound();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            nextSlide();
            playClickSound();
        });
    }
    
    paginationDots.forEach((dot, index) => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            goToSlide(index);
            playClickSound();
        });
    });
    
    // Pause auto slide on hover
    const slider = document.querySelector('.testimonials-slider');
    if (slider) {
        slider.addEventListener('mouseenter', function() {
            clearInterval(autoSlideInterval);
        });
        
        slider.addEventListener('mouseleave', function() {
            startAutoSlide();
        });
    }
    
    // Click sound effect
    function playClickSound() {
        // Optional: Add subtle click sound
        /*
        const clickSound = new Audio('path/to/click-sound.mp3');
        clickSound.volume = 0.1;
        clickSound.play();
        */
    }
    
    // Animate stats counter
    const statValues = document.querySelectorAll('.stat-value');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statValue = entry.target;
                const value = parseInt(statValue.textContent);
                
                if (!isNaN(value)) {
                    animateCounter(statValue, value);
                }
                
                statsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe stat values
    statValues.forEach(value => {
        statsObserver.observe(value);
    });
    
    // Animate counter
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : 
                                                        element.textContent.includes('%') ? '%' : '');
        }, 30);
    }
    
    // Testimonial card click to expand
    testimonialCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.nav-arrow') && !e.target.closest('.pagination-dot')) {
                const index = parseInt(this.dataset.index);
                if (index !== currentIndex) {
                    goToSlide(index);
                }
            }
        });
        
        // Add keyboard navigation for cards
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const index = parseInt(this.dataset.index);
                goToSlide(index);
            }
        });
    });
    
    // CTA button interaction
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'translateY(-2px) scale(0.98)';
            
            // Reset animation
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
            
            // Smooth scroll to contact section
            const target = document.querySelector('#work-together');
            if (target && e.target.tagName === 'A') {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // Handle window resize
    function handleResize() {
        // Update slider position on resize
        updateSliderPosition();
    }
    
    // Listen for resize
    window.addEventListener('resize', handleResize);
    
    // Initialize on load
    initSlider();
    
    // Destroy on page unload
    window.addEventListener('beforeunload', function() {
        clearInterval(autoSlideInterval);
        document.removeEventListener('keydown', handleKeyboardNavigation);
    });
    
    // Add print button
    const printBtn = document.createElement('button');
    printBtn.className = 'nav-arrow';
    printBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 6 2 18 2 18 9"/>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
            <rect x="6" y="14" width="12" height="8"/>
        </svg>
    `;
    printBtn.style.marginLeft = '15px';
    printBtn.setAttribute('aria-label', 'Print testimonials');
    
    printBtn.addEventListener('click', function() {
        window.print();
    });
    
    // Add print button to navigation
    const navArrows = document.querySelector('.nav-arrows');
    if (navArrows) {
        navArrows.appendChild(printBtn);
    }
    
    // Load images with fade-in effect
    const authorImages = document.querySelectorAll('.author-avatar img');
    authorImages.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.6s ease';
        
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Fallback in case load event doesn't fire
        setTimeout(() => {
            if (img.complete) {
                img.style.opacity = '1';
            }
        }, 1000);
    });
});

// Blog Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const blogCategoryBtns = document.querySelectorAll('.blog-category-btn');
    const blogCards = document.querySelectorAll('.blog-card');
    const blogGrid = document.querySelector('.blog-grid');
    const viewAllBtn = document.querySelector('.view-all-btn');
    
    // Initialize blog filtering
    function initBlogFilter() {
        // Category filtering
        blogCategoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const category = this.dataset.category;
                
                // Update active button
                blogCategoryBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filter blog cards
                filterBlogCards(category);
                
                // Animate grid
                animateGrid();
            });
        });
    }
    
    // Filter blog cards by category
    function filterBlogCards(category) {
        blogCards.forEach(card => {
            const cardCategory = card.dataset.category;
            
            if (category === 'all' || category === cardCategory) {
                // Show card with animation
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8) translateY(20px)';
                card.style.display = 'flex';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1) translateY(0)';
                }, 300);
            } else {
                // Hide card with animation
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8) translateY(20px)';
                
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }
    
    // Animate grid layout
    function animateGrid() {
        blogGrid.style.opacity = '0.5';
        setTimeout(() => {
            blogGrid.style.opacity = '1';
        }, 300);
    }
    
    // Blog card hover effects
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
            playHoverSound();
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '';
        });
        
        // Keyboard navigation
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = this.querySelector('.read-more-btn');
                if (link) {
                    link.click();
                }
            }
        });
    });
    
    // Blog tag interactions
    const blogTags = document.querySelectorAll('.blog-tag');
    blogTags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.stopPropagation();
            const tagText = this.textContent;
            
            // Filter by tag (you can implement this if needed)
            console.log(`Filtering by tag: ${tagText}`);
            
            // Visual feedback
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // View all button interaction
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'translateY(-2px) scale(0.98)';
            
            // Reset animation
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
            
            // Show all categories
            blogCategoryBtns.forEach(btn => {
                if (btn.dataset.category === 'all') {
                    btn.click();
                }
            });
            
            // Optional: Smooth scroll to top of blog section
            const blogSection = document.querySelector('#blog');
            if (blogSection && e.target.tagName === 'A') {
                e.preventDefault();
                blogSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // Hover sound effect
    function playHoverSound() {
        // Optional: Add subtle hover sound
        /*
        const hoverSound = new Audio('path/to/hover-sound.mp3');
        hoverSound.volume = 0.1;
        hoverSound.play();
        */
    }
    
    // Animate stats counter
    const statValues = document.querySelectorAll('.stat-value');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statValue = entry.target;
                const value = parseFloat(statValue.textContent);
                
                if (!isNaN(value)) {
                    animateCounter(statValue, value);
                }
                
                statsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe stat values
    statValues.forEach(value => {
        statsObserver.observe(value);
    });
    
    // Animate counter
    function animateCounter(element, target) {
        let current = 0;
        const isDecimal = element.textContent.includes('.');
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (isDecimal) {
                element.textContent = current.toFixed(1);
            } else {
                element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : 
                                                          element.textContent.includes('K') ? 'K+' : '');
            }
        }, 30);
    }
    
    // Lazy load images
    const blogImages = document.querySelectorAll('.blog-image');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.1
    });
    
    // Observe images
    blogImages.forEach(img => {
        if (!img.classList.contains('loaded')) {
            imageObserver.observe(img);
        }
    });
    
    // Featured post highlight
    const featuredPost = document.querySelector('.featured-post');
    if (featuredPost) {
        featuredPost.addEventListener('mouseenter', function() {
            const badge = this.querySelector('.blog-category-badge');
            if (badge) {
                badge.style.animation = 'pulse 2s infinite';
            }
        });
        
        featuredPost.addEventListener('mouseleave', function() {
            const badge = this.querySelector('.blog-category-badge');
            if (badge) {
                badge.style.animation = '';
            }
        });
    }
    
    // Read time calculation (optional)
    function calculateReadTime() {
        const excerpts = document.querySelectorAll('.blog-excerpt');
        excerpts.forEach(excerpt => {
            const wordCount = excerpt.textContent.split(/\s+/).length;
            const readTime = Math.ceil(wordCount / 200); // 200 words per minute
            const readTimeElement = excerpt.closest('.blog-card').querySelector('.read-time');
            if (readTimeElement) {
                readTimeElement.textContent = `${readTime} min read`;
            }
        });
    }
    
    // Calculate read time on load
    setTimeout(calculateReadTime, 1000);
    
    // Add print button
    const printBtn = document.createElement('button');
    printBtn.className = 'blog-category-btn';
    printBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 6 2 18 2 18 9"/>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
            <rect x="6" y="14" width="12" height="8"/>
        </svg>
        Print Blog
    `;
    
    printBtn.addEventListener('click', function() {
        window.print();
    });
    
    // Add print button to categories
    const blogCategories = document.querySelector('.blog-categories');
    if (blogCategories) {
        blogCategories.appendChild(printBtn);
    }
    
    // Initialize blog filter
    initBlogFilter();
    
    // Handle responsive layout
    function handleResize() {
        const width = window.innerWidth;
        
        if (width < 768) {
            // Mobile adjustments
            blogCards.forEach(card => {
                card.style.minHeight = 'auto';
            });
            
            if (featuredPost) {
                featuredPost.style.gridTemplateColumns = '1fr';
            }
        } else {
            // Desktop adjustments
            blogCards.forEach(card => {
                card.style.minHeight = '480px';
            });
            
            if (featuredPost && width >= 1200) {
                featuredPost.style.gridTemplateColumns = '1fr 1fr';
            }
        }
    }
    
    // Initial call
    handleResize();
    
    // Listen for resize
    window.addEventListener('resize', handleResize);
    
    // Add keyboard navigation for category buttons
    blogCategoryBtns.forEach((btn, index) => {
        btn.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight') {
                const nextBtn = blogCategoryBtns[(index + 1) % blogCategoryBtns.length];
                nextBtn.focus();
                nextBtn.click();
            } else if (e.key === 'ArrowLeft') {
                const prevBtn = blogCategoryBtns[(index - 1 + blogCategoryBtns.length) % blogCategoryBtns.length];
                prevBtn.focus();
                prevBtn.click();
            } else if (e.key === 'Home') {
                blogCategoryBtns[0].focus();
                blogCategoryBtns[0].click();
            } else if (e.key === 'End') {
                blogCategoryBtns[blogCategoryBtns.length - 1].focus();
                blogCategoryBtns[blogCategoryBtns.length - 1].click();
            }
        });
    });
});

// Contact Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');
    const contactInfoItems = document.querySelectorAll('.contact-info-item');
    const socialLinks = document.querySelectorAll('.social-link');
    
    // Initialize form validation and submission
    function initContactForm() {
        if (contactForm) {
            // Real-time validation
            const formInputs = contactForm.querySelectorAll('input, select, textarea');
            formInputs.forEach(input => {
                input.addEventListener('blur', function() {
                    validateField(this);
                });
                
                input.addEventListener('input', function() {
                    if (this.classList.contains('invalid')) {
                        validateField(this);
                    }
                });
            });
            
            // Form submission
            contactForm.addEventListener('submit', handleFormSubmit);
        }
    }
    
    // Validate individual field
    function validateField(field) {
        const value = field.value.trim();
        const isValid = field.checkValidity();
        
        if (value === '') {
            field.classList.remove('valid', 'invalid');
            return false;
        }
        
        if (isValid) {
            field.classList.remove('invalid');
            field.classList.add('valid');
            return true;
        } else {
            field.classList.remove('valid');
            field.classList.add('invalid');
            return false;
        }
    }
    
    // Handle form submission
    function handleFormSubmit(e) {
        e.preventDefault();
        
        // Validate all fields
        const formInputs = contactForm.querySelectorAll('input, select, textarea');
        let isValid = true;
        
        formInputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            showFormStatus('Please fill in all required fields correctly.', 'error');
            return;
        }
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Disable submit button
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';
        
        // Show loading state
        showFormStatus('Sending your message...', 'info');
        
        // Simulate API call (replace with actual API endpoint)
        setTimeout(() => {
            sendEmail(data);
        }, 1500);
    }
    
    // Send email using mailto link
    function sendEmail(data) {
        const subject = `New Project Inquiry from ${data.firstName} ${data.lastName}`;
        
        const emailBody = `
Hello Prince,

I'm reaching out regarding your ${data.service} services. Here are my project details:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Service Needed: ${data.service}
Budget Range: ${data.budget}

Project Details:
${data.message}

I'd like to discuss this project further and explore how we can work together.

Looking forward to your response!

Best regards,
${data.firstName} ${data.lastName}
        `.trim();
        
        // Create mailto link
        const mailtoLink = `mailto:princecreativegraphics@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        showFormStatus('Your message has been sent successfully! I\'ll get back to you within 24 hours.', 'success');
        
        // Reset form
        setTimeout(() => {
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
                <span>Send Message</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
            `;
            
            // Hide status after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
                formStatus.className = 'form-status';
            }, 5000);
        }, 2000);
    }
    
    // Show form status message
    function showFormStatus(message, type) {
        formStatus.textContent = message;
        formStatus.className = `form-status ${type}`;
        formStatus.style.display = 'block';
        
        // Scroll to status message
        formStatus.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
    
    // Contact info item hover effects
    contactInfoItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            playHoverSound();
            
            // Add pulse animation to icon
            const icon = this.querySelector('.info-icon');
            icon.style.animation = 'pulse 1s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.info-icon');
            icon.style.animation = '';
        });
        
        // Click to copy contact info
        item.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') return;
            
            const link = this.querySelector('a');
            if (link) {
                const text = link.textContent;
                copyToClipboard(text);
                
                // Show copy feedback
                const icon = this.querySelector('.info-icon');
                const originalHTML = icon.innerHTML;
                
                icon.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 6L9 17l-5-5"/>
                    </svg>
                `;
                
                setTimeout(() => {
                    icon.innerHTML = originalHTML;
                }, 1000);
            }
        });
    });
    
    // Social link hover effects
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            playHoverSound();
        });
    });
    
    // Copy to clipboard function
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Copied to clipboard:', text);
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    }
    
    // Hover sound effect
    function playHoverSound() {
        // Optional: Add subtle hover sound
        /*
        const hoverSound = new Audio('path/to/hover-sound.mp3');
        hoverSound.volume = 0.1;
        hoverSound.play();
        */
    }
    
    // Animate stats counter
    const statValues = document.querySelectorAll('.stat-value');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statValue = entry.target;
                const value = parseFloat(statValue.textContent);
                
                if (!isNaN(value)) {
                    animateCounter(statValue, value);
                }
                
                statsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe stat values
    statValues.forEach(value => {
        statsObserver.observe(value);
    });
    
    // Animate counter
    function animateCounter(element, target) {
        let current = 0;
        const isTime = element.textContent.includes('h');
        const isPercentage = element.textContent.includes('%');
        
        let increment;
        if (isTime) {
            // For time values
            current = 0;
            increment = target / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current) + 'h';
            }, 30);
        } else if (isPercentage) {
            // For percentage values
            current = 0;
            increment = target / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current) + '%';
            }, 30);
        } else {
            // For regular numbers
            increment = target / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current) + '+';
            }, 30);
        }
    }
    
    // Form auto-save (optional)
    function initAutoSave() {
        const formInputs = contactForm.querySelectorAll('input, select, textarea');
        
        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                saveFormData();
            });
        });
        
        // Load saved data on page load
        loadFormData();
    }
    
    function saveFormData() {
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        localStorage.setItem('contactFormDraft', JSON.stringify(data));
    }
    
    function loadFormData() {
        const savedData = localStorage.getItem('contactFormDraft');
        if (savedData) {
            const data = JSON.parse(savedData);
            
            Object.keys(data).forEach(key => {
                const input = contactForm.querySelector(`[name="${key}"]`);
                if (input && data[key]) {
                    input.value = data[key];
                    validateField(input);
                }
            });
        }
    }
    
    // Clear saved data on successful submission
    contactForm.addEventListener('submit', function() {
        localStorage.removeItem('contactFormDraft');
    });
    
    // Add print button
    const printBtn = document.createElement('button');
    printBtn.className = 'submit-btn';
    printBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 6 2 18 2 18 9"/>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
            <rect x="6" y="14" width="12" height="8"/>
        </svg>
        Print Contact Info
    `;
    printBtn.style.marginTop = '20px';
    printBtn.style.width = '100%';
    
    printBtn.addEventListener('click', function() {
        window.print();
    });
    
    // Add print button to contact info sidebar
    const contactInfoSidebar = document.querySelector('.contact-info-sidebar');
    if (contactInfoSidebar) {
        contactInfoSidebar.appendChild(printBtn);
    }
    
    // Initialize everything
    initContactForm();
    initAutoSave();
    
    // Handle responsive layout
    function handleResize() {
        const width = window.innerWidth;
        
        if (width < 768) {
            // Mobile adjustments
            const contactItems = document.querySelectorAll('.contact-info-item');
            contactItems.forEach(item => {
                item.style.flexDirection = 'column';
                item.style.textAlign = 'center';
            });
        } else {
            // Desktop adjustments
            const contactItems = document.querySelectorAll('.contact-info-item');
            contactItems.forEach(item => {
                item.style.flexDirection = 'row';
                item.style.textAlign = 'left';
            });
        }
    }
    
    // Initial call
    handleResize();
    
    // Listen for resize
    window.addEventListener('resize', handleResize);
    
    // Add keyboard navigation for form
    const formElements = contactForm.querySelectorAll('input, select, textarea, button');
    formElements.forEach((element, index) => {
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Tab' && !e.shiftKey) {
                // Normal tab navigation
                return;
            }
            
            if (e.key === 'Enter' && this.tagName !== 'TEXTAREA' && this.tagName !== 'BUTTON') {
                e.preventDefault();
                const nextElement = formElements[index + 1];
                if (nextElement) {
                    nextElement.focus();
                }
            }
        });
    });
});

// Footer JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    
    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Smooth scroll to top
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Footer navigation smooth scroll
    const footerNavLinks = document.querySelectorAll('.footer-nav-link');
    footerNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobileMenu');
                    const hamburger = document.getElementById('hamburger');
                    if (mobileMenu && mobileMenu.classList.contains('open')) {
                        mobileMenu.classList.remove('open');
                        hamburger.classList.remove('open');
                        hamburger.setAttribute('aria-expanded', 'false');
                    }
                    
                    // Smooth scroll to section
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Current year in copyright
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('.footer-copyright p');
    if (copyrightElement) {
        copyrightElement.innerHTML = copyrightElement.innerHTML.replace('2024', currentYear);
    }
    
    // Add hover sound to social links
    const socialLinks = document.querySelectorAll('.footer-social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            playHoverSound();
        });
    });
    
    // Hover sound effect
    function playHoverSound() {
        // Optional: Add subtle hover sound
        /*
        const hoverSound = new Audio('path/to/hover-sound.mp3');
        hoverSound.volume = 0.1;
        hoverSound.play();
        */
    }
    
    // Footer logo animation
    const footerLogo = document.querySelector('.footer-logo');
    if (footerLogo) {
        footerLogo.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        footerLogo.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
    
    // Add current year to page load
    console.log(`Prince Creative Graphics Portfolio © ${currentYear}`);
});