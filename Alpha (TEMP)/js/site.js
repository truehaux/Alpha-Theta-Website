/* Alpha Theta Chapter site scripts.
   Content lives in /data/*.js — this file only renders it. */
(function () {
  "use strict";

  document.documentElement.classList.remove("js-off");

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var mq = window.matchMedia("(max-width: 1340px)"); // keep in sync with styles.css
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.setAttribute("data-open", String(open));
    };
    var sync = function () { setOpen(!mq.matches); };
    sync();
    if (mq.addEventListener) mq.addEventListener("change", sync); else mq.addListener(sync);
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mq.matches && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Helpers ---------- */
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "class") node.className = attrs[k];
      else if (k === "text") node.textContent = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function initials(name) {
    var parts = name.replace(/\(.*?\)/g, "").trim().split(/\s+/).filter(function (p) { return !/^(jr\.?|sr\.?|ii|iii|iv)$/i.test(p); });
    if (!parts[0] || /^name$/i.test(parts[0])) return "ΑΘ";
    return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
  }

  // Activity dates may be "YYYY-MM-DD", "YYYY-MM" or "YYYY".
  // Parsed as local dates (avoids timezone shifts); missing parts default to the start.
  function parseDate(s) {
    if (!s) return null;
    var p = String(s).split("-");
    return new Date(+p[0], p[1] ? +p[1] - 1 : 0, p[2] ? +p[2] : 1);
  }
  function precision(s) { return s ? String(s).split("-").length : 0; } // 3 = day, 2 = month, 1 = year
  function formatDate(s) {
    var d = parseDate(s), n = precision(s);
    if (!d) return "";
    if (n === 3) return d.toLocaleDateString("en-US", { weekday: "short", month: "long", day: "numeric", year: "numeric" });
    if (n === 2) return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    return String(d.getFullYear());
  }

  /* ---------- Members ---------- */
  function memberCard(m) {
    var photo;
    if (m.photo) {
      photo = el("img", { class: "member-photo", src: m.photo, alt: m.alt || ("Portrait of " + m.name), loading: "lazy", width: "120", height: "120" });
    } else {
      photo = el("div", { class: "member-photo", "aria-hidden": "true", text: initials(m.name) });
    }
    var card = el("li", { class: "card member-card" + (m.placeholder ? " placeholder" : "") }, [
      m.placeholder ? el("span", { class: "placeholder-note", text: "To be added" }) : null,
      photo,
      m.role ? el("p", { class: "member-role", text: m.role }) : null,
      el("h3", { class: "member-name", text: m.name }),
      m.line ? el("p", { class: "member-detail", text: "Initiated " + m.line }) : null,
      m.major ? el("p", { class: "member-detail", text: m.major }) : null
    ]);
    return card;
  }

  function renderList(id, list) {
    var root = document.getElementById(id);
    if (!root || !list) return;
    var section = root.closest("section");
    if (!list.length && section) { section.hidden = true; return; }
    root.innerHTML = "";
    list.forEach(function (m) { root.appendChild(memberCard(m)); });
  }

  renderList("officers-list", window.CHAPTER_OFFICERS);
  renderList("members-list", window.CHAPTER_MEMBERS);

  var termEl = document.querySelectorAll("[data-roster-term]");
  Array.prototype.forEach.call(termEl, function (n) { if (window.CHAPTER_ROSTER_TERM) n.textContent = window.CHAPTER_ROSTER_TERM; });

  var dir = document.getElementById("directory-list");
  if (dir && window.CHAPTER_DIRECTORY) {
    dir.innerHTML = "";
    window.CHAPTER_DIRECTORY.forEach(function (entry) {
      var isObj = typeof entry === "object";
      var name = isObj ? entry.name : entry;
      var li = el("li", { class: isObj && entry.charter ? "charter" : "" });
      li.textContent = name;
      if (isObj && entry.charter) {
        li.appendChild(el("span", { class: "visually-hidden", text: " (charter member)" }));
        li.appendChild(el("span", { "aria-hidden": "true", text: " *" }));
      }
      dir.appendChild(li);
    });
    var count = document.getElementById("directory-count");
    if (count) count.textContent = window.CHAPTER_DIRECTORY.length;
  }

  /* ---------- Intake classes (History page) ---------- */
  var shipRoot = document.getElementById("intake-classes");
  if (shipRoot && window.CHAPTER_INTAKE_CLASSES) {
    shipRoot.innerHTML = "";
    window.CHAPTER_INTAKE_CLASSES.forEach(function (c) {
      var named = !!c.ship;
      shipRoot.appendChild(el("li", { class: "card" + (named ? "" : " placeholder") }, [
        el("p", { class: "meta", text: c.term }),
        el("h3", { text: named ? c.ship : "Ship name to be added" }),
        c.note ? el("p", { text: c.note }) : null
      ]));
    });
  }

  /* ---------- Activities ---------- */
  var today = new Date(); today.setHours(0, 0, 0, 0);
  var activities = (window.CHAPTER_ACTIVITIES || []).map(function (a) {
    var d = parseDate(a.date);
    return { a: a, d: d || new Date(0), year: d ? d.getFullYear() : null, upcoming: precision(a.date) === 3 && d >= today };
  });

  function activityCard(it) {
    var a = it.a;
    var details = el("dl");
    if (a.time) { details.appendChild(el("dt", { text: "Time" })); details.appendChild(el("dd", { text: a.time })); }
    if (a.location) { details.appendChild(el("dt", { text: "Where" })); details.appendChild(el("dd", { text: a.location })); }
    return el("li", { class: "card activity-card" + (it.upcoming ? " upcoming" : ""), "data-category": a.category, "data-year": String(it.year) }, [
      a.image ? el("img", { class: "activity-image", src: a.image, alt: a.alt || "", loading: "lazy" }) : null,
      el("span", { class: "tag", text: a.category }),
      a.date ? el("p", { class: "date", text: formatDate(a.date) }) : null,
      el("h3", { text: a.title }),
      el("p", { text: a.summary }),
      details.childNodes.length ? details : null,
      a.link ? el("a", { class: "card-link", href: a.link, rel: "noopener", target: "_blank", text: (a.linkLabel || "View source") + " ↗" }) : null
    ]);
  }

  var upRoot = document.getElementById("upcoming-list");
  if (upRoot) {
    var upcoming = activities.filter(function (i) { return i.upcoming; }).sort(function (x, y) { return x.d - y.d; });
    upRoot.innerHTML = "";
    if (!upcoming.length) upRoot.appendChild(el("li", { class: "empty-state", text: "No upcoming events are posted right now. Follow @atheta_alphas on Instagram for announcements." }));
    upcoming.forEach(function (i) { upRoot.appendChild(activityCard(i)); });
  }

  var archive = document.getElementById("archive-list");
  if (archive) {
    var past = activities.filter(function (i) { return !i.upcoming; }).sort(function (x, y) { return y.d - x.d; });
    var years = [];
    past.forEach(function (i) { if (years.indexOf(i.year) === -1) years.push(i.year); });
    archive.innerHTML = "";
    years.forEach(function (y) {
      var group = el("section", { class: "year-group", "data-year": String(y), "aria-labelledby": "year-" + y }, [
        el("h3", { class: "year-heading", id: "year-" + y, text: String(y) })
      ]);
      var list = el("ul", { class: "grid grid-3 plain-list" });
      past.filter(function (i) { return i.year === y; }).forEach(function (i) { list.appendChild(activityCard(i)); });
      group.appendChild(list);
      archive.appendChild(group);
    });

    var state = { year: "All", cat: "All" };
    var status = document.getElementById("filter-status");
    var applyFilters = function () {
      var shown = 0;
      Array.prototype.forEach.call(archive.querySelectorAll(".year-group"), function (g) {
        var visibleInGroup = 0;
        Array.prototype.forEach.call(g.querySelectorAll(".activity-card"), function (card) {
          var ok = (state.year === "All" || card.getAttribute("data-year") === state.year) &&
                   (state.cat === "All" || card.getAttribute("data-category") === state.cat);
          card.hidden = !ok;
          if (ok) visibleInGroup++;
        });
        g.hidden = visibleInGroup === 0;
        shown += visibleInGroup;
      });
      var msg = "Showing " + shown + " of " + past.length + " " + (past.length === 1 ? "entry" : "entries");
      if (status) status.textContent = msg;
      if (count) count.textContent = (state.year === "All" && state.cat === "All") ? summary : msg;
      if (empty) empty.hidden = shown !== 0;
    };
    var count = document.getElementById("archive-count");
    var summary = past.length + " entries from " + years[years.length - 1] + " to " + years[0];
    var empty = el("p", { class: "empty-state", text: "No activities match these filters." });
    empty.hidden = true;
    archive.appendChild(empty);

    var yearSelect = document.getElementById("year-filter");
    if (yearSelect) {
      years.forEach(function (y) { yearSelect.appendChild(el("option", { value: String(y), text: String(y) })); });
      yearSelect.addEventListener("change", function () { state.year = yearSelect.value; applyFilters(); });
    }

    var bar = document.getElementById("activity-filters");
    if (bar) {
      var cats = [];
      past.forEach(function (i) { if (cats.indexOf(i.a.category) === -1) cats.push(i.a.category); });
      cats.sort();
      ["All"].concat(cats).forEach(function (c, idx) {
        var b = el("button", { type: "button", "aria-pressed": idx === 0 ? "true" : "false", text: c });
        b.addEventListener("click", function () {
          Array.prototype.forEach.call(bar.querySelectorAll("button"), function (x) { x.setAttribute("aria-pressed", "false"); });
          b.setAttribute("aria-pressed", "true");
          state.cat = c;
          applyFilters();
        });
        bar.appendChild(b);
      });
    }
    if (count) count.textContent = summary;
  }

  var progRoot = document.getElementById("programs-list");
  if (progRoot && window.CHAPTER_PROGRAMS) {
    progRoot.innerHTML = "";
    window.CHAPTER_PROGRAMS.forEach(function (p) {
      progRoot.appendChild(el("li", { class: "card" + (p.placeholder ? " placeholder" : "") }, [
        p.placeholder ? el("span", { class: "placeholder-note", text: "To be added" }) : null,
        el("h3", { text: p.title }),
        el("p", { text: p.summary })
      ]));
    });
  }

  /* ---------- Home: latest teaser ---------- */
  var teaser = document.getElementById("home-activities");
  if (teaser && activities.length) {
    var sorted = activities.slice().sort(function (x, y) {
      if (x.upcoming !== y.upcoming) return x.upcoming ? -1 : 1;
      return x.upcoming ? x.d - y.d : y.d - x.d;
    }).slice(0, 3);
    teaser.innerHTML = "";
    sorted.forEach(function (it) {
      teaser.appendChild(el("li", { class: "card" }, [
        el("p", { class: "meta", text: (it.upcoming ? "Upcoming · " : "") + it.a.category }),
        el("h3", { text: it.a.title }),
        el("p", { text: formatDate(it.a.date) })
      ]));
    });
  }
})();
