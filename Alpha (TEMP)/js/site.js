/* Alpha Theta Chapter site scripts.
   Content lives in /data/*.js — this file only renders it. */
(function () {
  "use strict";

  document.documentElement.classList.remove("js-off");

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var mq = window.matchMedia("(max-width: 1140px)"); // keep in sync with styles.css
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
    var parts = name.replace(/\(.*?\)/g, "").trim().split(/\s+/);
    if (!parts[0] || /^name$/i.test(parts[0])) return "ΑΘ";
    return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
  }

  // Parse "YYYY-MM-DD" as a local date (avoids timezone shifts).
  function parseDate(s) {
    if (!s) return null;
    var p = s.split("-");
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }
  function formatDate(d) {
    return d.toLocaleDateString("en-US", { weekday: "short", month: "long", day: "numeric", year: "numeric" });
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

  /* ---------- Activities ---------- */
  var upRoot = document.getElementById("upcoming-list");
  var recentRoot = document.getElementById("recent-list");
  if ((upRoot || recentRoot) && window.CHAPTER_ACTIVITIES) {
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var items = window.CHAPTER_ACTIVITIES.map(function (a) {
      var ev = parseDate(a.eventDate);
      return { a: a, ev: ev, sortDate: ev || parseDate(a.postedDate) || new Date(0), upcoming: !!ev && ev >= today };
    });

    function activityCard(it) {
      var a = it.a;
      var dateText = it.ev ? formatDate(it.ev) : (a.postedDate ? "Announced " + formatDate(parseDate(a.postedDate)) : "");
      var details = el("dl");
      if (a.time) { details.appendChild(el("dt", { text: "Time" })); details.appendChild(el("dd", { text: a.time })); }
      if (a.location) { details.appendChild(el("dt", { text: "Where" })); details.appendChild(el("dd", { text: a.location })); }
      return el("li", { class: "card activity-card" + (it.upcoming ? " upcoming" : ""), "data-category": a.category }, [
        a.image ? el("img", { class: "activity-image", src: a.image, alt: a.alt || "", loading: "lazy" }) : null,
        el("span", { class: "tag", text: a.category }),
        dateText ? el("p", { class: "date", text: dateText }) : null,
        el("h3", { text: a.title }),
        el("p", { text: a.summary }),
        details.childNodes.length ? details : null,
        a.link ? el("a", { class: "card-link", href: a.link, rel: "noopener", target: "_blank", text: (a.linkLabel || "Learn more") + " ↗" }) : null
      ]);
    }

    var upcoming = items.filter(function (i) { return i.upcoming; }).sort(function (x, y) { return x.sortDate - y.sortDate; });
    var recent = items.filter(function (i) { return !i.upcoming; }).sort(function (x, y) { return y.sortDate - x.sortDate; });

    function fill(root, list, emptyText) {
      if (!root) return;
      root.innerHTML = "";
      if (!list.length) { root.appendChild(el("li", { class: "empty-state", text: emptyText })); return; }
      list.forEach(function (i) { root.appendChild(activityCard(i)); });
    }
    fill(upRoot, upcoming, "No upcoming events are posted right now. Follow @atheta_alphas on Instagram for announcements.");
    fill(recentRoot, recent, "No recent activities yet.");

    // Category filter
    var bar = document.getElementById("activity-filters");
    if (bar) {
      var cats = [];
      items.forEach(function (i) { if (cats.indexOf(i.a.category) === -1) cats.push(i.a.category); });
      ["All"].concat(cats).forEach(function (c, idx) {
        var b = el("button", { type: "button", "aria-pressed": idx === 0 ? "true" : "false", text: c });
        b.addEventListener("click", function () {
          Array.prototype.forEach.call(bar.querySelectorAll("button"), function (x) { x.setAttribute("aria-pressed", "false"); });
          b.setAttribute("aria-pressed", "true");
          Array.prototype.forEach.call(document.querySelectorAll(".activity-card"), function (card) {
            card.hidden = !(c === "All" || card.getAttribute("data-category") === c);
          });
          var status = document.getElementById("filter-status");
          if (status) status.textContent = c === "All" ? "Showing all activities" : "Showing " + c + " activities";
        });
        bar.appendChild(b);
      });
    }
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

  /* ---------- Home: next event teaser ---------- */
  var teaser = document.getElementById("home-activities");
  if (teaser && window.CHAPTER_ACTIVITIES) {
    var t0 = new Date(); t0.setHours(0, 0, 0, 0);
    var sorted = window.CHAPTER_ACTIVITIES.slice().map(function (a) {
      var ev = parseDate(a.eventDate);
      return { a: a, ev: ev, d: ev || parseDate(a.postedDate) || new Date(0), up: !!ev && ev >= t0 };
    }).sort(function (x, y) {
      if (x.up !== y.up) return x.up ? -1 : 1;
      return x.up ? x.d - y.d : y.d - x.d;
    }).slice(0, 3);
    teaser.innerHTML = "";
    sorted.forEach(function (it) {
      teaser.appendChild(el("li", { class: "card" }, [
        el("p", { class: "meta", text: (it.up ? "Upcoming · " : "") + it.a.category }),
        el("h3", { text: it.a.title }),
        el("p", { text: it.ev ? formatDate(it.ev) : "Announced " + formatDate(parseDate(it.a.postedDate)) })
      ]));
    });
  }
})();
