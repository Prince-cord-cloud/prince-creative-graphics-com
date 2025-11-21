// Section 1 JS: hamburger toggle + initial animations

document.addEventListener('DOMContentLoaded', () => {
  // add loaded class to trigger entry animations
  document.body.classList.add('loaded');

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const navList = document.getElementById('navList');

  function closeMobileMenu(){
    hamburger.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden','true');
    mobileMenu.style.display = 'none';
    hamburger.setAttribute('aria-expanded','false');
  }

  function openMobileMenu(){
    hamburger.classList.add('open');
    mobileMenu.setAttribute('aria-hidden','false');
    mobileMenu.style.display = 'block';
    hamburger.setAttribute('aria-expanded','true');
  }

  // initial mobile menu state
  if(window.innerWidth <= 1000){
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'none';
  }

  hamburger.addEventListener('click', () => {
    if(hamburger.classList.contains('open')){
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // close menu when clicking a mobile link
  document.querySelectorAll('.mobile-link').forEach(link=>{
    link.addEventListener('click', ()=> closeMobileMenu());
  });

  // close mobile menu on resize to desktop
  window.addEventListener('resize', () => {
    if(window.innerWidth > 1000){
      closeMobileMenu();
    }
  });

  // keyboard esc closes mobile menu
  window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeMobileMenu();
  });

});
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.service-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});



const filterBtns = document.querySelectorAll('.filter-btn');
const workItems = document.querySelectorAll('.work-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    workItems.forEach(item => {
      if (filter === 'all' || item.dataset.category.includes(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});


const skillElements = document.querySelectorAll('.skill');

function animateSkillBars() {
  const triggerBottom = window.innerHeight * 0.9;

  skillElements.forEach(skill => {
    const barTop = skill.getBoundingClientRect().top;
    const fill = skill.querySelector('.fill');
    const percent = skill.getAttribute('data-skill');

    if (barTop < triggerBottom) {
      fill.style.width = percent + '%';
    } else {
      fill.style.width = '0%';
    }
  });
}

window.addEventListener('scroll', animateSkillBars);
animateSkillBars();

// Smooth scroll with offset for fixed header
document.querySelectorAll('a.nav-link, a.mobile-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1); // remove #
    const targetSection = document.getElementById(targetId);
    const headerOffset = 100; // height of your header
    const elementPosition = targetSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');
    if (mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    }
  });
});
// ======== Testimonial Slider ========
let slideIndex = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
  });
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Dot click functionality
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    slideIndex = i;
    showSlide(slideIndex);
  });
});


