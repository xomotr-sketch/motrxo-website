(() => {
  const copy = {
    ar: {
      kicker: "من منتجات MOTRXO", title: "طلب بيانات سيارة واحدة",
      intro: "اختر ماركة واحدة وموديلًا واحدًا، ثم حدد أنظمة الإصلاح التي تحتاج بياناتها.",
      oneVehicle: "كل طلب لسيارة واحدة وموديل واحد.", make: "ماركة السيارة", chooseMake: "اختر الماركة",
      loadingMakes: "جارٍ تحميل الماركات…", otherMake: "ماركة أخرى / غير موجودة",
      makeManual: "اكتب اسم الماركة", model: "موديل السيارة", chooseModel: "اختر الموديل",
      chooseMakeFirst: "اختر الماركة أولًا", loadingModels: "جارٍ تحميل الموديلات…",
      otherModel: "الموديل غير موجود في القائمة", modelManual: "اكتب اسم الموديل",
      noModels: "لم تظهر موديلات لهذه الماركة؛ يمكنك كتابة الموديل يدويًا.",
      systems: "ما الأنظمة التي تحتاج بياناتها؟", allSystems: "كل الأنظمة",
      engine: "المحرك (Engine / ECM / PCM)", tcm: "ناقل الحركة (TCM)",
      abs: "الفرامل والثبات (ABS / ESC)", srs: "الوسائد الهوائية (SRS)",
      body: "أنظمة الهيكل (BCM)", hvac: "التكييف (HVAC)",
      eps: "التوجيه الكهربائي (EPS)", tpms: "مراقبة ضغط الإطارات (TPMS)",
      adas: "مساعدة السائق (ADAS)", network: "الشبكات والاتصال (CAN / LIN)",
      sourceNote: "تُحمّل الماركات والموديلات من NHTSA vPIC عند توفره؛ وإذا تعذر الوصول مؤقتًا تظهر قائمة ماركات احتياطية مختارة. لا تضمن القوائم تغطية كل ماركات العالم. أدخل الخيار الناقص يدويًا؛ القائمة لتحديد السيارة فقط ولا توفر بيانات الإصلاح.",
      incomplete: "أكمل اختيار الماركة والموديل ونظام واحد على الأقل أو «كل الأنظمة».",
      request: "اطلب عبر واتساب", followup: "السعر وتوفر البيانات يؤكدهما فريق MOTRXO عبر واتساب؛ لا يوجد دفع في هذه المعاينة.",
      summary: "ملخص الطلب", waIntro: "مرحبًا MOTRXO، أريد طلب بيانات سيارة واحدة.",
      waMake: "الماركة", waModel: "الموديل", waSystems: "الأنظمة المطلوبة"
    },
    en: {
      kicker: "MOTRXO product", title: "Request data for one vehicle",
      intro: "Choose one make and one model, then select the repair systems you need.",
      oneVehicle: "Each request covers one vehicle and one model.", make: "Vehicle make", chooseMake: "Choose a make",
      loadingMakes: "Loading makes…", otherMake: "Other / not listed", makeManual: "Enter the make",
      model: "Vehicle model", chooseModel: "Choose a model", chooseMakeFirst: "Choose a make first",
      loadingModels: "Loading models…", otherModel: "Model not listed", modelManual: "Enter the model",
      noModels: "No models were returned; you can enter the model manually.",
      systems: "Which systems do you need?", allSystems: "All systems",
      engine: "Engine (ECM / PCM)", tcm: "Transmission (TCM)", abs: "Brakes & stability (ABS / ESC)",
      srs: "Airbags (SRS)", body: "Body systems (BCM)", hvac: "Climate control (HVAC)",
      eps: "Electric steering (EPS)", tpms: "Tire pressure (TPMS)", adas: "Driver assistance (ADAS)",
      network: "Networks & communication (CAN / LIN)",
      sourceNote: "Makes and models load from NHTSA vPIC when available; a small fallback make list appears if the service is temporarily unavailable. Neither list covers every make worldwide. Enter missing options manually; this identifies the vehicle only and provides no repair data.",
      incomplete: "Choose a make, a model, and at least one system or “All systems”.",
      request: "Request via WhatsApp", followup: "MOTRXO will confirm price and availability via WhatsApp; no payment is taken in this preview.",
      summary: "Request summary", waIntro: "Hello MOTRXO, I would like to request data for one vehicle.",
      waMake: "Make", waModel: "Model", waSystems: "Requested systems"
    },
    fr: {
      kicker: "Produit MOTRXO", title: "Demander les données d’un véhicule",
      intro: "Choisissez une marque et un modèle, puis les systèmes de réparation souhaités.",
      oneVehicle: "Chaque demande concerne un seul véhicule et un seul modèle.", make: "Marque", chooseMake: "Choisir une marque",
      loadingMakes: "Chargement des marques…", otherMake: "Autre marque / introuvable", makeManual: "Saisir la marque",
      model: "Modèle", chooseModel: "Choisir un modèle", chooseMakeFirst: "Choisissez d’abord une marque",
      loadingModels: "Chargement des modèles…", otherModel: "Modèle introuvable", modelManual: "Saisir le modèle",
      noModels: "Aucun modèle reçu ; vous pouvez saisir le modèle manuellement.",
      systems: "Quels systèmes souhaitez-vous ?", allSystems: "Tous les systèmes",
      engine: "Moteur (ECM / PCM)", tcm: "Transmission (TCM)", abs: "Freins et stabilité (ABS / ESC)",
      srs: "Airbags (SRS)", body: "Carrosserie (BCM)", hvac: "Climatisation (HVAC)",
      eps: "Direction électrique (EPS)", tpms: "Pression des pneus (TPMS)", adas: "Aide à la conduite (ADAS)",
      network: "Réseaux et communication (CAN / LIN)",
      sourceNote: "Les marques et modèles proviennent de NHTSA vPIC lorsque le service est disponible ; une petite liste de secours apparaît en cas d’indisponibilité temporaire. Aucune des listes ne couvre toutes les marques mondiales. Saisissez manuellement les options absentes ; elles identifient le véhicule sans fournir de données de réparation.",
      incomplete: "Choisissez une marque, un modèle et au moins un système ou « Tous les systèmes ».",
      request: "Demander sur WhatsApp", followup: "MOTRXO confirmera le prix et la disponibilité sur WhatsApp ; aucun paiement dans cet aperçu.",
      summary: "Résumé de la demande", waIntro: "Bonjour MOTRXO, je souhaite demander les données d’un véhicule.",
      waMake: "Marque", waModel: "Modèle", waSystems: "Systèmes demandés"
    },
    es: {
      kicker: "Producto MOTRXO", title: "Solicitar datos de un vehículo",
      intro: "Elige una marca y un modelo, y luego los sistemas de reparación que necesitas.",
      oneVehicle: "Cada solicitud incluye un solo vehículo y un solo modelo.", make: "Marca del vehículo", chooseMake: "Elige una marca",
      loadingMakes: "Cargando marcas…", otherMake: "Otra / no aparece", makeManual: "Escribe la marca",
      model: "Modelo del vehículo", chooseModel: "Elige un modelo", chooseMakeFirst: "Elige primero una marca",
      loadingModels: "Cargando modelos…", otherModel: "El modelo no aparece", modelManual: "Escribe el modelo",
      noModels: "No se recibieron modelos; puedes escribirlo manualmente.",
      systems: "¿Qué sistemas necesitas?", allSystems: "Todos los sistemas",
      engine: "Motor (ECM / PCM)", tcm: "Transmisión (TCM)", abs: "Frenos y estabilidad (ABS / ESC)",
      srs: "Airbags (SRS)", body: "Carrocería (BCM)", hvac: "Climatización (HVAC)",
      eps: "Dirección eléctrica (EPS)", tpms: "Presión de neumáticos (TPMS)", adas: "Asistencia al conductor (ADAS)",
      network: "Redes y comunicación (CAN / LIN)",
      sourceNote: "Las marcas y modelos se cargan desde NHTSA vPIC cuando está disponible; si el servicio falla temporalmente, aparece una lista de marcas de respaldo. Ninguna lista cubre todas las marcas del mundo. Escribe manualmente las opciones que falten; esto identifica el vehículo, no ofrece datos de reparación.",
      incomplete: "Elige marca, modelo y al menos un sistema o «Todos los sistemas».",
      request: "Solicitar por WhatsApp", followup: "MOTRXO confirmará precio y disponibilidad por WhatsApp; esta vista previa no cobra.",
      summary: "Resumen de solicitud", waIntro: "Hola MOTRXO, quiero solicitar datos de un vehículo.",
      waMake: "Marca", waModel: "Modelo", waSystems: "Sistemas solicitados"
    },
    it: {
      kicker: "Prodotto MOTRXO", title: "Richiedi i dati di un veicolo",
      intro: "Scegli una marca e un modello, poi seleziona i sistemi di riparazione richiesti.",
      oneVehicle: "Ogni richiesta riguarda un solo veicolo e un solo modello.", make: "Marca del veicolo", chooseMake: "Scegli una marca",
      loadingMakes: "Caricamento marche…", otherMake: "Altra / non presente", makeManual: "Inserisci la marca",
      model: "Modello del veicolo", chooseModel: "Scegli un modello", chooseMakeFirst: "Scegli prima una marca",
      loadingModels: "Caricamento modelli…", otherModel: "Modello non presente", modelManual: "Inserisci il modello",
      noModels: "Nessun modello disponibile; puoi inserirlo manualmente.",
      systems: "Quali sistemi ti servono?", allSystems: "Tutti i sistemi",
      engine: "Motore (ECM / PCM)", tcm: "Trasmissione (TCM)", abs: "Freni e stabilità (ABS / ESC)",
      srs: "Airbag (SRS)", body: "Carrozzeria (BCM)", hvac: "Climatizzazione (HVAC)",
      eps: "Sterzo elettrico (EPS)", tpms: "Pressione pneumatici (TPMS)", adas: "Assistenza alla guida (ADAS)",
      network: "Reti e comunicazione (CAN / LIN)",
      sourceNote: "Marche e modelli vengono caricati da NHTSA vPIC quando disponibile; se il servizio è temporaneamente inattivo, appare un piccolo elenco di marche di riserva. Nessun elenco copre tutte le marche del mondo. Inserisci manualmente le opzioni mancanti; l’elenco identifica il veicolo, non fornisce dati di riparazione.",
      incomplete: "Scegli marca, modello e almeno un sistema o «Tutti i sistemi».",
      request: "Richiedi via WhatsApp", followup: "MOTRXO confermerà prezzo e disponibilità via WhatsApp; questa anteprima non addebita nulla.",
      summary: "Riepilogo richiesta", waIntro: "Ciao MOTRXO, vorrei richiedere i dati di un veicolo.",
      waMake: "Marca", waModel: "Modello", waSystems: "Sistemi richiesti"
    },
    de: {
      kicker: "MOTRXO-Produkt", title: "Daten für ein Fahrzeug anfragen",
      intro: "Wähle eine Marke und ein Modell und anschließend die gewünschten Fahrzeugsysteme.",
      oneVehicle: "Jede Anfrage gilt für ein Fahrzeug und ein Modell.", make: "Fahrzeugmarke", chooseMake: "Marke wählen",
      loadingMakes: "Marken werden geladen…", otherMake: "Andere / nicht aufgeführt", makeManual: "Marke eingeben",
      model: "Fahrzeugmodell", chooseModel: "Modell wählen", chooseMakeFirst: "Zuerst eine Marke wählen",
      loadingModels: "Modelle werden geladen…", otherModel: "Modell nicht aufgeführt", modelManual: "Modell eingeben",
      noModels: "Keine Modelle verfügbar; du kannst das Modell manuell eingeben.",
      systems: "Welche Systeme benötigst du?", allSystems: "Alle Systeme",
      engine: "Motor (ECM / PCM)", tcm: "Getriebe (TCM)", abs: "Bremsen und Stabilität (ABS / ESC)",
      srs: "Airbags (SRS)", body: "Karosserie (BCM)", hvac: "Klimaanlage (HVAC)",
      eps: "Elektrische Lenkung (EPS)", tpms: "Reifendruck (TPMS)", adas: "Fahrerassistenz (ADAS)",
      network: "Netzwerk und Kommunikation (CAN / LIN)",
      sourceNote: "Marken und Modelle werden nach Möglichkeit aus NHTSA vPIC geladen; bei vorübergehender Nichtverfügbarkeit erscheint eine kleine Ersatzliste mit Marken. Keine der Listen umfasst alle Marken weltweit. Fehlende Angaben kannst du manuell eingeben; die Liste identifiziert nur das Fahrzeug und enthält keine Reparaturdaten.",
      incomplete: "Wähle Marke, Modell und mindestens ein System oder „Alle Systeme“.",
      request: "Per WhatsApp anfragen", followup: "MOTRXO bestätigt Preis und Verfügbarkeit per WhatsApp; diese Vorschau nimmt keine Zahlung entgegen.",
      summary: "Anfrageübersicht", waIntro: "Hallo MOTRXO, ich möchte Daten für ein Fahrzeug anfragen.",
      waMake: "Marke", waModel: "Modell", waSystems: "Gewünschte Systeme"
    }
  };

  const fallbackMakes = [
    "Acura", "Alfa Romeo", "Audi", "BMW", "BYD", "Cadillac", "Chery", "Chevrolet", "Chrysler", "Citroën",
    "Dodge", "Fiat", "Ford", "Genesis", "GMC", "Honda", "Hyundai", "Infiniti", "Isuzu", "Jaguar", "Jeep",
    "Kia", "Land Rover", "Lexus", "Lincoln", "Mazda", "Mercedes-Benz", "MG", "Mini", "Mitsubishi", "Nissan",
    "Opel", "Peugeot", "Porsche", "Ram", "Renault", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen", "Volvo"
  ];
  const systemKeys = ["engine", "tcm", "abs", "srs", "body", "hvac", "eps", "tpms", "adas", "network"];
  let makeRows = [];
  let makeRowsReady = false;
  let modelRequestVersion = 0;
  const modelCache = new Map();
  const selection = { make: "", makeOther: "", model: "", modelOther: "", systems: [] };
  const phone = "201016673956";

  function locale() { return copy[document.documentElement.lang] || copy.ar; }
  function t(key) { return locale()[key] || copy.ar[key] || key; }
  function html(value) {
    return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  }
  function renderVehicleRequestSection() {
    return `<section class="section product-request-section" id="products">
      <div class="container">
        <div class="section-head"><div><span class="section-kicker">${html(t("kicker"))}</span><h2>${html(t("title"))}</h2></div><p>${html(t("intro"))}</p></div>
        <div class="request-product-card">
          <div class="request-product-summary"><span class="request-product-tag">MOTRXO · 1 VEHICLE</span><h3>${html(t("oneVehicle"))}</h3><p>${html(t("followup"))}</p></div>
          <form id="vehicle-request-form" class="vehicle-request-form" novalidate>
            <div class="request-fields">
              <label class="request-field"><span>${html(t("make"))}</span><select id="vehicle-make" required><option value="">${html(t("loadingMakes"))}</option></select><input id="vehicle-make-other" class="request-manual-input" type="text" placeholder="${html(t("makeManual"))}" autocomplete="organization" hidden></label>
              <label class="request-field"><span>${html(t("model"))}</span><select id="vehicle-model" required disabled><option value="">${html(t("chooseMakeFirst"))}</option></select><input id="vehicle-model-other" class="request-manual-input" type="text" placeholder="${html(t("modelManual"))}" autocomplete="off" hidden></label>
            </div>
            <fieldset class="request-systems"><legend>${html(t("systems"))}</legend><div class="request-system-grid">
              <label class="request-system-choice request-system-all"><input id="request-all-systems" type="checkbox"><span>${html(t("allSystems"))}</span></label>
              ${systemKeys.map(key => `<label class="request-system-choice"><input type="checkbox" class="request-system-input" value="${key}"><span>${html(t(key))}</span></label>`).join("")}
            </div></fieldset>
            <p class="request-source-note">${html(t("sourceNote"))}</p>
            <div id="vehicle-request-status" class="request-status" role="status" aria-live="polite">${html(t("incomplete"))}</div>
            <button id="vehicle-request-submit" class="button-primary request-submit" type="submit" disabled>${html(t("request"))}<span aria-hidden="true">↗</span></button>
          </form>
        </div>
      </div>
    </section>`;
  }

  function makeLabel(row) { return row.name || row.MakeName || row.Make_Name || ""; }
  function makeId(row) { return row.id || row.MakeId || row.Make_ID || ""; }
  function populateMakeSelect(select) {
    const previous = selection.make;
    select.replaceChildren(new Option(t("chooseMake"), ""));
    makeRows.forEach(row => {
      const name = makeLabel(row);
      const id = makeId(row);
      if (!name) return;
      const option = new Option(name, id ? `id:${id}` : `manual:${name}`);
      option.dataset.name = name;
      select.add(option);
    });
    select.add(new Option(t("otherMake"), "other"));
    select.disabled = false;
    if (previous && Array.from(select.options).some(option => option.value === previous)) select.value = previous;
  }
  async function loadMakeRows() {
    if (makeRowsReady) return makeRows;
    try {
      const response = await fetch("/api/vehicle-makes", {headers:{Accept:"application/json"}});
      if (!response.ok) throw new Error("Vehicle makes unavailable");
      const payload = await response.json();
      const rows = Array.isArray(payload.Results) ? payload.Results : [];
      const seen = new Set();
      makeRows = rows.map(row => ({id: row.MakeId || row.Make_ID, name: row.MakeName || row.Make_Name}))
        .filter(row => row.id && row.name && !seen.has(String(row.id)) && seen.add(String(row.id)))
        .sort((a,b) => a.name.localeCompare(b.name));
      if (!makeRows.length) throw new Error("Empty vehicle make catalog");
    } catch {
      makeRows = fallbackMakes.map(name => ({name}));
    }
    makeRowsReady = true;
    return makeRows;
  }
  async function loadModels(id) {
    if (modelCache.has(String(id))) return modelCache.get(String(id));
    const response = await fetch(`/api/vehicle-models?makeId=${encodeURIComponent(id)}`, {headers:{Accept:"application/json"}});
    if (!response.ok) throw new Error("Vehicle models unavailable");
    const payload = await response.json();
    const names = (Array.isArray(payload.Results) ? payload.Results : [])
      .map(row => row.Model_Name || row.ModelName || row.model)
      .filter(Boolean);
    const unique = Array.from(new Set(names)).sort((a,b) => a.localeCompare(b));
    modelCache.set(String(id), unique);
    return unique;
  }
  function selectedMakeName(select) {
    const option = select.options[select.selectedIndex];
    if (!option) return "";
    if (selection.make === "other") return selection.makeOther.trim();
    return option.dataset.name || (selection.make.startsWith("manual:") ? selection.make.slice(7) : "");
  }
  function syncRequestState(form) {
    const makeSelect = form.querySelector("#vehicle-make");
    const makeOther = form.querySelector("#vehicle-make-other");
    const modelSelect = form.querySelector("#vehicle-model");
    const modelOther = form.querySelector("#vehicle-model-other");
    const all = form.querySelector("#request-all-systems");
    const systems = Array.from(form.querySelectorAll(".request-system-input"));
    const make = selectedMakeName(makeSelect);
    const model = modelOther.hidden ? modelSelect.value : modelOther.value.trim();
    const chosenSystems = all.checked ? [t("allSystems")] : systems.filter(input => input.checked).map(input => t(input.value));
    const complete = Boolean(make && model && chosenSystems.length);
    const status = form.querySelector("#vehicle-request-status");
    const submit = form.querySelector("#vehicle-request-submit");
    status.textContent = complete ? `${t("summary")}: ${make} · ${model} · ${chosenSystems.join(", ")}` : t("incomplete");
    status.classList.toggle("is-ready", complete);
    submit.disabled = !complete;
    return {make, model, chosenSystems, complete};
  }
  function setModelOptions(select, names) {
    select.replaceChildren(new Option(names.length ? t("chooseModel") : t("noModels"), ""));
    names.forEach(name => select.add(new Option(name, name)));
    select.add(new Option(t("otherModel"), "other"));
    select.disabled = false;
    if (selection.model && Array.from(select.options).some(option => option.value === selection.model)) select.value = selection.model;
    else if (selection.model && !Array.from(select.options).some(option => option.value === selection.model)) select.value = "other";
  }
  function bindVehicleRequest() {
    const form = document.getElementById("vehicle-request-form");
    if (!form || form.dataset.bound === "true") return;
    form.dataset.bound = "true";
    const makeSelect = form.querySelector("#vehicle-make");
    const makeOther = form.querySelector("#vehicle-make-other");
    const modelSelect = form.querySelector("#vehicle-model");
    const modelOther = form.querySelector("#vehicle-model-other");
    const all = form.querySelector("#request-all-systems");
    const systemInputs = Array.from(form.querySelectorAll(".request-system-input"));

    loadMakeRows().then(async () => {
      if (!document.body.contains(form)) return;
      populateMakeSelect(makeSelect);
      if (selection.make) {
        makeSelect.value = selection.make;
        makeOther.hidden = selection.make !== "other";
        makeOther.value = selection.makeOther;
        if (selection.make.startsWith("id:")) {
          const requestedMake = selection.make;
          const requestVersion = ++modelRequestVersion;
          modelSelect.disabled = true;
          try {
            const names = await loadModels(requestedMake.slice(3));
            if (requestVersion === modelRequestVersion && document.body.contains(form) && makeSelect.value === requestedMake) setModelOptions(modelSelect, names);
          } catch {
            if (requestVersion === modelRequestVersion && document.body.contains(form) && makeSelect.value === requestedMake) setModelOptions(modelSelect, []);
          }
        } else {
          modelOther.hidden = false;
          modelOther.value = selection.modelOther || selection.model;
          modelSelect.hidden = true;
        }
      }
      all.checked = selection.systems.includes("all");
      systemInputs.forEach(input => { input.checked = selection.systems.includes(input.value); input.disabled = all.checked; });
      syncRequestState(form);
    });

    makeSelect.addEventListener("change", async () => {
      const requestedMake = makeSelect.value;
      const requestVersion = ++modelRequestVersion;
      selection.make = requestedMake;
      selection.makeOther = "";
      selection.model = "";
      selection.modelOther = "";
      modelOther.value = "";
      modelOther.hidden = true;
      modelSelect.hidden = false;
      modelSelect.replaceChildren(new Option(t("chooseMakeFirst"), ""));
      modelSelect.disabled = true;
      const isOther = selection.make === "other";
      const isManual = selection.make.startsWith("manual:");
      makeOther.hidden = !isOther;
      makeOther.required = isOther;
      if (isManual || isOther) {
        modelSelect.hidden = true;
        modelOther.hidden = false;
        modelOther.required = true;
      } else if (selection.make.startsWith("id:")) {
        modelSelect.replaceChildren(new Option(t("loadingModels"), ""));
        try {
          const names = await loadModels(selection.make.slice(3));
          if (requestVersion === modelRequestVersion && document.body.contains(form) && makeSelect.value === requestedMake) setModelOptions(modelSelect, names);
        } catch {
          if (requestVersion === modelRequestVersion && document.body.contains(form) && makeSelect.value === requestedMake) setModelOptions(modelSelect, []);
        }
      }
      syncRequestState(form);
    });
    makeOther.addEventListener("input", () => { selection.makeOther = makeOther.value; syncRequestState(form); });
    modelSelect.addEventListener("change", () => {
      selection.model = modelSelect.value;
      modelOther.value = "";
      const isOther = modelSelect.value === "other";
      modelOther.hidden = !isOther;
      modelOther.required = isOther;
      if (isOther) modelOther.focus();
      syncRequestState(form);
    });
    modelOther.addEventListener("input", () => { selection.modelOther = modelOther.value; syncRequestState(form); });
    all.addEventListener("change", () => {
      selection.systems = all.checked ? ["all"] : [];
      systemInputs.forEach(input => { input.checked = false; input.disabled = all.checked; });
      syncRequestState(form);
    });
    systemInputs.forEach(input => input.addEventListener("change", () => {
      if (input.checked) { all.checked = false; selection.systems = systemInputs.filter(item => item.checked).map(item => item.value); }
      else selection.systems = systemInputs.filter(item => item.checked).map(item => item.value);
      systemInputs.forEach(item => { item.disabled = all.checked; });
      syncRequestState(form);
    }));
    form.addEventListener("submit", event => {
      event.preventDefault();
      const data = syncRequestState(form);
      if (!data.complete) return;
      const message = [t("waIntro"), `${t("waMake")}: ${data.make}`, `${t("waModel")}: ${data.model}`, `${t("waSystems")}: ${data.chosenSystems.join(", ")}`].join("\n");
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    });
  }

  window.renderVehicleRequestSection = renderVehicleRequestSection;
  window.bindVehicleRequest = bindVehicleRequest;
})();
