(() => {
  const database = window.MOTRXO_DTC;
  if (!database) return;

  const legacyRenderHome = window.renderHome;
  const legacyRenderDetails = window.renderDetails;
  const legacyRenderNotFound = window.renderNotFound;
  const legacyApplyLocale = window.applyLocale;
  const localeText = {
    ar: {
      source: "بيانات DTC عامة من OBDex",
      coverage: "9,533 تعريفًا عامًا ضمن P0/P2/P3/B0/C0/U0/U3. لا تشمل الأكواد الخاصة بالمصنّع مثل P1xxx وB1xxx، ولا تطابق كل موديل أو سنة.",
      originalLanguage: "محتوى المصدر متاح بالإنجليزية والألمانية فقط؛ اختر لغة النص الفني.",
      codeCount: "رمزًا في هذه الفئة",
      results: "تعريفات الأكواد",
      showMore: "عرض المزيد من الأكواد",
      allLoaded: "تم عرض كل الأكواد في هذه الفئة.",
      manufacturerNote: "هذه التعريفات عامة ولا تُصنّف حسب شركة/موديل. لطلب بيانات مركبة محددة استخدم نموذج السيارة أدناه.",
      catalogError: "تعذر تحميل فهرس الأكواد الآن. جرّب تحديث الصفحة؛ بقيت الفهرس العام الأصلية متاحة.",
      loading: "جارٍ تحميل تعريف الرمز ومعلومات المصدر…",
      notFound: "لم يُعثر على تعريف لهذا الرمز في الفهرس العام المتاح.",
      unsupported: "قد يكون الرمز خاصًا بالشركة المصنّعة أو غير موجود في إصدار قاعدة OBDex المثبّت.",
      home: "العودة إلى دليل الأكواد",
      description: "الوصف",
      components: "المكوّنات المتأثرة",
      causes: "الأسباب الشائعة كما يوردها المصدر",
      symptoms: "الأعراض كما يوردها المصدر",
      repair: "معلومات الإصلاح المتاحة",
      difficulty: "مستوى الصعوبة",
      diy: "إمكانية الإصلاح الذاتي بحسب المصدر",
      cost: "تقدير التكلفة (يورو)",
      hours: "الوقت المقدر (ساعات)",
      flags: "ملاحظات نظام المركبة",
      related: "أكواد ذات صلة",
      references: "المراجع المذكورة",
      sources: "روابط المصادر في سجل OBDex",
      reviewed: "تاريخ المراجعة في المصدر",
      likelihood: "الاحتمال بحسب المصدر",
      high: "مرتفع",
      medium: "متوسط",
      low: "منخفض",
      easy: "سهل",
      hard: "صعب",
      shop_only: "ورشة متخصصة",
      yes: "نعم",
      no: "لا",
      mil: "يرتبط بلمبة فحص المحرك",
      emissions: "مرتبط بالانبعاثات",
      driveCycle: "قد يتطلب دورة قيادة بعد الإصلاح",
      limp: "قد يؤدي إلى وضع الحماية/القدرة المحدودة",
      safety: "معلومات عامة وليست تشخيصًا نهائيًا. تحقق من دليل الصيانة الخاص بالمركبة واختبر السبب قبل استبدال القطع؛ التكاليف تقديرية عامة باليورو من المصدر وليست عرض سعر.",
      license: "مصدر البيانات: OBDex، CC0-1.0 (نسخة مثبتة الإصدار). لا تتضمن ملفات البيانات صورًا أو مخططات مرخصة.",
      noData: "لا تتوفر هذه المعلومة في سجل المصدر.",
      componentNotice: "أسماء المكونات معرّفات تقنية كما وردت في البيانات.",
      countLabel: "تعريفًا عامًا متاحًا",
      familyLabel: "الفئة",
      genericTag: "عام · OBDex",
      detailTag: "تعريف عام · غير خاص بمصنّع",
      sourcePageTitle: "بيانات المصدر العامة",
      openRecord: "فتح التفاصيل",
      indexLink: "فهرس البيانات ورخصتها",
      sourceBy: "بيانات DTC: OBDex (CC0-1.0)"
    },
    en: {
      source: "Generic DTC data from OBDex",
      coverage: "9,533 generic definitions across P0/P2/P3/B0/C0/U0/U3. Manufacturer-specific codes such as P1xxx and B1xxx are excluded; the entries are not mapped to every model or year.",
      originalLanguage: "Source technical content is available in English and German. Choose the source-text language.",
      codeCount: "codes in this family",
      results: "Code definitions",
      showMore: "Show more codes",
      allLoaded: "All codes in this family are displayed.",
      manufacturerNote: "These definitions are generic and are not mapped by make/model. Use the vehicle request form below for a specific vehicle.",
      catalogError: "The code index could not be loaded. Refresh the page; the original generic index remains available.",
      loading: "Loading code definition and source fields…",
      notFound: "No definition for this code was found in the available generic index.",
      unsupported: "The code may be manufacturer-specific or absent from the pinned OBDex release.",
      home: "Back to code guide",
      description: "Description",
      components: "Affected components",
      causes: "Common causes reported by source",
      symptoms: "Symptoms reported by source",
      repair: "Available repair information",
      difficulty: "Difficulty",
      diy: "DIY possibility per source",
      cost: "Estimated cost (EUR)",
      hours: "Estimated time (hours)",
      flags: "Vehicle-system notes",
      related: "Related codes",
      references: "References listed",
      sources: "Source links in OBDex record",
      reviewed: "Source review date",
      likelihood: "Likelihood per source",
      high: "High",
      medium: "Medium",
      low: "Low",
      easy: "Easy",
      hard: "Hard",
      shop_only: "Workshop only",
      yes: "Yes",
      no: "No",
      mil: "MIL / check-engine light related",
      emissions: "Emissions-relevant",
      driveCycle: "Drive cycle may be required after repair",
      limp: "Limp mode may occur",
      safety: "General information, not a final diagnosis. Check the vehicle-specific service manual and test the cause before replacing parts. Cost values are generic source estimates in EUR, not a quote.",
      license: "Data source: OBDex, CC0-1.0 (pinned snapshot). The imported data files contain no licensed photos or diagrams.",
      noData: "This field is not present in the source record.",
      componentNotice: "Component identifiers are shown as provided in the source data.",
      countLabel: "generic definitions available",
      familyLabel: "Family",
      genericTag: "Generic · OBDex",
      detailTag: "Generic definition · not make-specific",
      sourcePageTitle: "Open-source data record",
      openRecord: "Open details",
      indexLink: "Data index and license",
      sourceBy: "DTC data: OBDex (CC0-1.0)"
    },
    de: {
      source: "Allgemeine DTC-Daten von OBDex",
      coverage: "9.533 allgemeine Definitionen in P0/P2/P3/B0/C0/U0/U3. Herstellerspezifische Codes wie P1xxx und B1xxx sind ausgeschlossen; die Einträge sind nicht jedem Modell oder Baujahr zugeordnet.",
      originalLanguage: "Technische Quelltexte sind auf Englisch und Deutsch verfügbar.",
      codeCount: "Codes in dieser Familie",
      results: "Code-Definitionen",
      showMore: "Weitere Codes anzeigen",
      allLoaded: "Alle Codes dieser Familie werden angezeigt.",
      manufacturerNote: "Diese Definitionen sind allgemein und nicht nach Marke/Modell zugeordnet. Für ein bestimmtes Fahrzeug das Anfrageformular verwenden.",
      catalogError: "Der Code-Index konnte nicht geladen werden. Seite aktualisieren; der allgemeine Index ist derzeit nicht verfügbar.",
      loading: "Code-Definition und Quellenangaben werden geladen…",
      notFound: "Für diesen Code wurde keine Definition im verfügbaren allgemeinen Index gefunden.",
      unsupported: "Der Code ist möglicherweise herstellerspezifisch oder fehlt in der fixierten OBDex-Version.",
      home: "Zurück zum Code-Leitfaden",
      description: "Beschreibung",
      components: "Betroffene Komponenten",
      causes: "Häufige Ursachen laut Quelle",
      symptoms: "Symptome laut Quelle",
      repair: "Verfügbare Reparaturinformationen",
      difficulty: "Schwierigkeitsgrad",
      diy: "Selbstreparatur laut Quelle möglich",
      cost: "Geschätzte Kosten (EUR)",
      hours: "Geschätzte Zeit (Stunden)",
      flags: "Hinweise zum Fahrzeugsystem",
      related: "Verwandte Codes",
      references: "Angegebene Referenzen",
      sources: "Quellenlinks im OBDex-Eintrag",
      reviewed: "Prüfdatum der Quelle",
      likelihood: "Wahrscheinlichkeit laut Quelle",
      high: "Hoch",
      medium: "Mittel",
      low: "Niedrig",
      easy: "Einfach",
      hard: "Schwierig",
      shop_only: "Nur Werkstatt",
      yes: "Ja",
      no: "Nein",
      mil: "Bezug zur Motorkontrollleuchte",
      emissions: "Abgasrelevant",
      driveCycle: "Nach der Reparatur kann ein Fahrzyklus nötig sein",
      limp: "Notlauf kann auftreten",
      safety: "Allgemeine Information, keine abschließende Diagnose. Vor dem Austausch von Teilen das fahrzeugspezifische Servicehandbuch prüfen und die Ursache testen. Kosten sind allgemeine Quellenschätzungen in EUR, kein Angebot.",
      license: "Datenquelle: OBDex, CC0-1.0 (fixierter Stand). Die importierten Datendateien enthalten keine lizenzierten Fotos oder Diagramme.",
      noData: "Dieses Feld ist im Quelldatensatz nicht vorhanden.",
      componentNotice: "Komponentenkennungen werden wie in der Quelle angegeben angezeigt.",
      countLabel: "allgemeine Definitionen verfügbar",
      familyLabel: "Familie",
      genericTag: "Allgemein · OBDex",
      detailTag: "Allgemeine Definition · nicht markenspezifisch",
      sourcePageTitle: "Offener Datensatz",
      openRecord: "Details öffnen",
      indexLink: "Datenindex und Lizenz",
      sourceBy: "DTC-Daten: OBDex (CC0-1.0)"
    },
    fr: {
      source: "Données DTC génériques OBDex",
      coverage: "9 533 définitions génériques P0/P2/P3/B0/C0/U0/U3. Les codes constructeur comme P1xxx et B1xxx sont exclus; les entrées ne sont pas associées à chaque modèle/année.",
      originalLanguage: "Le contenu technique source est disponible en anglais et en allemand.",
      codeCount: "codes dans cette famille",
      results: "Définitions de codes",
      showMore: "Afficher plus de codes",
      allLoaded: "Tous les codes de cette famille sont affichés.",
      manufacturerNote: "Ces définitions sont génériques et ne sont pas liées à une marque/un modèle. Utilisez le formulaire véhicule ci-dessous pour un véhicule précis.",
      catalogError: "L’index des codes n’a pas pu être chargé. Actualisez la page; l’échantillon initial reste disponible.",
      loading: "Chargement de la définition et des sources…",
      notFound: "Aucune définition de ce code n’a été trouvée dans l’index générique disponible.",
      unsupported: "Le code peut être spécifique au constructeur ou absent de la version OBDex figée.",
      home: "Retour au guide des codes",
      description: "Description",
      components: "Composants concernés",
      causes: "Causes courantes selon la source",
      symptoms: "Symptômes selon la source",
      repair: "Informations de réparation disponibles",
      difficulty: "Difficulté",
      diy: "Réparation par soi-même selon la source",
      cost: "Coût estimé (EUR)",
      hours: "Durée estimée (heures)",
      flags: "Notes système véhicule",
      related: "Codes associés",
      references: "Références indiquées",
      sources: "Sources citées dans OBDex",
      reviewed: "Date de révision source",
      likelihood: "Probabilité selon la source",
      high: "Élevée",
      medium: "Moyenne",
      low: "Faible",
      easy: "Facile",
      hard: "Difficile",
      shop_only: "Atelier spécialisé",
      yes: "Oui",
      no: "Non",
      mil: "Lié au voyant moteur",
      emissions: "Lié aux émissions",
      driveCycle: "Un cycle de conduite peut être requis après réparation",
      limp: "Mode dégradé possible",
      safety: "Information générale, pas un diagnostic final. Consultez la documentation d’entretien du véhicule et testez la cause avant de remplacer une pièce. Les coûts sont des estimations générales en EUR fournies par la source, pas un devis.",
      license: "Source des données : OBDex, CC0-1.0 (version figée). Les fichiers importés ne contiennent aucune photo ni aucun schéma sous licence.",
      noData: "Ce champ n’est pas présent dans la fiche source.",
      componentNotice: "Les identifiants des composants sont affichés tels que fournis.",
      countLabel: "définitions génériques disponibles",
      familyLabel: "Famille",
      genericTag: "Générique · OBDex",
      detailTag: "Définition générique · non spécifique à une marque",
      sourcePageTitle: "Fiche de données ouverte",
      openRecord: "Ouvrir les détails",
      indexLink: "Index et licence des données",
      sourceBy: "Données DTC : OBDex (CC0-1.0)"
    },
    es: {
      source: "Datos DTC genéricos de OBDex",
      coverage: "9.533 definiciones genéricas P0/P2/P3/B0/C0/U0/U3. Se excluyen códigos específicos del fabricante como P1xxx y B1xxx; los registros no se asignan a todos los modelos/años.",
      originalLanguage: "El contenido técnico original está disponible en inglés y alemán.",
      codeCount: "códigos en esta familia",
      results: "Definiciones de códigos",
      showMore: "Mostrar más códigos",
      allLoaded: "Se muestran todos los códigos de esta familia.",
      manufacturerNote: "Estas definiciones son genéricas y no se asignan por marca/modelo. Para un vehículo concreto, usa el formulario de solicitud de vehículo.",
      catalogError: "No se pudo cargar el índice. Actualiza la página; la muestra original sigue disponible.",
      loading: "Cargando definición y campos de origen…",
      notFound: "No se encontró una definición de este código en el índice genérico disponible.",
      unsupported: "El código puede ser específico del fabricante o no estar en la versión fijada de OBDex.",
      home: "Volver a la guía de códigos",
      description: "Descripción",
      components: "Componentes afectados",
      causes: "Causas comunes según la fuente",
      symptoms: "Síntomas según la fuente",
      repair: "Información de reparación disponible",
      difficulty: "Dificultad",
      diy: "Reparación por cuenta propia según la fuente",
      cost: "Coste estimado (EUR)",
      hours: "Tiempo estimado (horas)",
      flags: "Notas del sistema del vehículo",
      related: "Códigos relacionados",
      references: "Referencias indicadas",
      sources: "Fuentes enlazadas en OBDex",
      reviewed: "Fecha de revisión de la fuente",
      likelihood: "Probabilidad según la fuente",
      high: "Alta",
      medium: "Media",
      low: "Baja",
      easy: "Fácil",
      hard: "Difícil",
      shop_only: "Solo taller",
      yes: "Sí",
      no: "No",
      mil: "Relacionado con la luz de avería del motor",
      emissions: "Relacionado con emisiones",
      driveCycle: "Puede requerirse un ciclo de conducción tras la reparación",
      limp: "Puede activarse el modo de potencia limitada",
      safety: "Información general, no un diagnóstico definitivo. Consulta el manual de servicio específico del vehículo y comprueba la causa antes de sustituir piezas. Los costes son estimaciones genéricas en EUR de la fuente, no un presupuesto.",
      license: "Fuente de datos: OBDex, CC0-1.0 (versión fijada). Los archivos importados no incluyen fotos ni diagramas con licencia.",
      noData: "Este campo no aparece en el registro de origen.",
      componentNotice: "Los identificadores de componentes se muestran tal como aparecen en el origen.",
      countLabel: "definiciones genéricas disponibles",
      familyLabel: "Familia",
      genericTag: "Genérico · OBDex",
      detailTag: "Definición genérica · no específica de marca",
      sourcePageTitle: "Registro de datos abierto",
      openRecord: "Abrir detalles",
      indexLink: "Índice y licencia de datos",
      sourceBy: "Datos DTC: OBDex (CC0-1.0)"
    },
    it: {
      source: "Dati DTC generici OBDex",
      coverage: "9.533 definizioni generiche P0/P2/P3/B0/C0/U0/U3. I codici specifici del costruttore, come P1xxx e B1xxx, sono esclusi; i record non sono associati a ogni modello/anno.",
      originalLanguage: "I contenuti tecnici originali sono disponibili in inglese e tedesco.",
      codeCount: "codici in questa famiglia",
      results: "Definizioni dei codici",
      showMore: "Mostra altri codici",
      allLoaded: "Sono visualizzati tutti i codici di questa famiglia.",
      manufacturerNote: "Queste definizioni sono generiche e non sono associate a marca/modello. Per un veicolo specifico usa il modulo richiesta veicolo.",
      catalogError: "Impossibile caricare l’indice. Aggiorna la pagina; il campione originale rimane disponibile.",
      loading: "Caricamento definizione e campi di origine…",
      notFound: "Nessuna definizione di questo codice trovata nell’indice generico disponibile.",
      unsupported: "Il codice potrebbe essere specifico del costruttore o assente nella versione OBDex fissata.",
      home: "Torna alla guida dei codici",
      description: "Descrizione",
      components: "Componenti interessati",
      causes: "Cause comuni secondo la fonte",
      symptoms: "Sintomi secondo la fonte",
      repair: "Informazioni di riparazione disponibili",
      difficulty: "Difficoltà",
      diy: "Riparazione fai-da-te secondo la fonte",
      cost: "Costo stimato (EUR)",
      hours: "Tempo stimato (ore)",
      flags: "Note sul sistema del veicolo",
      related: "Codici correlati",
      references: "Riferimenti indicati",
      sources: "Fonti collegate in OBDex",
      reviewed: "Data di revisione della fonte",
      likelihood: "Probabilità secondo la fonte",
      high: "Alta",
      medium: "Media",
      low: "Bassa",
      easy: "Facile",
      hard: "Difficile",
      shop_only: "Solo officina",
      yes: "Sì",
      no: "No",
      mil: "Collegato alla spia motore",
      emissions: "Rilevante per le emissioni",
      driveCycle: "Dopo la riparazione potrebbe servire un ciclo di guida",
      limp: "Possibile modalità di potenza limitata",
      safety: "Informazione generale, non diagnosi definitiva. Consulta il manuale di servizio specifico del veicolo e verifica la causa prima di sostituire componenti. I costi sono stime generiche in EUR della fonte, non un preventivo.",
      license: "Fonte dati: OBDex, CC0-1.0 (snapshot fissato). I file importati non contengono foto o schemi concessi in licenza.",
      noData: "Questo campo non è presente nel record sorgente.",
      componentNotice: "Gli identificatori dei componenti sono mostrati come forniti dalla fonte.",
      countLabel: "definizioni generiche disponibili",
      familyLabel: "Famiglia",
      genericTag: "Generico · OBDex",
      detailTag: "Definizione generica · non specifica per marca",
      sourcePageTitle: "Record open data",
      openRecord: "Apri dettagli",
      indexLink: "Indice e licenza dati",
      sourceBy: "Dati DTC: OBDex (CC0-1.0)"
    }
  };

  const brandLabels = {
    ar: {source:"قاعدة أكواد الأعطال من MOTRXO", originalLanguage:"النصوص الفنية المتاحة بالإنجليزية والألمانية؛ واجهة MOTRXO بست لغات.", catalogError:"تعذر تحميل فهرس MOTRXO الآن. حدّث الصفحة وحاول مجددًا.", loading:"جارٍ تحميل تعريف الرمز…", notFound:"لم يُعثر على تعريف في فهرس MOTRXO العام الحالي.", unsupported:"قد يكون الرمز خاصًا بمصنّع أو غير موجود في الفهرس العام الحالي.", causes:"الأسباب الشائعة كما وردت في قاعدة البيانات", symptoms:"الأعراض كما وردت في قاعدة البيانات", reviewed:"تاريخ السجل", license:"قاعدة MOTRXO تضم بيانات عامة منشورة بترخيص CC0؛ لم يُراجع منشأ كل سجل على حدة. لا تحتوي ملفات البيانات صورًا أو مخططات مرخصة.", componentNotice:"تُعرض أسماء المكونات كما وردت في البيانات.", genericTag:"MOTRXO · DTC عام", detailTag:"تعريف عام ضمن قاعدة MOTRXO · غير خاص بمصنّع", sourcePageTitle:"سجل قاعدة MOTRXO", indexLink:"بيان البيانات والترخيص", sourceBy:"قاعدة أكواد MOTRXO"},
    en: {source:"MOTRXO trouble-code reference", originalLanguage:"Technical descriptions are available in English and German; the MOTRXO interface supports six languages.", catalogError:"The MOTRXO code index could not be loaded. Refresh the page and try again.", loading:"Loading code definition…", notFound:"No definition was found in the current MOTRXO generic index.", unsupported:"The code may be manufacturer-specific or absent from the current generic index.", causes:"Common causes listed in the database", symptoms:"Symptoms listed in the database", reviewed:"Record date", license:"The MOTRXO reference includes general data released under CC0; the provenance of each record has not been independently audited. The data files include no licensed photos or diagrams.", componentNotice:"Component names are shown as provided in the data.", genericTag:"MOTRXO · General DTC", detailTag:"General definition · not manufacturer-specific", sourcePageTitle:"MOTRXO database record", indexLink:"Data and license notice", sourceBy:"MOTRXO DTC reference"},
    fr: {source:"Référence DTC MOTRXO", originalLanguage:"Les descriptions techniques sont disponibles en anglais et en allemand; l’interface MOTRXO propose six langues.", catalogError:"L’index MOTRXO n’a pas pu être chargé. Actualisez la page.", loading:"Chargement de la définition…", notFound:"Aucune définition trouvée dans l’index générique MOTRXO actuel.", unsupported:"Le code peut être spécifique au constructeur ou absent de l’index actuel.", causes:"Causes fréquentes indiquées dans la base", symptoms:"Symptômes indiqués dans la base", reviewed:"Date de la fiche", license:"La référence MOTRXO comprend des données générales publiées sous CC0; la provenance de chaque fiche n’a pas été vérifiée indépendamment. Les fichiers n’incluent aucune photo ni aucun schéma sous licence.", componentNotice:"Les noms des composants sont présentés tels qu’ils figurent dans les données.", genericTag:"MOTRXO · DTC générique", detailTag:"Définition générale · non spécifique au constructeur", sourcePageTitle:"Fiche de la base MOTRXO", indexLink:"Notice sur les données et la licence", sourceBy:"Référence DTC MOTRXO"},
    es: {source:"Referencia de códigos DTC de MOTRXO", originalLanguage:"Las descripciones técnicas están disponibles en inglés y alemán; la interfaz de MOTRXO ofrece seis idiomas.", catalogError:"No se pudo cargar el índice de MOTRXO. Actualice la página.", loading:"Cargando definición del código…", notFound:"No se encontró una definición en el índice genérico actual de MOTRXO.", unsupported:"El código puede ser específico del fabricante o no estar en el índice actual.", causes:"Causas comunes indicadas en la base de datos", symptoms:"Síntomas indicados en la base de datos", reviewed:"Fecha del registro", license:"La referencia MOTRXO incluye datos generales publicados bajo CC0; no se ha auditado de forma independiente la procedencia de cada registro. Los archivos no incluyen fotos ni diagramas con licencia.", componentNotice:"Los nombres de los componentes se muestran como aparecen en los datos.", genericTag:"MOTRXO · DTC general", detailTag:"Definición general · no específica del fabricante", sourcePageTitle:"Registro de la base MOTRXO", indexLink:"Aviso de datos y licencia", sourceBy:"Referencia DTC MOTRXO"},
    it: {source:"Riferimento codici DTC MOTRXO", originalLanguage:"Le descrizioni tecniche sono disponibili in inglese e tedesco; l’interfaccia MOTRXO supporta sei lingue.", catalogError:"Impossibile caricare l’indice MOTRXO. Aggiorna la pagina.", loading:"Caricamento definizione del codice…", notFound:"Nessuna definizione trovata nell’indice generico MOTRXO attuale.", unsupported:"Il codice può essere specifico del costruttore o assente dall’indice attuale.", causes:"Cause comuni indicate nel database", symptoms:"Sintomi indicati nel database", reviewed:"Data del record", license:"Il riferimento MOTRXO include dati generali pubblicati con licenza CC0; la provenienza di ogni record non è stata verificata indipendentemente. I file non includono foto o schemi con licenza.", componentNotice:"I nomi dei componenti sono mostrati come forniti nei dati.", genericTag:"MOTRXO · DTC generico", detailTag:"Definizione generica · non specifica del produttore", sourcePageTitle:"Record del database MOTRXO", indexLink:"Nota su dati e licenza", sourceBy:"Riferimento DTC MOTRXO"},
    de: {source:"MOTRXO-Referenz für Fehlercodes", originalLanguage:"Technische Beschreibungen sind auf Englisch und Deutsch verfügbar; die MOTRXO-Oberfläche unterstützt sechs Sprachen.", catalogError:"Der MOTRXO-Codeindex konnte nicht geladen werden. Bitte Seite aktualisieren.", loading:"Code-Definition wird geladen…", notFound:"Keine Definition im aktuellen allgemeinen MOTRXO-Index gefunden.", unsupported:"Der Code ist möglicherweise herstellerspezifisch oder im aktuellen Index nicht enthalten.", causes:"Häufige Ursachen laut Datenbank", symptoms:"Symptome laut Datenbank", reviewed:"Datensatzdatum", license:"Die MOTRXO-Referenz enthält allgemeine, unter CC0 veröffentlichte Daten; die Herkunft jedes Datensatzes wurde nicht unabhängig geprüft. Die Dateien enthalten keine lizenzierten Fotos oder Diagramme.", componentNotice:"Komponentennamen werden wie in den Daten angegeben angezeigt.", genericTag:"MOTRXO · Allgemeiner DTC", detailTag:"Allgemeine Definition · nicht herstellerspezifisch", sourcePageTitle:"MOTRXO-Datenbankeintrag", indexLink:"Daten- und Lizenzhinweis", sourceBy:"MOTRXO-DTC-Referenz"}
  };
  for (const [language, labels] of Object.entries(brandLabels)) Object.assign(localeText[language], labels);

  const t = key => (localeText[window.uiLocale] || localeText.ar)[key] || localeText.en[key] || key;
  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  const formatCount = value => new Intl.NumberFormat(window.uiLocale || "en").format(value);
  let moreLimit = 36;
  let lastFamily = "";
  let loadError = false;

  function isCurated(code) {
    return Object.prototype.hasOwnProperty.call(codes, code);
  }

  function sourceLanguage() {
    return window.uiLocale === "de" ? "de" : "en";
  }

  function titleFor(row) {
    if (isCurated(row.code) && window.uiLocale === "ar") return codes[row.code].title;
    return row.title?.[sourceLanguage()] || row.title?.en || row.code;
  }

  function categoryLabel(row) {
    const category = String(row.category || "").toLowerCase();
    const categoryFamily = {powertrain:"P", body:"B", chassis:"C", network:"U"}[category];
    return categoryFamily ? familyName(categoryFamily) : familyName(row.code[0]);
  }

  function makeCodeCard(row) {
    const code = row.code;
    const title = titleFor(row);
    const status = isCurated(code)
      ? `<span class="${severityClass(codes[code].severity)}">${escapeHtml(codes[code].severityLabel)}</span>`
      : `<span class="dtc-source-pill">${escapeHtml(t("genericTag"))} · ${sourceLanguage().toUpperCase()}</span>`;
    return `<a class="code-card" href="${escapeHtml(codeUrl(code))}" aria-label="${escapeHtml(code + " · " + title)}"><div class="code-info"><span class="code-pill">${escapeHtml(code)}</span><div class="code-title"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(categoryLabel(row))}</span></div></div><div class="code-card-end">${status}<span class="code-arrow" aria-hidden="true">↗</span></div></a>`;
  }

  function updateHomeCatalog() {
    if (loadError) {
      const toolbar = app.querySelector(".filter-toolbar");
      if (toolbar && !app.querySelector(".dataset-error")) {
        const error = document.createElement("p");
        error.className = "dataset-error";
        error.setAttribute("role", "status");
        error.textContent = t("catalogError");
        toolbar.insertAdjacentElement("afterend", error);
      }
      return;
    }
    const rows = database.getIndex();
    if (!rows.length) return;
    app.querySelector(".dataset-error")?.remove();
    const family = /^[PBCU]$/.test(window.currentFamily || "") ? window.currentFamily : "P";
    if (family !== lastFamily) {
      moreLimit = 36;
      lastFamily = family;
    }
    const familyRows = rows.filter(row => row.family === family);
    const indexedCodes = new Set(rows.map(row => row.code));
    const extras = Object.keys(codes).filter(code => code[0] === family && !indexedCodes.has(code)).map(code => ({
      code, family, category: "generic index", title: { en: codes[code].title, de: codes[code].title },
      group: code.slice(0, 3), curated: true
    }));
    const allRows = familyRows.concat(extras).sort((a, b) => a.code.localeCompare(b.code));
    const visible = allRows.slice(0, moreLimit);
    const list = app.querySelector(".codes-layout .code-list");
    if (list) {
      list.innerHTML = visible.length ? visible.map(makeCodeCard).join("") : `<div class="empty-category"><span class="empty-category-mark">${escapeHtml(family)}</span><div><strong>${escapeHtml(t("notFound"))}</strong><p>${escapeHtml(t("unsupported"))}</p></div></div>`;
    }
    const toolbar = app.querySelector(".filter-toolbar");
    let summary = app.querySelector(".dtc-source-summary");
    if (toolbar && !summary) {
      summary = document.createElement("div");
      summary.className = "dtc-source-summary";
      summary.setAttribute("role", "note");
      toolbar.insertAdjacentElement("afterend", summary);
    }
    if (summary) {
      summary.innerHTML = `<strong>${escapeHtml(t("source"))}</strong><p>${escapeHtml(t("coverage"))}</p><p>${escapeHtml(t("manufacturerNote"))}</p><p class="dtc-provenance">${escapeHtml(provenanceText[window.uiLocale] || provenanceText.ar)}</p><a href="/public/data/MOTRXO-DTC-LICENSE.txt" target="_blank" rel="noopener">${escapeHtml(t("indexLink"))}</a>`;
    }
    const catalogPill = toolbar?.querySelector(".catalog-tag");
    if (catalogPill) {
      catalogPill.innerHTML = `<span class="catalog-dot"></span>${formatCount(rows.length)} · CC0-1.0 · EN/DE`;
      catalogPill.setAttribute("title", "MOTRXO general DTC reference · CC0 data · English and German");
    }
    const heroCount = app.querySelector(".visual-stats strong");
    if (heroCount) heroCount.textContent = formatCount(rows.length);
    const heroCoverage = app.querySelector(".visual-stats span");
    if (heroCoverage) heroCoverage.textContent = updatedUiText[window.uiLocale]?.coverage || updatedUiText.ar.coverage;
    const heading = app.querySelector(".code-list-heading p");
    if (heading) heading.textContent = `${formatCount(allRows.length)} ${t("codeCount")}`;
    const headingTitle = app.querySelector(".code-list-heading h2");
    if (headingTitle) headingTitle.textContent = t("results");
    let more = app.querySelector("[data-dtc-more]");
    if (!more) {
      more = document.createElement("button");
      more.type = "button";
      more.className = "button-outline dtc-more-button";
      more.dataset.dtcMore = "true";
      const layout = app.querySelector(".codes-layout");
      if (layout) layout.insertAdjacentElement("afterend", more);
    }
    if (more) {
      const remaining = Math.max(0, allRows.length - moreLimit);
      more.hidden = remaining === 0;
      more.textContent = `${t("showMore")} (${formatCount(remaining)})`;
      more.onclick = () => {
        moreLimit += 36;
        updateHomeCatalog();
      };
    }
    const noMore = app.querySelector("[data-dtc-all-loaded]");
    if (noMore) noMore.remove();
    if (allRows.length > 0 && allRows.length <= moreLimit) {
      const note = document.createElement("p");
      note.className = "dtc-all-loaded";
      note.dataset.dtcAllLoaded = "true";
      note.textContent = t("allLoaded");
      const moreButton = app.querySelector("[data-dtc-more]");
      if (moreButton) moreButton.insertAdjacentElement("afterend", note);
    }
  }

  function renderHome() {
    if (typeof legacyRenderHome === "function") legacyRenderHome();
    updateHomeCatalog();
  }

  function safeHttpUrl(value) {
    try {
      const url = new URL(String(value));
      return ["http:", "https:"].includes(url.protocol) ? url.href : null;
    } catch {
      return null;
    }
  }

  function sourceLangLabel(lang) {
    return lang === "de" ? "Deutsch" : "English";
  }

  function renderList(items, renderItem, empty = "") {
    if (!Array.isArray(items) || !items.length) return `<p class="dtc-no-data">${escapeHtml(empty || t("noData"))}</p>`;
    return `<ul class="bullet-list">${items.map(renderItem).join("")}</ul>`;
  }

  function readableToken(value) {
    return escapeHtml(String(value).replace(/_/g, " "));
  }

  function categoryName(code) {
    try { return familyName(code[0]); } catch { return code[0]; }
  }

  function makeLanguageTabs(record, active) {
    return `<div class="dtc-source-language" role="group" aria-label="${escapeHtml(t("originalLanguage"))}"><span>${escapeHtml(t("originalLanguage"))}</span><button type="button" data-dtc-lang="en" class="${active === "en" ? "is-selected" : ""}" aria-pressed="${active === "en"}">EN</button><button type="button" data-dtc-lang="de" class="${active === "de" ? "is-selected" : ""}" aria-pressed="${active === "de"}">DE</button></div>`;
  }

  function renderSourceSections(record, activeLanguage, includeHeader = false) {
    const lang = activeLanguage === "de" ? "de" : "en";
    const description = record.description?.[lang] || record.description?.en || record.description?.de || "";
    const causes = Array.isArray(record.common_causes) ? record.common_causes : [];
    const symptoms = Array.isArray(record.symptoms) ? record.symptoms : [];
    const components = Array.isArray(record.affected_components) ? record.affected_components : [];
    const repair = record.repair || {};
    const flags = record.flags || {};
    const related = Array.isArray(record.related_codes) ? record.related_codes : [];
    const likelihood = value => t(value || "");
    const causeList = renderList(causes, cause => {
      const label = cause.label?.[lang] || cause.label?.en || cause.label?.de;
      const likelihoodText = likelihood(cause.likelihood);
      return `<li lang="${lang}" dir="ltr">${escapeHtml(label || "")}${likelihoodText ? ` <span class="dtc-likelihood">${escapeHtml(t("likelihood"))}: ${escapeHtml(likelihoodText)}</span>` : ""}</li>`;
    });
    const symptomList = renderList(symptoms, symptom => `<li lang="${lang}" dir="ltr">${escapeHtml(symptom?.[lang] || symptom?.en || symptom?.de || "")}</li>`);
    const componentList = renderList(components, item => `<li dir="ltr"><code>${readableToken(item)}</code></li>`);
    const relatedItems = related.length ? `<div class="related-grid">${related.map(code => {
      const summary = database.getSummary(code);
      const exists = Boolean(summary || isCurated(code));
      const title = isCurated(code) ? codes[code].title : (summary?.title?.[lang] || summary?.title?.en || "");
      return exists
        ? `<a class="related-link" href="${escapeHtml(codeUrl(code))}"><strong>${escapeHtml(code)}</strong><span lang="${lang}" dir="ltr">${escapeHtml(title)}</span></a>`
        : `<span class="related-link related-link-static"><strong>${escapeHtml(code)}</strong><span>${escapeHtml(t("unsupported"))}</span></span>`;
    }).join("")}</div>` : `<p class="dtc-no-data">${escapeHtml(t("noData"))}</p>`;
    const flagLabels = {mil:"mil", emissions_relevant:"emissions", drive_cycle_required:"driveCycle", limp_mode_possible:"limp"};
    const activeFlags = Object.entries(flagLabels).filter(([key]) => flags[key] === true).map(([, label]) => `<li>${escapeHtml(t(label))}</li>`).join("");
    const repairItems = [];
    if (repair.difficulty) repairItems.push(`<li><strong>${escapeHtml(t("difficulty"))}:</strong> ${escapeHtml(t(repair.difficulty))}</li>`);
    if (typeof repair.diy_possible === "boolean") repairItems.push(`<li><strong>${escapeHtml(t("diy"))}:</strong> ${escapeHtml(repair.diy_possible ? t("yes") : t("no"))}</li>`);
    if (Array.isArray(repair.estimated_cost_eur) && repair.estimated_cost_eur.length === 2) repairItems.push(`<li><strong>${escapeHtml(t("cost"))}:</strong> €${escapeHtml(repair.estimated_cost_eur[0])}–€${escapeHtml(repair.estimated_cost_eur[1])}</li>`);
    if (Array.isArray(repair.estimated_hours) && repair.estimated_hours.length === 2) repairItems.push(`<li><strong>${escapeHtml(t("hours"))}:</strong> ${escapeHtml(repair.estimated_hours[0])}–${escapeHtml(repair.estimated_hours[1])}</li>`);
    return `${includeHeader ? `<article class="content-card dtc-source-record"><div class="dtc-record-heading"><div><span class="section-kicker">${escapeHtml(t("sourcePageTitle"))} · ${escapeHtml(sourceLangLabel(lang))}</span><h2 lang="${lang}" dir="ltr">${escapeHtml(record.title?.[lang] || record.title?.en || record.code)}</h2></div>${makeLanguageTabs(record, lang)}</div>` : `<article class="content-card dtc-source-record"><div class="dtc-record-heading"><div><span class="section-kicker">${escapeHtml(t("sourcePageTitle"))} · ${escapeHtml(sourceLangLabel(lang))}</span><h2>${escapeHtml(t("description"))}</h2></div>${makeLanguageTabs(record, lang)}</div>`}
      <div class="dtc-record-content" data-record-content="true">
        ${description ? `<p class="dtc-description" lang="${lang}" dir="ltr">${escapeHtml(description)}</p>` : `<p class="dtc-no-data">${escapeHtml(t("noData"))}</p>`}
        <div class="dtc-detail-columns">
          <section><h3>${escapeHtml(t("components"))}</h3>${componentList}<p class="dtc-field-note">${escapeHtml(t("componentNotice"))}</p></section>
          <section><h3>${escapeHtml(t("causes"))}</h3>${causeList}</section>
          <section><h3>${escapeHtml(t("symptoms"))}</h3>${symptomList}</section>
          <section><h3>${escapeHtml(t("repair"))}</h3>${renderList(repairItems, x => x)}</section>
          ${activeFlags ? `<section><h3>${escapeHtml(t("flags"))}</h3><ul class="bullet-list">${activeFlags}</ul></section>` : ""}
        </div>
        <div class="dtc-disclaimer">${escapeHtml(t("safety"))}</div>
        <section class="dtc-related"><h3>${escapeHtml(t("related"))}</h3>${relatedItems}</section>
        ${record.reviewed ? `<p class="dtc-reviewed">${escapeHtml(t("reviewed"))}: ${escapeHtml(record.reviewed)}</p>` : ""}
        <div class="dtc-license-note">${escapeHtml(t("license"))} <a href="/public/data/MOTRXO-DTC-LICENSE.txt" target="_blank" rel="noopener">${escapeHtml(t("indexLink"))}</a></div><p class="dtc-provenance">${escapeHtml(provenanceText[window.uiLocale] || provenanceText.ar)}</p>
      </div>
    </article>`;
  }

  function bindSourceLanguage(record, activeLanguage) {
    document.querySelectorAll("[data-dtc-lang]").forEach(button => {
      button.addEventListener("click", () => {
        const nextLanguage = button.dataset.dtcLang;
        if (isCurated(record.code)) {
          const oldSupplement = app.querySelector("[data-obdex-supplement]");
          const main = app.querySelector(".detail-main");
          oldSupplement?.remove();
          const card = document.createElement("div");
          card.dataset.obdexSupplement = "true";
          card.innerHTML = renderSourceSections(record, nextLanguage, true);
          main?.appendChild(card);
          bindSourceLanguage(record, nextLanguage);
        } else {
          renderGenericDetails(record, nextLanguage);
        }
      });
    });
  }

  function renderSupplement(record, activeLanguage) {
    return `<div data-obdex-supplement="true">${renderSourceSections(record, activeLanguage, true)}</div>`;
  }

  function renderGenericDetails(record, activeLanguage) {
    const lang = activeLanguage || sourceLanguage();
    const title = record.title?.[lang] || record.title?.en || record.code;
    const category = record.category || "";
    const sourceMeta = database.getMetadata();
    const titleLang = sourceLangLabel(lang);
    const relatedShort = Array.isArray(record.related_codes) ? record.related_codes.slice(0, 6) : [];
    app.innerHTML = `<section class="detail-hero"><div class="container"><div class="breadcrumb"><a href="/">${escapeHtml(t("home"))}</a><span aria-hidden="true">›</span><span>${escapeHtml(record.code)}</span></div><div class="detail-head"><div><div class="detail-code">${escapeHtml(record.code)}</div><h1 class="detail-definition">${escapeHtml(title)}</h1><p class="detail-lead">${escapeHtml(t("detailTag"))}</p><div class="detail-tags"><span class="tag">${escapeHtml(categoryName(record.code))}</span><span class="tag">${escapeHtml(t("genericTag"))}</span><span class="tag">${escapeHtml(titleLang)}</span></div></div></div></div></section>
      <section class="section"><div class="container detail-layout"><div class="detail-main">
        ${renderSourceSections(record, lang, false)}
        <div class="notice"><span class="notice-icon" aria-hidden="true">!</span><span>${escapeHtml(t("safety"))}</span></div>
      </div><aside class="detail-aside"><section class="access-card"><span class="lock-icon" aria-hidden="true">⌑</span><h2>${escapeHtml(t("source"))}</h2><p>${escapeHtml(t("coverage"))}</p><a class="button-primary" href="https://www.motrxo.com/#shop" target="_blank" rel="noopener">${escapeHtml(tx("subscriptionButton"))} <span aria-hidden="true">↗</span></a><a class="button-outline" href="https://wa.me/201016673956" target="_blank" rel="noopener">${escapeHtml(tx("contactButton"))}</a><div class="access-note"><a href="/public/data/MOTRXO-DTC-LICENSE.txt" target="_blank" rel="noopener">${escapeHtml(t("indexLink"))}</a></div></section><section class="side-card"><h3>${escapeHtml(tx("searchAnother"))}</h3><p>${escapeHtml(tx("searchHint"))}</p>${searchForm("inline-search")}</section></aside></div></section>`;
    bindSearch();
    bindSourceLanguage(record, lang);
  }

  function renderNotFound(code) {
    const normalized = String(code || "").trim().toUpperCase();
    const valid = /^[PBCU][0-3][0-9A-F]{3}$/.test(normalized);
    app.innerHTML = `<section class="empty-state"><span class="empty-icon" aria-hidden="true">⌕</span><h1>${valid ? escapeHtml(normalized) : escapeHtml(tx("invalidCode"))}</h1><p>${escapeHtml(t("notFound"))}</p><p>${escapeHtml(t("unsupported"))}</p><p class="dtc-license-note">${escapeHtml(t("license"))}</p>${searchForm("inline-search")}<a class="back-link" href="/#codes">← ${escapeHtml(t("home"))}</a><a class="button-outline" href="#products">${escapeHtml(tx("navProducts"))}</a></section>`;
    bindSearch();
  }

  async function renderDetails(code) {
    const normalized = String(code || "").trim().toUpperCase();
    if (!/^[PBCU][0-3][0-9A-F]{3}$/.test(normalized)) return renderNotFound(normalized);
    if (isCurated(normalized) && window.uiLocale === "ar" && typeof legacyRenderDetails === "function") {
      legacyRenderDetails(normalized);
      database.loadRecord(normalized).then(record => {
        if (!record || !app.querySelector(".detail-main") || app.querySelector("[data-obdex-supplement]")) return;
        const main = app.querySelector(".detail-main");
        const wrapper = document.createElement("div");
        wrapper.innerHTML = renderSupplement(record, sourceLanguage());
        main.appendChild(wrapper.firstElementChild);
        bindSourceLanguage(record, sourceLanguage());
      }).catch(() => {});
      return;
    }
    app.innerHTML = `<section class="empty-state"><p role="status">${escapeHtml(t("loading"))}</p></section>`;
    try {
      await database.loadIndex();
      const record = await database.loadRecord(normalized);
      if (!record) return renderNotFound(normalized);
      renderGenericDetails(record, sourceLanguage());
    } catch {
      renderNotFound(normalized);
    }
  }

  function renderCurrentRoute() {
    const match = window.location.pathname.match(/^\/dtc\/([^/]+)\/?$/i);
    if (match) {
      let code = "";
      try { code = decodeURIComponent(match[1]).toUpperCase(); } catch { code = ""; }
      renderDetails(code);
      return;
    }
    renderHome();
    const query = new URLSearchParams(window.location.search).get("code");
    if (query) {
      const normalized = query.toUpperCase();
      if (database.hasCode(normalized) || isCurated(normalized)) renderDetails(normalized);
      else renderNotFound(normalized);
    }
  }

  function renderHome() {
    if (typeof legacyRenderHome === "function") legacyRenderHome();
    updateHomeCatalog();
  }

  const updatedUiText = {
    ar: {drawer:"مرجع MOTRXO العام — 9,533 تعريفًا عامًا؛ الأكواد الخاصة بالمصنّع غير مشمولة.", footer:"مرجع DTC من MOTRXO يتضمن بيانات عامة بترخيص CC0؛ لا يشمل أكواد OEM أو تغطية إصلاح كاملة.", results:"تعريفات قاعدة MOTRXO", coverage:"تغطية قاعدة البيانات"},
    en: {drawer:"MOTRXO generic reference — 9,533 generic definitions; OEM-specific codes are not included.", footer:"MOTRXO DTC reference includes public CC0 data; it does not include OEM codes or complete repair coverage.", results:"MOTRXO code definitions", coverage:"Database coverage"},
    fr: {drawer:"Référence MOTRXO — 9 533 définitions génériques; les codes constructeur sont exclus.", footer:"La référence DTC MOTRXO inclut des données publiques CC0; les codes OEM et la couverture complète sont exclus.", results:"Définitions MOTRXO", coverage:"Couverture de la base"},
    es: {drawer:"Referencia MOTRXO — 9.533 definiciones genéricas; no incluye códigos OEM.", footer:"La referencia DTC de MOTRXO incluye datos públicos CC0; no incluye códigos OEM ni cobertura completa.", results:"Definiciones MOTRXO", coverage:"Cobertura de la base"},
    it: {drawer:"Riferimento MOTRXO — 9.533 definizioni generiche; i codici OEM sono esclusi.", footer:"Il riferimento DTC MOTRXO include dati pubblici CC0; non include codici OEM né copertura completa.", results:"Definizioni MOTRXO", coverage:"Copertura del database"},
    de: {drawer:"MOTRXO-Referenz — 9.533 allgemeine Definitionen; OEM-spezifische Codes sind ausgeschlossen.", footer:"Die MOTRXO-DTC-Referenz enthält öffentliche CC0-Daten; OEM-Codes und vollständige Reparaturabdeckung fehlen.", results:"MOTRXO-Code-Definitionen", coverage:"Datenbankabdeckung"}
  };
  const provenanceText = {
    ar: "تجمع MOTRXO هذه التعريفات العامة من بيانات منشورة بترخيص CC0؛ لم يُراجع منشأ كل سجل على حدة.",
    en: "MOTRXO curates this generic index from data released under CC0; individual record origins have not been independently verified.",
    fr: "MOTRXO organise cet index générique à partir de données publiées sous CC0; l’origine de chaque fiche n’a pas été vérifiée séparément.",
    es: "MOTRXO organiza este índice genérico con datos publicados bajo CC0; el origen de cada registro no se ha verificado por separado.",
    it: "MOTRXO organizza questo indice generico con dati pubblicati sotto CC0; la provenienza di ogni record non è stata verificata singolarmente.",
    de: "MOTRXO kuratiert diesen allgemeinen Index aus unter CC0 veröffentlichten Daten; die Herkunft jedes Datensatzes wurde nicht einzeln geprüft."
  };

  function applyUpdatedLocale() {
    if (typeof legacyApplyLocale === "function") legacyApplyLocale();
    const text = updatedUiText[window.uiLocale] || updatedUiText.ar;
    const drawer = document.querySelector('[data-i18n="drawerDisclaimer"]');
    const footer = document.querySelector('[data-i18n="footerNote"]');
    const coverage = document.querySelector('[data-i18n="indexCoverage"]');
    if (drawer) drawer.textContent = text.drawer;
    if (footer) footer.textContent = text.footer;
    if (coverage) coverage.textContent = text.coverage;
    const headingTitle = app.querySelector(".code-list-heading h2");
    if (headingTitle) headingTitle.textContent = text.results;
  }

  window.applyLocale = applyUpdatedLocale;
  window.renderHome = renderHome;
  window.renderDetails = renderDetails;
  window.renderNotFound = renderNotFound;
  window.renderCurrentRoute = renderCurrentRoute;
  window.bindSearch = bindSearch;

  document.querySelectorAll("[data-locale-choice]").forEach(button => {
    button.addEventListener("click", () => queueMicrotask(applyUpdatedLocale));
  });

  applyUpdatedLocale();

  function bindSearch() {
    document.querySelectorAll("[data-search-form]").forEach(form => form.addEventListener("submit", event => {
      event.preventDefault();
      const raw = new FormData(form).get("code") || "";
      const code = String(raw).trim().toUpperCase().replace(/\s+/g, "");
      if (!/^[PBCU][0-3][0-9A-F]{3}$/.test(code)) return renderNotFound(code);
      window.location.href = codeUrl(code);
    }));
  }

  database.loadIndex().then(() => {
    loadError = false;
    if (typeof window.applyLocale === "function") window.applyLocale();
    renderCurrentRoute();
  }).catch(error => {
    loadError = true;
    console.warn("OBDex index is unavailable; keeping generic index.", error);
    renderCurrentRoute();
  });
})();
