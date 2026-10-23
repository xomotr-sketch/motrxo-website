(() => {
  const query = document.querySelector('#q');
  const tabsRoot = document.querySelector('#tabs');
  const nav = document.querySelector('#nav');
  const burger = document.querySelector('#burger');

  const sectionCategory = section => {
    const id = section.querySelector('.cat-h h3')?.id || '';
    return id.replace(/^h-/, '');
  };

  const applyFilter = () => {
    const tabs = [...document.querySelectorAll('#tabs .tab')];
    const sections = [...document.querySelectorAll('#panels .cat-sec')];
    const selected = document.querySelector('#tabs .tab.on')?.dataset.c || 'all';
    const term = (query?.value || '').trim().toLocaleLowerCase();
    let visible = 0;
    sections.forEach(section => {
      const category = sectionCategory(section);
      const categoryMatch = selected === 'all' || selected === category;
      let sectionVisible = false;
      section.querySelectorAll('article.cd').forEach(card => {
        const match = categoryMatch && (!term || card.textContent.toLocaleLowerCase().includes(term));
        card.hidden = !match;
        if (match) { visible += 1; sectionVisible = true; }
      });
      section.hidden = !sectionVisible;
    });
    const empty = document.querySelector('#none');
    if (empty) empty.hidden = visible !== 0;
    tabs.forEach(tab => tab.setAttribute('aria-selected', String(tab.classList.contains('on'))));
  };

  tabsRoot?.addEventListener('click', event => {
    const tab = event.target.closest('.tab');
    if (!tab || !tabsRoot.contains(tab)) return;
    tabsRoot.querySelectorAll('.tab').forEach(item => item.classList.toggle('on', item === tab));
    applyFilter();
  });
  query?.addEventListener('input', applyFilter);
  document.addEventListener('keydown', event => {
    if (event.key === '/' && document.activeElement !== query) {
      event.preventDefault(); query?.focus();
    }
    if (event.key === 'Escape' && query) { query.value = ''; applyFilter(); query.blur(); }
  });

  document.addEventListener('click', event => {
    const name = event.target.closest('.cd .pn');
    if (!name) return;
    event.preventDefault();
    const card = name.closest('.cd');
    const panel = card?.querySelector('.product-info');
    if (!panel) return;
    const open = !panel.hasAttribute('hidden');
    if (open) panel.setAttribute('hidden', '');
    else panel.removeAttribute('hidden');
    name.setAttribute('aria-expanded', String(!open));
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

  document.addEventListener('cmscontent:ready', applyFilter);
  document.querySelector('#y')?.replaceChildren(String(new Date().getFullYear()));
  applyFilter();
})();
