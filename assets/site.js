(() => {
  const cards = [...document.querySelectorAll('#panels article.cd')];
  const sections = [...document.querySelectorAll('#panels .cat-sec')];
  const query = document.querySelector('#q');
  const tabs = [...document.querySelectorAll('#tabs .tab')];
  const nav = document.querySelector('#nav');
  const burger = document.querySelector('#burger');

  const sectionCategory = section => {
    const id = section.querySelector('.cat-h h3')?.id || '';
    return id.replace(/^h-/, '');
  };

  const applyFilter = () => {
    const selected = document.querySelector('#tabs .tab.on')?.dataset.c || 'all';
    const term = (query?.value || '').trim().toLocaleLowerCase();
    let visible = 0;
    sections.forEach(section => {
      const category = sectionCategory(section);
      const categoryMatch = selected === 'all' || selected === category;
      let sectionVisible = false;
      section.querySelectorAll('article.cd').forEach(card => {
        const text = card.textContent.toLocaleLowerCase();
        const match = categoryMatch && (!term || text.includes(term));
        card.hidden = !match;
        if (match) { visible += 1; sectionVisible = true; }
      });
      section.hidden = !sectionVisible;
    });
    const empty = document.querySelector('#none');
    if (empty) empty.hidden = visible !== 0;
  };

  tabs.forEach(tab => tab.addEventListener('click', () => {
    tabs.forEach(t => {
      const active = t === tab;
      t.classList.toggle('on', active);
      t.setAttribute('aria-selected', String(active));
    });
    applyFilter();
  }));
  query?.addEventListener('input', applyFilter);
  document.addEventListener('keydown', event => {
    if (event.key === '/' && document.activeElement !== query) {
      event.preventDefault(); query?.focus();
    }
    if (event.key === 'Escape' && query) { query.value = ''; applyFilter(); query.blur(); }
  });
  burger?.addEventListener('click', () => {
    const open = nav?.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(Boolean(open)));
  });
  nav?.addEventListener('click', event => {
    if (event.target.closest('a')) {
      nav.classList.remove('open');
      burger?.setAttribute('aria-expanded', 'false');
    }
  });
  document.querySelector('#y')?.replaceChildren(String(new Date().getFullYear()));
  applyFilter();
})();
