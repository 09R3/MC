function renderCard(item) {
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
    media.appendChild(img);
  } else {
    const placeholder = document.createElement("span");
    placeholder.className = "placeholder";
    placeholder.textContent = "no image yet";
    media.appendChild(placeholder);
  }

  const body = document.createElement("div");
  body.className = "card-body";

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = item.title;

  const desc = document.createElement("p");
  desc.className = "card-desc";
  desc.textContent = item.description || "";

  body.appendChild(title);
  body.appendChild(desc);

  if (item.tags && item.tags.length) {
    const tagWrap = document.createElement("div");
    tagWrap.className = "card-tags";
    item.tags.forEach((t) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = t;
      tagWrap.appendChild(tag);
    });
    body.appendChild(tagWrap);
  }

  if (item.link) {
    const linkEl = document.createElement("span");
    linkEl.className = "card-link";
    linkEl.innerHTML = `View <span class="arrow">→</span>`;
    body.appendChild(linkEl);
  }

  card.appendChild(media);
  card.appendChild(body);
  return card;
}

function renderGrid(gridId, items, emptyText) {
  const grid = document.getElementById(gridId);
  if (!items || items.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = emptyText;
    grid.appendChild(empty);
    return;
  }
  items.forEach((item) => grid.appendChild(renderCard(item)));
}

function setCount(name, n) {
  const el = document.querySelector(`[data-count="${name}"]`);
  if (el) el.textContent = String(n).padStart(2, "0");
}

document.addEventListener("DOMContentLoaded", () => {
  renderGrid("projects-grid", PROJECTS, "Nothing posted yet — check back soon.");
  renderGrid("apps-grid", WEB_APPS, "No apps live yet — check back soon.");
  setCount("projects", PROJECTS.length);
  setCount("apps", WEB_APPS.length);

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
