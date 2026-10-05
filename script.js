(() => {
  "use strict";
  const paths = {
    "arrow-right": '<path d="M4 12h16m-6-6 6 6-6 6"/>',
    "arrow-up-right": '<path d="M6 18 18 6M6 6h12v12"/>',
    "chevron-right": '<path d="m9 6 6 6-6 6"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    message: '<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 1 1 21 11.5Z"/><path d="M8 10h8M8 14h5"/>',
    play: '<path d="m9 5 10 7-10 7Z"/>',
    receipt: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2Z"/><path d="M9 7h6M9 11h6M9 15h3"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    activity: '<path d="M2 12h5l3-9 4 18 3-9h5"/>',
    wallet: '<path d="M20 8V5a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v11H5a3 3 0 0 1-3-3V6"/><path d="M20 12h-5v5h5"/><circle cx="16" cy="14.5" r=".5"/>',
    coffee: '<path d="M4 8h12v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Zm12 1h2a3 3 0 0 1 0 6h-2M2 22h18M7 2v2m5-2v2"/>',
    utensils: '<path d="M4 3v6a3 3 0 0 0 6 0V3M7 3v18M20 3c-4 1-5 5-5 9h5M20 3v18"/>',
    wine: '<path d="M7 3h10l1 5a6 6 0 0 1-12 0Zm5 11v7m-4 0h8M6 8h12"/>',
    burger: '<path d="M3 9a9 7 0 0 1 18 0ZM3 14l4 2 5-2 5 2 4-2M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2ZM2 12h20"/><path d="M9 5h.01M14 6h.01"/>',
    users: '<circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m3 11v-3a6 6 0 0 0-3-5"/>',
    menu: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h8M8 15h5"/>',
    box: '<path d="m12 3 9 5-9 5-9-5Zm-9 5v10l9 5 9-5V8M12 13v10M7 5.8l9 5"/>',
    tag: '<path d="M3 3h8l10 10-8 8L3 11Z"/><circle cx="7.5" cy="7.5" r="1"/>',
    "plus-circle": '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    chart: '<path d="M3 3v18h18M7 15V9m5 6V6m5 9v-4"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    search: '<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',
    settings: '<path d="M4 7h16M4 17h16"/><circle cx="8" cy="7" r="3" fill="white"/><circle cx="16" cy="17" r="3" fill="white"/>'
  };
  const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.grid}</svg>`;
  const hydrateIcons = root => root.querySelectorAll("[data-icon]").forEach(el => { el.innerHTML = icon(el.dataset.icon); });
  // Arquivos copiados de capturas reais, sem recriação de interfaces ou dados.
  const captures = {
    dashboard: { file: 'dashboard.png', width: 1918, height: 862, alt: 'Dashboard real do ComandaJá, com indicadores de pedidos e fluxo de produção', description: 'O dashboard do ComandaJá, com indicadores e acompanhamento da produção.' },
    comandas: { file: 'comandas.png', width: 1280, height: 850, alt: 'Tela real de comandas do ComandaJá, com estados livre e ativa', description: 'Captura real do controle de comandas na loja de demonstração.' },
    pedidos: { file: 'pedidos.png', width: 1280, height: 900, alt: 'Tela real de registro de pedidos, com produtos e resumo da comanda', description: 'Registro de pedidos e resumo da comanda, como aparecem no sistema.' },
    cardapio: { file: 'cardapio.png', width: 1280, height: 850, alt: 'Tela real do cardápio do ComandaJá, com produtos, categorias e promoções', description: 'O cardápio do sistema, com seus produtos, categorias e promoções.' },
    relatorios: { file: 'relatorios.png', width: 1280, height: 850, alt: 'Tela real de relatórios do ComandaJá, com filtros e indicadores de resultados', description: 'Filtros e indicadores da área de relatórios, em uma captura real.' }
  };
  const captureImage = document.getElementById('system-capture');
  const captureLink = document.getElementById('capture-link');
  const captureOpen = document.getElementById('capture-open');
  const tabs = [...document.querySelectorAll("[data-screen]")];
  const selectTab = button => {
    const selected = button.dataset.screen;
    tabs.forEach(tab => { tab.setAttribute("aria-selected", String(tab === button)); tab.tabIndex = tab === button ? 0 : -1; });
    const capture = captures[selected];
    const url = 'assets/sistema/' + capture.file;
    captureImage.src = url;
    captureImage.alt = capture.alt;
    captureImage.width = capture.width;
    captureImage.height = capture.height;
    captureLink.href = url;
    captureOpen.href = url;
    captureLink.setAttribute('aria-label', 'Abrir ' + capture.alt.toLowerCase() + ' em tamanho original');
    document.getElementById("demo-description").textContent = capture.description;
    document.getElementById("demo-panel").setAttribute("aria-labelledby", button.id);
  };
  tabs.forEach((button, index) => {
    button.addEventListener("click", () => selectTab(button));
    button.addEventListener("keydown", event => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); selectTab(tabs[next]); tabs[next].focus(); }
    });
  });
  hydrateIcons(document);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        Object.values(captures).forEach(capture => { const image = new Image(); image.src = 'assets/sistema/' + capture.file; });
        observer.disconnect();
      }
    }, { rootMargin: '200px' });
    observer.observe(document.getElementById('telas'));
  }
  const menu = document.querySelector(".menu-toggle");
  const navigation = document.getElementById("navigation");
  const closeMenu = () => { navigation.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); menu.setAttribute("aria-label", "Abrir menu"); };
  menu.addEventListener("click", () => {
    const open = navigation.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  });
  navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
  window.matchMedia("(min-width: 801px)").addEventListener("change", event => { if (event.matches) closeMenu(); });
  const config = window.COMANDAJA_CONFIG || {};
  const rawNumber = String(config.whatsappNumber || "");
  const phone = rawNumber.replace(/\D/g, "");
  const configured = !/[a-z]/i.test(rawNumber) && /^\d{10,15}$/.test(phone);
  const dialog = document.getElementById("contact-dialog");
  document.querySelectorAll("[data-whatsapp]").forEach(link => {
    if (configured) link.href = `https://wa.me/${phone}?text=${encodeURIComponent(config.whatsappMessage || "Olá! Quero conhecer o ComandaJá.")}`;
    else link.addEventListener("click", event => { event.preventDefault(); dialog.showModal(); });
  });
  dialog.querySelectorAll("button").forEach(button => button.addEventListener("click", () => dialog.close()));
  dialog.addEventListener("click", event => { if (event.target === dialog) { const bounds = dialog.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close(); } });
  document.getElementById("year").textContent = new Date().getFullYear();
})();
