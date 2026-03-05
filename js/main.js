// ============================
// MAIN — Lógica general del portfolio
// ============================

// ── Animación reveal on scroll ──
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // deja de observar una vez visible
        }
    });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));


// ── Formulario de contacto ──
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = '✓ Mensaje enviado';
    btn.style.background = '#10b981';
    btn.disabled = true;
});

/* 
---

La estructura de carpetas queda así:

mi-portfolio/
├── index.html
├── css/
│   ├── base.css
│   ├── components.css
│   ├── sections.css
│   └── responsive.css
└── js/
    └── main.js

```
*/