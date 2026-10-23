(() => {
  const grid = document.getElementById('news-grid');
  const empty = document.getElementById('news-empty');
  if (!grid || !empty) return;

  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  const formatDate = value => {
    if (!value) return '';
    const date = new Date(`${String(value).slice(0, 10)}T00:00:00`);
    if (Number.isNaN(date.getTime())) return value;
    return new Intl.DateTimeFormat('ar-EG', {
      year: 'numeric', month: 'long', day: 'numeric'
    }).format(date);
  };

  const renderArticle = article => {
    const card = element('article', 'news-card');
    if (article.image) {
      const image = element('img', 'news-image');
      image.src = article.image;
      image.alt = article.title || 'صورة الخبر';
      image.loading = 'lazy';
      card.append(image);
    }

    const content = element('div', 'news-content');
    if (article.date) {
      const time = element('time', 'news-date', formatDate(article.date));
      time.dateTime = article.date;
      content.append(time);
    }
    content.append(element('h3', 'news-title', article.title || ''));
    if (article.summary) content.append(element('p', 'news-summary', article.summary));

    if (article.body) {
      const details = element('details', 'news-details');
      details.append(element('summary', '', 'اقرأ التفاصيل'));
      details.append(element('p', 'news-body', article.body));
      content.append(details);
    }
    card.append(content);
    return card;
  };

  fetch('/content/news.json', { cache: 'no-store' })
    .then(response => {
      if (!response.ok) throw new Error('News could not be loaded');
      return response.json();
    })
    .then(data => {
      const articles = Array.isArray(data.articles) ? data.articles : [];
      const published = articles
        .filter(article => article && article.published !== false && article.title)
        .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
      published.forEach(article => grid.append(renderArticle(article)));
      empty.hidden = published.length > 0;
    })
    .catch(() => { empty.hidden = false; });
})();
