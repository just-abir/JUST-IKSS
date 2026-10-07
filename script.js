// Mobile menu toggle: ☰ button chaple menu khole/bondho hoy
  document.getElementById('burger').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('open');
  });

  // Scroll reveal: element screen-e dhukle .show class lagao
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// ---- Donate page: copy button ----
document.querySelectorAll('.copy').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(btn.dataset.copy);   // number clipboard-e copy hoy
    const old = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => (btn.textContent = old), 1500);
  });
});

// ---- Donate page: method card select (Step 1) ----
document.querySelectorAll('.method').forEach((card) => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.method').forEach((c) => c.classList.remove('active'));
    card.classList.add('active');
  });
});

// ---- Donate page: record form (Step 3). Ekhon backend nai, tai shudhu message dekhay ----
const form = document.getElementById('record');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();                                 // page reload hote dey na
    document.getElementById('thanks').style.display = 'block';
    form.reset();
  });
}
