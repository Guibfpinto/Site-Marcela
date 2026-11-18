// ====== CONFIGURAÇÕES — EDITE AQUI ======
const CONFIG = {
  whatsapp: '5527999109182',               // DDI 55 + DDD 27 + número (só dígitos)
  telefoneExibicao: '(27) 99910-9182',      // como será exibido no site
  instagram: 'hm_limpezas',              // usuário sem @
  mensagemPadrao: 'Olá! Vim pelo site e gostaria de um orçamento de limpeza pós-obra.'
};
// ========================================

const linkWhats = (msg) =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg || CONFIG.mensagemPadrao)}`;

document.querySelectorAll('.js-whats').forEach(a => {
  a.href = linkWhats();
  a.target = '_blank';
  a.rel = 'noopener';
});
document.querySelectorAll('.js-phone').forEach(a => a.textContent = CONFIG.telefoneExibicao);
document.querySelectorAll('.js-insta').forEach(a => {
  a.href = `https://instagram.com/${CONFIG.instagram}`;
  if (a.textContent.startsWith('@')) a.textContent = '@' + CONFIG.instagram;
});

// Menu mobile
const nav = document.getElementById('nav');
document.getElementById('menuToggle').addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Formulário -> WhatsApp
document.getElementById('formOrcamento').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.target;
  const msg =
    `Olá! Gostaria de um orçamento.\n\n` +
    `*Nome:* ${f.nome.value}\n` +
    `*Local:* ${f.bairro.value}\n` +
    `*Serviço:* ${f.servico.value}\n` +
    `*Metragem:* ${f.metragem.value || '-'}\n` +
    `*Detalhes:* ${f.msg.value || '-'}`;
  window.open(linkWhats(msg), '_blank');
});

document.getElementById('ano').textContent = new Date().getFullYear();
