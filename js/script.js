function renderCard(item, kind) {
  const card = document.createElement(item.link ? "a" : "div");
  card.className = "card";
  if (item.link) {
    card.href = item.link;
    card.target = "_blank";
    card.rel = "noopener";
  }

  const media = document.createElement("div");
  media.className = "card-media";
  if (item.image) {
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title;
    img.loading = "lazy";
    media.appendChild(img);
  } else {
    const placeholder = document.createElement("span");
    placeholder.className = "placeholder";
    placeholder.textContent = "Screenshot";
    media.appendChild(placeholder);
  }

  const body = document.createElement("div");
  body.className = "card-body";

  const kicker = document.createElement("span");
  kicker.className = kind === "app" ? "card-kicker accent-2" : "card-kicker";
  kicker.textContent = kind === "app" ? "Live app" : "Project";

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = item.title;

  const desc = document.createElement("p");
  desc.className = "card-desc";
  desc.textContent = item.description || "";

  body.appendChild(kicker);
  body.appendChild(title);
  body.appendChild(desc);

  if (item.tags && item.tags.length) {
    const tagWrap = document.createElement("div");
    tagWrap.className = "card-tags";
    item.tags.forEach((t) => {
      const tag = document.createElement("span");
      tag.className = kind === "app" ? "tag tag-accent" : "tag tag-outline";
      tag.textContent = t;
      tagWrap.appendChild(tag);
    });
    body.appendChild(tagWrap);
  }

  if (item.link) {
    const linkEl = document.createElement("span");
    linkEl.className = "card-link";
    linkEl.textContent = kind === "app" ? "Try it →" : "View source →";
    body.appendChild(linkEl);
  }

  card.appendChild(media);
  card.appendChild(body);
  return card;
}

function renderGrid(gridId, items, kind, emptyText) {
  const grid = document.getElementById(gridId);
  if (!items || items.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = emptyText;
    grid.appendChild(empty);
    return;
  }
  items.forEach((item) => grid.appendChild(renderCard(item, kind)));
}

function renderPhotos() {
  const grid = document.getElementById("photos-grid");
  if (!PHOTOS || PHOTOS.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No photos yet — drop some in /photos.";
    grid.appendChild(empty);
    return;
  }
  PHOTOS.forEach((photo, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "photo-item";
    btn.addEventListener("click", () => openLightbox(i));

    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.alt || "";
    img.loading = "lazy";

    btn.appendChild(img);
    grid.appendChild(btn);
  });
}

function setCount(name, n) {
  const el = document.querySelector(`[data-count="${name}"]`);
  if (el) el.textContent = String(n).padStart(2, "0");
}

function setHeroMedia() {
  const el = document.getElementById("hero-media");
  if (!el || !HERO_IMAGE) return;
  const img = document.createElement("img");
  img.src = HERO_IMAGE;
  img.alt = "";
  el.appendChild(img);
}

let lightboxEl, lightboxImg, lastFocused;

function openLightbox(index) {
  const photo = PHOTOS[index];
  if (!photo) return;
  lightboxImg.src = photo.src;
  lightboxImg.alt = photo.alt || "";
  lastFocused = document.activeElement;
  lightboxEl.hidden = false;
  document.getElementById("lightbox-close").focus();
}

function closeLightbox() {
  lightboxEl.hidden = true;
  lightboxImg.src = "";
  if (lastFocused) lastFocused.focus();
}

function initLightbox() {
  lightboxEl = document.getElementById("lightbox");
  lightboxImg = document.getElementById("lightbox-img");
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  lightboxEl.addEventListener("click", (e) => {
    if (e.target === lightboxEl) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightboxEl.hidden) closeLightbox();
  });
}

function initScrollSpy() {
  const sectionIds = ["projects", "apps", "photos", "about"];
  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
  const tabs = document.querySelectorAll(".tab-item");

  const setActive = (id) => {
    tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.tab === id));
  };

  let current = sectionIds[0];
  const onScroll = () => {
    const y = window.scrollY + window.innerHeight * 0.35;
    for (const el of sections) {
      if (el.offsetTop <= y) current = el.id;
    }
    setActive(current);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

document.addEventListener("DOMContentLoaded", () => {
  setHeroMedia();

  renderGrid("projects-grid", PROJECTS, "project", "Nothing posted yet — check back soon.");
  renderGrid("apps-grid", WEB_APPS, "app", "No apps live yet — check back soon.");
  renderPhotos();

  setCount("projects", PROJECTS.length);
  setCount("apps", WEB_APPS.length);
  setCount("photos", PHOTOS.length);

  initLightbox();
  initScrollSpy();

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
