// Menú móvil
const btn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');
const links = menu.querySelectorAll('a');

btn.addEventListener('click', () => { menu.classList.toggle('hidden'); });
links.forEach(link => { link.addEventListener('click', () => { menu.classList.add('hidden'); }); });

// Función del formulario
async function enviarFormulario(e) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button[type="submit"]');
    const status = document.getElementById('contacto-status');

    if (btn) { btn.disabled = true; btn.innerText = 'Enviando...'; }

    try {
        const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        if (response.ok) {
            if (status) { status.classList.remove('hidden', 'text-red-500'); status.classList.add('text-emerald-600', 'mt-3'); status.innerText = '¡Mensaje enviado con éxito!'; }
            form.reset();
            if (btn) btn.innerText = 'Enviar Mensaje';
        } else {
            if (status) { status.classList.remove('hidden'); status.classList.add('text-red-500', 'mt-3'); status.innerText = 'Hubo un problema. Por favor, intentalo de nuevo.'; }
            if (btn) btn.innerText = 'Intentar de nuevo';
        }
    } catch (error) {
        if (status) { status.classList.remove('hidden'); status.classList.add('text-red-500', 'mt-3'); status.innerText = 'Error de red. Comprobá tu conexión.'; }
        if (btn) btn.innerText = 'Intentar de nuevo';
    } finally {
        if (btn) btn.disabled = false;
    }
}

// ESPERAR A QUE CARGUE TODO ===
window.addEventListener("load", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".gsap-reveal", { visibility: "visible" });

    gsap.from('.hero-anim .gsap-reveal', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "transform" 
    });

    // Función segura de activación al scrollear
    function bindScrollAnimation(selector, yOffset = 40) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                },
                y: yOffset,
                opacity: 0,
                duration: 0.7,
                ease: "power2.out",
                clearProps: "transform"
            });
        });
    }

    // Aplicar a los elementos
    bindScrollAnimation('.item-bento', 40);
    bindScrollAnimation('.timeline-card', 50);
    bindScrollAnimation('.experience-card', 40);
    bindScrollAnimation('.tag-item', 30);
    bindScrollAnimation('.project-card', 40);
    bindScrollAnimation('.design-item', 30);
    bindScrollAnimation('.contact-element', 40);
    bindScrollAnimation('.cv-cta', 30);

    // Refrescar trigger para asegurar que las posiciones son correctas
    ScrollTrigger.refresh();
});