/**
 * REAL MADRID CF — MAIN PLATFORM COORDINATOR
 * Handles navigation, mobile menu, audio toggle, GSAP scroll triggers & i18n
 */

(function () {
  'use strict';

  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

  // Initialize UI Features
  document.addEventListener('DOMContentLoaded', () => {
    initStickyHeader();
    initMobileNav();
    initSmoothScroll();
    initAudioController();
    initNewsletterForm();
    initLanguageSelector();
    initBackToTop();
    initAnimations();
  });

  /* ==========================================================================
     1. STICKY HEADER & SCROLL SPY
     ========================================================================== */
  function initStickyHeader() {
    const header = $('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      updateActiveNavLink();
    }, { passive: true });
  }

  function updateActiveNavLink() {
    const sections = $$('section[id]');
    const navLinks = $$('.nav-link');
    const scrollPos = window.scrollY + 180;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  /* ==========================================================================
     2. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  function initMobileNav() {
    const menuBtn = $('#menu-toggle-btn');
    const drawer = $('#mobile-nav-drawer');
    const closeBtn = $('#mobile-nav-close');
    const links = $$('.mobile-nav-link');

    if (!menuBtn || !drawer) return;

    function openDrawer() {
      drawer.classList.add('open');
      menuBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      drawer.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

    links.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) closeDrawer();
    });
  }

  /* ==========================================================================
     3. SMOOTH SCROLLING
     ========================================================================== */
  function initSmoothScroll() {
    $$('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /* ==========================================================================
     4. MATCHDAY AUDIO CONTROLLER
     ========================================================================== */
  function initAudioController() {
    const audioBtn = $('#audio-toggle-btn');
    const soundWaves = $('#audio-waves');
    if (!audioBtn) return;

    audioBtn.addEventListener('click', () => {
      if (!window.matchdayAudio) return;

      const isPlaying = window.matchdayAudio.toggle();
      if (isPlaying) {
        audioBtn.classList.add('playing');
        audioBtn.setAttribute('aria-label', 'Mute matchday atmosphere');
        if (soundWaves) soundWaves.classList.add('animating');
        window.notifyToast('🔊 Bernabéu Atmosphere Active • Ambient Crowd & Chords');
      } else {
        audioBtn.classList.remove('playing');
        audioBtn.setAttribute('aria-label', 'Play matchday atmosphere');
        if (soundWaves) soundWaves.classList.remove('animating');
        window.notifyToast('🔇 Matchday Audio Muted');
      }
    });
  }

  /* ==========================================================================
     5. NEWSLETTER FORM HANDLER
     ========================================================================== */
  function initNewsletterForm() {
    const form = $('#newsletter-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && emailInput.value.trim() !== '') {
        const email = emailInput.value.trim();
        emailInput.value = '';
        window.notifyToast(`¡Hala Madrid! Welcome to Madridista Mailings (${email})`);
      }
    });
  }

  /* ==========================================================================
     6. LANGUAGE SELECTOR (ES / EN)
     ========================================================================== */
  function initLanguageSelector() {
    const langBtn = $('#lang-toggle-btn');
    if (!langBtn) return;

    let currentLang = 'ES';

    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'ES' ? 'EN' : 'ES';
      langBtn.textContent = currentLang;

      if (currentLang === 'EN') {
        window.notifyToast('Display language switched to English');
      } else {
        window.notifyToast('Idioma cambiado a Español');
      }
    });
  }

  /* ==========================================================================
     7. BACK TO TOP BUTTON
     ========================================================================== */
  function initBackToTop() {
    const btt = $('#back-to-top');
    if (!btt) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        btt.classList.add('visible');
      } else {
        btt.classList.remove('visible');
      }
    }, { passive: true });

    btt.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     8. GSAP / SCROLLTRIGGER PURPOSEFUL ANIMATIONS
     ========================================================================== */
  function initAnimations() {
    // If GSAP is loaded via CDN, enhance with sophisticated scroll reveals
    if (window.gsap) {
      if (window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
      }

      // Hero timeline
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      heroTl.from('.hero-badge-tag', { opacity: 0, y: -20, duration: 0.8, delay: 0.2 })
            .from('.hero-headline', { opacity: 0, y: 30, duration: 1.0 }, '-=0.5')
            .from('.hero-lead', { opacity: 0, y: 20, duration: 0.8 }, '-=0.6')
            .from('.hero-cta-group', { opacity: 0, y: 20, duration: 0.8 }, '-=0.5')
            .from('.hero-stat-banner', { opacity: 0, y: 40, duration: 0.9 }, '-=0.5');

      // Scroll reveals for section headers
      $$('.section-header').forEach(header => {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: 'power2.out'
        });
      });

      // Trophy counters animation
      const trophyStats = $$('.stat-counter-number');
      trophyStats.forEach(stat => {
        const targetVal = parseInt(stat.getAttribute('data-target') || stat.textContent, 10);
        if (!isNaN(targetVal)) {
          gsap.from(stat, {
            scrollTrigger: {
              trigger: stat,
              start: 'top 90%',
              toggleActions: 'play none none none'
            },
            textContent: 0,
            duration: 2.2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            onUpdate: function () {
              stat.textContent = Math.ceil(this.targets()[0].textContent);
            }
          });
        }
      });
    } else {
      // Fallback native IntersectionObserver
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      $$('.section-header, .stat-item, .trophy-card').forEach(el => observer.observe(el));
    }
  }

})();
