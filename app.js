const codes = {
  P0122: {
    title: "إشارة منخفضة في دائرة حساس الخانق A",
    family: "مجموعة نقل الحركة · P",
    system: "engine",
    severity: "medium",
    severityLabel: "متوسط — افحص قريبًا",
    summary: "سجّل كمبيوتر السيارة جهدًا أقل من النطاق المتوقع في دائرة حساس موضع الخانق أو الدواسة A. قد تختلف نقطة القياس وطريقة الفحص بحسب طراز السيارة.",
    symptoms: ["ظهور لمبة فحص المحرك", "استجابة متقطعة أو ضعيفة لدواسة الوقود", "تذبذب سرعة المحرك أو صعوبة في الخمول", "قد تدخل السيارة في وضع حماية محدود القدرة"],
    causes: ["اتساخ أو تلف في حساس موضع الخانق أو الدواسة", "فيشة مرتخية أو تآكل في أطراف التوصيل", "قطع أو قصر في أسلاك الإشارة أو التغذية", "خلل في مرجع الجهد أو التأريض؛ ونادرًا في وحدة التحكم"],
    diagnosis: [
      ["سجّل بيانات العطل أولًا", "اقرأ بيانات التجميد والرموز المصاحبة بجهاز فحص متوافق قبل مسح الذاكرة."],
      ["افحص التوصيلات بصريًا", "تحقق من الفيش والأسلاك والتأريض بحثًا عن ارتخاء أو تآكل أو تلف واضح."],
      ["قارن قراءة الحساس بالمواصفة", "راقب بيانات الحساس الحية واتبع مخطط وقيم المصنع الخاصة برقم الهيكل."],
      ["اختبر الدائرة قبل استبدال القطع", "قِس التغذية والإشارة والاستمرارية وفق إجراء الشركة، ثم أعد الفحص بعد الإصلاح." ]
    ],
    repair: ["أصلح التوصيل أو السلك المتضرر باستخدام طريقة إصلاح معتمدة.", "نظّف مجموعة الخانق فقط إذا أوصى دليل المصنع بذلك، ثم نفّذ تهيئة الحساس عند الحاجة.", "لا تستبدل الحساس أو وحدة التحكم قبل التحقق من التغذية والتأريض والبيانات الحية."],
    warning: "قد تتأثر استجابة دواسة الوقود. إذا فقدت السيارة القدرة أو أصبحت غير آمنة للقيادة، أوقفها في مكان آمن واطلب فحصًا فنيًا.",
    related: ["P0120", "P0121", "P0123", "P0220"]
  },
  P0300: {
    title: "اختلال احتراق عشوائي أو متعدد الأسطوانات",
    family: "مجموعة نقل الحركة · P",
    system: "engine",
    severity: "high",
    severityLabel: "مرتفع — افحص سريعًا",
    summary: "رصدت وحدة التحكم حالات احتراق غير منتظمة في أكثر من أسطوانة أو من دون حصرها بأسطوانة واحدة. التشخيص يعتمد على بيانات السيارة والرموز المصاحبة.",
    symptoms: ["اهتزاز أو تقطيع أثناء عمل المحرك", "ضعف في التسارع أو صعوبة تشغيل", "زيادة استهلاك الوقود", "وميض لمبة المحرك عند حدوث تقطيع شديد"],
    causes: ["شمعات أو ملفات إشعال متآكلة", "مشكلة في ضغط الوقود أو جودة الإمداد", "تسرب هواء أو خلل في قياسه", "مشكلة ميكانيكية في الضغط أو التوقيت"],
    diagnosis: [["تحقق من الرموز والبيانات المصاحبة", "سجّل ظروف حدوث العطل ولا تمسح البيانات قبل حفظها."], ["افحص الإشعال والهواء والوقود", "ابدأ بالفحص البصري والتوصيلات ثم اختبر المكونات حسب تعليمات المصنع."], ["قارن عدادات التقطيع بين الأسطوانات", "استخدم بيانات الفحص لتحديد ما إذا كان الخلل عشوائيًا أو يتركز في أسطوانة."], ["استبعد السبب الميكانيكي", "عند استمرار العطل، افحص الضغط والتوقيت بأدوات وإجراءات مناسبة."]],
    repair: ["عالج السبب المؤكد فقط؛ تبديل عدة قطع معًا قد يخفي العطل ولا يحدده.", "استخدم قطعًا ومواصفات مناسبة للمركبة، ثم أعد تجربة التشغيل وراقب عدادات التقطيع.", "أوقف القيادة واطلب فحصًا سريعًا إذا كانت لمبة المحرك تومض أو كان الاهتزاز شديدًا."],
    warning: "التقطيع الشديد قد يسبب أضرارًا إضافية لنظام العادم. تجنب القيادة عند وميض لمبة المحرك أو فقدان القدرة الواضح.",
    related: ["P0301", "P0302", "P0303", "P0171"]
  },
  P0171: {
    title: "خليط الوقود فقير أكثر من المتوقع — البنك 1",
    family: "مجموعة نقل الحركة · P",
    system: "engine",
    severity: "medium",
    severityLabel: "متوسط — افحص قريبًا",
    summary: "تُظهر تصحيحات الوقود أن المحرك يضيف وقودًا أكثر من الحد المتوقع لتعويض خليط فقير في البنك 1. يلزم تحديد السبب من بيانات السيارة، لا من الرمز وحده.",
    symptoms: ["لمبة فحص المحرك", "تردد أو ضعف عند التسارع", "خشونة في الخمول أحيانًا", "قد يرتفع استهلاك الوقود رغم قراءة الخليط الفقير"],
    causes: ["تسرب هواء بعد حساس تدفق الهواء", "اتساخ حساس تدفق الهواء أو خطأ في قراءته", "ضغط وقود منخفض أو تقييد في الإمداد", "تسرب عادم قبل حساس الأكسجين"],
    diagnosis: [["راجع بيانات التجميد وتصحيحات الوقود", "قارن القيم عند الخمول وعند سرعة المحرك المرتفعة وفق إجراء المصنع."], ["افحص تسربات الهواء", "تحقق من الخراطيم والوصلات ومجرى السحب بعد حساس تدفق الهواء."], ["تحقق من قراءات الحساسات", "قارن بيانات الهواء والأكسجين بالمواصفات، ولا تعتمد على القراءة المنفردة."], ["اختبر ضغط الوقود والعادم", "استخدم أدوات القياس المناسبة قبل استبدال أي مكوّن."]],
    repair: ["عالج تسرب الهواء أو الوقود الذي تم تأكيده.", "نظّف أو استبدل الحساس فقط إذا أثبت الاختبار خروجه عن المواصفة.", "أعد الفحص بعد الإصلاح وراقب تصحيحات الوقود في ظروف تشغيل مماثلة."],
    warning: "قد تتغير قابلية القيادة بحسب شدة الخلل. إذا ظهرت حرارة غير طبيعية أو ضعف شديد، أوقف المركبة واطلب فحصًا مختصًا.",
    related: ["P0170", "P0172", "P0101", "P0300"]
  },
  P0420: {
    title: "كفاءة نظام المحفّز أقل من العتبة — البنك 1",
    family: "مجموعة نقل الحركة · P",
    system: "engine",
    severity: "medium",
    severityLabel: "متوسط — افحص قريبًا",
    summary: "تشير مقارنة إشارات حساسات الأكسجين إلى أن كفاءة المحفّز قد تكون أقل من الحد المعاير. يجب استبعاد التقطيع وتسربات العادم ومشكلات الحساسات قبل الحكم على المحفّز.",
    symptoms: ["لمبة فحص المحرك", "قد لا تظهر أعراض قيادة واضحة", "رائحة غير معتادة من العادم في بعض الحالات", "زيادة الانبعاثات أو فشل اختبارها"],
    causes: ["تدهور المحفّز بعد استخدام طويل أو تلف سابق", "تسرب في العادم قرب الحساسات", "حساس أكسجين بطيء أو قراءة غير دقيقة", "تقطيع احتراق أو خليط غير سليم أضر بنظام العادم"],
    diagnosis: [["افحص كل الرموز الأخرى أولًا", "عالج رموز التقطيع أو الخليط قبل تقييم المحفّز."], ["تحقق من تسربات العادم", "افحص الوصلات والأنابيب قبل الحساسات وبعدها."], ["راقب إشارات الحساسات", "استخدم بيانات حية وإجراء المصنع لمقارنة الحساسين قبل المحفّز وبعده."], ["أكد السبب قبل الاستبدال", "لا تستبدل المحفّز اعتمادًا على الرمز وحده؛ تحقق من الاختبارات المطلوبة محليًا."]],
    repair: ["أصلح أي تسرب عادم أو عطل محرك تسبب في القراءة أولًا.", "استبدال المحفّز قرار مكلف ويجب أن يستند إلى اختبارات مؤكدة ومواصفات المركبة.", "تحقق من متطلبات الانبعاثات المحلية قبل إجراء أي تغيير على نظام العادم."],
    warning: "قد لا يؤثر الرمز وحده على القيادة، لكن تجاهل السبب الأصلي قد يزيد الانبعاثات أو يفاقم تلف العادم.",
    related: ["P0130", "P0136", "P0300", "P0171"]
  },
  P0101: {
    title: "نطاق أو أداء حساس تدفق الهواء خارج المتوقع",
    family: "مجموعة نقل الحركة · P",
    system: "engine",
    severity: "medium",
    severityLabel: "متوسط — افحص قريبًا",
    summary: "قراءة حساس كتلة الهواء لا تتطابق مع النطاق المتوقع مقارنة بحالة المحرك. قد يكون السبب في الحساس أو مجرى الهواء أو التوصيلات، لذا يلزم فحص النظام كاملًا.",
    symptoms: ["لمبة فحص المحرك", "تردد أو ضعف في التسارع", "خمول غير مستقر في بعض الحالات", "استهلاك وقود أو انبعاثات غير طبيعية"],
    causes: ["فلتر أو مجرى هواء مسدود أو غير محكم", "تسرب هواء بعد الحساس", "اتساخ الحساس أو تلفه", "مشكلة في التوصيلات أو جهد التغذية"],
    diagnosis: [["افحص مجرى السحب والفلتر", "تأكد من سلامة التركيب وعدم وجود فتحات أو انسداد."], ["راجع بيانات الحساس الحية", "قارن قراءة الهواء بسرعة المحرك والحمل بمواصفات المصنع."], ["افحص التغذية والتوصيل", "تحقق من الفيش والأسلاك قبل تنظيف الحساس أو استبداله."], ["أعد الاختبار بعد الإجراء", "امسح الرمز بعد تسجيل البيانات، ثم تحقق من عدم عودته في ظروف مشابهة."]],
    repair: ["أصلح تسربات السحب أو تركيب الفلتر غير المحكم.", "استخدم منظفًا مخصصًا للحساس فقط إذا كان التنظيف مسموحًا من المصنع.", "لا تلمس عنصر القياس الحساس ولا تستبدل القطعة من دون تأكيد الاختبار."],
    warning: "إذا كان المحرك يتوقف أو يفقد القدرة، تجنب القيادة حتى فحصه. اتبع مواصفات المصنع لطراز السيارة.",
    related: ["P0100", "P0102", "P0103", "P0171"]
  }
};

const labels = {
  P0120: "دائرة حساس موضع الخانق/الدواسة", P0121: "نطاق أو أداء حساس موضع الخانق", P0123: "إشارة مرتفعة في دائرة حساس الخانق", P0220: "دائرة حساس الخانق/الدواسة B",
  P0301: "اختلال احتراق في الأسطوانة 1", P0302: "اختلال احتراق في الأسطوانة 2", P0303: "اختلال احتراق في الأسطوانة 3",
  P0170: "خلل في ضبط الوقود", P0172: "خليط الوقود غني — البنك 1", P0130: "دائرة حساس الأكسجين", P0136: "دائرة حساس الأكسجين الخلفي"
};
const app = document.getElementById("app");
const severityClass = (level) => `severity severity-${level}`;
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
const codeUrl = (code) => `/dtc/${encodeURIComponent(code)}`;

function searchForm(extraClass = "") {
  return `<form class="search-panel ${extraClass}" data-search-form>
    <label class="sr-only" for="dtc-query">اكتب رمز العطل</label>
    <input id="dtc-query" name="code" type="search" placeholder="مثال: P0122" autocomplete="off" maxlength="8" aria-label="اكتب رمز العطل">
    <button type="submit">ابحث عن الرمز <span aria-hidden="true">←</span></button>
  </form>`;
}

function codeCard(code) {
  const item = codes[code];
  return `<a class="code-card" href="${codeUrl(code)}">
    <span class="code-info"><span class="code-icon" aria-hidden="true">⌕</span><span class="code-title"><strong>${esc(item.title)}</strong><span>${esc(item.family)} · <span class="${severityClass(item.severity)}">${esc(item.severityLabel.split(" — ")[0])}</span></span></span></span>
    <span class="code-pill">${esc(code)}</span>
  </a>`;
}

function renderHome() {
  const sample = ["P0122", "P0300", "P0171", "P0420", "P0101"];
  app.innerHTML = `
    <section class="hero">
      <div class="container hero-content">
        <div>
          <div class="eyebrow"><span class="eyebrow-dot"></span> دليل أولي لرموز أعطال السيارات</div>
          <h1>افهم الرمز.<br><em>ابدأ التشخيص بثقة.</em></h1>
          <p class="hero-copy">ابحث عن الرمز، تعرّف على معناه المحتمل، وراجع مسار الفحص قبل اتخاذ قرار الإصلاح. الشرح هنا نقطة بداية، ومواصفات سيارتك هي المرجع.</p>
          ${searchForm()}
          <div class="search-hints"><span>جرّب:</span>${sample.slice(0,3).map(c => `<a class="hint-code" href="${codeUrl(c)}">${c}</a>`).join("")}</div>
        </div>
        <div class="hero-visual" aria-label="مرجع واجهة تشخيص رمز عطل">
          <div class="visual-top"><span>ملخص الفحص</span><span class="live-indicator">قراءة توضيحية</span></div>
          <div class="code-screen"><small>رمز عطل المحرك</small><div class="big-code">P0122</div><div class="screen-caption"><span>حالة الإشارة</span><strong>تحتاج إلى فحص</strong></div><div class="progress-line"><span></span></div></div>
          <div class="visual-stats"><span>تغطية المرجع</span><strong>05 رموز</strong></div>
          <div class="hero-mini-note"><b>معلومة مهمة</b> · الرمز وحده لا يكفي للتشخيص</div>
        </div>
      </div>
    </section>

    <section class="section" id="codes">
      <div class="container">
        <div class="section-head"><div><span class="section-kicker">ابدأ من الرمز</span><h2>أكواد شائعة للمرجع</h2></div><p>اختر رمزًا لعرض تفسيره وخطوات فحص أولية. المحتوى هنا عينة أصلية محدودة، وليس قاعدة تشخيص كاملة.</p></div>
        <div class="codes-layout">
          <div class="code-list">${sample.map(codeCard).join("")}</div>
          <aside class="side-card" id="plans"><span class="section-kicker">منظومة MOTRXO</span><h3>بيانات أكثر لقرار أدق</h3><p>استكشف خدمات الاشتراك ومعلومات الإصلاح المتاحة لورشتك على موقع MOTRXO.</p><ul class="mini-list"><li>اطّلع على المنتجات المتاحة</li><li>تعرّف على خيارات الاشتراك</li><li>اسأل فريق MOTRXO عن التوافق</li></ul><a class="button-primary" href="https://www.motrxo.com/#shop" target="_blank" rel="noopener">استكشف الاشتراكات <span aria-hidden="true">↗</span></a><a class="button-outline" href="https://wa.me/201016673956?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20MOTRXO%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D9%85%D8%B9%D8%B1%D9%81%D8%A9%20%D8%AE%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83%20%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D8%B5%D9%84%D8%A7%D8%AD." target="_blank" rel="noopener">اسأل عبر واتساب <span aria-hidden="true">↗</span></a></aside>
        </div>
        <div class="notice"><span class="notice-icon" aria-hidden="true">!</span><span>رموز الأعطال لا تحدد القطعة التالفة بمفردها. قد يتغير التفسير والأعراض باختلاف الشركة والطراز والسنة؛ استعن بمعلومات المصنع وفني مؤهل قبل إجراء إصلاح.</span></div>
      </div>
    </section>

    <section class="section how-section" id="how-it-works">
      <div class="container">
        <div class="section-head"><div><span class="section-kicker">مسار واضح</span><h2>من الرمز إلى خطوة الفحص التالية</h2></div><p>المعلومة الجيدة تبدأ بالتحقق، لا بتبديل القطع بالتخمين.</p></div>
        <div class="steps-grid">
          <article class="step-card"><span class="step-num">01</span><h3>اكتب رمز العطل</h3><p>أدخل الرمز كما ظهر في جهاز الفحص، مثل P0122 أو P0300.</p></article>
          <article class="step-card"><span class="step-num">02</span><h3>راجع المعنى والسياق</h3><p>اقرأ الوصف المحتمل والأعراض والأسباب، ثم اربطها ببيانات سيارتك الفعلية.</p></article>
          <article class="step-card"><span class="step-num">03</span><h3>افحص وفق المواصفات</h3><p>اتبع مخطط وإجراءات المصنع، وسجّل القياسات قبل استبدال أي جزء.</p></article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container"><div class="subscription-band"><div><div class="eyebrow"><span class="eyebrow-dot"></span> لمزيد من بيانات الورشة</div><h2>اربط الفحص بمعلومة الإصلاح المناسبة</h2><p>تعرّف على خدمات MOTRXO واطلب معلومات الاشتراك المتاحة لاحتياجاتك.</p></div><div class="subscription-actions"><a class="button-primary" href="https://www.motrxo.com/#shop" target="_blank" rel="noopener">عرض خدمات MOTRXO <span aria-hidden="true">↗</span></a><a class="button-outline" href="https://wa.me/201016673956?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20MOTRXO%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D9%85%D8%B9%D8%B1%D9%81%D8%A9%20%D8%AE%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83." target="_blank" rel="noopener">تواصل معنا</a></div></div></div>
    </section>`;
  bindSearch();
}

function renderDetails(code) {
  const item = codes[code];
  if (!item) return renderNotFound(code);
  const related = item.related.map(rel => {
    const title = codes[rel]?.title || labels[rel] || "رمز ذو صلة — يتطلب مرجع المركبة";
    return `<a class="related-link" href="${codes[rel] ? codeUrl(rel) : `/dtc/${encodeURIComponent(rel)}`}"><strong>${esc(rel)}</strong><span>${esc(title)}</span></a>`;
  }).join("");
  app.innerHTML = `
    <section class="detail-hero"><div class="container">
      <div class="breadcrumb"><a href="/dtc/">الرئيسية</a><span aria-hidden="true">›</span><span>تفاصيل الرمز</span></div>
      <div class="detail-head"><div><div class="detail-code">${esc(code)}</div><h1 class="detail-definition">${esc(item.title)}</h1><p class="detail-lead">${esc(item.summary)}</p><div class="detail-tags"><span class="${severityClass(item.severity)}">${esc(item.severityLabel)}</span><span class="tag">${esc(item.family)}</span><span class="tag">شرح أولي للمرجع</span></div></div></div>
    </div></section>
    <section class="section"><div class="container detail-layout">
      <div class="detail-main">
        <article class="content-card"><h2><span class="card-mark">⌁</span> ماذا قد تلاحظ؟</h2><ul class="bullet-list">${item.symptoms.map(s=>`<li>${esc(s)}</li>`).join("")}</ul></article>
        <article class="content-card"><h2><span class="card-mark">⌕</span> أسباب محتملة</h2><ul class="bullet-list">${item.causes.map(s=>`<li>${esc(s)}</li>`).join("")}</ul></article>
        <article class="content-card"><h2><span class="card-mark">01</span> مسار فحص مبدئي</h2><ol class="diagnostic-steps">${item.diagnosis.map(([t,d])=>`<li><strong>${esc(t)}</strong>${esc(d)}</li>`).join("")}</ol></article>
        <article class="content-card"><h2><span class="card-mark">✓</span> إرشادات الإصلاح</h2><ul class="bullet-list">${item.repair.map(s=>`<li>${esc(s)}</li>`).join("")}</ul></article>
        <div class="notice"><span class="notice-icon" aria-hidden="true">!</span><span><strong>تنبيه للسلامة:</strong> ${esc(item.warning)} أوقف العمل إذا لم تكن مؤهلًا، واستعن بفني مختص.</span></div>
        <article class="content-card"><h2><span class="card-mark">↗</span> رموز قد تكون مرتبطة</h2><div class="related-grid">${related}</div></article>
      </div>
      <aside class="detail-aside"><section class="access-card"><span class="lock-icon" aria-hidden="true">⌑</span><h2>تحتاج معلومات إصلاح أكثر؟</h2><p>استكشف أدوات وبيانات الإصلاح المتاحة باشتراكات MOTRXO. صفحة المرجع لا تتحقق من حالة اشتراكك ولا تفتح بيانات خاصة.</p><a class="button-primary" href="https://www.motrxo.com/#shop" target="_blank" rel="noopener">استكشف الخدمات <span aria-hidden="true">↗</span></a><a class="button-outline" href="https://wa.me/201016673956?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20MOTRXO%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83%20%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A5%D8%B5%D9%84%D8%A7%D8%AD." target="_blank" rel="noopener">اسأل عن الاشتراك</a><div class="access-note">لا يوجد حاليًا ربط تقني للتحقق من الاشتراكات في هذه المرجع.</div></section><section class="side-card"><h3>ابحث عن رمز آخر</h3><p>اكتب الرمز كما ظهر في جهاز الفحص.</p>${searchForm("inline-search")}</section></aside>
    </div></section>`;
  bindSearch();
}

function renderNotFound(code) {
  const safeCode = /^[A-Z][0-9A-F]{4}$/.test(code) ? code : "";
  app.innerHTML = `<section class="empty-state"><span class="empty-icon" aria-hidden="true">⌕</span><h1>${safeCode ? `لم نعثر على ${esc(safeCode)} في الفهرس العام` : "أدخل رمز عطل صالحًا"}</h1><p>المعروض هنا مجموعة توضيحية محدودة فقط. تحقق من كتابة الرمز كما ظهر في جهاز الفحص، أو ارجع إلى دليل المصنع للحصول على تغطية طراز سيارتك.</p>${searchForm("inline-search")}<a class="back-link" href="/dtc/">← العودة إلى دليل الأكواد</a></section>`;
  bindSearch();
}

function bindSearch() {
  document.querySelectorAll("[data-search-form]").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const raw = new FormData(form).get("code") || "";
      const code = String(raw).trim().toUpperCase().replace(/\s+/g, "");
      if (!/^[PBCU][0-9A-F]{4}$/.test(code)) {
        renderNotFound(code);
        return;
      }
      window.location.href = codeUrl(code);
    });
  });
}

const pathMatch = window.location.pathname.match(/^\/dtc\/([^/]+)\/?$/i);
if (pathMatch) {
  let code = "";
  try { code = decodeURIComponent(pathMatch[1]).toUpperCase(); } catch { code = ""; }
  renderDetails(code);
} else {
  renderHome();
  const query = new URLSearchParams(window.location.search).get("code");
  if (query) renderNotFound(query.toUpperCase());
}


/* MOTRXO navigation, category filters and language layer. */
var uiLocale;
var currentFamily;
var localeDict;
var familyNames;
var languageNames;

function tx(key) {
  var dictionary = localeDict && (localeDict[uiLocale] || localeDict.ar);
  return (dictionary && dictionary[key]) || (localeDict && localeDict.ar && localeDict.ar[key]) || key;
}

function familyName(code) {
  if (!familyNames) return code;
  return familyNames[uiLocale] && familyNames[uiLocale][code] || familyNames.ar[code] || code;
}

function searchForm(extraClass = "") {
  return `<form class="search-panel ${extraClass}" data-search-form>
    <label class="sr-only" for="dtc-query">${esc(tx("searchLabel"))}</label>
    <input id="dtc-query" name="code" type="search" placeholder="${esc(tx("searchPlaceholder"))}" autocomplete="off" maxlength="8" aria-label="${esc(tx("searchLabel"))}">
    <button type="submit">${esc(tx("searchButton"))} <span aria-hidden="true">←</span></button>
  </form>`;
}

function codeCard(code) {
  const item = codes[code];
  return `<a class="code-card" href="${codeUrl(code)}">
    <span class="code-info"><span class="code-icon" aria-hidden="true">⌕</span><span class="code-title"><strong>${esc(item.title)}</strong><span>${esc(familyName(code[0]))} · <span class="${severityClass(item.severity)}">${esc(item.severityLabel.split(" — ")[0])}</span></span></span></span>
    <span class="code-pill">${esc(code)}</span>
  </a>`;
}

function renderHome() {
  const sample = ["P0122", "P0300", "P0171", "P0420", "P0101"];
  const family = currentFamily || "P";
  const visible = sample.filter(code => code[0] === family);
  const families = ["P", "B", "C", "U"].map(code => `<button class="family-tile ${family === code ? "is-active" : ""}" type="button" data-family-choice="${code}"><span class="family-letter">${code}</span><span><b>${esc(familyName(code))}</b><small>${esc(tx(`familyDesc${code}`))}</small></span><span class="family-arrow" aria-hidden="true">↗</span></button>`).join("");
  const sampleList = visible.length ? visible.map(codeCard).join("") : `<div class="empty-category"><span class="empty-category-mark">${family}</span><div><strong>${esc(tx("noCategoryCodes"))}</strong><p>${esc(tx("licensedDataNotice"))}</p></div></div>`;
  app.innerHTML = `
    <section class="hero">
      <div class="container hero-content">
        <div>
          <div class="eyebrow"><span class="eyebrow-dot"></span>${esc(tx("heroEyebrow"))}</div>
          <h1>${esc(tx("heroLine1"))}<br><em>${esc(tx("heroLine2"))}</em></h1>
          <p class="hero-copy">${esc(tx("heroCopy"))}</p>
          ${searchForm()}
          <div class="search-hints"><span>${esc(tx("tryCodes"))}:</span>${sample.slice(0,3).map(c => `<a class="hint-code" href="${codeUrl(c)}">${c}</a>`).join("")}</div>
        </div>
        <div class="hero-visual" aria-label="${esc(tx("heroVisual"))}">
          <div class="visual-top"><span>${esc(tx("scanSummary"))}</span><span class="live-indicator">${esc(tx("genericRead"))}</span></div>
          <div class="code-screen"><small>${esc(tx("engineCode"))}</small><div class="big-code">P0122</div><div class="screen-caption"><span>${esc(tx("signalState"))}</span><strong>${esc(tx("needsCheck"))}</strong></div><div class="progress-line"><span></span></div></div>
          <div class="visual-stats"><span>${esc(tx("indexCoverage"))}</span><strong>05</strong></div>
          <div class="hero-mini-note"><b>${esc(tx("important"))}</b> · ${esc(tx("codeAlone"))}</div>
        </div>
      </div>
    </section>
    ${window.renderServiceScheduleSection?.() || ""}
    <section class="section category-section" id="codes">
      <div class="container">
        <div class="section-head"><div><span class="section-kicker">${esc(tx("familiesTitle"))}</span><h2>${esc(tx("chooseFamily"))}</h2></div><p>${esc(tx("familyIntro"))}</p></div>
        <div class="family-grid">${families}</div>
        <div class="filter-toolbar">
          <label class="filter-control"><span>${esc(tx("familiesTitle"))}</span><select id="family-filter"><option value="P" ${family === "P" ? "selected" : ""}>P · ${esc(familyName("P"))}</option><option value="B" ${family === "B" ? "selected" : ""}>B · ${esc(familyName("B"))}</option><option value="C" ${family === "C" ? "selected" : ""}>C · ${esc(familyName("C"))}</option><option value="U" ${family === "U" ? "selected" : ""}>U · ${esc(familyName("U"))}</option></select></label>
          <p class="filter-data-note">${esc(tx("makeDataNotice"))}</p>
          <span class="catalog-tag"><span class="catalog-dot"></span>${esc(tx("sampleOnly"))}</span>
        </div>
        <div class="section-head code-list-heading"><div><span class="section-kicker">${esc(family)} · ${esc(familyName(family))}</span><h2>${esc(tx("commonCodes"))}</h2></div><p>${esc(tx("listContext"))}</p></div>
        <div class="codes-layout"><div class="code-list">${sampleList}</div>
          <aside class="side-card" id="plans"><span class="section-kicker">${esc(tx("motrxoNetwork"))}</span><h3>${esc(tx("subscriptionTitle"))}</h3><p>${esc(tx("subscriptionCopy"))}</p><ul class="mini-list"><li>${esc(tx("subscriptionBullet1"))}</li><li>${esc(tx("subscriptionBullet2"))}</li><li>${esc(tx("subscriptionBullet3"))}</li></ul><a class="button-primary" href="https://www.motrxo.com/#shop" target="_blank" rel="noopener">${esc(tx("subscriptionButton"))} <span aria-hidden="true">↗</span></a><a class="button-outline" href="https://wa.me/201016673956" target="_blank" rel="noopener">${esc(tx("contactButton"))} <span aria-hidden="true">↗</span></a></aside>
        </div>
        <div class="notice"><span class="notice-icon" aria-hidden="true">!</span><span>${esc(tx("safetyNotice"))}</span></div>
      </div>
    </section>
    <section class="section how-section" id="how-it-works"><div class="container"><div class="section-head"><div><span class="section-kicker">${esc(tx("clearPath"))}</span><h2>${esc(tx("howTitle"))}</h2></div><p>${esc(tx("howIntro"))}</p></div><div class="steps-grid"><article class="step-card"><span class="step-num">01</span><h3>${esc(tx("step1Title"))}</h3><p>${esc(tx("step1Text"))}</p></article><article class="step-card"><span class="step-num">02</span><h3>${esc(tx("step2Title"))}</h3><p>${esc(tx("step2Text"))}</p></article><article class="step-card"><span class="step-num">03</span><h3>${esc(tx("step3Title"))}</h3><p>${esc(tx("step3Text"))}</p></article></div></div></section>
    ${window.renderVehicleRequestSection()}
    <section class="section"><div class="container"><div class="subscription-band"><div><div class="eyebrow"><span class="eyebrow-dot"></span>${esc(tx("moreWorkshopData"))}</div><h2>${esc(tx("subscriptionBandTitle"))}</h2><p>${esc(tx("subscriptionBandCopy"))}</p></div><div class="subscription-actions"><a class="button-primary" href="https://www.motrxo.com/#shop" target="_blank" rel="noopener">${esc(tx("showMotrxo"))} <span aria-hidden="true">↗</span></a><a class="button-outline" href="https://wa.me/201016673956" target="_blank" rel="noopener">${esc(tx("contactButton"))}</a></div></div></div></section>
    <div class="translation-note ${uiLocale === "ar" ? "is-hidden" : ""}">${esc(tx("translationNote"))}</div>`;
  bindSearch();
  window.bindVehicleRequest?.();
  window.bindServiceScheduleSection?.();
  document.querySelectorAll(".family-tile[data-family-choice]").forEach(button => button.addEventListener("click", () => { currentFamily = button.dataset.familyChoice; try { sessionStorage.setItem("motrxo-family", currentFamily); } catch {} renderHome(); document.getElementById("codes")?.scrollIntoView({behavior:"smooth"}); }));
  const familySelect = document.getElementById("family-filter");
  if (familySelect) familySelect.addEventListener("change", () => {
    currentFamily = familySelect.value;
    try { sessionStorage.setItem("motrxo-family", currentFamily); } catch {}
    renderHome();
  });
}

function renderDetails(code) {
  const item = codes[code];
  if (!item) return renderNotFound(code);
  const related = item.related.map(rel => {
    const title = codes[rel]?.title || labels[rel] || tx("relatedNeedsVehicle");
    return `<a class="related-link" href="${codes[rel] ? codeUrl(rel) : `/dtc/${encodeURIComponent(rel)}`}"><strong>${esc(rel)}</strong><span>${esc(title)}</span></a>`;
  }).join("");
  app.innerHTML = `
    <section class="detail-hero"><div class="container"><div class="breadcrumb"><a href="/dtc/">${esc(tx("navHome"))}</a><span aria-hidden="true">›</span><span>${esc(tx("detailCode"))}</span></div><div class="detail-head"><div><div class="detail-code">${esc(code)}</div><h1 class="detail-definition">${esc(item.title)}</h1><p class="detail-lead">${esc(item.summary)}</p><div class="detail-tags"><span class="${severityClass(item.severity)}">${esc(item.severityLabel)}</span><span class="tag">${esc(familyName(code[0]))}</span><span class="tag">${esc(tx("genericExplanation"))}</span></div></div></div></div></section>
    <section class="section"><div class="container detail-layout"><div class="detail-main">
      <article class="content-card"><h2><span class="card-mark">⌁</span>${esc(tx("symptoms"))}</h2><ul class="bullet-list">${item.symptoms.map(s=>`<li>${esc(s)}</li>`).join("")}</ul></article>
      <article class="content-card"><h2><span class="card-mark">⌕</span>${esc(tx("possibleCauses"))}</h2><ul class="bullet-list">${item.causes.map(s=>`<li>${esc(s)}</li>`).join("")}</ul></article>
      <article class="content-card"><h2><span class="card-mark">01</span>${esc(tx("diagnosticPath"))}</h2><ol class="diagnostic-steps">${item.diagnosis.map(([t,d])=>`<li><strong>${esc(t)}</strong>${esc(d)}</li>`).join("")}</ol></article>
      <article class="content-card"><h2><span class="card-mark">✓</span>${esc(tx("repairGuidance"))}</h2><ul class="bullet-list">${item.repair.map(s=>`<li>${esc(s)}</li>`).join("")}</ul></article>
      <div class="notice"><span class="notice-icon" aria-hidden="true">!</span><span><strong>${esc(tx("safetyHeading"))}</strong> ${esc(item.warning)} ${esc(tx("technicianWarning"))}</span></div>
      <article class="content-card"><h2><span class="card-mark">↗</span>${esc(tx("relatedCodes"))}</h2><div class="related-grid">${related}</div></article>
      ${uiLocale === "ar" ? "" : `<div class="translation-note">${esc(tx("translationNote"))}</div>`}
    </div><aside class="detail-aside"><section class="access-card"><span class="lock-icon" aria-hidden="true">⌑</span><h2>${esc(tx("moreRepairInfo"))}</h2><p>${esc(tx("membershipCopy"))}</p><a class="button-primary" href="https://www.motrxo.com/#shop" target="_blank" rel="noopener">${esc(tx("subscriptionButton"))} <span aria-hidden="true">↗</span></a><a class="button-outline" href="https://wa.me/201016673956" target="_blank" rel="noopener">${esc(tx("contactButton"))}</a><div class="access-note">${esc(tx("membershipNote"))}</div></section><section class="side-card"><h3>${esc(tx("searchAnother"))}</h3><p>${esc(tx("searchHint"))}</p>${searchForm("inline-search")}</section></aside></div></section>`;
  bindSearch();
}

function renderNotFound(code) {
  const safeCode = /^[A-Z][0-9A-F]{4}$/.test(code) ? code : "";
  app.innerHTML = `<section class="empty-state"><span class="empty-icon" aria-hidden="true">⌕</span><h1>${safeCode ? `${esc(tx("notFound"))} ${esc(safeCode)}` : esc(tx("invalidCode"))}</h1><p>${esc(tx("notFoundText"))}</p>${searchForm("inline-search")}<a class="back-link" href="/dtc/">← ${esc(tx("backHome"))}</a></section>`;
  bindSearch();
}

function bindSearch() {
  document.querySelectorAll("[data-search-form]").forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    const raw = new FormData(form).get("code") || "";
    const code = String(raw).trim().toUpperCase().replace(/\s+/g, "");
    if (!/^[PBCU][0-9A-F]{4}$/.test(code)) return renderNotFound(code);
    window.location.href = codeUrl(code);
  }));
}

function applyLocale() {
  const accessibilityLabels = {
    ar: {menu:"القائمة", closeMenu:"إغلاق القائمة", mainNav:"التنقل الرئيسي", siteDrawer:"قائمة التنقل", drawerLinks:"أقسام الموقع", languages:"اختيار اللغة", home:"الصفحة الرئيسية لـ MOTRXO", whatsapp:"التواصل مع MOTRXO عبر واتساب"},
    en: {menu:"Menu", closeMenu:"Close menu", mainNav:"Main navigation", siteDrawer:"Navigation menu", drawerLinks:"Site sections", languages:"Choose language", home:"MOTRXO home", whatsapp:"Contact MOTRXO on WhatsApp"},
    fr: {menu:"Menu", closeMenu:"Fermer le menu", mainNav:"Navigation principale", siteDrawer:"Menu de navigation", drawerLinks:"Sections du site", languages:"Choisir la langue", home:"Accueil MOTRXO", whatsapp:"Contacter MOTRXO sur WhatsApp"},
    es: {menu:"Menú", closeMenu:"Cerrar menú", mainNav:"Navegación principal", siteDrawer:"Menú de navegación", drawerLinks:"Secciones del sitio", languages:"Elegir idioma", home:"Inicio MOTRXO", whatsapp:"Contactar a MOTRXO por WhatsApp"},
    it: {menu:"Menu", closeMenu:"Chiudi menu", mainNav:"Navigazione principale", siteDrawer:"Menu di navigazione", drawerLinks:"Sezioni del sito", languages:"Scegli la lingua", home:"Home MOTRXO", whatsapp:"Contatta MOTRXO su WhatsApp"},
    de: {menu:"Menü", closeMenu:"Menü schließen", mainNav:"Hauptnavigation", siteDrawer:"Navigationsmenü", drawerLinks:"Seitenbereiche", languages:"Sprache wählen", home:"MOTRXO-Startseite", whatsapp:"MOTRXO über WhatsApp kontaktieren"}
  };
  const lang = uiLocale || "ar";
  const rtl = lang === "ar";
  const aria = accessibilityLabels[lang] || accessibilityLabels.ar;
  document.documentElement.lang = lang;
  document.documentElement.dir = rtl ? "rtl" : "ltr";
  document.title = tx("pageTitle");
  document.querySelectorAll("[data-i18n]").forEach(el => { const key = el.dataset.i18n; if (tx(key)) el.textContent = tx(key); });
  document.querySelectorAll("[data-locale-choice]").forEach(el => {
    const active = el.dataset.localeChoice === lang;
    el.classList.toggle("is-selected", active);
    if (active) el.setAttribute("aria-current", "true"); else el.removeAttribute("aria-current");
  });
  const toggle = document.getElementById("menu-toggle");
  if (toggle) toggle.setAttribute("aria-label", aria.menu);
  document.getElementById("drawer-close")?.setAttribute("aria-label", aria.closeMenu);
  document.getElementById("site-drawer")?.setAttribute("aria-label", aria.siteDrawer);
  document.querySelector(".main-nav")?.setAttribute("aria-label", aria.mainNav);
  document.querySelector(".drawer-links")?.setAttribute("aria-label", aria.drawerLinks);
  document.querySelector(".language-grid")?.setAttribute("aria-label", aria.languages);
  document.querySelector(".brand")?.setAttribute("aria-label", aria.home);
  document.querySelector(".drawer-brand")?.setAttribute("aria-label", aria.home);
  document.querySelector(".chat-fab")?.setAttribute("aria-label", aria.whatsapp);
}

function renderCurrentRoute() {
  const match = window.location.pathname.match(/^\/dtc\/([^/]+)\/?$/i);
  if (match) {
    let code = "";
    try { code = decodeURIComponent(match[1]).toUpperCase(); } catch { code = ""; }
    renderDetails(code);
  } else {
    renderHome();
    const query = new URLSearchParams(window.location.search).get("code");
    if (query) renderNotFound(query.toUpperCase());
  }
}

function closeDrawer() {
  const drawer = document.getElementById("site-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  const toggle = document.getElementById("menu-toggle");
  if (!drawer || !backdrop) return;
  drawer.hidden = true; backdrop.hidden = true; drawer.setAttribute("aria-hidden", "true"); document.body.classList.remove("drawer-open");
  if (toggle) { toggle.setAttribute("aria-expanded", "false"); toggle.focus(); }
}
function openDrawer() {
  const drawer = document.getElementById("site-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  if (!drawer || !backdrop) return;
  drawer.hidden = false; backdrop.hidden = false; drawer.setAttribute("aria-hidden", "false"); document.body.classList.add("drawer-open"); document.getElementById("drawer-close")?.focus();
}

function initializeMOTRXO() {
  localeDict = {
    ar: {pageTitle:"MOTRXO | دليل رموز أعطال السيارات",skip:"تخطَّ إلى المحتوى",menu:"القائمة",navCodes:"دليل الأكواد",navHow:"كيف يعمل",navPlans:"الاشتراكات",headerCta:"خدمات MOTRXO",navHome:"الرئيسية",navProducts:"المنتجات",navAllProducts:"عرض جميع المنتجات",familiesTitle:"أقسام رموز الأعطال",systemsTitle:"أنظمة المركبة",systemEngine:"المحرك",systemTransmission:"ناقل الحركة",systemBody:"أنظمة الهيكل",languageTitle:"اللغة",drawerCta:"اكتشف خدمات MOTRXO",drawerDisclaimer:"مرجع مستقل — قاعدة الأكواد العامة محدودة.",searchLabel:"اكتب رمز العطل",searchPlaceholder:"مثال: P0122",searchButton:"ابحث عن الرمز",heroEyebrow:"دليل أولي لرموز أعطال السيارات",heroLine1:"افهم الرمز.",heroLine2:"ابدأ التشخيص بثقة.",heroCopy:"ابحث عن الرمز، تعرّف على معناه المحتمل، وراجع مسار الفحص قبل اتخاذ قرار الإصلاح. الشرح هنا نقطة بداية، ومواصفات سيارتك هي المرجع.",tryCodes:"جرّب",heroVisual:"مرجع واجهة تشخيص رمز عطل",scanSummary:"ملخص الفحص",genericRead:"قراءة توضيحية",engineCode:"رمز عطل المحرك",signalState:"حالة الإشارة",needsCheck:"تحتاج إلى فحص",indexCoverage:"تغطية المرجع",important:"معلومة مهمة",codeAlone:"الرمز وحده لا يكفي للتشخيص",chooseFamily:"اختر قسم العطل",familyIntro:"التقسيم P/B/C/U يحدد عائلة الرمز. الأنظمة التفصيلية وتغطية الشركات تتطلب بيانات موثقة خاصة بالمركبة.",familyP:"مجموعة الحركة",familyB:"الهيكل",familyC:"الشاسيه",familyU:"الشبكة والاتصال",familyDescP:"المحرك وناقل الحركة",familyDescB:"الوسائد والأنظمة الداخلية",familyDescC:"الفرامل والتوجيه والتعليق",familyDescU:"الشبكات ووحدات التحكم",manufacturer:"الشركة المصنعة",allMakes:"كل الشركات — بيانات عامة",vehicleSystem:"نظام المركبة",allSystems:"كل الأنظمة",sampleOnly:"عينة تجريبية محدودة",noCategoryCodes:"لا توجد أكواد عينة لهذا القسم بعد",licensedDataNotice:"يلزم مصدر بيانات موثّق ومرخص لإضافة التفاصيل بأمان.",makeSelected:"الشركة المحددة",makeDataNotice:"العينة الحالية عامة ولا تحتوي خرائط خاصة بهذه الشركة.",commonCodes:"أكواد شائعة للمرجع",listContext:"المتاح هنا عينة توضيحية وليست قاعدة أكواد كاملة.",motrxoNetwork:"منظومة MOTRXO",subscriptionTitle:"بيانات أكثر لقرار أدق",subscriptionCopy:"استكشف خدمات الاشتراك ومعلومات الإصلاح المتاحة لورشتك على موقع MOTRXO.",subscriptionBullet1:"اطّلع على المنتجات المتاحة",subscriptionBullet2:"تعرّف على خيارات الاشتراك",subscriptionBullet3:"اسأل فريق MOTRXO عن التوافق",subscriptionButton:"استكشف الاشتراكات",contactButton:"اسأل عبر واتساب",safetyNotice:"رموز الأعطال لا تحدد القطعة التالفة بمفردها. قد يتغير التفسير حسب الشركة والطراز والسنة؛ استعن بمعلومات المصنع وفني مؤهل قبل الإصلاح.",clearPath:"مسار واضح",howTitle:"من الرمز إلى خطوة الفحص التالية",howIntro:"المعلومة الجيدة تبدأ بالتحقق، لا بتبديل القطع بالتخمين.",step1Title:"اكتب رمز العطل",step1Text:"أدخل الرمز كما ظهر في جهاز الفحص، مثل P0122 أو P0300.",step2Title:"راجع المعنى والسياق",step2Text:"اقرأ الوصف المحتمل والأعراض والأسباب، ثم اربطها ببيانات سيارتك الفعلية.",step3Title:"افحص وفق المواصفات",step3Text:"اتبع مخطط وإجراءات المصنع، وسجّل القياسات قبل استبدال أي جزء.",moreWorkshopData:"لمزيد من بيانات الورشة",subscriptionBandTitle:"اربط الفحص بمعلومة الإصلاح المناسبة",subscriptionBandCopy:"تعرّف على خدمات MOTRXO واطلب معلومات الاشتراك المتاحة لاحتياجاتك.",showMotrxo:"عرض خدمات MOTRXO",translationNote:"واجهة الموقع مترجمة، لكن التعريفات العامة المستوردة تظهر بالإنجليزية أو الألمانية كما وردت؛ الشروحات العربية الأصلية متاحة لخمسة أكواد فقط.",detailCode:"تفاصيل الرمز",genericExplanation:"شرح أولي للمرجع",symptoms:"ماذا قد تلاحظ؟",possibleCauses:"أسباب محتملة",diagnosticPath:"مسار فحص مبدئي",repairGuidance:"إرشادات الإصلاح",safetyHeading:"تنبيه للسلامة:",technicianWarning:"أوقف العمل إذا لم تكن مؤهلًا، واستعن بفني مختص.",relatedCodes:"رموز قد تكون مرتبطة",relatedNeedsVehicle:"رمز ذو صلة — يتطلب مرجع المركبة",moreRepairInfo:"تحتاج معلومات إصلاح أكثر؟",membershipCopy:"استكشف أدوات وبيانات الإصلاح المتاحة باشتراكات MOTRXO.",membershipNote:"لا يوجد ربط تقني للتحقق من الاشتراكات في هذه المرجع.",searchAnother:"ابحث عن رمز آخر",searchHint:"اكتب الرمز كما ظهر في جهاز الفحص.",notFound:"لم نعثر على",invalidCode:"أدخل رمز عطل صالحًا",notFoundText:"المعروض هنا بيانات عامة جزئية فقط. تحقق من كتابة الرمز أو راجع بيانات المصنع لتغطية سيارتك.",backHome:"العودة إلى دليل الأكواد",chat:"تواصل معنا",footerBrand:"دليل رموز الأعطال",footerText:"مرجع أولي يساعدك على فهم الرمز؛ التشخيص الدقيق يعتمد على نوع السيارة وبيانات المصنع.",footerVisit:"زيارة MOTRXO",footerNote:"مرجع منشور — بيانات عامة جزئية. التغطية الخاصة بالمركبة تحتاج مصدر بيانات مرخصًا."},
    en: {pageTitle:"MOTRXO | Vehicle DTC Guide",skip:"Skip to content",menu:"Menu",navCodes:"DTC guide",navHow:"How it works",navPlans:"Subscriptions",headerCta:"MOTRXO services",navHome:"Home",navProducts:"Products",navAllProducts:"View MOTRXO services",familiesTitle:"DTC categories",systemsTitle:"Vehicle systems",systemEngine:"Engine",systemTransmission:"Transmission",systemBody:"Body systems",languageTitle:"Language",drawerCta:"Explore MOTRXO services",drawerDisclaimer:"Independent generic reference — limited generic code sample.",searchLabel:"Enter a trouble code",searchPlaceholder:"Example: P0122",searchButton:"Search code",heroEyebrow:"A starter guide to vehicle trouble codes",heroLine1:"Understand the code.",heroLine2:"Start diagnosis with context.",heroCopy:"Search a code, review its likely meaning and follow an initial inspection path. This guide is a starting point; vehicle-specific service information takes priority.",tryCodes:"Try",heroVisual:"DTC diagnosis reference",scanSummary:"Scan summary",genericRead:"Illustrative data",engineCode:"Engine trouble code",signalState:"Signal status",needsCheck:"Check required",indexCoverage:"Published generic index",important:"Important",codeAlone:"A code alone is not a diagnosis",chooseFamily:"Choose a code family",familyIntro:"P/B/C/U identifies the code family. Detailed systems and manufacturer coverage require verified vehicle-specific data.",familyP:"Powertrain",familyB:"Body",familyC:"Chassis",familyU:"Network & communication",familyDescP:"Engine and transmission",familyDescB:"Airbags and cabin systems",familyDescC:"Brakes, steering and suspension",familyDescU:"Networks and control modules",manufacturer:"Manufacturer",allMakes:"All makes — generic data",vehicleSystem:"Vehicle system",allSystems:"All systems",sampleOnly:"Limited generic sample",noCategoryCodes:"No sample codes in this category yet",licensedDataNotice:"A verified, licensed data source is required to add this safely.",makeSelected:"Selected make",makeDataNotice:"This sample is generic and has no make-specific mappings.",commonCodes:"Common generic codes",listContext:"This is an illustrative sample, not a vehicle-specific DTC database.",motrxoNetwork:"MOTRXO services",subscriptionTitle:"More data for better decisions",subscriptionCopy:"Explore repair information and subscription services available from MOTRXO.",subscriptionBullet1:"Browse available products",subscriptionBullet2:"Review subscription options",subscriptionBullet3:"Ask MOTRXO about compatibility",subscriptionButton:"Explore subscriptions",contactButton:"Ask on WhatsApp",safetyNotice:"A DTC does not identify a failed part by itself. Meaning can vary by make, model and year; use OEM service information and a qualified technician.",clearPath:"A clear path",howTitle:"From code to next inspection step",howIntro:"Good diagnosis starts with verification, not guesswork.",step1Title:"Enter the trouble code",step1Text:"Type the code as shown on the scan tool, such as P0122 or P0300.",step2Title:"Review meaning and context",step2Text:"Compare likely symptoms and causes with the vehicle's actual data.",step3Title:"Test to specifications",step3Text:"Follow OEM procedures and record measurements before replacing parts.",moreWorkshopData:"More workshop information",subscriptionBandTitle:"Connect the scan to repair information",subscriptionBandCopy:"Explore MOTRXO services and ask about subscriptions for your needs.",showMotrxo:"View MOTRXO services",translationNote:"The interface is translated, but imported generic definitions are shown in English or German; original Arabic explanations are available for five curated codes only.",detailCode:"Code details",genericExplanation:"Generic explanation",symptoms:"Possible symptoms",possibleCauses:"Possible causes",diagnosticPath:"Initial diagnostic path",repairGuidance:"Repair guidance",safetyHeading:"Safety notice:",technicianWarning:"Stop if you are not qualified and consult a trained technician.",relatedCodes:"Potentially related codes",relatedNeedsVehicle:"Related code — vehicle reference required",moreRepairInfo:"Need more repair information?",membershipCopy:"Explore repair tools and data offered through MOTRXO subscriptions.",membershipNote:"Subscription status is not verified in this published reference.",searchAnother:"Search another code",searchHint:"Enter the code as shown on the scan tool.",notFound:"We could not find",invalidCode:"Enter a valid trouble code",notFoundText:"Only a limited sample is shown. Check the code or consult manufacturer data for your vehicle.",backHome:"Back to DTC guide",chat:"Contact us",footerBrand:"DTC guide",footerText:"A starting point for understanding a code; accurate diagnosis depends on vehicle-specific information.",footerVisit:"Visit MOTRXO",footerNote:"Published reference — limited sample. Full coverage requires a licensed data source."},
    fr: {pageTitle:"MOTRXO | Guide des codes défaut",skip:"Aller au contenu",menu:"Menu",navCodes:"Guide DTC",navHow:"Fonctionnement",navPlans:"Abonnements",headerCta:"Services MOTRXO",navHome:"Accueil",navProducts:"Produits",navAllProducts:"Voir les services MOTRXO",familiesTitle:"Catégories DTC",systemsTitle:"Systèmes du véhicule",systemEngine:"Moteur",systemTransmission:"Transmission",systemBody:"Systèmes de carrosserie",languageTitle:"Langue",drawerCta:"Découvrir les services MOTRXO",drawerDisclaimer:"Référence indépendante — échantillon limité.",searchLabel:"Saisir un code défaut",searchPlaceholder:"Exemple : P0122",searchButton:"Rechercher",heroEyebrow:"Guide de départ des codes défaut",heroLine1:"Comprendre le code.",heroLine2:"Commencer le diagnostic.",heroCopy:"Recherchez un code et consultez sa signification probable et une première démarche de contrôle. Les données du constructeur restent prioritaires.",tryCodes:"Essayer",heroVisual:"Référence de diagnostic DTC",scanSummary:"Résumé du scan",genericRead:"Donnée illustrative",engineCode:"Code défaut moteur",signalState:"État du signal",needsCheck:"Contrôle requis",indexCoverage:"Échantillon",important:"Important",codeAlone:"Un code seul ne suffit pas au diagnostic",chooseFamily:"Choisir une famille",familyIntro:"P/B/C/U désigne la famille du code. Les détails constructeur nécessitent des données vérifiées.",familyP:"Groupe motopropulseur",familyB:"Carrosserie",familyC:"Châssis",familyU:"Réseau et communication",familyDescP:"Moteur et transmission",familyDescB:"Airbags et systèmes intérieurs",familyDescC:"Freins, direction et suspension",familyDescU:"Réseaux et calculateurs",manufacturer:"Constructeur",allMakes:"Toutes marques — données génériques",vehicleSystem:"Système véhicule",allSystems:"Tous les systèmes",sampleOnly:"Échantillon limité",noCategoryCodes:"Aucun code exemple dans cette catégorie",licensedDataNotice:"Une source de données vérifiée et sous licence est nécessaire.",makeSelected:"Marque sélectionnée",makeDataNotice:"Cet échantillon est générique, sans données propres à la marque.",commonCodes:"Codes exemples courants",listContext:"Échantillon illustratif, pas une base DTC complète.",motrxoNetwork:"Services MOTRXO",subscriptionTitle:"Plus de données, de meilleures décisions",subscriptionCopy:"Découvrez les informations de réparation et abonnements MOTRXO.",subscriptionBullet1:"Consulter les produits",subscriptionBullet2:"Voir les abonnements",subscriptionBullet3:"Demander la compatibilité",subscriptionButton:"Voir les abonnements",contactButton:"Contacter sur WhatsApp",safetyNotice:"Un code ne désigne pas à lui seul une pièce défectueuse. Le sens varie selon le véhicule ; utilisez les informations constructeur et un technicien qualifié.",clearPath:"Une démarche claire",howTitle:"Du code à la prochaine vérification",howIntro:"Un bon diagnostic commence par la vérification.",step1Title:"Saisir le code",step1Text:"Saisissez le code affiché par l’outil, par exemple P0122.",step2Title:"Vérifier le contexte",step2Text:"Comparez symptômes et causes probables aux données du véhicule.",step3Title:"Tester selon les spécifications",step3Text:"Suivez la procédure constructeur avant de remplacer une pièce.",moreWorkshopData:"Plus d’informations atelier",subscriptionBandTitle:"Reliez le scan aux données de réparation",subscriptionBandCopy:"Découvrez les services MOTRXO et leurs abonnements.",showMotrxo:"Voir les services MOTRXO",translationNote:"L’interface est traduite, mais les définitions génériques importées restent en anglais ou en allemand; les explications arabes originales ne couvrent que cinq codes sélectionnés.",detailCode:"Détails du code",genericExplanation:"Explication de générique",symptoms:"Symptômes possibles",possibleCauses:"Causes possibles",diagnosticPath:"Première démarche",repairGuidance:"Conseils de réparation",safetyHeading:"Sécurité :",technicianWarning:"Consultez un technicien qualifié si nécessaire.",relatedCodes:"Codes potentiellement liés",relatedNeedsVehicle:"Code lié — référence véhicule requise",moreRepairInfo:"Besoin d’informations de réparation ?",membershipCopy:"Découvrez les outils et données proposés par MOTRXO.",membershipNote:"L’abonnement n’est pas vérifié par cette référence.",searchAnother:"Rechercher un autre code",searchHint:"Saisissez le code affiché par l’outil.",notFound:"Code introuvable",invalidCode:"Saisissez un code valide",notFoundText:"Seul un échantillon limité est disponible. Consultez les données du constructeur.",backHome:"Retour au guide DTC",chat:"Nous contacter",footerBrand:"Guide des codes défaut",footerText:"Un premier repère ; le diagnostic dépend des données du véhicule.",footerVisit:"Visiter MOTRXO",footerNote:"Données générales publiées — les informations propres au véhicule restent nécessaires."},
    es: {pageTitle:"MOTRXO | Guía de códigos DTC",skip:"Ir al contenido",menu:"Menú",navCodes:"Guía DTC",navHow:"Cómo funciona",navPlans:"Suscripciones",headerCta:"Servicios MOTRXO",navHome:"Inicio",navProducts:"Productos",navAllProducts:"Ver servicios MOTRXO",familiesTitle:"Categorías DTC",systemsTitle:"Sistemas del vehículo",systemEngine:"Motor",systemTransmission:"Transmisión",systemBody:"Sistemas de carrocería",languageTitle:"Idioma",drawerCta:"Explorar servicios MOTRXO",drawerDisclaimer:"Referencia general independiente — datos generales parciales.",searchLabel:"Introduce un código de avería",searchPlaceholder:"Ejemplo: P0122",searchButton:"Buscar código",heroEyebrow:"Guía inicial de códigos de avería",heroLine1:"Entiende el código.",heroLine2:"Empieza el diagnóstico.",heroCopy:"Busca un código y consulta su posible significado y una ruta inicial de inspección. La información específica del fabricante tiene prioridad.",tryCodes:"Prueba",heroVisual:"Referencia de diagnóstico DTC",scanSummary:"Resumen del escaneo",genericRead:"Dato ilustrativo",engineCode:"Código de motor",signalState:"Estado de señal",needsCheck:"Requiere revisión",indexCoverage:"Muestra",important:"Importante",codeAlone:"Un código no confirma una pieza defectuosa",chooseFamily:"Elige una familia",familyIntro:"P/B/C/U identifica la familia del código. La cobertura del fabricante requiere datos verificados.",familyP:"Tren motriz",familyB:"Carrocería",familyC:"Chasis",familyU:"Red y comunicación",familyDescP:"Motor y transmisión",familyDescB:"Airbags y sistemas interiores",familyDescC:"Frenos, dirección y suspensión",familyDescU:"Redes y módulos de control",manufacturer:"Fabricante",allMakes:"Todas las marcas — datos genéricos",vehicleSystem:"Sistema del vehículo",allSystems:"Todos los sistemas",sampleOnly:"Muestra limitada",noCategoryCodes:"Aún no hay códigos de muestra en esta categoría",licensedDataNotice:"Se necesita una fuente de datos verificada y con licencia.",makeSelected:"Marca seleccionada",makeDataNotice:"La muestra es genérica y no incluye mapas específicos de la marca.",commonCodes:"Códigos de muestra",listContext:"Muestra ilustrativa, no una base DTC completa.",motrxoNetwork:"Servicios MOTRXO",subscriptionTitle:"Más datos para mejores decisiones",subscriptionCopy:"Consulta información de reparación y suscripciones disponibles en MOTRXO.",subscriptionBullet1:"Ver productos disponibles",subscriptionBullet2:"Consultar suscripciones",subscriptionBullet3:"Preguntar por compatibilidad",subscriptionButton:"Ver suscripciones",contactButton:"Consultar por WhatsApp",safetyNotice:"Un DTC no identifica por sí solo la pieza averiada. El significado varía según el vehículo; consulta información OEM y un técnico cualificado.",clearPath:"Un camino claro",howTitle:"Del código al siguiente paso",howIntro:"Un buen diagnóstico empieza verificando, no adivinando.",step1Title:"Introduce el código",step1Text:"Escribe el código tal como aparece en el escáner, por ejemplo P0122.",step2Title:"Revisa el contexto",step2Text:"Compara síntomas y causas con los datos reales del vehículo.",step3Title:"Comprueba según especificaciones",step3Text:"Sigue el procedimiento del fabricante antes de sustituir piezas.",moreWorkshopData:"Más información para talleres",subscriptionBandTitle:"Conecta el escaneo con los datos de reparación",subscriptionBandCopy:"Explora los servicios MOTRXO y sus opciones de suscripción.",showMotrxo:"Ver servicios MOTRXO",translationNote:"La interfaz está traducida, pero las definiciones genéricas importadas aparecen en inglés o alemán; las explicaciones árabes originales solo están disponibles para cinco códigos seleccionados.",detailCode:"Detalles del código",genericExplanation:"Explicación de muestra",symptoms:"Síntomas posibles",possibleCauses:"Causas posibles",diagnosticPath:"Ruta inicial de diagnóstico",repairGuidance:"Guía de reparación",safetyHeading:"Aviso de seguridad:",technicianWarning:"Consulta a un técnico cualificado si es necesario.",relatedCodes:"Códigos posiblemente relacionados",relatedNeedsVehicle:"Código relacionado — requiere datos del vehículo",moreRepairInfo:"¿Necesitas más información de reparación?",membershipCopy:"Explora las herramientas y datos de reparación de MOTRXO.",membershipNote:"Esta referencia no verifica suscripciones.",searchAnother:"Buscar otro código",searchHint:"Introduce el código del escáner.",notFound:"No encontramos",invalidCode:"Introduce un código válido",notFoundText:"Solo se muestra una muestra limitada. Consulta los datos del fabricante.",backHome:"Volver a la guía DTC",chat:"Contactar",footerBrand:"Guía de códigos DTC",footerText:"Una orientación inicial; el diagnóstico depende de los datos del vehículo.",footerVisit:"Visitar MOTRXO",footerNote:"Datos generales publicados — la información específica del vehículo requiere una fuente adecuada."},
    it: {pageTitle:"MOTRXO | Guida codici DTC",skip:"Vai al contenuto",menu:"Menu",navCodes:"Guida DTC",navHow:"Come funziona",navPlans:"Abbonamenti",headerCta:"Servizi MOTRXO",navHome:"Home",navProducts:"Prodotti",navAllProducts:"Vedi i servizi MOTRXO",familiesTitle:"Categorie DTC",systemsTitle:"Sistemi del veicolo",systemEngine:"Motore",systemTransmission:"Trasmissione",systemBody:"Sistemi carrozzeria",languageTitle:"Lingua",drawerCta:"Scopri i servizi MOTRXO",drawerDisclaimer:"Riferimento indipendente — campione limitato.",searchLabel:"Inserisci il codice guasto",searchPlaceholder:"Esempio: P0122",searchButton:"Cerca codice",heroEyebrow:"Guida iniziale ai codici guasto",heroLine1:"Capisci il codice.",heroLine2:"Inizia la diagnosi.",heroCopy:"Cerca un codice e consulta il significato probabile e un primo percorso di controllo. Le informazioni del costruttore restano prioritarie.",tryCodes:"Prova",heroVisual:"Riferimento diagnosi DTC",scanSummary:"Riepilogo scansione",genericRead:"Dato illustrativo",engineCode:"Codice guasto motore",signalState:"Stato segnale",needsCheck:"Controllo necessario",indexCoverage:"Campione",important:"Importante",codeAlone:"Il codice da solo non identifica il componente guasto",chooseFamily:"Scegli una famiglia",familyIntro:"P/B/C/U indica la famiglia del codice. La copertura del costruttore richiede dati verificati.",familyP:"Gruppo propulsore",familyB:"Carrozzeria",familyC:"Telaio",familyU:"Rete e comunicazione",familyDescP:"Motore e trasmissione",familyDescB:"Airbag e sistemi interni",familyDescC:"Freni, sterzo e sospensioni",familyDescU:"Reti e centraline",manufacturer:"Costruttore",allMakes:"Tutti i marchi — dati generici",vehicleSystem:"Sistema veicolo",allSystems:"Tutti i sistemi",sampleOnly:"Campione limitato",noCategoryCodes:"Nessun codice generic in questa categoria",licensedDataNotice:"Serve una fonte dati verificata e con licenza.",makeSelected:"Marchio selezionato",makeDataNotice:"Il campione è generico e non contiene dati specifici del marchio.",commonCodes:"Codici generic comuni",listContext:"Campione illustrativo, non database DTC completo.",motrxoNetwork:"Servizi MOTRXO",subscriptionTitle:"Più dati per decisioni migliori",subscriptionCopy:"Scopri le informazioni di riparazione e gli abbonamenti MOTRXO.",subscriptionBullet1:"Consulta i prodotti",subscriptionBullet2:"Scopri gli abbonamenti",subscriptionBullet3:"Chiedi la compatibilità",subscriptionButton:"Scopri gli abbonamenti",contactButton:"Chiedi su WhatsApp",safetyNotice:"Un DTC non identifica da solo il componente guasto. Il significato varia per veicolo; consulta i dati OEM e un tecnico qualificato.",clearPath:"Un percorso chiaro",howTitle:"Dal codice al controllo successivo",howIntro:"Una buona diagnosi inizia dalla verifica.",step1Title:"Inserisci il codice",step1Text:"Digita il codice mostrato dallo strumento, per esempio P0122.",step2Title:"Valuta il contesto",step2Text:"Confronta sintomi e cause con i dati reali del veicolo.",step3Title:"Verifica secondo specifiche",step3Text:"Segui la procedura del costruttore prima di sostituire componenti.",moreWorkshopData:"Più dati per l’officina",subscriptionBandTitle:"Collega la scansione alle informazioni di riparazione",subscriptionBandCopy:"Esplora i servizi e gli abbonamenti MOTRXO.",showMotrxo:"Vedi servizi MOTRXO",translationNote:"L’interfaccia è tradotta, ma le definizioni generiche importate restano in inglese o tedesco; le spiegazioni arabe originali sono disponibili solo per cinque codici selezionati.",detailCode:"Dettagli codice",genericExplanation:"Spiegazione generic",symptoms:"Sintomi possibili",possibleCauses:"Cause possibili",diagnosticPath:"Percorso diagnostico iniziale",repairGuidance:"Indicazioni di riparazione",safetyHeading:"Avviso di sicurezza:",technicianWarning:"Rivolgiti a un tecnico qualificato se necessario.",relatedCodes:"Codici potenzialmente correlati",relatedNeedsVehicle:"Codice correlato — serve riferimento veicolo",moreRepairInfo:"Servono altre informazioni di riparazione?",membershipCopy:"Scopri gli strumenti e i dati di riparazione MOTRXO.",membershipNote:"Questo riferimento non verifica gli abbonamenti.",searchAnother:"Cerca un altro codice",searchHint:"Inserisci il codice mostrato dallo strumento.",notFound:"Codice non trovato:",invalidCode:"Inserisci un codice valido",notFoundText:"È disponibile solo un campione limitato. Consulta i dati del costruttore.",backHome:"Torna alla guida DTC",chat:"Contattaci",footerBrand:"Guida codici DTC",footerText:"Un riferimento iniziale; la diagnosi dipende dai dati del veicolo.",footerVisit:"Visita MOTRXO",footerNote:"Dati generali pubblicati — le informazioni specifiche del veicolo richiedono una fonte adeguata."},
    de: {pageTitle:"MOTRXO | Fahrzeug-DTC-Leitfaden",skip:"Zum Inhalt springen",menu:"Menü",navCodes:"DTC-Leitfaden",navHow:"So funktioniert es",navPlans:"Abos",headerCta:"MOTRXO-Dienste",navHome:"Startseite",navProducts:"Produkte",navAllProducts:"MOTRXO-Dienste ansehen",familiesTitle:"DTC-Kategorien",systemsTitle:"Fahrzeugsysteme",systemEngine:"Motor",systemTransmission:"Getriebe",systemBody:"Karosseriesysteme",languageTitle:"Sprache",drawerCta:"MOTRXO-Dienste entdecken",drawerDisclaimer:"Unabhängige Referenz — begrenzte Generic-Daten.",searchLabel:"Fehlercode eingeben",searchPlaceholder:"Beispiel: P0122",searchButton:"Code suchen",heroEyebrow:"Einstieg in Fahrzeug-Fehlercodes",heroLine1:"Code verstehen.",heroLine2:"Diagnose gezielt beginnen.",heroCopy:"Suchen Sie einen Code und prüfen Sie die wahrscheinliche Bedeutung sowie erste Prüfschritte. Fahrzeugspezifische Herstellerdaten haben Vorrang.",tryCodes:"Beispiele",heroVisual:"DTC-Diagnosereferenz",scanSummary:"Scan-Übersicht",genericRead:"Beispieldaten",engineCode:"Motor-Fehlercode",signalState:"Signalstatus",needsCheck:"Prüfung erforderlich",indexCoverage:"Beispielumfang",important:"Wichtig",codeAlone:"Ein Code allein ist keine Diagnose",chooseFamily:"Codefamilie auswählen",familyIntro:"P/B/C/U kennzeichnet die Codefamilie. Herstellerabdeckung erfordert verifizierte Fahrzeugdaten.",familyP:"Antriebsstrang",familyB:"Karosserie",familyC:"Fahrwerk",familyU:"Netzwerk & Kommunikation",familyDescP:"Motor und Getriebe",familyDescB:"Airbags und Innenraumsysteme",familyDescC:"Bremsen, Lenkung und Fahrwerk",familyDescU:"Netze und Steuergeräte",manufacturer:"Hersteller",allMakes:"Alle Marken — allgemeine Daten",vehicleSystem:"Fahrzeugsystem",allSystems:"Alle Systeme",sampleOnly:"Begrenzte Generic-Auswahl",noCategoryCodes:"Noch keine Beispielcodes in dieser Kategorie",licensedDataNotice:"Eine verifizierte, lizenzierte Datenquelle ist erforderlich.",makeSelected:"Ausgewählte Marke",makeDataNotice:"Diese Auswahl ist allgemein und nicht markenspezifisch.",commonCodes:"Häufige Beispielcodes",listContext:"Beispielauswahl, keine vollständige DTC-Datenbank.",motrxoNetwork:"MOTRXO-Dienste",subscriptionTitle:"Mehr Daten für bessere Entscheidungen",subscriptionCopy:"Entdecken Sie Reparaturinformationen und Abos bei MOTRXO.",subscriptionBullet1:"Verfügbare Produkte ansehen",subscriptionBullet2:"Abo-Optionen prüfen",subscriptionBullet3:"Kompatibilität erfragen",subscriptionButton:"Abos ansehen",contactButton:"Per WhatsApp fragen",safetyNotice:"Ein DTC identifiziert kein defektes Teil allein. Die Bedeutung variiert je Fahrzeug; nutzen Sie OEM-Informationen und qualifizierte Fachkräfte.",clearPath:"Ein klarer Ablauf",howTitle:"Vom Code zum nächsten Prüfschritt",howIntro:"Eine gute Diagnose beginnt mit Überprüfung statt Raten.",step1Title:"Fehlercode eingeben",step1Text:"Geben Sie den Code wie auf dem Diagnosegerät angezeigt ein.",step2Title:"Kontext prüfen",step2Text:"Vergleichen Sie Symptome und Ursachen mit den Fahrzeugdaten.",step3Title:"Nach Vorgaben prüfen",step3Text:"Folgen Sie Herstellervorgaben, bevor Sie Teile ersetzen.",moreWorkshopData:"Mehr Werkstattdaten",subscriptionBandTitle:"Scan und Reparaturinformationen verbinden",subscriptionBandCopy:"Entdecken Sie MOTRXO-Dienste und Abonnements.",showMotrxo:"MOTRXO-Dienste anzeigen",translationNote:"Die Oberfläche ist übersetzt, die importierten allgemeinen Definitionen werden jedoch auf Englisch oder Deutsch angezeigt; originale arabische Erläuterungen gibt es nur für fünf ausgewählte Codes.",detailCode:"Code-Details",genericExplanation:"Generic-Erklärung",symptoms:"Mögliche Symptome",possibleCauses:"Mögliche Ursachen",diagnosticPath:"Erste Diagnoseschritte",repairGuidance:"Reparaturhinweise",safetyHeading:"Sicherheitshinweis:",technicianWarning:"Wenden Sie sich bei Bedarf an qualifiziertes Fachpersonal.",relatedCodes:"Möglicherweise verwandte Codes",relatedNeedsVehicle:"Verwandter Code — Fahrzeugdaten erforderlich",moreRepairInfo:"Weitere Reparaturinformationen benötigt?",membershipCopy:"Entdecken Sie Reparaturtools und Daten von MOTRXO.",membershipNote:"Abos werden durch diese Referenz nicht überprüft.",searchAnother:"Weiteren Code suchen",searchHint:"Geben Sie den Code vom Diagnosegerät ein.",notFound:"Nicht gefunden:",invalidCode:"Gültigen Fehlercode eingeben",notFoundText:"Es ist nur eine begrenzte Auswahl verfügbar. Prüfen Sie Herstellerdaten.",backHome:"Zurück zum DTC-Leitfaden",chat:"Kontakt",footerBrand:"DTC-Leitfaden",footerText:"Erste Orientierung; die Diagnose hängt von den Fahrzeugdaten ab.",footerVisit:"MOTRXO besuchen",footerNote:"Veröffentlichte allgemeine Daten — fahrzeugspezifische Informationen erfordern eine geeignete Quelle."},
  };
  familyNames = {
    ar:{P:"مجموعة الحركة",B:"الهيكل",C:"الشاسيه",U:"الشبكة والاتصال"},en:{P:"Powertrain",B:"Body",C:"Chassis",U:"Network & communication"},fr:{P:"Groupe motopropulseur",B:"Carrosserie",C:"Châssis",U:"Réseau et communication"},es:{P:"Tren motriz",B:"Carrocería",C:"Chasis",U:"Red y comunicación"},it:{P:"Gruppo propulsore",B:"Carrozzeria",C:"Telaio",U:"Rete e comunicazione"},de:{P:"Antriebsstrang",B:"Karosserie",C:"Fahrwerk",U:"Netzwerk & Kommunikation"}
  };
  const serviceNames = {ar:"جدول الخدمة",en:"Service schedule",fr:"Plan d’entretien",es:"Plan de mantenimiento",it:"Piano di manutenzione",de:"Wartungsplan"};
  Object.keys(serviceNames).forEach(lang => { localeDict[lang].navService = serviceNames[lang]; });
  languageNames = {ar:"العربية",en:"English",fr:"Français",es:"Español",it:"Italiano",de:"Deutsch"};
  var directionMap = {ar:"rtl",en:"ltr",fr:"ltr",es:"ltr",it:"ltr",de:"ltr"};
  try { uiLocale = localStorage.getItem("motrxo-language") || "ar"; } catch { uiLocale = "ar"; }
  if (!localeDict[uiLocale]) uiLocale = "ar";
  try { currentFamily = sessionStorage.getItem("motrxo-family") || "P"; } catch { currentFamily = "P"; }
  const familyParam = new URLSearchParams(window.location.search).get("family")?.toUpperCase();
  if (window.location.pathname === "/dtc/" && ["P", "B", "C", "U"].includes(familyParam)) {
    currentFamily = familyParam;
    try { sessionStorage.setItem("motrxo-family", currentFamily); } catch {}
  }
  const toggle = document.getElementById("menu-toggle");
  const close = document.getElementById("drawer-close");
  const backdrop = document.getElementById("drawer-backdrop");
  toggle?.addEventListener("click", openDrawer);
  close?.addEventListener("click", closeDrawer);
  backdrop?.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", event => { if (event.key === "Escape" && !document.getElementById("site-drawer")?.hidden) closeDrawer(); });
  document.querySelectorAll("[data-locale-choice]").forEach(button => button.addEventListener("click", () => {
    uiLocale = button.dataset.localeChoice;
    try { localStorage.setItem("motrxo-language", uiLocale); } catch {}
    applyLocale(); renderCurrentRoute();
  }));
  document.querySelectorAll("[data-family-choice]").forEach(button => button.addEventListener("click", () => {
    currentFamily = button.dataset.familyChoice;
    try { sessionStorage.setItem("motrxo-family", currentFamily); } catch {}
    closeDrawer();
    if (/^\/dtc\//i.test(window.location.pathname)) {
      window.location.href = `/dtc/?family=${encodeURIComponent(currentFamily)}#codes`;
      return;
    }
    renderHome();
    document.getElementById("codes")?.scrollIntoView({behavior:"smooth"});
  }));
  applyLocale();
  renderCurrentRoute();
}

initializeMOTRXO();
