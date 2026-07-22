/**
 * Kishore Kumar - Python Developer Portfolio
 * Core JavaScript Functions
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Theme Toggle Click Handler ---
  const themeToggleBtn = document.getElementById('theme-toggle');

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // --- Mobile Navbar Menu ---
  const hamburgerBtn = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  const toggleMobileMenu = () => {
    const isOpen = mobileNav.classList.contains('open');
    if (isOpen) {
      mobileNav.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    } else {
      mobileNav.classList.add('open');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
    }
  };

  hamburgerBtn.addEventListener('click', toggleMobileMenu);

  // Close mobile menu when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close mobile menu if clicked outside
  document.addEventListener('click', (event) => {
    const isClickInsideMenu = mobileNav.contains(event.target);
    const isClickOnHamburger = hamburgerBtn.contains(event.target);
    if (!isClickInsideMenu && !isClickOnHamburger && mobileNav.classList.contains('open')) {
      mobileNav.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // --- Scroll Effects (Sticky Header & Active Links) ---
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const handleScroll = () => {
    const scrollPos = window.scrollY;

    // Sticky header style on scroll
    if (scrollPos > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll spy: highlight active navigation item
    const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 25);

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120; // offset for sticky navbar
      const sectionId = section.getAttribute('id');

      if (isAtBottom && sectionId === 'contact') {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#contact') {
            link.classList.add('active');
          }
        });
      } else if (!isAtBottom && scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  // Run once initially to set starting state
  handleScroll();

  // --- Intersection Observer for Scroll Animations ---
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const fadeObserverOptions = {
    root: null, // viewport
    threshold: 0.1, // trigger when 10% is visible
    rootMargin: '0px 0px -50px 0px' // trigger slightly before entering view
  };

  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target); // stop observing once visible
      }
    });
  }, fadeObserverOptions);

  fadeElements.forEach(element => {
    fadeObserver.observe(element);
  });
});
