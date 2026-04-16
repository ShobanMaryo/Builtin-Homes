/* ============================================================
   script.js — Builtin Homes Global JavaScript
   ============================================================ */

// ── Navbar: scroll behaviour ──────────────────────────────
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const fabTop = document.querySelector('.fab-top');

const isHomePage =
  location.pathname.endsWith("index.html") ||
  location.pathname === "/" ||
  location.pathname === "";

window.addEventListener('scroll', () => {
  if (!navbar) return;

  if (!isHomePage) {
    navbar.classList.add('scrolled');
    fabTop?.classList.add('show');
    return;
  }

  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
    fabTop?.classList.add('show');
  } else {
    navbar.classList.remove('scrolled');
    fabTop?.classList.remove('show');
  }
});

// ── Mobile menu toggle ─────────────────────────────────────
navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks?.classList.toggle('open');
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navToggle?.classList.remove('open');
    navLinks?.classList.remove('open');
  });
});

// ── Active nav link highlight ──────────────────────────────
(function setActiveNav() {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href.includes(current) || (current === '' && href.includes('index'))) {
      link.classList.add('active');
    }
  });
})();

// ── Scroll-to-top ──────────────────────────────────────────
const fabTopBtn = document.querySelector('.fab-top');
fabTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Fade-in on scroll (Intersection Observer) ──────────────
const fadeEls = document.querySelectorAll('.fade-in');
if (fadeEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach(el => observer.observe(el));
}

// ── Counter animation ──────────────────────────────────────
function animateCounter(el, target, duration = 1800) {
  let start = 0;
  const increment = target / (duration / 16);
  const step = () => {
    start += increment;
    if (start < target) {
      el.textContent = Math.floor(start) + (el.dataset.suffix || '');
      requestAnimationFrame(step);
    } else {
      el.textContent = target + (el.dataset.suffix || '');
    }
  };
  requestAnimationFrame(step);
}

const counters = document.querySelectorAll('.counter');
if (counters.length) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        animateCounter(el, target);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));
}

// ── Project filter tabs (projects page) ───────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.style.display = match ? '' : 'none';
      if (match) {
        card.style.animation = 'fadeInUp 0.4s ease forwards';
      }
    });
  });
});

// ── Lightbox / Modal ───────────────────────────────────────
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.project-view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!modal) return;
    const card = btn.closest('.project-card');
    document.getElementById('modal-title').textContent = card.dataset.title || '';
    document.getElementById('modal-category').textContent = card.dataset.category || '';
    document.getElementById('modal-description').textContent = card.dataset.desc || '';
    document.getElementById('modal-area').textContent = card.dataset.area || '—';
    document.getElementById('modal-year').textContent = card.dataset.year || '—';
    document.getElementById('modal-location').textContent = card.dataset.location || '—';
    const imgEl = document.getElementById('modal-img');
    if (imgEl) imgEl.src = card.dataset.img || '';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

modalClose?.addEventListener('click', closeModal);
modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

function closeModal() {
  modal?.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ── Contact form ───────────────────────────────────────────
const contactForm = document.getElementById('contact-form');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    contactForm.style.display = 'none';
    document.getElementById('form-success').style.display = 'flex';
  }, 1200);
});

// ── Testimonial auto-scroll (home page) ───────────────────
let testimonialIndex = 0;
const testimonialTrack = document.querySelector('.testimonial-track');
const testimonialDots = document.querySelectorAll('.testimonial-dot');
const totalTestimonials = testimonialDots.length;

function goToTestimonial(index) {
  testimonialIndex = (index + totalTestimonials) % totalTestimonials;
  if (testimonialTrack) {
    testimonialTrack.style.transform = `translateX(-${testimonialIndex * 100}%)`;
  }
  testimonialDots.forEach((d, i) => d.classList.toggle('active', i === testimonialIndex));
}

testimonialDots.forEach((dot, i) => {
  dot.addEventListener('click', () => goToTestimonial(i));
});

if (totalTestimonials > 1) {
  setInterval(() => goToTestimonial(testimonialIndex + 1), 5000);
}

// ── Keyframe animation injection ──────────────────────────
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(styleSheet);
