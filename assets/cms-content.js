(() => {
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  const setText = (selector, value, root = document) => {
    const node = root.querySelector(selector);
    if (node && value !== undefined && value !== null) node.textContent = value;
    return node;
  };

  const makeIcon = (path) => {
    const svg = el('svg', 'i');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('viewBox', '0 0 24 24');
    const shape = document.createElement('path');
    shape.setAttribute('d', path);
    svg.append(shape);
    return svg;
  };

  const slug = (value, fallback) => {
    const key = String(value || '').normalize('NFKD').toLocaleLowerCase()
      .replace(/[^\p{Letter}\p{Number}]+/gu, '-')
      .replace(/^-+|-+$/g, '');
    return key || fallback;
  };

  const safeImage = (value) => {
    if (!value) return '';
    try {
      const url = new URL(value, window.location.origin);
      return ['http:', 'https:'].includes(url.protocol) ? url.href : '';
    } catch (_) { return ''; }
  };

  const waHref = (number, message) => {
    const digits = String(number || '').replace(/\D/g, '');
    return `https://wa.me/${digits}?text=${encodeURIComponent(message || '')}`;
  };

  const setHeading = (section, data) => {
    if (!section || !data) return;
    setText('.sec-head .kicker', data.kicker, section);
    setText('.sec-head h2', data.title, section);
    setText('.sec-head p', data.description, section);
  };

  const renderSimpleCards = (container, data, type) => {
    if (!container) return;
    container.replaceChildren();
    (Array.isArray(data) ? data : []).forEach((item, index) => {
      if (type === 'stats') {
        const stat = el('div');
        stat.append(el('dt', '', item.value || ''), el('dd', '', item.label || ''));
        container.append(stat);
        return;
      }
      const li = el('li');
      if (type === 'feature') {
        li.append(makeIcon('M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM8.5 12l2.5 2.5 4.5-5'));
        const copy = el('div');
        copy.append(el('strong', '', item.title || ''));
        copy.append(el('span', '', item.description || ''));
        li.append(copy);
      } else if (type === 'step') {
        const number = el('span', 'num', String(index + 1).padStart(2, '0'));
        li.append(number, makeIcon('M13 2L4 14h7l-1 8 9-12h-7z'));
        li.append(el('h3', '', item.title || ''), el('p', '', item.description || ''));
      } else if (type === 'why') {
        const copy = el('div');
        copy.append(el('h3', '', item.title || ''), el('p', '', item.description || ''));
        li.append(makeIcon('M5 12l5 5L20 7'), copy);
      } else {
        li.append(makeIcon('M5 12l5 5L20 7'), el('h3', '', item.title || ''), el('p', '', item.description || ''));
      }
      container.append(li);
    });
  };

  const setGlobalContact = (settings, sections) => {
    const brand = settings.brand || {};
    const contact = sections.contact || {};
    const number = String(brand.whatsappNumber || '').replace(/\D/g, '');
    const phone = String(brand.phoneNumber || number).replace(/\D/g, '');
    document.querySelectorAll('a[data-tel]').forEach(link => { link.href = `tel:+${phone}`; });
    document.querySelectorAll('[data-telnum]').forEach(node => { node.textContent = brand.phoneDisplay || `+${phone}`; });

    const generic = contact.whatsappMessage || 'مرحبًا MOTRXO، أريد الاستفسار عن الاشتراكات.';
    const trial = contact.trialMessage || generic;
    const catalog = contact.emptyCatalogMessage || generic;
    [['hdwa', generic], ['herowa', trial], ['ctawa', generic], ['fab', generic], ['nonewa', catalog]].forEach(([id, message]) => {
      const link = document.getElementById(id);
      if (link) link.href = waHref(number, message);
    });
  };

  const renderProducts = (products, catalog, settings, sections) => {
    const tabs = document.getElementById('tabs');
    const panels = document.getElementById('panels');
    if (!tabs || !panels) return;
    const categories = Array.isArray(products.categories) ? products.categories : [];
    tabs.replaceChildren();
    panels.replaceChildren();

    const allTab = el('button', 'tab on', catalog.allLabel || 'الكل');
    allTab.type = 'button';
    allTab.dataset.c = 'all';
    allTab.setAttribute('aria-selected', 'true');
    tabs.append(allTab);

    const phone = (settings.brand || {}).whatsappNumber;
    const categoriesForFooter = [];
    categories.forEach((category, index) => {
      const categoryName = category.title || `قسم ${index + 1}`;
      const categoryKey = slug(categoryName, `category-${index + 1}`);
      const categoryProducts = Array.isArray(category.products) ? category.products : [];
      categoriesForFooter.push({ label: categoryName, url: '#shop' });

      const tab = el('button', 'tab', categoryName);
      tab.type = 'button';
      tab.dataset.c = categoryKey;
      tab.setAttribute('aria-selected', 'false');
      tabs.append(tab);

      const section = el('section', 'cat-sec');
      section.dataset.category = categoryKey;
      const header = el('header', 'cat-h');
      const iconWrap = el('span', 'cat-ic');
      iconWrap.append(makeIcon('M4 5h16v14H4zM8 9h8M8 13h5'));
      const heading = el('div');
      const h3 = el('h3', '', categoryName);
      h3.id = `h-${categoryKey}`;
      heading.append(h3, el('p', '', category.description || ''));
      header.append(iconWrap, heading, el('span', 'cnt', `${categoryProducts.length} منتج`));
      section.append(header);

      const grid = el('div', 'grid');
      categoryProducts.forEach(product => {
        const card = el('article', 'cd');
        const top = el('div', 'cd-top');
        const imageSrc = safeImage(product.image);
        if (imageSrc) {
          const imageWrap = el('div', 'lg');
          const image = el('img');
          image.src = imageSrc;
          image.alt = product.title || '';
          image.loading = 'lazy';
          imageWrap.append(image);
          top.append(imageWrap);
        }
        const titleWrap = el('div', 'ct');
        const h = el('h3');
        const titleLink = el('a', 'pn', product.title || '');
        titleLink.href = '#';
        titleLink.dataset.productUrl = product.productUrl || '';
        titleLink.setAttribute('aria-expanded', 'false');
        h.append(titleLink);
        titleWrap.append(h, el('span', 'cat', categoryName));
        top.append(titleWrap);
        if (product.badge) top.append(el('span', 'badge', product.badge));
        card.append(top);
        if (product.description) card.append(el('p', 'desc', product.description));

        if (product.price) {
          const price = el('div', 'product-price');
          price.append(el('span', '', 'السعر'), el('strong', '', product.price));
          card.append(price);
        }

        const info = el('div', 'product-info');
        info.hidden = true;
        info.append(el('strong', '', 'معلومات المنتج'));
        if (product.details) info.append(el('p', '', product.details));
        else if (product.description) info.append(el('p', '', product.description));
        const ask = el('a', 'btn btn-ghost btn-block', 'استفسر عن المنتج عبر واتساب');
        ask.href = waHref(phone, `مرحبًا MOTRXO، أريد الاستفسار عن برنامج ${product.title || ''}.`);
        ask.rel = 'noopener';
        ask.target = '_blank';
        info.append(ask);
        card.append(info);

        const footer = el('div', 'cd-bot');
        const actions = el('div', 'cd-acts');
        const primary = el('a', 'btn btn-block', product.primaryLabel || 'اطلب الآن');
        primary.dataset.waAction = 'buy';
        primary.href = waHref(phone, `مرحبًا MOTRXO، أريد الشراء لبرنامج ${product.title || ''}.`);
        primary.rel = 'noopener';
        primary.target = '_blank';
        actions.append(primary);
        const action = product.secondaryAction || 'none';
        if (action !== 'none') {
          const labels = { trial: 'اطلب تجربة البرنامج', install: 'اطلب التثبيت', ask: 'استفسر عن المنتج' };
          const messages = {
            trial: `مرحبًا MOTRXO، أريد التجربة لبرنامج ${product.title || ''}.`,
            install: `مرحبًا MOTRXO، أريد التثبيت لبرنامج ${product.title || ''}.`,
            ask: `مرحبًا MOTRXO، أريد الاستفسار عن برنامج ${product.title || ''}.`
          };
          const secondary = el('a', 'btn btn-ghost btn-block', product.secondaryLabel || labels[action] || labels.ask);
          secondary.dataset.waAction = action;
          secondary.href = waHref(phone, messages[action] || messages.ask);
          secondary.rel = 'noopener';
          secondary.target = '_blank';
          actions.append(secondary);
        }
        footer.append(actions);
        card.append(footer);
        grid.append(card);
      });
      section.append(grid);
      panels.append(section);
    });

    const footerCats = document.getElementById('ftcats');
    if (footerCats) {
      footerCats.replaceChildren();
      const configured = sections.footer && Array.isArray(sections.footer.categories) ? sections.footer.categories : categoriesForFooter;
      configured.forEach(item => {
        const a = el('a', '', item.label);
        a.href = item.url || '#shop';
        footerCats.append(a);
      });
    }
    document.dispatchEvent(new CustomEvent('cmscontent:ready'));
  };

  const renderDownloads = (data) => {
    const section = document.getElementById('downloads');
    const grid = document.getElementById('dlgrid');
    if (!section || !grid) return;
    setHeading(section, data);
    grid.replaceChildren();
    const items = Array.isArray(data.items) ? data.items : [];
    items.forEach(item => {
      const card = el('article', 'dl-card');
      card.append(makeIcon('M12 3v12m0 0l-4-4m4 4l4-4M5 19h14'));
      card.append(el('h3', '', item.title || ''));
      if (item.description) card.append(el('p', '', item.description));
      const link = el('a', 'btn btn-ghost', 'تنزيل الملف');
      link.href = item.url || '#';
      link.setAttribute('download', '');
      card.append(link);
      grid.append(card);
    });
    const visible = Boolean(data.enabled && items.length);
    section.hidden = !visible;
    const navLink = document.querySelector('#nav [href="#downloads"]');
    if (navLink) navLink.hidden = !visible;
  };

  const renderNavigation = (settings, sections) => {
    const showDownloads = Boolean(sections.downloads && sections.downloads.enabled && (sections.downloads.items || []).length);
    const buildLinks = (container, links) => {
      if (!container) return;
      container.replaceChildren();
      (Array.isArray(links) ? links : []).forEach((item, index) => {
        const link = el('a', index === 0 && item.url === '#top' ? 'on' : '', item.label || '');
        link.href = item.url || '#';
        if (item.url === '#downloads') link.hidden = !showDownloads;
        container.append(link);
      });
    };
    buildLinks(document.getElementById('nav'), settings.navigation);
    const integrationNav = document.getElementById('nav');
    if (integrationNav && !integrationNav.querySelector('[data-motrxo-integration-nav]')) {
      const portal = el('a', 'motrxo-nav-extra', 'دليل رموز الأعطال');
      portal.href = '/dtc/'; portal.dataset.motrxoIntegrationNav = 'portal';
      const service = el('a', 'motrxo-nav-extra', 'جدول الخدمة');
      service.href = '#service-schedule'; service.dataset.motrxoIntegrationNav = 'service';
      integrationNav.append(portal, service);
    }
    buildLinks(document.querySelector('.ft-nav'), settings.footerNavigation);
  };

  const applyContent = (settings, sections, products) => {
    const hero = settings.hero || {};
    const brand = settings.brand || {};
    const meta = settings.seo || {};
    const about = sections.about || {};
    const catalog = sections.catalog || {};
    const process = sections.process || {};
    const why = sections.why || {};
    const faq = sections.faq || {};
    const contact = sections.contact || {};
    const footer = sections.footer || {};

    if (meta.title) document.title = meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description && meta.description) description.content = meta.description;
    document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach(node => { if (meta.title) node.content = meta.title; });
    document.querySelectorAll('meta[property="og:description"], meta[name="twitter:description"]').forEach(node => { if (meta.description) node.content = meta.description; });
    if (brand.logo) document.querySelectorAll('.logo img').forEach(img => { const src = safeImage(brand.logo); if (src) img.src = src; });
    setText('.skip', brand.skipText);
    setText('#hdwa', brand.headerButtonText);

    const themes = {
      blue: ['#f4f7fb', '#eaf0f8'],
      white: ['#ffffff', '#f2f5f9'],
      warm: ['#fbf7ef', '#f1eadd'],
      mint: ['#f2f8f5', '#e4f0e9']
    };
    const theme = themes[brand.backgroundTheme] || themes.blue;
    document.documentElement.style.setProperty('--bg', theme[0]);
    document.documentElement.style.setProperty('--bg2', theme[1]);

    const heroImage = safeImage(hero.backgroundImage);
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg && heroImage) {
      let image = document.getElementById('hero-bg-image');
      if (!image) {
        image = el('img', 'hero-bg-image');
        image.id = 'hero-bg-image';
        image.alt = '';
        image.setAttribute('aria-hidden', 'true');
        heroBg.prepend(image);
      }
      image.src = heroImage;
      image.hidden = false;
    }

    setText('.hero .eyebrow [data-i="eyebrow"]', hero.eyebrow);
    setText('.hero h1 [data-i="h1a"]', hero.title);
    setText('.hero h1 [data-i="h1b"]', hero.highlight);
    setText('.hero .lead', hero.lead);
    setText('.hero-cta [data-i="browse"]', hero.browseText);
    setText('#herowa', hero.trialText);
    renderSimpleCards(document.getElementById('stats'), hero.stats, 'stats');
    renderSimpleCards(document.getElementById('feats'), hero.features, 'feature');

    const brandTrack = document.getElementById('brands');
    if (brandTrack && Array.isArray(brand.brands)) {
      brandTrack.replaceChildren();
      [...brand.brands, ...brand.brands].forEach(name => {
        const item = el('span', 'br');
        item.append(el('b', '', name));
        brandTrack.append(item);
      });
    }

    setHeading(document.getElementById('about'), about);
    renderSimpleCards(document.getElementById('abg'), about.cards, 'about');
    setHeading(document.getElementById('shop'), catalog);
    const search = document.getElementById('q');
    if (search && catalog.searchPlaceholder) search.placeholder = catalog.searchPlaceholder;
    setText('#none p', catalog.emptyMessage);
    setText('#nonewa', catalog.emptyLinkText);

    renderNavigation(settings, sections);
    renderProducts(products || {}, catalog, settings, sections);
    renderDownloads(sections.downloads || {});

    setHeading(document.getElementById('how'), process);
    renderSimpleCards(document.getElementById('steps'), process.items, 'step');
    setHeading(document.getElementById('why'), why);
    renderSimpleCards(document.getElementById('whyg'), why.items, 'why');
    setHeading(document.getElementById('faq'), faq);
    const qa = document.getElementById('qa');
    if (qa) {
      qa.replaceChildren();
      (Array.isArray(faq.items) ? faq.items : []).forEach((item, index) => {
        const details = el('details');
        const summary = el('summary', '', item.question || '');
        summary.append(el('span', 'pm'));
        details.append(summary, el('p', '', item.answer || ''));
        if (index === 0) details.open = true;
        qa.append(details);
      });
    }

    const contactSection = document.getElementById('contact');
    setText('h2', contact.title, contactSection);
    setText('.cta-in p', contact.description, contactSection);
    const trust = document.getElementById('trust');
    if (trust) {
      trust.replaceChildren();
      (Array.isArray(contact.trust) ? contact.trust : []).forEach(label => {
        const li = el('li');
        li.append(makeIcon('M5 12l5 5L20 7'), document.createTextNode(label));
        trust.append(li);
      });
    }
    setText('#ctawa [data-i="waSmall"]', contact.whatsappButtonText);
    setText('#contact a[data-tel] [data-i="call"]', contact.callButtonText);

    setText('.ft-brand p', footer.description, document.querySelector('.ft'));
    setText('.ft-bot [data-i="ftNote"]', footer.note);
    setGlobalContact(settings, sections);

    const news = sections.news || {};
    const newsSection = document.getElementById('news');
    setHeading(newsSection, news);
    setText('#news-empty', news.emptyMessage);
  };

  Promise.all(['settings', 'sections', 'products'].map(name =>
    fetch(`/content/${name}.json`, { cache: 'no-store' }).then(response => {
      if (!response.ok) throw new Error(`${name} content unavailable`);
      return response.json();
    })
  )).then(([settings, sections, products]) => applyContent(settings, sections, products))
    .catch(error => console.warn('CMS content could not be loaded; using page defaults.', error));
})();
