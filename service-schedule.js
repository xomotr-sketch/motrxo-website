/* MOTRXO documented service schedule section. Loaded before app.js. */
(function () {
  "use strict";

  var DATA_URL = "/public/data/service-schedules.json";
  var NO_VARIANT = "__ss_unspecified_variant__";
  var DOCUMENT_SCOPE_YEAR = "__ss_document_scope__";
  var SUPPORTED_LOCALES = ["ar", "en", "fr", "es", "it", "de"];
  var MARKET_ORDER = [
    "eg", "sa", "ae", "ae-dubai", "ae-abudhabi", "qa", "kw", "bh", "om",
    "us", "uk", "de", "fr", "it", "es", "ca", "au", "in", "cn", "jp", "kr",
    "br", "mx", "tr", "za", "pl", "nl", "se", "no", "other"
  ];
  var FEATURED_MARKETS = ["eg", "sa", "ae", "ae-dubai", "ae-abudhabi", "qa", "kw", "bh", "om"];
  var MARKET_ALIASES = {
    eg: "eg", egypt: "eg", "arab republic of egypt": "eg",
    sa: "sa", ksa: "sa", "saudi arabia": "sa", "kingdom of saudi arabia": "sa",
    ae: "ae", uae: "ae", "united arab emirates": "ae",
    qa: "qa", qatar: "qa", kw: "kw", kuwait: "kw", bh: "bh", bahrain: "bh", om: "om", oman: "om",
    us: "us", usa: "us", "united states": "us", "united states of america": "us",
    uk: "uk", gb: "uk", "united kingdom": "uk", "great britain": "uk",
    de: "de", germany: "de", fr: "fr", france: "fr", it: "it", italy: "it", es: "es", spain: "es",
    ca: "ca", canada: "ca", au: "au", australia: "au", in: "in", india: "in", cn: "cn", china: "cn",
    jp: "jp", japan: "jp", kr: "kr", korea: "kr", "south korea": "kr", "republic of korea": "kr",
    br: "br", brazil: "br", mx: "mx", mexico: "mx", tr: "tr", turkey: "tr", türkiye: "tr",
    za: "za", "south africa": "za", pl: "pl", poland: "pl", nl: "nl", netherlands: "nl", se: "se", sweden: "se", no: "no", norway: "no",
    other: "other"
  };

  var COPY = {
    ar: {
      title: "جدول الخدمة", eyebrow: "معلومات موثقة بحسب السوق", intro: "اختر السوق والعلامة والطراز والسنة والفئة لعرض المركبات المتاحة ومهام الخدمة الموثقة فقط. ظهور السيارة أو الشعار لا يعني توافر جدول خدمة.",
      limitedCoverage: "تغطية موثقة محدودة — ليست كل سيارات العالم", documentedBrands: "علامات منشورة", availableVehicles: "نطاقات مركبات متاحة", documentedProfiles: "ملفات خدمة موثقة", lastVerified: "آخر تحقق", scopeNote: "ملاحظة النطاق",
      loading: "جارٍ تحميل بيانات الخدمة الموثقة…", loadError: "تعذر تحميل ملف الجداول الآن.", retry: "إعادة المحاولة", noData: "لا توجد بيانات خدمة موثقة منشورة حاليًا.",
      market: "السوق", featuredMarkets: "الأسواق ذات الأولوية", otherMarkets: "أسواق أخرى", chooseMarket: "اختر السوق", brandSearch: "ابحث باسم العلامة", brandSearchHint: "تُعرض الشعارات المحلية المتاحة فقط؛ القائمة تتضمن جميع العلامات المنشورة.",
      brand: "العلامة", chooseBrand: "اختر العلامة", model: "الطراز", chooseBrandFirst: "اختر العلامة أولًا", chooseModel: "اختر الطراز", year: "السنة", chooseModelFirst: "اختر الطراز أولًا", chooseYear: "اختر السنة", variant: "الفئة / المحرك", chooseYearFirst: "اختر السنة أولًا", chooseVariant: "اختر الفئة أو المحرك", unspecifiedVariant: "غير مذكور في السجل", documentScopeYear: "نطاق الوثيقة — سنة الطراز غير محددة", documentScopeCaution: "تنبيه: الوثيقة لا تذكر سنة طراز. تحقق من انطباقها على مركبتك قبل الاعتماد عليها.", noAvailableModels: "لا توجد نطاقات مركبات منشورة لهذه العلامة في السوق المحدد.",
      showAllBrands: "عرض كل الشعارات", shownBrands: "من أصل", noLocalLogos: "لا توجد شعارات محلية مطابقة لهذا البحث. استخدم قائمة العلامات لاختيار أي علامة منشورة.", logoNotCoverage: "الشعارات واسم العلامة لا يثبتان وجود جدول خدمة.", trademarkNotice: "إشعار العلامات التجارية: الشعارات والعلامات تخص أصحابها؛ عرضها هنا للتعريف فقط.",
      chooseScope: "اختر نطاق المركبة لعرض الحالة والمهام الموثقة.", noProfile: "هذه المركبة/الفئة متاحة للاختيار، لكن لا يتوفر لها جدول خدمة موثق لهذا النطاق الدقيق.", ambiguousProfile: "توجد أكثر من نسخة موثقة للنطاق نفسه؛ لا يمكن عرض جدول واحد بأمان.", profileScope: "نطاق الملف الموثق", normalConditions: "الظروف العادية المذكورة", normalYes: "نعم", normalNo: "لا", profileReference: "بيانات الوثيقة", sourceTitle: "العنوان", locator: "الموضع المرجعي", country: "البلد", issuer: "الجهة المصدرة", verified: "تاريخ التحقق", notProvided: "غير مذكور",
      completenessComplete: "كامل وفق الوثيقة", completenessPartial: "مهام جزئية", completenessInterval: "فاصل خدمة فقط", completenessNote: "ملاحظة الاكتمال", documentedTasksOnly: "المهام المنشورة فقط", mileageLimit: "عرض النقاط حتى", scheduleThrough: "الجدول حتى", km: "كم", checkpoint: "نقطة العداد", documentedTask: "المهمة الموثقة", timeBasis: "أساس الوقت", operation: "الإجراء", technicalSummary: "ملخص تقني", arabicSource: "ملاحظة مصدر عربية", trigger: "شرط / مؤشر", noTechnicalSummary: "لم يُنشر ملخص تقني إضافي لهذه المهمة.", taskNameNotProvided: "لم يُنشر اسم المهمة.",
      recurringMonths: "كل {months} شهرًا", whicheverFirst: "المسافة أو الوقت، أيهما أسبق", noTimeDocumentation: "لا توجد فترة زمنية موثقة", noCheckpoints: "لا توجد نقاط موثقة ضمن حد العداد المختار.", nextCheckpoint: "أقرب نقطة موثقة", inspect: "فحص", replace: "استبدال", service: "صيانة", conditionTasks: "مهام زمنية أو مشروطة", conditionTasksHelp: "هذه المهام ليس لها نقطة عداد منشورة؛ اتبع الوقت أو الشرط المذكور فقط.",
      officialSources: "إسناد الجهة الرسمية", selectedMarketSources: "سجلات الجهة للسوق المحدد", otherMarketSources: "سجلات الجهة لأسواق أخرى", noSelectedSources: "لا توجد سجلات جهة رسمية متحققة منشورة للسوق المحدد.", noSources: "إسناد جهة رسمية غير متاح لهذه العلامة في الكتالوج المنشور.", sourceNote: "ملاحظة المصدر", documentedNotes: "ملاحظات موثقة", limitations: "قيود التغطية",
      caution: "المهام المنشورة فقط. تعليمات الحالات الشديدة في دليل المركبة لها الأولوية. لا تُستنتج هنا فترات زيت أو خدمة عامة، ولا يوجد ضمان لصحة البيانات أو اكتمالها. لا تعني هذه الصفحة وجود خدمة عند 1000 كم ما لم تكن موثقة صراحةً.",
      market_eg: "مصر", market_sa: "السعودية", market_ae: "الإمارات", market_qa: "قطر", market_kw: "الكويت", market_bh: "البحرين", market_om: "عُمان", market_us: "الولايات المتحدة", market_uk: "المملكة المتحدة", market_de: "ألمانيا", market_fr: "فرنسا", market_it: "إيطاليا", market_es: "إسبانيا", market_ca: "كندا", market_au: "أستراليا", market_in: "الهند", market_cn: "الصين", market_jp: "اليابان", market_kr: "كوريا الجنوبية", market_br: "البرازيل", market_mx: "المكسيك", market_tr: "تركيا", market_za: "جنوب أفريقيا", market_pl: "بولندا", market_nl: "هولندا", market_se: "السويد", market_no: "النرويج", market_other: "سوق آخر موثق"
    },
    en: {
      title: "Service schedule", eyebrow: "Market-scoped documented service information", intro: "Select market, brand, model, year and trim to see available vehicles and documented service tasks only. A vehicle or logo does not mean a schedule is available.",
      limitedCoverage: "Limited documented coverage — not all vehicles worldwide", documentedBrands: "Published brands", availableVehicles: "Available vehicle scopes", documentedProfiles: "Documented service profiles", lastVerified: "Last verified", scopeNote: "Scope note",
      loading: "Loading documented service data…", loadError: "The schedule file could not be loaded right now.", retry: "Retry", noData: "No documented service data is published yet.",
      market: "Market", featuredMarkets: "Priority markets", otherMarkets: "Other markets", chooseMarket: "Select market", brandSearch: "Search brand name", brandSearchHint: "Only available local logo files appear below; the menu contains every published brand.",
      brand: "Brand", chooseBrand: "Select brand", model: "Model", chooseBrandFirst: "Select a brand first", chooseModel: "Select model", year: "Year", chooseModelFirst: "Select a model first", chooseYear: "Select year", variant: "Engine / trim", chooseYearFirst: "Select a year first", chooseVariant: "Select engine or trim", unspecifiedVariant: "Not stated in the record", documentScopeYear: "Document scope — model year not specified", documentScopeCaution: "Caution: the document does not state a model year. Confirm that it applies to your vehicle before relying on it.", noAvailableModels: "No published vehicle scopes are available for this brand in the selected market.",
      showAllBrands: "Show all logo tiles", shownBrands: "of", noLocalLogos: "No local logo tile matches this search. Use the brand menu to select any published brand.", logoNotCoverage: "A logo or brand name is not evidence that a service schedule exists.", trademarkNotice: "Trademark notice: logos and marks belong to their owners and appear here for identification only.",
      chooseScope: "Choose a vehicle scope to view documented status and tasks.", noProfile: "This vehicle/trim is available to select, but no documented service schedule is available for this exact scope.", ambiguousProfile: "More than one documented profile shares this exact scope; one schedule cannot be shown safely.", profileScope: "Documented profile scope", normalConditions: "Stated normal conditions", normalYes: "Yes", normalNo: "No", profileReference: "Document record", sourceTitle: "Title", locator: "Reference locator", country: "Country", issuer: "Issuing organization", verified: "Verification date", notProvided: "Not supplied",
      completenessComplete: "Complete per document", completenessPartial: "Partial tasks", completenessInterval: "Service interval only", completenessNote: "Completeness note", documentedTasksOnly: "Published tasks only", mileageLimit: "Show checkpoints through", scheduleThrough: "Schedule through", km: "km", checkpoint: "Mileage checkpoint", documentedTask: "Documented task", timeBasis: "Time basis", operation: "Operation", technicalSummary: "Technical summary", arabicSource: "Arabic source note", trigger: "Condition / trigger", noTechnicalSummary: "No additional technical summary was published for this task.", taskNameNotProvided: "No English task name was published.",
      recurringMonths: "Every {months} months", whicheverFirst: "km or time, whichever comes first", noTimeDocumentation: "No documented time interval", noCheckpoints: "No documented checkpoints fall within the selected mileage limit.", nextCheckpoint: "Next documented checkpoint", inspect: "Inspect", replace: "Replace", service: "Service", conditionTasks: "Time- or condition-based tasks", conditionTasksHelp: "These tasks have no published mileage checkpoint; follow only the stated time or condition.",
      officialSources: "Official issuer attribution", selectedMarketSources: "Issuer records for the selected market", otherMarketSources: "Issuer records for other markets", noSelectedSources: "No verified official issuer record is published for the selected market.", noSources: "Official issuer attribution is unavailable for this brand in the published catalog.", sourceNote: "Source note", documentedNotes: "Documented notes", limitations: "Coverage limitations",
      caution: "Published tasks only. Severe-condition instructions in the vehicle manual take priority. This page does not infer generic oil or service intervals and makes no assurance of data correctness or completeness. It does not claim a 1,000 km service unless one is explicitly documented.",
      market_eg: "Egypt", market_sa: "Saudi Arabia", market_ae: "United Arab Emirates", market_qa: "Qatar", market_kw: "Kuwait", market_bh: "Bahrain", market_om: "Oman", market_us: "United States", market_uk: "United Kingdom", market_de: "Germany", market_fr: "France", market_it: "Italy", market_es: "Spain", market_ca: "Canada", market_au: "Australia", market_in: "India", market_cn: "China", market_jp: "Japan", market_kr: "South Korea", market_br: "Brazil", market_mx: "Mexico", market_tr: "Türkiye", market_za: "South Africa", market_pl: "Poland", market_nl: "Netherlands", market_se: "Sweden", market_no: "Norway", market_other: "Other documented market"
    },
    fr: {
      title: "Programme d’entretien", eyebrow: "Informations d’entretien documentées par marché", intro: "Choisissez le marché, la marque, le modèle, l’année et la finition pour voir uniquement les véhicules disponibles et les opérations documentées. Un véhicule ou un logo ne garantit pas un programme.",
      limitedCoverage: "Couverture documentée limitée — pas tous les véhicules du monde", documentedBrands: "Marques publiées", availableVehicles: "Périmètres véhicules disponibles", documentedProfiles: "Profils d’entretien documentés", lastVerified: "Dernière vérification", scopeNote: "Note de périmètre",
      loading: "Chargement des données d’entretien documentées…", loadError: "Le fichier des programmes ne peut pas être chargé pour le moment.", retry: "Réessayer", noData: "Aucune donnée d’entretien documentée n’est encore publiée.",
      market: "Marché", featuredMarkets: "Marchés prioritaires", otherMarkets: "Autres marchés", chooseMarket: "Choisir le marché", brandSearch: "Rechercher une marque", brandSearchHint: "Seuls les logos locaux disponibles sont affichés ; le menu contient toutes les marques publiées.",
      brand: "Marque", chooseBrand: "Choisir la marque", model: "Modèle", chooseBrandFirst: "Choisissez d’abord une marque", chooseModel: "Choisir le modèle", year: "Année", chooseModelFirst: "Choisissez d’abord un modèle", chooseYear: "Choisir l’année", variant: "Moteur / finition", chooseYearFirst: "Choisissez d’abord une année", chooseVariant: "Choisir moteur ou finition", unspecifiedVariant: "Non indiqué dans le dossier", documentScopeYear: "Périmètre du document — année modèle non précisée", documentScopeCaution: "Attention : le document ne précise pas l’année modèle. Vérifiez son applicabilité à votre véhicule avant de vous y fier.", noAvailableModels: "Aucun périmètre véhicule publié n’est disponible pour cette marque sur le marché choisi.",
      showAllBrands: "Afficher tous les logos", shownBrands: "sur", noLocalLogos: "Aucun logo local ne correspond à cette recherche. Utilisez le menu des marques pour choisir une marque publiée.", logoNotCoverage: "Un logo ou un nom de marque ne prouve pas qu’un programme d’entretien existe.", trademarkNotice: "Avis de marque : les logos et marques appartiennent à leurs propriétaires et sont affichés uniquement à titre d’identification.",
      chooseScope: "Choisissez un périmètre véhicule pour voir le statut et les opérations documentés.", noProfile: "Ce véhicule/cette finition peut être sélectionné(e), mais aucun programme documenté n’est disponible pour ce périmètre exact.", ambiguousProfile: "Plusieurs profils documentés partagent ce périmètre exact ; un seul programme ne peut pas être affiché de manière sûre.", profileScope: "Périmètre du profil documenté", normalConditions: "Conditions normales indiquées", normalYes: "Oui", normalNo: "Non", profileReference: "Dossier documentaire", sourceTitle: "Titre", locator: "Repère de référence", country: "Pays", issuer: "Organisme émetteur", verified: "Date de vérification", notProvided: "Non fourni",
      completenessComplete: "Complet selon le document", completenessPartial: "Opérations partielles", completenessInterval: "Intervalle d’entretien seulement", completenessNote: "Note de complétude", documentedTasksOnly: "Opérations publiées uniquement", mileageLimit: "Afficher les jalons jusqu’à", scheduleThrough: "Programme jusqu’à", km: "km", checkpoint: "Jalon kilométrique", documentedTask: "Opération documentée", timeBasis: "Base de temps", operation: "Opération", technicalSummary: "Résumé technique", arabicSource: "note source en arabe", trigger: "Condition / déclencheur", noTechnicalSummary: "Aucun résumé technique complémentaire n’a été publié pour cette opération.", taskNameNotProvided: "Aucun nom de tâche anglais n’a été publié.",
      recurringMonths: "Tous les {months} mois", whicheverFirst: "km ou temps, selon la première échéance", noTimeDocumentation: "Aucun intervalle de temps documenté", noCheckpoints: "Aucun jalon documenté ne se situe dans la limite kilométrique choisie.", nextCheckpoint: "Prochain jalon documenté", inspect: "Inspecter", replace: "Remplacer", service: "Entretenir", conditionTasks: "Opérations basées sur le temps ou une condition", conditionTasksHelp: "Ces opérations n’ont pas de jalon kilométrique publié ; suivez uniquement le temps ou la condition indiqués.",
      officialSources: "Attribution de l’émetteur officiel", selectedMarketSources: "Dossiers d’émetteur pour le marché choisi", otherMarketSources: "Dossiers d’émetteur pour d’autres marchés", noSelectedSources: "Aucun dossier d’émetteur officiel vérifié n’est publié pour le marché choisi.", noSources: "L’attribution d’un émetteur officiel n’est pas disponible pour cette marque dans le catalogue publié.", sourceNote: "Note de source", documentedNotes: "Notes documentées", limitations: "Limites de couverture",
      caution: "Opérations publiées uniquement. Les consignes de conditions sévères du manuel du véhicule sont prioritaires. Cette page ne déduit aucun intervalle générique d’huile ou d’entretien et ne garantit ni l’exactitude ni l’exhaustivité des données. Elle ne revendique pas un entretien à 1 000 km sans documentation explicite.",
      market_eg: "Égypte", market_sa: "Arabie saoudite", market_ae: "Émirats arabes unis", market_qa: "Qatar", market_kw: "Koweït", market_bh: "Bahreïn", market_om: "Oman", market_us: "États-Unis", market_uk: "Royaume-Uni", market_de: "Allemagne", market_fr: "France", market_it: "Italie", market_es: "Espagne", market_ca: "Canada", market_au: "Australie", market_in: "Inde", market_cn: "Chine", market_jp: "Japon", market_kr: "Corée du Sud", market_br: "Brésil", market_mx: "Mexique", market_tr: "Türkiye", market_za: "Afrique du Sud", market_pl: "Pologne", market_nl: "Pays-Bas", market_se: "Suède", market_no: "Norvège", market_other: "Autre marché documenté"
    },
    es: {
      title: "Programa de servicio", eyebrow: "Información de servicio documentada por mercado", intro: "Seleccione mercado, marca, modelo, año y acabado para ver solo vehículos disponibles y tareas documentadas. Un vehículo o logotipo no garantiza que exista un programa.",
      limitedCoverage: "Cobertura documentada limitada — no todos los vehículos del mundo", documentedBrands: "Marcas publicadas", availableVehicles: "Ámbitos de vehículo disponibles", documentedProfiles: "Perfiles de servicio documentados", lastVerified: "Última verificación", scopeNote: "Nota de alcance",
      loading: "Cargando datos de servicio documentados…", loadError: "El archivo de programas no se puede cargar ahora.", retry: "Reintentar", noData: "Aún no hay datos de servicio documentados publicados.",
      market: "Mercado", featuredMarkets: "Mercados prioritarios", otherMarkets: "Otros mercados", chooseMarket: "Seleccionar mercado", brandSearch: "Buscar marca", brandSearchHint: "Solo aparecen los archivos de logotipo locales disponibles; el menú contiene todas las marcas publicadas.",
      brand: "Marca", chooseBrand: "Seleccionar marca", model: "Modelo", chooseBrandFirst: "Seleccione primero una marca", chooseModel: "Seleccionar modelo", year: "Año", chooseModelFirst: "Seleccione primero un modelo", chooseYear: "Seleccionar año", variant: "Motor / acabado", chooseYearFirst: "Seleccione primero un año", chooseVariant: "Seleccionar motor o acabado", unspecifiedVariant: "No indicado en el registro", documentScopeYear: "Ámbito del documento — año de modelo no especificado", documentScopeCaution: "Precaución: el documento no indica un año de modelo. Confirme que se aplica a su vehículo antes de usarlo.", noAvailableModels: "No hay ámbitos de vehículo publicados para esta marca en el mercado elegido.",
      showAllBrands: "Mostrar todos los logotipos", shownBrands: "de", noLocalLogos: "Ningún logotipo local coincide con esta búsqueda. Use el menú para elegir una marca publicada.", logoNotCoverage: "Un logotipo o nombre de marca no demuestra que exista un programa de servicio.", trademarkNotice: "Aviso de marcas: los logotipos y marcas pertenecen a sus propietarios y se muestran solo para identificación.",
      chooseScope: "Elija un ámbito de vehículo para ver el estado y las tareas documentadas.", noProfile: "Este vehículo/acabado está disponible para seleccionar, pero no hay un programa documentado para este ámbito exacto.", ambiguousProfile: "Más de un perfil documentado comparte este ámbito exacto; no se puede mostrar un solo programa de forma segura.", profileScope: "Ámbito del perfil documentado", normalConditions: "Condiciones normales indicadas", normalYes: "Sí", normalNo: "No", profileReference: "Registro documental", sourceTitle: "Título", locator: "Localizador de referencia", country: "País", issuer: "Entidad emisora", verified: "Fecha de verificación", notProvided: "No indicado",
      completenessComplete: "Completo según el documento", completenessPartial: "Tareas parciales", completenessInterval: "Solo intervalo de servicio", completenessNote: "Nota de integridad", documentedTasksOnly: "Solo tareas publicadas", mileageLimit: "Mostrar puntos hasta", scheduleThrough: "Programa hasta", km: "km", checkpoint: "Punto de kilometraje", documentedTask: "Tarea documentada", timeBasis: "Base temporal", operation: "Operación", technicalSummary: "Resumen técnico", arabicSource: "nota fuente en árabe", trigger: "Condición / activador", noTechnicalSummary: "No se publicó un resumen técnico adicional para esta tarea.", taskNameNotProvided: "No se publicó un nombre de tarea en inglés.",
      recurringMonths: "Cada {months} meses", whicheverFirst: "km o tiempo, lo que ocurra primero", noTimeDocumentation: "Sin intervalo de tiempo documentado", noCheckpoints: "No hay puntos documentados dentro del límite de kilometraje elegido.", nextCheckpoint: "Próximo punto documentado", inspect: "Inspeccionar", replace: "Sustituir", service: "Servicio", conditionTasks: "Tareas basadas en tiempo o condición", conditionTasksHelp: "Estas tareas no tienen un punto kilométrico publicado; siga solo el tiempo o la condición indicada.",
      officialSources: "Atribución del emisor oficial", selectedMarketSources: "Registros del emisor para el mercado seleccionado", otherMarketSources: "Registros del emisor para otros mercados", noSelectedSources: "No hay un registro de emisor oficial verificado publicado para el mercado seleccionado.", noSources: "La atribución de un emisor oficial no está disponible para esta marca en el catálogo publicado.", sourceNote: "Nota de fuente", documentedNotes: "Notas documentadas", limitations: "Limitaciones de cobertura",
      caution: "Solo tareas publicadas. Las instrucciones para condiciones severas del manual del vehículo tienen prioridad. Esta página no infiere intervalos genéricos de aceite o servicio ni garantiza la corrección o integridad de los datos. No afirma un servicio a los 1.000 km salvo que esté documentado expresamente.",
      market_eg: "Egipto", market_sa: "Arabia Saudí", market_ae: "Emiratos Árabes Unidos", market_qa: "Catar", market_kw: "Kuwait", market_bh: "Baréin", market_om: "Omán", market_us: "Estados Unidos", market_uk: "Reino Unido", market_de: "Alemania", market_fr: "Francia", market_it: "Italia", market_es: "España", market_ca: "Canadá", market_au: "Australia", market_in: "India", market_cn: "China", market_jp: "Japón", market_kr: "Corea del Sur", market_br: "Brasil", market_mx: "México", market_tr: "Türkiye", market_za: "Sudáfrica", market_pl: "Polonia", market_nl: "Países Bajos", market_se: "Suecia", market_no: "Noruega", market_other: "Otro mercado documentado"
    },
    it: {
      title: "Piano di manutenzione", eyebrow: "Informazioni di manutenzione documentate per mercato", intro: "Seleziona mercato, marchio, modello, anno e allestimento per vedere solo veicoli disponibili e attività documentate. Un veicolo o logo non garantisce un piano.",
      limitedCoverage: "Copertura documentata limitata — non tutti i veicoli del mondo", documentedBrands: "Marchi pubblicati", availableVehicles: "Ambiti veicolo disponibili", documentedProfiles: "Profili di manutenzione documentati", lastVerified: "Ultima verifica", scopeNote: "Nota sul perimetro",
      loading: "Caricamento dei dati di manutenzione documentati…", loadError: "Il file dei piani non può essere caricato ora.", retry: "Riprova", noData: "Non sono ancora pubblicati dati di manutenzione documentati.",
      market: "Mercato", featuredMarkets: "Mercati prioritari", otherMarkets: "Altri mercati", chooseMarket: "Seleziona mercato", brandSearch: "Cerca marchio", brandSearchHint: "Sono mostrati solo i file logo locali disponibili; il menu contiene tutti i marchi pubblicati.",
      brand: "Marchio", chooseBrand: "Seleziona marchio", model: "Modello", chooseBrandFirst: "Seleziona prima un marchio", chooseModel: "Seleziona modello", year: "Anno", chooseModelFirst: "Seleziona prima un modello", chooseYear: "Seleziona anno", variant: "Motore / allestimento", chooseYearFirst: "Seleziona prima un anno", chooseVariant: "Seleziona motore o allestimento", unspecifiedVariant: "Non indicato nel record", documentScopeYear: "Ambito del documento — anno modello non specificato", documentScopeCaution: "Attenzione: il documento non indica l’anno modello. Verifica che si applichi al tuo veicolo prima di farvi affidamento.", noAvailableModels: "Non sono disponibili ambiti veicolo pubblicati per questo marchio nel mercato selezionato.",
      showAllBrands: "Mostra tutti i loghi", shownBrands: "di", noLocalLogos: "Nessun logo locale corrisponde alla ricerca. Usa il menu dei marchi per scegliere un marchio pubblicato.", logoNotCoverage: "Un logo o nome di marchio non prova che esista un piano di manutenzione.", trademarkNotice: "Avviso marchi: loghi e marchi appartengono ai rispettivi proprietari e sono mostrati solo per identificazione.",
      chooseScope: "Scegli un ambito veicolo per vedere stato e attività documentati.", noProfile: "Questo veicolo/allestimento è disponibile per la selezione, ma non esiste un piano documentato per questo ambito esatto.", ambiguousProfile: "Più profili documentati condividono questo ambito esatto; non è possibile mostrare un solo piano in sicurezza.", profileScope: "Ambito del profilo documentato", normalConditions: "Condizioni normali indicate", normalYes: "Sì", normalNo: "No", profileReference: "Scheda del documento", sourceTitle: "Titolo", locator: "Localizzatore di riferimento", country: "Paese", issuer: "Organizzazione emittente", verified: "Data di verifica", notProvided: "Non fornito",
      completenessComplete: "Completo secondo il documento", completenessPartial: "Attività parziali", completenessInterval: "Solo intervallo di servizio", completenessNote: "Nota di completezza", documentedTasksOnly: "Solo attività pubblicate", mileageLimit: "Mostra punti fino a", scheduleThrough: "Piano fino a", km: "km", checkpoint: "Punto chilometrico", documentedTask: "Attività documentata", timeBasis: "Base temporale", operation: "Operazione", technicalSummary: "Sintesi tecnica", arabicSource: "nota fonte in arabo", trigger: "Condizione / attivatore", noTechnicalSummary: "Non è stata pubblicata una sintesi tecnica aggiuntiva per questa attività.", taskNameNotProvided: "Non è stato pubblicato un nome attività in inglese.",
      recurringMonths: "Ogni {months} mesi", whicheverFirst: "km o tempo, a seconda di quale venga prima", noTimeDocumentation: "Nessun intervallo temporale documentato", noCheckpoints: "Nessun punto documentato rientra nel limite chilometrico scelto.", nextCheckpoint: "Prossimo punto documentato", inspect: "Ispezionare", replace: "Sostituire", service: "Manutenzione", conditionTasks: "Attività basate su tempo o condizione", conditionTasksHelp: "Queste attività non hanno un punto chilometrico pubblicato; segui solo il tempo o la condizione indicati.",
      officialSources: "Attribuzione dell’emittente ufficiale", selectedMarketSources: "Record dell’emittente per il mercato selezionato", otherMarketSources: "Record dell’emittente per altri mercati", noSelectedSources: "Non è pubblicato alcun record verificato di emittente ufficiale per il mercato selezionato.", noSources: "L’attribuzione di un emittente ufficiale non è disponibile per questo marchio nel catalogo pubblicato.", sourceNote: "Nota della fonte", documentedNotes: "Note documentate", limitations: "Limitazioni di copertura",
      caution: "Solo attività pubblicate. Le istruzioni per condizioni gravose nel manuale del veicolo hanno priorità. Questa pagina non deduce intervalli generici per olio o manutenzione e non garantisce correttezza o completezza dei dati. Non dichiara una manutenzione a 1.000 km salvo documentazione esplicita.",
      market_eg: "Egitto", market_sa: "Arabia Saudita", market_ae: "Emirati Arabi Uniti", market_qa: "Qatar", market_kw: "Kuwait", market_bh: "Bahrein", market_om: "Oman", market_us: "Stati Uniti", market_uk: "Regno Unito", market_de: "Germania", market_fr: "Francia", market_it: "Italia", market_es: "Spagna", market_ca: "Canada", market_au: "Australia", market_in: "India", market_cn: "Cina", market_jp: "Giappone", market_kr: "Corea del Sud", market_br: "Brasile", market_mx: "Messico", market_tr: "Türkiye", market_za: "Sudafrica", market_pl: "Polonia", market_nl: "Paesi Bassi", market_se: "Svezia", market_no: "Norvegia", market_other: "Altro mercato documentato"
    },
    de: {
      title: "Wartungsplan", eyebrow: "Dokumentierte Wartungsinformationen nach Markt", intro: "Wählen Sie Markt, Marke, Modell, Baujahr und Ausstattung, um nur verfügbare Fahrzeuge und dokumentierte Aufgaben zu sehen. Ein Fahrzeug oder Logo garantiert keinen Plan.",
      limitedCoverage: "Begrenzte dokumentierte Abdeckung — nicht alle Fahrzeuge weltweit", documentedBrands: "Veröffentlichte Marken", availableVehicles: "Verfügbare Fahrzeugumfänge", documentedProfiles: "Dokumentierte Wartungsprofile", lastVerified: "Zuletzt geprüft", scopeNote: "Geltungshinweis",
      loading: "Dokumentierte Wartungsdaten werden geladen…", loadError: "Die Plan-Datei kann derzeit nicht geladen werden.", retry: "Erneut versuchen", noData: "Es sind noch keine dokumentierten Wartungsdaten veröffentlicht.",
      market: "Markt", featuredMarkets: "Vorrangige Märkte", otherMarkets: "Weitere Märkte", chooseMarket: "Markt wählen", brandSearch: "Marke suchen", brandSearchHint: "Nur verfügbare lokale Logo-Dateien werden angezeigt; das Menü enthält jede veröffentlichte Marke.",
      brand: "Marke", chooseBrand: "Marke wählen", model: "Modell", chooseBrandFirst: "Zuerst eine Marke wählen", chooseModel: "Modell wählen", year: "Baujahr", chooseModelFirst: "Zuerst ein Modell wählen", chooseYear: "Baujahr wählen", variant: "Motor / Ausstattung", chooseYearFirst: "Zuerst ein Baujahr wählen", chooseVariant: "Motor oder Ausstattung wählen", unspecifiedVariant: "Im Datensatz nicht angegeben", documentScopeYear: "Dokumentumfang — Modelljahr nicht angegeben", documentScopeCaution: "Vorsicht: Das Dokument nennt kein Modelljahr. Prüfen Sie die Anwendbarkeit auf Ihr Fahrzeug, bevor Sie sich darauf verlassen.", noAvailableModels: "Für diese Marke sind im gewählten Markt keine veröffentlichten Fahrzeugumfänge verfügbar.",
      showAllBrands: "Alle Logo-Kacheln anzeigen", shownBrands: "von", noLocalLogos: "Kein lokales Logo passt zu dieser Suche. Wählen Sie eine veröffentlichte Marke im Markenmenü.", logoNotCoverage: "Ein Logo oder Markenname ist kein Nachweis für einen Wartungsplan.", trademarkNotice: "Markenhinweis: Logos und Marken gehören ihren Eigentümern und erscheinen nur zur Identifikation.",
      chooseScope: "Wählen Sie einen Fahrzeugumfang, um dokumentierten Status und Aufgaben anzuzeigen.", noProfile: "Dieses Fahrzeug/diese Ausstattung ist wählbar, jedoch ist für genau diesen Umfang kein dokumentierter Wartungsplan verfügbar.", ambiguousProfile: "Mehr als ein dokumentiertes Profil hat genau diesen Umfang; ein einzelner Plan kann nicht sicher angezeigt werden.", profileScope: "Dokumentierter Profilumfang", normalConditions: "Angegebene Normalbedingungen", normalYes: "Ja", normalNo: "Nein", profileReference: "Dokumentdatensatz", sourceTitle: "Titel", locator: "Referenzstelle", country: "Land", issuer: "Ausstellende Organisation", verified: "Prüfdatum", notProvided: "Nicht angegeben",
      completenessComplete: "Vollständig gemäß Dokument", completenessPartial: "Teilaufgaben", completenessInterval: "Nur Wartungsintervall", completenessNote: "Vollständigkeitshinweis", documentedTasksOnly: "Nur veröffentlichte Aufgaben", mileageLimit: "Punkte anzeigen bis", scheduleThrough: "Plan bis", km: "km", checkpoint: "Kilometerstand", documentedTask: "Dokumentierte Aufgabe", timeBasis: "Zeitbasis", operation: "Vorgang", technicalSummary: "Technische Zusammenfassung", arabicSource: "arabische Quellnotiz", trigger: "Bedingung / Auslöser", noTechnicalSummary: "Für diese Aufgabe wurde keine zusätzliche technische Zusammenfassung veröffentlicht.", taskNameNotProvided: "Es wurde kein englischer Aufgabenname veröffentlicht.",
      recurringMonths: "Alle {months} Monate", whicheverFirst: "km oder Zeit, je nachdem was zuerst eintritt", noTimeDocumentation: "Kein dokumentiertes Zeitintervall", noCheckpoints: "Innerhalb der gewählten Kilometergrenze liegen keine dokumentierten Punkte.", nextCheckpoint: "Nächster dokumentierter Punkt", inspect: "Prüfen", replace: "Ersetzen", service: "Warten", conditionTasks: "Zeit- oder bedingungsbasierte Aufgaben", conditionTasksHelp: "Diese Aufgaben haben keinen veröffentlichten Kilometerpunkt; folgen Sie nur der genannten Zeit oder Bedingung.",
      officialSources: "Attribution des offiziellen Ausstellers", selectedMarketSources: "Ausstellerdatensätze für den gewählten Markt", otherMarketSources: "Ausstellerdatensätze für andere Märkte", noSelectedSources: "Für den gewählten Markt ist kein verifizierter Datensatz eines offiziellen Ausstellers veröffentlicht.", noSources: "Die Attribution eines offiziellen Ausstellers ist für diese Marke im veröffentlichten Katalog nicht verfügbar.", sourceNote: "Quellhinweis", documentedNotes: "Dokumentierte Hinweise", limitations: "Grenzen der Abdeckung",
      caution: "Nur veröffentlichte Aufgaben. Anweisungen für erschwerte Bedingungen im Fahrzeughandbuch haben Vorrang. Diese Seite leitet keine allgemeinen Öl- oder Wartungsintervalle ab und sichert weder Richtigkeit noch Vollständigkeit der Daten zu. Sie behauptet keinen 1.000-km-Service, sofern dieser nicht ausdrücklich dokumentiert ist.",
      market_eg: "Ägypten", market_sa: "Saudi-Arabien", market_ae: "Vereinigte Arabische Emirate", market_qa: "Katar", market_kw: "Kuwait", market_bh: "Bahrain", market_om: "Oman", market_us: "Vereinigte Staaten", market_uk: "Vereinigtes Königreich", market_de: "Deutschland", market_fr: "Frankreich", market_it: "Italien", market_es: "Spanien", market_ca: "Kanada", market_au: "Australien", market_in: "Indien", market_cn: "China", market_jp: "Japan", market_kr: "Südkorea", market_br: "Brasilien", market_mx: "Mexiko", market_tr: "Türkiye", market_za: "Südafrika", market_pl: "Polen", market_nl: "Niederlande", market_se: "Schweden", market_no: "Norwegen", market_other: "Anderer dokumentierter Markt"
    }
  };

  var scheduleState = {
    market: "eg",
    brandId: "",
    model: "",
    year: "",
    variant: "",
    mileage: 100000,
    brandQuery: "",
    brandsExpanded: false
  };
  var dataCache = { status: "idle", data: null, error: null, promise: null };

  function locale() {
    var override = window.MOTRXO_SERVICE_LOCALE;
    var raw = (override || document.documentElement.getAttribute("lang") || "ar").toLowerCase().split("-")[0];
    return SUPPORTED_LOCALES.indexOf(raw) !== -1 ? raw : "ar";
  }

  function direction() {
    return locale() === "ar" ? "rtl" : "ltr";
  }

  function text(key, variables) {
    var dictionary = COPY[locale()] || COPY.ar;
    var value = Object.prototype.hasOwnProperty.call(dictionary, key) ? dictionary[key] :
      (Object.prototype.hasOwnProperty.call(COPY.ar, key) ? COPY.ar[key] : key);
    if (!variables) return value;
    return value.replace(/\{(\w+)\}/g, function (_, name) {
      return Object.prototype.hasOwnProperty.call(variables, name) ? String(variables[name]) : _;
    });
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
    });
  }

  function plainText(value) {
    return typeof value === "string" || typeof value === "number" ? String(value).trim() : "";
  }

  function object(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
  }

  function list(value) {
    return Array.isArray(value) ? value : [];
  }

  function exactValue(value) {
    return value == null ? "" : String(value);
  }

  function nonNegativeInteger(value) {
    var number = Number(value);
    return Number.isFinite(number) && number >= 0 && Math.floor(number) === number ? number : null;
  }

  function positiveInteger(value) {
    var number = nonNegativeInteger(value);
    return number !== null && number > 0 ? number : null;
  }

  function displayNumber(value) {
    try {
      return new Intl.NumberFormat(locale()).format(value);
    } catch (_) {
      return String(value);
    }
  }

  function marketToken(value) {
    var raw = plainText(value).toLowerCase();
    return MARKET_ALIASES[raw] || raw;
  }

  function marketName(token) {
    var normalized = marketToken(token);
    var regional = {
      "ae-dubai": ["الإمارات — دبي والإمارات الشمالية", "UAE — Dubai and Northern Emirates", "EAU — Dubaï et Émirats du Nord", "EAU — Dubái y Emiratos del Norte", "EAU — Dubai ed Emirati del Nord", "VAE — Dubai und nördliche Emirate"],
      "ae-abudhabi": ["الإمارات — أبوظبي", "UAE — Abu Dhabi", "EAU — Abou Dabi", "EAU — Abu Dabi", "EAU — Abu Dhabi", "VAE — Abu Dhabi"]
    }[normalized];
    if (regional) return regional[SUPPORTED_LOCALES.indexOf(locale())];
    var key = "market_" + normalized;
    var dictionary = COPY[locale()] || COPY.ar;
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) return dictionary[key];
    if (Object.prototype.hasOwnProperty.call(COPY.ar, key)) return COPY.ar[key];
    return plainText(token) || text("notProvided");
  }

  function safeLogoUrl(value) {
    var localPath = plainText(value);
    return /^\/assets\/car-logos\/(?:[A-Za-z0-9._-]+\/)*[A-Za-z0-9._-]+$/.test(localPath) ? localPath : "";
  }

  function cleanLocator(value) {
    var locator = plainText(value);
    return /(?:https?:\/\/|www\.)/i.test(locator) ? "" : locator;
  }

  function normalizeData(payload) {
    if (!object(payload) || !Array.isArray(payload.brands)) {
      throw new Error("Invalid service schedule data shape");
    }
    return {
      metadata: object(payload.metadata) ? payload.metadata : {},
      brands: payload.brands.filter(object)
    };
  }

  function currentBrand(data) {
    return data.brands.find(function (brand) {
      return exactValue(brand.id) === scheduleState.brandId;
    }) || null;
  }

  function brandName(brand) {
    if (!brand) return "";
    return locale() === "ar" ? (plainText(brand.brand_ar) || plainText(brand.brand)) : (plainText(brand.brand) || plainText(brand.brand_ar));
  }

  function allProfiles(brand) {
    return brand ? list(brand.profiles).filter(object) : [];
  }

  function allVehicles(brand) {
    return brand ? list(brand.vehicles).filter(object) : [];
  }

  function scopeMarket(scope) {
    return marketToken(scope && (plainText(scope.market) || plainText(scope.country)));
  }

  function profileMarket(profile) {
    return scopeMarket(profile);
  }

  function sourceMarket(source) {
    return scopeMarket(source);
  }

  function scopeYearKey(scope) {
    return scope && scope.year === null ? DOCUMENT_SCOPE_YEAR : exactValue(scope && scope.year);
  }

  function scopeVariantKey(scope) {
    return exactValue(scope && scope.variant);
  }

  function scopeKey(scope) {
    return [
      exactValue(scope && scope.model),
      scopeMarket(scope),
      scopeYearKey(scope),
      scopeVariantKey(scope)
    ].join("\u0001");
  }

  function uniqueScopes(scopes) {
    var seen = Object.create(null);
    return scopes.filter(function (scope) {
      if (!object(scope) || !plainText(scope.model) || !scopeMarket(scope) || !scopeYearKey(scope)) return false;
      var key = scopeKey(scope);
      if (seen[key]) return false;
      seen[key] = true;
      return true;
    });
  }

  function scopesForMarket(brand) {
    return uniqueScopes(allVehicles(brand).concat(allProfiles(brand)).filter(function (scope) {
      return scopeMarket(scope) === scheduleState.market;
    }));
  }

  function scopesForModel(brand) {
    return scopesForMarket(brand).filter(function (scope) {
      return exactValue(scope.model) === scheduleState.model;
    });
  }

  function scopesForYear(brand) {
    return scopesForModel(brand).filter(function (scope) {
      return scopeYearKey(scope) === scheduleState.year;
    });
  }

  function uniqueValues(items, getter, includeBlank) {
    var seen = Object.create(null);
    return items.reduce(function (values, item) {
      var value = getter(item);
      if (!includeBlank && !value) return values;
      if (!Object.prototype.hasOwnProperty.call(seen, value)) {
        seen[value] = true;
        values.push(value);
      }
      return values;
    }, []);
  }

  function sortedValues(values) {
    return values.slice().sort(function (left, right) {
      return left.localeCompare(right, locale(), { numeric: true, sensitivity: "base" });
    });
  }

  function option(value, label, isSelected) {
    return '<option value="' + escapeHtml(value) + '"' + (isSelected ? " selected" : "") + ">" + escapeHtml(label) + "</option>";
  }

  function metadataCount(metadata, key, fallback) {
    var count = nonNegativeInteger(metadata && metadata[key]);
    return count === null ? fallback : count;
  }

  function profileCount(data) {
    return data.brands.reduce(function (total, brand) { return total + allProfiles(brand).length; }, 0);
  }

  function vehicleCount(data) {
    return data.brands.reduce(function (total, brand) { return total + allVehicles(brand).length; }, 0);
  }

  function renderCoverage(data) {
    var metadata = data.metadata || {};
    var details = [];
    if (plainText(metadata.verified_at)) details.push('<span><b>' + escapeHtml(text("lastVerified")) + ":</b> " + escapeHtml(metadata.verified_at) + "</span>");
    if (plainText(metadata.scope_note)) details.push('<span><b>' + escapeHtml(text("scopeNote")) + ":</b> " + escapeHtml(metadata.scope_note) + "</span>");
    return '<div class="ss-coverage" aria-label="' + escapeHtml(text("limitedCoverage")) + '">' +
      '<span class="ss-coverage-badge">' + escapeHtml(text("limitedCoverage")) + "</span>" +
      '<span>' + escapeHtml(displayNumber(metadataCount(metadata, "brand_count", data.brands.length))) + " " + escapeHtml(text("documentedBrands")) + "</span>" +
      '<span>' + escapeHtml(displayNumber(metadataCount(metadata, "vehicle_count", vehicleCount(data)))) + " " + escapeHtml(text("availableVehicles")) + "</span>" +
      '<span>' + escapeHtml(displayNumber(metadataCount(metadata, "profile_count", profileCount(data)))) + " " + escapeHtml(text("documentedProfiles")) + "</span>" +
      details.join("") +
      "</div>";
  }

  function availableMarkets(data) {
    var discovered = [];
    data.brands.forEach(function (brand) {
      allVehicles(brand).concat(allProfiles(brand), list(brand.official_sources).filter(object)).forEach(function (record) {
        var market = scopeMarket(record);
        if (market) discovered.push(market);
      });
    });
    return MARKET_ORDER.concat(discovered.filter(function (market) {
      return MARKET_ORDER.indexOf(market) === -1;
    })).filter(function (market, index, items) {
      return items.indexOf(market) === index;
    });
  }

  function renderMarketOptions(data) {
    var markets = availableMarkets(data);
    var featured = markets.filter(function (token) { return FEATURED_MARKETS.indexOf(token) !== -1; });
    var rest = markets.filter(function (token) { return FEATURED_MARKETS.indexOf(token) === -1; });
    return '<option value="">' + escapeHtml(text("chooseMarket")) + "</option>" +
      '<optgroup label="' + escapeHtml(text("featuredMarkets")) + '">' +
      featured.map(function (token) { return option(token, marketName(token), scheduleState.market === token); }).join("") +
      "</optgroup>" +
      '<optgroup label="' + escapeHtml(text("otherMarkets")) + '">' +
      rest.map(function (token) { return option(token, marketName(token), scheduleState.market === token); }).join("") +
      "</optgroup>";
  }

  function searchMatchesBrand(brand, query) {
    if (!query) return true;
    var needle = query.toLocaleLowerCase();
    return [brandName(brand), plainText(brand.brand), plainText(brand.brand_ar)].some(function (name) {
      return name.toLocaleLowerCase().indexOf(needle) !== -1;
    });
  }

  function renderBrandTiles(data) {
    var query = scheduleState.brandQuery.trim();
    var found = data.brands.filter(function (brand) { return searchMatchesBrand(brand, query); });
    var logoBrands = found.filter(function (brand) { return safeLogoUrl(brand.logo && brand.logo.url); });
    if (!logoBrands.length) return '<p class="ss-logo-empty">' + escapeHtml(text("noLocalLogos")) + "</p>";
    var visible = scheduleState.brandsExpanded || query ? logoBrands : logoBrands.slice(0, 12);
    var tiles = visible.map(function (brand) {
      var selected = exactValue(brand.id) === scheduleState.brandId;
      var logo = safeLogoUrl(brand.logo && brand.logo.url);
      var label = brandName(brand) || text("notProvided");
      return '<button class="ss-brand-tile' + (selected ? " is-selected" : "") + '" type="button" data-ss-brand-id="' + escapeHtml(exactValue(brand.id)) + '" aria-pressed="' + (selected ? "true" : "false") + '">' +
        '<span class="ss-logo-frame"><img src="' + escapeHtml(logo) + '" alt="' + escapeHtml(label) + '" loading="lazy"></span>' +
        '<span>' + escapeHtml(label) + "</span>" +
        "</button>";
    }).join("");
    var more = !query && logoBrands.length > 12 && !scheduleState.brandsExpanded ?
      '<button class="ss-show-more" type="button" data-ss-more-brands="true">' + escapeHtml(text("showAllBrands")) + " · " + escapeHtml(displayNumber(logoBrands.length)) + "</button>" : "";
    return '<div class="ss-brand-tile-grid">' + tiles + "</div>" + more +
      '<p class="ss-brand-count">' + escapeHtml(displayNumber(visible.length)) + " " + escapeHtml(text("shownBrands")) + " " + escapeHtml(displayNumber(logoBrands.length)) + "</p>";
  }

  function renderBrandBrowser(data) {
    var logoNote = plainText(data.metadata && data.metadata.logo_note);
    return '<div class="ss-brand-browser">' +
      '<label class="ss-search-label" for="ss-brand-search">' + escapeHtml(text("brandSearch")) + "</label>" +
      '<input class="ss-brand-search" id="ss-brand-search" type="search" autocomplete="off" data-ss-brand-search value="' + escapeHtml(scheduleState.brandQuery) + '" placeholder="' + escapeHtml(text("brandSearch")) + '">' +
      '<p class="ss-field-help">' + escapeHtml(text("brandSearchHint")) + "</p>" +
      '<div class="ss-brand-tiles-region" data-ss-brand-tiles aria-live="polite">' + renderBrandTiles(data) + "</div>" +
      '<p class="ss-logo-note">' + escapeHtml(text("logoNotCoverage")) + " " + escapeHtml(text("trademarkNotice")) + (logoNote ? " " + escapeHtml(logoNote) : "") + "</p>" +
      "</div>";
  }

  function renderSelectControls(data) {
    var brand = currentBrand(data);
    var marketScopes = scopesForMarket(brand);
    var models = sortedValues(uniqueValues(marketScopes, function (scope) { return exactValue(scope.model); }, false));
    var modelScopes = scopesForModel(brand);
    var yearKeys = uniqueValues(modelScopes, scopeYearKey, false).sort(function (left, right) {
      if (left === DOCUMENT_SCOPE_YEAR) return 1;
      if (right === DOCUMENT_SCOPE_YEAR) return -1;
      return right.localeCompare(left, locale(), { numeric: true });
    });
    var yearOptions = yearKeys.map(function (value) {
      return option(value, value === DOCUMENT_SCOPE_YEAR ? text("documentScopeYear") : value, value === scheduleState.year);
    }).join("");
    var variants = sortedValues(uniqueValues(scopesForYear(brand), scopeVariantKey, true));
    var variantOptions = variants.map(function (value) {
      var optionValue = value === "" ? NO_VARIANT : value;
      return option(optionValue, value || text("unspecifiedVariant"), optionValue === scheduleState.variant);
    }).join("");
    var brandOptions = data.brands.map(function (item) {
      return option(exactValue(item.id), brandName(item) || text("notProvided"), exactValue(item.id) === scheduleState.brandId);
    }).join("");
    var noModels = brand && !marketScopes.length ? '<p class="ss-field-alert">' + escapeHtml(text("noAvailableModels")) + "</p>" : "";

    return '<fieldset class="ss-filters"><legend>' + escapeHtml(text("profileScope")) + "</legend>" +
      '<div class="ss-filter-grid">' +
      '<label class="ss-field"><span>' + escapeHtml(text("market")) + '</span><select class="ss-select" data-ss-control="market">' + renderMarketOptions(data) + "</select></label>" +
      '<label class="ss-field"><span>' + escapeHtml(text("brand")) + '</span><select class="ss-select" data-ss-control="brand"><option value="">' + escapeHtml(text("chooseBrand")) + "</option>" + brandOptions + "</select></label>" +
      '<label class="ss-field"><span>' + escapeHtml(text("model")) + '</span><select class="ss-select" data-ss-control="model"' + (!brand ? " disabled" : "") + '><option value="">' + escapeHtml(brand ? text("chooseModel") : text("chooseBrandFirst")) + "</option>" + models.map(function (value) { return option(value, value, value === scheduleState.model); }).join("") + "</select>" + noModels + "</label>" +
      '<label class="ss-field"><span>' + escapeHtml(text("year")) + '</span><select class="ss-select" data-ss-control="year"' + (!scheduleState.model ? " disabled" : "") + '><option value="">' + escapeHtml(scheduleState.model ? text("chooseYear") : text("chooseModelFirst")) + "</option>" + yearOptions + "</select></label>" +
      '<label class="ss-field"><span>' + escapeHtml(text("variant")) + '</span><select class="ss-select" data-ss-control="variant"' + (!scheduleState.year ? " disabled" : "") + '><option value="">' + escapeHtml(scheduleState.year ? text("chooseVariant") : text("chooseYearFirst")) + "</option>" + variantOptions + "</select></label>" +
      "</div>" +
      "</fieldset>";
  }

  function matchingProfiles(data) {
    var brand = currentBrand(data);
    if (!brand || !scheduleState.model || !scheduleState.year || scheduleState.variant === "") return [];
    var selectedVariant = scheduleState.variant === NO_VARIANT ? "" : scheduleState.variant;
    return allProfiles(brand).filter(function (profile) {
      return profileMarket(profile) === scheduleState.market &&
        exactValue(profile.model) === scheduleState.model &&
        scopeYearKey(profile) === scheduleState.year &&
        scopeVariantKey(profile) === selectedVariant;
    });
  }

  function selectedVehicleScope(brand) {
    if (!brand || !scheduleState.model || !scheduleState.year || scheduleState.variant === "") return null;
    var selectedVariant = scheduleState.variant === NO_VARIANT ? "" : scheduleState.variant;
    return allVehicles(brand).find(function (vehicle) {
      return scopeMarket(vehicle) === scheduleState.market &&
        exactValue(vehicle.model) === scheduleState.model &&
        scopeYearKey(vehicle) === scheduleState.year &&
        scopeVariantKey(vehicle) === selectedVariant;
    }) || null;
  }

  function taskDisplayName(task) {
    var name = locale() === "ar" ? plainText(task.name_ar) : plainText(task.name_en);
    return name || plainText(task.name_ar) || text("taskNameNotProvided");
  }

  function taskOperation(task) {
    var action = plainText(task.action).toLowerCase();
    return COPY[locale()][action] || COPY.ar[action] || text("notProvided");
  }

  function arabicLabel(label) {
    return locale() === "ar" ? label : label + " (" + text("arabicSource") + ")";
  }

  function taskTechnicalNote(task) {
    var note = plainText(task.note_ar);
    if (!note) return '<span class="ss-task-note"><b>' + escapeHtml(arabicLabel(text("technicalSummary"))) + ":</b> " + escapeHtml(text("noTechnicalSummary")) + "</span>";
    return '<span class="ss-task-note"><b>' + escapeHtml(arabicLabel(text("technicalSummary"))) + ":</b> " + escapeHtml(note) + "</span>";
  }

  function taskTriggerNote(task) {
    var note = locale() === "ar" ? plainText(task.trigger_note_ar) : (plainText(task.trigger_note_en) || plainText(task.trigger_note_ar));
    if (!note) return "";
    var label = locale() === "ar" || plainText(task.trigger_note_en) ? text("trigger") : arabicLabel(text("trigger"));
    return '<span class="ss-task-note"><b>' + escapeHtml(label) + ":</b> " + escapeHtml(note) + "</span>";
  }

  function taskTimeNote(task) {
    var months = positiveInteger(task.months);
    var first = positiveInteger(task.first_months);
    var every = positiveInteger(task.every_months);
    if (first) {
      var templates = {
        ar: ["أول موعد زمني بعد {n} شهرًا", "ثم كل {n} شهرًا"],
        en: ["First time-based due after {n} months", "then every {n} months"],
        fr: ["Première échéance après {n} mois", "puis tous les {n} mois"],
        es: ["Primera fecha a los {n} meses", "después cada {n} meses"],
        it: ["Prima scadenza dopo {n} mesi", "poi ogni {n} mesi"],
        de: ["Erste Zeitfrist nach {n} Monaten", "danach alle {n} Monate"]
      }[locale()];
      var value = templates[0].replace("{n}", displayNumber(first));
      if (every) value += " · " + templates[1].replace("{n}", displayNumber(every));
      return escapeHtml(value + " · " + text("whicheverFirst"));
    }
    return months ? escapeHtml(text("recurringMonths", { months: displayNumber(months) }) + " · " + text("whicheverFirst")) : escapeHtml(text("noTimeDocumentation"));
  }

  function hasActualCheckpoints(task) {
    return Array.isArray(task && task.checkpoints_km) && task.checkpoints_km.length > 0;
  }

  function taskDistanceMarks(task, upperLimit) {
    if (!object(task)) return [];
    var limit = nonNegativeInteger(upperLimit);
    if (limit === null) return [];
    var marks = [];
    if (hasActualCheckpoints(task)) {
      marks = list(task.checkpoints_km).map(nonNegativeInteger).filter(function (mark) {
        return mark !== null && mark <= limit;
      });
    } else {
      var first = nonNegativeInteger(task.first_km);
      var every = nonNegativeInteger(task.every_km);
      if (first !== null && first > 0) marks.push(first);
      if (every !== null && every > 0) {
        var start = first !== null && first > 0 ? first + every : every;
        for (var point = start; point <= limit; point += every) marks.push(point);
      }
    }
    var seen = Object.create(null);
    return marks.filter(function (mark) {
      if (mark > limit || seen[mark]) return false;
      seen[mark] = true;
      return true;
    }).sort(function (left, right) { return left - right; });
  }

  function checkpoints(profile, upperLimit) {
    var groups = Object.create(null);
    list(profile.tasks).filter(object).forEach(function (task) {
      taskDistanceMarks(task, upperLimit).forEach(function (mark) {
        if (!groups[mark]) groups[mark] = [];
        groups[mark].push(task);
      });
    });
    return Object.keys(groups).map(function (key) {
      return { km: Number(key), tasks: groups[key] };
    }).sort(function (left, right) { return left.km - right.km; });
  }

  function nextCheckpoint(profile, upperLimit) {
    var candidates = [];
    list(profile.tasks).filter(object).forEach(function (task) {
      taskDistanceMarks(task, 100000).forEach(function (point) {
        if (point > upperLimit) candidates.push(point);
      });
    });
    return candidates.length ? Math.min.apply(Math, candidates) : null;
  }

  function taskHasKnownMileage(task) {
    if (hasActualCheckpoints(task)) return list(task.checkpoints_km).some(function (mark) { return nonNegativeInteger(mark) !== null; });
    return positiveInteger(task && task.first_km) !== null || positiveInteger(task && task.every_km) !== null;
  }

  function hasTimeOrTrigger(task) {
    return positiveInteger(task.months) !== null || plainText(task.trigger_note_ar) || plainText(task.trigger_note_en);
  }

  function taskDistanceBasis(task) {
    var checkpointMarks = hasActualCheckpoints(task) ? list(task.checkpoints_km).map(nonNegativeInteger).filter(function (mark) {
      return mark !== null;
    }) : [];
    if (checkpointMarks.length) return checkpointMarks.map(function (mark) { return displayNumber(mark) + " " + text("km"); }).join(" · ");
    var first = positiveInteger(task.first_km);
    var every = positiveInteger(task.every_km);
    if (first && every) return displayNumber(first) + " " + text("km") + " · " + displayNumber(every) + " " + text("km");
    if (first) return displayNumber(first) + " " + text("km");
    if (every) return displayNumber(every) + " " + text("km");
    return text("notProvided");
  }

  function conditionTasks(profile, upperLimit) {
    return list(profile.tasks).filter(function (task) {
      if (!object(task) || taskDistanceMarks(task, upperLimit).length) return false;
      return hasTimeOrTrigger(task) || (!taskHasKnownMileage(task) && plainText(task.note_ar));
    });
  }

  function renderTaskList(tasks) {
    return '<ul class="ss-task-list">' + tasks.map(function (task) {
      return '<li><div class="ss-task-heading"><strong>' + escapeHtml(taskDisplayName(task)) + '</strong><span class="ss-action-pill">' + escapeHtml(text("operation")) + ": " + escapeHtml(taskOperation(task)) + "</span></div>" + taskTechnicalNote(task) + taskTriggerNote(task) + "</li>";
    }).join("") + "</ul>";
  }

  function renderTimeList(tasks) {
    return '<ul class="ss-time-list">' + tasks.map(function (task) {
      return "<li>" + taskTimeNote(task) + "</li>";
    }).join("") + "</ul>";
  }

  function renderConditionTaskList(tasks) {
    return '<ul class="ss-task-list">' + tasks.map(function (task) {
      var time = positiveInteger(task.months) !== null ? '<span class="ss-task-note"><b>' + escapeHtml(text("timeBasis")) + ":</b> " + taskTimeNote(task) + "</span>" : "";
      var distance = '<span class="ss-task-note"><b>' + escapeHtml(text("checkpoint")) + ":</b> " + escapeHtml(taskDistanceBasis(task)) + "</span>";
      return '<li><div class="ss-task-heading"><strong>' + escapeHtml(taskDisplayName(task)) + '</strong><span class="ss-action-pill">' + escapeHtml(text("operation")) + ": " + escapeHtml(taskOperation(task)) + "</span></div>" + distance + time + taskTriggerNote(task) + taskTechnicalNote(task) + "</li>";
    }).join("") + "</ul>";
  }

  function renderConditionPanel(profile, upperLimit) {
    var tasks = conditionTasks(profile, upperLimit);
    if (!tasks.length) return "";
    return '<section class="ss-condition-panel" aria-labelledby="ss-condition-heading"><h4 id="ss-condition-heading">' + escapeHtml(text("conditionTasks")) + "</h4><p>" + escapeHtml(text("conditionTasksHelp")) + "</p>" + renderConditionTaskList(tasks) + "</section>";
  }

  function renderScheduleTable(profile) {
    var limit = scheduleState.mileage;
    var rows = checkpoints(profile, limit);
    var noRows = "";
    if (!rows.length) {
      var next = nextCheckpoint(profile, limit);
      noRows = '<p class="ss-empty-schedule">' + escapeHtml(text("noCheckpoints")) + (next ? " " + escapeHtml(text("nextCheckpoint")) + ": " + escapeHtml(displayNumber(next)) + " " + escapeHtml(text("km")) + "." : "") + "</p>";
    }
    return '<section class="ss-schedule-panel" aria-labelledby="ss-schedule-heading">' +
      '<div class="ss-schedule-top"><div><span class="ss-panel-kicker">' + escapeHtml(text("documentedTasksOnly")) + '</span><h3 id="ss-schedule-heading">' + escapeHtml(text("scheduleThrough")) + " " + escapeHtml(displayNumber(limit)) + " " + escapeHtml(text("km")) + "</h3></div>" +
      '<label class="ss-mileage-control"><span>' + escapeHtml(text("mileageLimit")) + '</span><input type="number" min="1000" max="100000" step="1000" inputmode="numeric" value="' + escapeHtml(limit) + '" data-ss-control="mileage" aria-label="' + escapeHtml(text("mileageLimit")) + '"><b>' + escapeHtml(text("km")) + "</b></label></div>" +
      noRows +
      (rows.length ? '<div class="ss-table-wrap" tabindex="0" role="region" aria-label="' + escapeHtml(text("title")) + '"><table class="ss-table"><caption>' + escapeHtml(text("documentedTasksOnly")) + '</caption><thead><tr><th scope="col">' + escapeHtml(text("checkpoint")) + '</th><th scope="col">' + escapeHtml(text("documentedTask")) + '</th><th scope="col">' + escapeHtml(text("timeBasis")) + "</th></tr></thead><tbody>" +
        rows.map(function (row) {
          return '<tr><th scope="row"><span class="ss-km-value">' + escapeHtml(displayNumber(row.km)) + "</span><small>" + escapeHtml(text("km")) + "</small></th><td>" + renderTaskList(row.tasks) + "</td><td>" + renderTimeList(row.tasks) + "</td></tr>";
        }).join("") + "</tbody></table></div>" : "") +
      renderConditionPanel(profile, limit) +
      "</section>";
  }

  function issuerName(record) {
    if (!record) return "";
    return locale() === "ar" ? (plainText(record.issuer_ar) || plainText(record.issuer_en)) : (plainText(record.issuer_en) || plainText(record.issuer_ar));
  }

  function verifiedIssuerSources(brand) {
    return list(brand && brand.official_sources).filter(function (source) {
      return object(source) && source.verified === true;
    });
  }

  function sourceRecordKey(source) {
    return [issuerName(source), plainText(source && (source.title || source.source_title)), cleanLocator(source && source.source_locator), sourceMarket(source)].join("\u0001");
  }

  function sourceRecordHasAttribution(source) {
    return Boolean(issuerName(source) || plainText(source && (source.title || source.source_title)) || cleanLocator(source && source.source_locator));
  }

  function uniqueSourceRecords(records) {
    var seen = Object.create(null);
    return records.filter(function (source) {
      if (!object(source) || !sourceRecordHasAttribution(source)) return false;
      var key = sourceRecordKey(source);
      if (seen[key]) return false;
      seen[key] = true;
      return true;
    });
  }

  function otherMarketCaution() {
    var cautions = {
      ar: "هذه السجلات تخص السوق المذكور فقط ولا تثبت انطباقها على المركبة المحددة.",
      en: "These records apply to their stated market only and do not establish applicability to the selected vehicle.",
      fr: "Ces dossiers concernent uniquement leur marché indiqué et ne prouvent pas leur applicabilité au véhicule sélectionné.",
      es: "Estos registros se refieren solo a su mercado indicado y no demuestran aplicabilidad al vehículo seleccionado.",
      it: "Questi record riguardano solo il mercato indicato e non dimostrano l’applicabilità al veicolo selezionato.",
      de: "Diese Datensätze betreffen nur ihren angegebenen Markt und belegen keine Anwendbarkeit für das ausgewählte Fahrzeug."
    };
    return cautions[locale()] || cautions.ar;
  }

  function sourceCards(source, data) {
    var metadata = data.metadata || {};
    var issuer = issuerName(source) || text("notProvided");
    var title = plainText(source.title) || plainText(source.source_title) || text("notProvided");
    var locator = cleanLocator(source.source_locator) || text("notProvided");
    var country = marketName(sourceMarket(source));
    var note = plainText(source.note_ar);
    var noteLabel = locale() === "ar" ? text("sourceNote") : arabicLabel(text("sourceNote"));
    return '<article class="ss-source-card"><dl>' +
      '<div><dt>' + escapeHtml(text("issuer")) + "</dt><dd>" + escapeHtml(issuer) + "</dd></div>" +
      '<div><dt>' + escapeHtml(text("sourceTitle")) + "</dt><dd>" + escapeHtml(title) + "</dd></div>" +
      '<div><dt>' + escapeHtml(text("locator")) + "</dt><dd>" + escapeHtml(locator) + "</dd></div>" +
      '<div><dt>' + escapeHtml(text("country")) + "</dt><dd>" + escapeHtml(country) + "</dd></div>" +
      '<div><dt>' + escapeHtml(text("verified")) + "</dt><dd>" + escapeHtml(plainText(metadata.verified_at) || text("notProvided")) + "</dd></div>" +
      (note ? '<div class="ss-source-card-note"><dt>' + escapeHtml(noteLabel) + "</dt><dd>" + escapeHtml(note) + "</dd></div>" : "") +
      "</dl></article>";
  }

  function renderSources(brand, data) {
    if (!brand) return "";
    var sources = verifiedIssuerSources(brand);
    var vehicle = selectedVehicleScope(brand);
    var selected = uniqueSourceRecords((vehicle ? [vehicle] : []).concat(sources.filter(function (source) {
      return sourceMarket(source) === scheduleState.market;
    })));
    var other = uniqueSourceRecords(sources.filter(function (source) { return sourceMarket(source) !== scheduleState.market; }));
    if (!selected.length && !other.length) {
      return '<aside class="ss-sources"><h3>' + escapeHtml(text("officialSources")) + "</h3><p>" + escapeHtml(text("noSources")) + "</p></aside>";
    }
    return '<aside class="ss-sources"><h3>' + escapeHtml(text("officialSources")) + "</h3>" +
      '<section><h4>' + escapeHtml(text("selectedMarketSources")) + "</h4>" + (selected.length ? '<div class="ss-source-list">' + selected.map(function (source) { return sourceCards(source, data); }).join("") + "</div>" : '<p class="ss-source-empty">' + escapeHtml(text("noSelectedSources")) + "</p>") + "</section>" +
      (other.length ? '<section class="ss-other-sources"><h4>' + escapeHtml(text("otherMarketSources")) + "</h4><p>" + escapeHtml(otherMarketCaution()) + '</p><div class="ss-source-list">' + other.map(function (source) { return sourceCards(source, data); }).join("") + "</div></section>" : "") +
      "</aside>";
  }

  function profileCompleteness(profile) {
    var declared = plainText(profile.completeness).toLowerCase();
    if (declared === "complete" || declared === "partial" || declared === "interval_only") return declared;
    var tasks = list(profile.tasks).filter(object);
    return tasks.length && tasks.every(function (task) { return plainText(task.action).toLowerCase() === "service"; }) ? "interval_only" : "partial";
  }

  function renderCompleteness(profile) {
    var completeness = profileCompleteness(profile);
    var label = completeness === "complete" ? text("completenessComplete") : completeness === "interval_only" ? text("completenessInterval") : text("completenessPartial");
    var note = plainText(profile.completeness_note_ar);
    var noteLabel = locale() === "ar" ? text("completenessNote") : arabicLabel(text("completenessNote"));
    return '<div class="ss-completeness ss-completeness--' + completeness.replace("_", "-") + '"><span>' + escapeHtml(label) + "</span>" + (note ? '<p><b>' + escapeHtml(noteLabel) + ":</b> " + escapeHtml(note) + "</p>" : "") + "</div>";
  }

  function profileConditions(profile) {
    var note = locale() === "ar" ? plainText(profile.conditions_note_ar) : (plainText(profile.conditions_note_en) || plainText(profile.conditions_note_ar));
    var hasFlag = typeof profile.normal_conditions === "boolean";
    var legacyNote = !hasFlag ? plainText(profile.normal_conditions) : "";
    if (!note && !legacyNote) return "";
    var noteLabel = locale() === "ar" || plainText(profile.conditions_note_en) ? "" : " (" + escapeHtml(text("arabicSource")) + ")";
    var detail = note || legacyNote;
    return '<p class="ss-normal-conditions">' + escapeHtml(detail) + noteLabel + "</p>";
  }

  function renderProfileReference(profile, data) {
    var metadata = data.metadata || {};
    var issuer = issuerName(profile) || text("notProvided");
    var title = plainText(profile.source_title) || text("notProvided");
    var locator = cleanLocator(profile.source_locator) || text("notProvided");
    var country = marketName(profileMarket(profile) || scheduleState.market);
    return '<dl class="ss-reference">' +
      '<div><dt>' + escapeHtml(text("issuer")) + "</dt><dd>" + escapeHtml(issuer) + "</dd></div>" +
      '<div><dt>' + escapeHtml(text("sourceTitle")) + "</dt><dd>" + escapeHtml(title) + "</dd></div>" +
      '<div><dt>' + escapeHtml(text("locator")) + "</dt><dd>" + escapeHtml(locator) + "</dd></div>" +
      '<div><dt>' + escapeHtml(text("country")) + "</dt><dd>" + escapeHtml(country) + "</dd></div>" +
      '<div><dt>' + escapeHtml(text("verified")) + "</dt><dd>" + escapeHtml(plainText(metadata.verified_at) || text("notProvided")) + "</dd></div>" +
      "</dl>";
  }

  function renderNotes(profile, brand) {
    var profileNotes = list(profile.notes_ar).map(plainText).filter(Boolean);
    var rawLimitations = brand && brand.limitations_ar;
    var limitations = (Array.isArray(rawLimitations) ? rawLimitations : [rawLimitations]).map(plainText).filter(Boolean);
    var noteHeading = locale() === "ar" ? text("documentedNotes") : arabicLabel(text("documentedNotes"));
    var limitationHeading = locale() === "ar" ? text("limitations") : arabicLabel(text("limitations"));
    var blocks = "";
    if (profileNotes.length) blocks += '<section class="ss-notes"><h4>' + escapeHtml(noteHeading) + "</h4><ul>" + profileNotes.map(function (note) { return "<li>" + escapeHtml(note) + "</li>"; }).join("") + "</ul></section>";
    if (limitations.length) blocks += '<section class="ss-notes"><h4>' + escapeHtml(limitationHeading) + "</h4><ul>" + limitations.map(function (note) { return "<li>" + escapeHtml(note) + "</li>"; }).join("") + "</ul></section>";
    return blocks;
  }

  function renderResult(data) {
    var brand = currentBrand(data);
    var profiles = matchingProfiles(data);
    var panel = "";
    if (!brand) {
      panel = '<div class="ss-result-empty">' + escapeHtml(text("chooseScope")) + "</div>";
    } else if (!scopesForMarket(brand).length) {
      panel = '<div class="ss-result-empty">' + escapeHtml(text("noAvailableModels")) + "</div>";
    } else if (!scheduleState.model || !scheduleState.year || scheduleState.variant === "") {
      panel = '<div class="ss-result-empty">' + escapeHtml(text("chooseScope")) + "</div>";
    } else if (profiles.length !== 1) {
      panel = '<div class="ss-result-empty">' + escapeHtml(profiles.length > 1 ? text("ambiguousProfile") : text("noProfile")) + "</div>";
    } else {
      var profile = profiles[0];
      var yearLabel = scopeYearKey(profile) === DOCUMENT_SCOPE_YEAR ? text("documentScopeYear") : exactValue(profile.year);
      panel = '<article class="ss-profile-card"><div class="ss-profile-heading"><div><span class="ss-panel-kicker">' + escapeHtml(text("profileScope")) + "</span><h3>" + escapeHtml(brandName(brand)) + " · " + escapeHtml(plainText(profile.model)) + " · " + escapeHtml(yearLabel) + " · " + escapeHtml(plainText(profile.variant) || text("unspecifiedVariant")) + "</h3></div>" + renderCompleteness(profile) + "</div>" +
        (scopeYearKey(profile) === DOCUMENT_SCOPE_YEAR ? '<p class="ss-document-scope-caution">' + escapeHtml(text("documentScopeCaution")) + "</p>" : "") +
        profileConditions(profile) +
        '<h4 class="ss-reference-title">' + escapeHtml(text("profileReference")) + "</h4>" + renderProfileReference(profile, data) +
        renderScheduleTable(profile) + renderNotes(profile, brand) +
        "</article>";
    }
    return '<div class="ss-result-layout"><div class="ss-result-main">' + panel + "</div>" + renderSources(brand, data) + "</div>";
  }

  function renderReady(data) {
    return '<div class="ss-shell"><header class="ss-head"><div><span class="ss-kicker">' + escapeHtml(text("eyebrow")) + '</span><h2 id="service-schedule-title">' + escapeHtml(text("title")) + "</h2><p>" + escapeHtml(text("intro")) + "</p></div>" + renderCoverage(data) + "</header>" +
      renderBrandBrowser(data) + renderSelectControls(data) + renderResult(data) +
      '<p class="ss-caution"><span aria-hidden="true">!</span><span>' + escapeHtml(text("caution")) + "</span></p></div>";
  }

  function renderStatus(stateName) {
    var isError = stateName === "error";
    var message = isError ? text("loadError") : stateName === "empty" ? text("noData") : text("loading");
    return '<div class="ss-shell"><header class="ss-head ss-head-status"><div><span class="ss-kicker">' + escapeHtml(text("eyebrow")) + '</span><h2 id="service-schedule-title">' + escapeHtml(text("title")) + "</h2><p>" + escapeHtml(text("intro")) + "</p></div></header>" +
      '<div class="ss-data-status" role="status"><p>' + escapeHtml(message) + "</p>" + (isError ? '<button type="button" data-ss-retry="true">' + escapeHtml(text("retry")) + "</button>" : "") + "</div></div>";
  }

  function renderContent() {
    if (dataCache.status === "ready" && dataCache.data) return dataCache.data.brands.length ? renderReady(dataCache.data) : renderStatus("empty");
    return renderStatus(dataCache.status === "error" ? "error" : "loading");
  }

  function renderRoot(root) {
    if (!root || !root.isConnected) return;
    root.setAttribute("dir", direction());
    root.setAttribute("lang", locale());
    root.innerHTML = renderContent();
  }

  function loadData(force) {
    if (dataCache.status === "ready" && !force) return Promise.resolve(dataCache.data);
    if (dataCache.status === "loading" && dataCache.promise && !force) return dataCache.promise;
    dataCache.status = "loading";
    dataCache.error = null;
    dataCache.promise = fetch(DATA_URL, { credentials: "same-origin", headers: { Accept: "application/json" } })
      .then(function (response) {
        if (!response.ok) throw new Error("Schedule data request failed: " + response.status);
        return response.json();
      })
      .then(function (payload) {
        var data = normalizeData(payload);
        dataCache.status = "ready";
        dataCache.data = data;
        dataCache.error = null;
        reconcileState(data);
        return data;
      })
      .catch(function (error) {
        dataCache.status = "error";
        dataCache.error = error;
        dataCache.data = null;
        throw error;
      });
    return dataCache.promise;
  }

  function reconcileState(data) {
    if (!currentBrand(data)) {
      scheduleState.brandId = "";
      scheduleState.model = "";
      scheduleState.year = "";
      scheduleState.variant = "";
      return;
    }
    var brand = currentBrand(data);
    var marketScopes = scopesForMarket(brand);
    if (!marketScopes.some(function (scope) { return exactValue(scope.model) === scheduleState.model; })) scheduleState.model = "";
    var modelScopes = scopesForModel(brand);
    if (!modelScopes.some(function (scope) { return scopeYearKey(scope) === scheduleState.year; })) scheduleState.year = "";
    var yearScopes = scopesForYear(brand);
    var selectedVariant = scheduleState.variant === NO_VARIANT ? "" : scheduleState.variant;
    if (!yearScopes.some(function (scope) { return scopeVariantKey(scope) === selectedVariant; })) scheduleState.variant = "";
  }

  function resetBelowBrand() {
    scheduleState.model = "";
    scheduleState.year = "";
    scheduleState.variant = "";
  }

  function handleControl(root, control) {
    var name = control.getAttribute("data-ss-control");
    var value = control.value;
    if (name === "market") {
      scheduleState.market = marketToken(value) || "eg";
      resetBelowBrand();
    } else if (name === "brand") {
      scheduleState.brandId = value;
      resetBelowBrand();
    } else if (name === "model") {
      scheduleState.model = value;
      scheduleState.year = "";
      scheduleState.variant = "";
    } else if (name === "year") {
      scheduleState.year = value;
      scheduleState.variant = "";
    } else if (name === "variant") {
      scheduleState.variant = value;
    } else if (name === "mileage") {
      var parsed = nonNegativeInteger(value);
      scheduleState.mileage = parsed === null ? 100000 : Math.min(100000, Math.max(1000, parsed));
    } else {
      return;
    }
    if (dataCache.data) reconcileState(dataCache.data);
    renderRoot(root);
  }

  function bindRoot(root) {
    if (!root || !root.isConnected) return;
    if (root.getAttribute("data-ss-bound") === "true") {
      renderRoot(root);
    } else {
      root.setAttribute("data-ss-bound", "true");
      root.addEventListener("click", function (event) {
        if (!root.isConnected || !(event.target instanceof Element)) return;
        var retry = event.target.closest("[data-ss-retry]");
        if (retry) {
          renderRoot(root);
          loadData(true).then(function () { if (root.isConnected) renderRoot(root); }, function () { if (root.isConnected) renderRoot(root); });
          return;
        }
        var more = event.target.closest("[data-ss-more-brands]");
        if (more && dataCache.data) {
          scheduleState.brandsExpanded = true;
          var region = root.querySelector("[data-ss-brand-tiles]");
          if (region) region.innerHTML = renderBrandTiles(dataCache.data);
          return;
        }
        var tile = event.target.closest("[data-ss-brand-id]");
        if (tile && dataCache.data) {
          scheduleState.brandId = tile.getAttribute("data-ss-brand-id") || "";
          scheduleState.brandQuery = "";
          resetBelowBrand();
          reconcileState(dataCache.data);
          renderRoot(root);
        }
      });
      root.addEventListener("change", function (event) {
        if (!root.isConnected || !(event.target instanceof Element)) return;
        var control = event.target.closest("[data-ss-control]");
        if (control) handleControl(root, control);
      });
      root.addEventListener("input", function (event) {
        if (!root.isConnected || !(event.target instanceof Element)) return;
        var search = event.target.closest("[data-ss-brand-search]");
        if (search && dataCache.status === "ready" && dataCache.data) {
          scheduleState.brandQuery = search.value.slice(0, 120);
          var region = root.querySelector("[data-ss-brand-tiles]");
          if (region) region.innerHTML = renderBrandTiles(dataCache.data);
        }
      });
      renderRoot(root);
    }
    if (dataCache.status !== "ready") {
      loadData(false).then(function () { if (root.isConnected) renderRoot(root); }, function () { if (root.isConnected) renderRoot(root); });
    }
  }

  window.renderServiceScheduleSection = function renderServiceScheduleSection() {
    return '<section class="ss-root" id="service-schedule" aria-labelledby="service-schedule-title" dir="' + direction() + '" lang="' + locale() + '">' + renderContent() + "</section>";
  };

  window.bindServiceScheduleSection = function bindServiceScheduleSection(root) {
    var target = root && root.nodeType === 1 ? root : document.getElementById("service-schedule");
    bindRoot(target);
  };
}());
