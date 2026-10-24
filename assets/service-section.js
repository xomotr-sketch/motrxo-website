/* Homepage adapter: service locale is intentionally independent from the store locale. */
(function () {
  "use strict";

  var supported = ["ar", "en", "fr", "es", "it", "de"];
  var labels = { ar: "العربية", en: "English", fr: "Français", es: "Español", it: "Italiano", de: "Deutsch" };
  var current = "";

  function fallbackLocale() {
    var fromDocument = (document.documentElement.lang || "ar").toLowerCase().split("-")[0];
    return supported.indexOf(fromDocument) !== -1 ? fromDocument : "ar";
  }

  function selectorMarkup() {
    return '<div class="motrxo-service-locale" role="group" aria-label="Service schedule language">' +
      supported.map(function (locale) {
        var pressed = locale === current ? "true" : "false";
        return '<button type="button" class="motrxo-service-locale-button' + (locale === current ? " is-active" : "") +
          '" data-service-locale="' + locale + '" aria-pressed="' + pressed + '">' + labels[locale] + "</button>";
      }).join("") + "</div>";
  }

  function mount() {
    var host = document.getElementById("service-schedule-mount");
    if (!host || typeof window.renderServiceScheduleSection !== "function" || typeof window.bindServiceScheduleSection !== "function") return;
    current = supported.indexOf(current) !== -1 ? current : fallbackLocale();
    window.MOTRXO_SERVICE_LOCALE = current;
    // The schedule module owns its state in a closure, so replacing this root keeps selections.
    host.innerHTML = selectorMarkup() + window.renderServiceScheduleSection();
    var root = host.querySelector("#service-schedule");
    window.bindServiceScheduleSection(root);
    host.querySelectorAll("[data-service-locale]").forEach(function (button) {
      button.addEventListener("click", function () {
        var next = button.getAttribute("data-service-locale");
        if (supported.indexOf(next) === -1 || next === current) return;
        current = next;
        mount();
      });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount, { once: true });
  else mount();
}());
