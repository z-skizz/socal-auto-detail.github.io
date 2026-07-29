/* ================================================================
   SOCAL LUXURY DETAILING — SHARED SITE SCRIPT
   Loaded on every page. No build step, no dependencies.
   ================================================================ */
(function () {
  "use strict";

  /* ---------------- Footer year ---------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Mobile nav toggle ---------------- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------- Scroll reveal ---------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    }
  }

  /* ---------------- Lightbox (our-work.html gallery) ---------------- */
  var lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    var lbImg = lightbox.querySelector("img");
    var lbCaption = lightbox.querySelector(".lightbox-caption");
    var closeBtn = lightbox.querySelector(".lightbox-close");

    document.querySelectorAll("[data-lightbox]").forEach(function (trigger) {
      trigger.addEventListener("click", function (e) {
        var img = trigger.querySelector("img");
        if (!img || trigger.classList.contains("is-missing")) return; // nothing to enlarge yet
        e.preventDefault();
        lbImg.src = img.currentSrc || img.src;
        lbImg.alt = img.alt || "";
        lbCaption.textContent = trigger.getAttribute("data-caption") || img.alt || "";
        lightbox.classList.add("open");
        document.body.style.overflow = "hidden";
      });
    });

    function closeLightbox() {
      lightbox.classList.remove("open");
      document.body.style.overflow = "";
      lbImg.src = "";
    }
    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });
  }

  /* ---------------- Estimate calculator (book.html) ---------------- */
  var estimator = document.querySelector(".estimator");
  if (estimator) {
    var serviceSel = estimator.querySelector("[name='est-service']");
    var sizeSel = estimator.querySelector("[name='est-size']");
    var amountEl = estimator.querySelector(".amount");

    // [EDIT: PRICING] base prices + per-vehicle-size adjustments.
    // Edit these numbers to match your real pricing — everything
    // else on the page recalculates automatically.
    var PRICING = {
      interior: { base: 140, sedan: 0, suv: 30, truck: 40, exotic: 90 },
      exterior: { base: 79, sedan: 0, suv: 20, truck: 30, exotic: 70 },
      both: { base: 205, sedan: 0, suv: 45, truck: 60, exotic: 150 }
    };

    function renderEstimate() {
      var service = PRICING[serviceSel.value];
      var addOn = service[sizeSel.value] || 0;
      var low = service.base + addOn;
      var high = low + Math.round(low * 0.18);
      amountEl.innerHTML =
        '<span class="from">Estimated</span>$' + low + ' &ndash; $' + high;
    }
    serviceSel.addEventListener("change", renderEstimate);
    sizeSel.addEventListener("change", renderEstimate);
    renderEstimate();
  }

  /* ---------------- Mailto form: friendly heads-up on submit ---------------- */
  document.querySelectorAll("form[action^='mailto:']").forEach(function (form) {
    form.addEventListener("submit", function () {
      var note = form.querySelector(".form-note");
      if (note) {
        var original = note.textContent;
        note.textContent = "Opening your email app with these details filled in…";
        setTimeout(function () { note.textContent = original; }, 6000);
      }
    });
  });
})();
