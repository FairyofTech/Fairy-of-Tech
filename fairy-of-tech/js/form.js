// ── Contact form → Formspree ─────────────────
// Formspree envía el mensaje a iris.duran.dev@gmail.com
// Pasos para activar:
//   1. Ve a https://formspree.io y crea una cuenta gratis
//   2. Crea un nuevo form → copiá el endpoint (ej: https://formspree.io/f/xabcdefg)
//   3. Reemplazá FORMSPREE_ENDPOINT abajo con ese URL

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpqkvlav'; // ← reemplazar

async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const success = document.getElementById('form-success');

  const originalText = btn.textContent;
  btn.textContent = '✨ Enviando...';
  btn.disabled = true;

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    });

    if (res.ok) {
      // Mostrar éxito
      const lang = document.documentElement.lang || 'es';
      success.innerText = lang === 'en'
        ? '🧚‍♀️ Thank you! Your message arrived with magic. I\'ll write to you soon.'
        : '🧚‍♀️ ¡Gracias! Tu mensaje llegó con magia. Te escribo pronto.';
      success.style.display = 'block';
      form.reset();
      setTimeout(() => { success.style.display = 'none'; }, 5000);
    } else {
      throw new Error('Error en el servidor');
    }
  } catch {
    success.innerText = '⚠️ Hubo un problema. Escribime directo por WhatsApp 💬';
    success.style.display = 'block';
    success.style.borderColor = '#ffadd2';
    setTimeout(() => { success.style.display = 'none'; }, 5000);
  } finally {
    btn.textContent = originalText;
    btn.disabled = false;
  }
}
