const state = {
  data: null,
  route: "home",
  categorySlug: null,
  personSlug: null,
  search: "",
  tag: "all",
  sort: "featured",
  currentImages: [],
  currentIndex: 0,
  favourites: JSON.parse(localStorage.getItem("onlyfreeks_favourites") || "[]"),
  activeCommentKey: null
};

const grid = document.getElementById("grid");
const pageTitle = document.getElementById("pageTitle");
const pageSubtitle = document.getElementById("pageSubtitle");
const searchInput = document.getElementById("searchInput");
const breadcrumbs = document.getElementById("breadcrumbs");
const tags = document.getElementById("tags");

start();

async function start() {
  document.documentElement.dataset.theme = localStorage.getItem("onlyfreeks_theme") || "dark";

  const response = await fetch("galleries.json");
  state.data = await response.json();

  bindEvents();
  handleRoute();
}

function bindEvents() {
  window.addEventListener("hashchange", handleRoute);

  searchInput.addEventListener("input", e => {
    state.search = e.target.value.toLowerCase().trim();
    render();
  });

  document.getElementById("sortSelect").addEventListener("change", e => {
    state.sort = e.target.value;
    render();
  });

  document.getElementById("themeBtn").addEventListener("click", () => {
    const current = document.documentElement.dataset.theme;
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("onlyfreeks_theme", next);
  });

  document.getElementById("favBtn").addEventListener("click", openFavourites);
  document.getElementById("closeFavs").addEventListener("click", closeFavourites);

  document.getElementById("closeLightbox").addEventListener("click", closeLightbox);
  document.getElementById("prevImg").addEventListener("click", () => moveImage(-1));
  document.getElementById("nextImg").addEventListener("click", () => moveImage(1));
  document.getElementById("lightboxFav").addEventListener("click", favouriteCurrentImage);

  document.getElementById("closeComments").addEventListener("click", closeComments);
  document.getElementById("commentForm").addEventListener("submit", submitComment);

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeLightbox();
      closeComments();
      closeFavourites();
    }

    if (!document.getElementById("lightbox").classList.contains("hidden")) {
      if (e.key === "ArrowLeft") moveImage(-1);
      if (e.key === "ArrowRight") moveImage(1);
    }
  });
}

function handleRoute() {
  const hash = location.hash.replace("#/", "");
  const parts = hash.split("/").filter(Boolean);

  state.route = "home";
  state.categorySlug = null;
  state.personSlug = null;
  state.tag = "all";

  if (parts.length === 1) {
    state.route = "category";
    state.categorySlug = parts[0];
  }

  if (parts.length >= 2) {
    state.route = "person";
    state.categorySlug = parts[0];
    state.personSlug = parts[1];
  }

  render();
}

function render() {
  grid.innerHTML = "";
  breadcrumbs.innerHTML = "";
  tags.innerHTML = "";

  if (state.route === "home") renderHome();
  if (state.route === "category") renderCategory();
  if (state.route === "person") renderPerson();
}

function renderHome() {
  pageTitle.textContent = "Gallery Hubs";
  pageSubtitle.textContent = "Choose a section to start browsing.";
  setBreadcrumb([{ label: "Home", link: "#/" }]);

  const categories = sortItems(filterItems(state.data.categories));
  renderTags(getAllTags(state.data.categories));

  categories.forEach(category => {
    const imageCount = category.people.reduce((total, person) => total + person.images.length, 0);

    const card = makeCard({
      image: category.cover,
      title: category.name,
      text: category.description,
      badges: [`${category.people.length} people`, `${imageCount} images`],
      click: () => location.hash = `#/${category.slug}`
    });

    grid.appendChild(card);
  });
}

function renderCategory() {
  const category = getCategory(state.categorySlug);
  if (!category) return showMissing();

  pageTitle.textContent = category.name;
  pageSubtitle.textContent = category.description;

  setBreadcrumb([
    { label: "Home", link: "#/" },
    { label: category.name, link: `#/${category.slug}` }
  ]);

  const people = sortItems(filterItems(category.people));
  renderTags(getAllTags(category.people));

  people.forEach(person => {
    const card = makeCard({
      image: person.cover,
      title: person.name,
      text: person.bio,
      badges: [`${person.images.length} images`, ...(person.tags || [])],
      click: () => location.hash = `#/${category.slug}/${person.slug}`
    });

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const fav = document.createElement("button");
    fav.textContent = "♡ Favourite";
    fav.onclick = e => {
      e.stopPropagation();
      toggleFavourite({
        key: `person-${category.slug}-${person.slug}`,
        title: person.name,
        image: person.cover,
        caption: category.name,
        link: `#/${category.slug}/${person.slug}`
      });
    };

    const comments = document.createElement("button");
    comments.textContent = "💬 Comments";
    comments.onclick = e => {
      e.stopPropagation();
      openComments(`person-${category.slug}-${person.slug}`, person.name);
    };

    actions.append(fav, comments);
    card.appendChild(actions);
    grid.appendChild(card);
  });
}

function renderPerson() {
  const category = getCategory(state.categorySlug);
  const person = getPerson(state.categorySlug, state.personSlug);
  if (!category || !person) return showMissing();

  pageTitle.textContent = person.name;
  pageSubtitle.textContent = person.bio;

  setBreadcrumb([
    { label: "Home", link: "#/" },
    { label: category.name, link: `#/${category.slug}` },
    { label: person.name, link: `#/${category.slug}/${person.slug}` }
  ]);

  renderTags(getAllTags(person.images));

  const filteredImages = filterImages(person.images, person);
  state.currentImages = filteredImages.map(img => ({
    ...img,
    person: person.name,
    category: category.name,
    key: `${category.slug}-${person.slug}-${img.src}`
  }));

  state.currentImages.forEach((image, index) => {
    const card = makeCard({
      image: image.src,
      title: image.title,
      text: image.caption,
      badges: image.tags || [],
      click: () => openLightbox(index)
    });

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const fav = document.createElement("button");
    fav.textContent = "♡ Favourite";
    fav.onclick = e => {
      e.stopPropagation();
      toggleFavourite({
        key: image.key,
        title: image.title,
        image: image.src,
        caption: image.caption,
        link: location.hash
      });
    };

    const comments = document.createElement("button");
    comments.textContent = "💬 Comments";
    comments.onclick = e => {
      e.stopPropagation();
      openComments(image.key, image.title);
    };

    actions.append(fav, comments);
    card.appendChild(actions);
    grid.appendChild(card);
  });
}

function makeCard({ image, title, text, badges, click }) {
  const card = document.createElement("article");
  card.className = "card";
  card.onclick = click;

  card.innerHTML = `
    <img src="${image}" alt="${escapeHTML(title)}" loading="lazy">
    <div class="card-body">
      <h3>${escapeHTML(title)}</h3>
      <p>${escapeHTML(text || "")}</p>
      <div class="badges">
        ${(badges || []).slice(0, 4).map(b => `<span class="badge">${escapeHTML(b)}</span>`).join("")}
      </div>
    </div>
  `;

  return card;
}

function openLightbox(index) {
  state.currentIndex = index;
  updateLightbox();
  document.getElementById("lightbox").classList.remove("hidden");
}

function updateLightbox() {
  const image = state.currentImages[state.currentIndex];
  if (!image) return;

  document.getElementById("lightboxImg").src = image.src;
  document.getElementById("lightboxTitle").textContent = image.title;
  document.getElementById("lightboxCaption").textContent = `${image.caption || ""} • ${image.person}`;
  document.getElementById("lightboxFav").textContent = isFavourited(image.key) ? "♥ Favourited" : "♡ Favourite";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.add("hidden");
}

function moveImage(direction) {
  if (!state.currentImages.length) return;

  state.currentIndex =
    (state.currentIndex + direction + state.currentImages.length) %
    state.currentImages.length;

  updateLightbox();
}

function favouriteCurrentImage() {
  const image = state.currentImages[state.currentIndex];
  if (!image) return;

  toggleFavourite({
    key: image.key,
    title: image.title,
    image: image.src,
    caption: image.caption,
    link: location.hash
  });

  updateLightbox();
}

function toggleFavourite(item) {
  const exists = state.favourites.some(f => f.key === item.key);

  if (exists) {
    state.favourites = state.favourites.filter(f => f.key !== item.key);
  } else {
    state.favourites.unshift(item);
  }

  localStorage.setItem("onlyfreeks_favourites", JSON.stringify(state.favourites));
  renderFavourites();
}

function isFavourited(key) {
  return state.favourites.some(f => f.key === key);
}

function openFavourites() {
  renderFavourites();
  document.getElementById("favPanel").classList.add("open");
}

function closeFavourites() {
  document.getElementById("favPanel").classList.remove("open");
}

function renderFavourites() {
  const favList = document.getElementById("favList");

  if (!state.favourites.length) {
    favList.innerHTML = `<p style="padding: 16px; color: var(--muted);">No favourites yet.</p>`;
    return;
  }

  favList.innerHTML = state.favourites.map(item => `
    <div class="fav-item" data-link="${item.link}">
      <img src="${item.image}" alt="">
      <div>
        <strong>${escapeHTML(item.title)}</strong>
        <p>${escapeHTML(item.caption || "")}</p>
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".fav-item").forEach(item => {
    item.onclick = () => {
      location.hash = item.dataset.link;
      closeFavourites();
    };
  });
}

function openComments(key, title) {
  state.activeCommentKey = key;
  document.getElementById("commentTitle").textContent = `Comments: ${title}`;
  document.getElementById("commentModal").classList.remove("hidden");
  renderComments();
}

function closeComments() {
  document.getElementById("commentModal").classList.add("hidden");
  state.activeCommentKey = null;
}

function getComments() {
  return JSON.parse(localStorage.getItem(`comments-${state.activeCommentKey}`) || "[]");
}

function renderComments() {
  const list = document.getElementById("commentList");
  const comments = getComments();

  if (!comments.length) {
    list.innerHTML = `<p class="small-note">No comments yet.</p>`;
    return;
  }

  list.innerHTML = comments.map(comment => `
    <div class="comment">
      <strong>${escapeHTML(comment.name)}</strong>
      <span>${escapeHTML(comment.date)}</span>
      <p>${escapeHTML(comment.text)}</p>
    </div>
  `).join("");
}

function submitComment(e) {
  e.preventDefault();

  const name = document.getElementById("commentName").value.trim() || "Guest";
  const text = document.getElementById("commentText").value.trim();

  if (!text || !state.activeCommentKey) return;

  const comments = getComments();
  comments.unshift({
    name,
    text,
    date: new Date().toLocaleString()
  });

  localStorage.setItem(`comments-${state.activeCommentKey}`, JSON.stringify(comments));

  document.getElementById("commentText").value = "";
  renderComments();
}

function renderTags(tagList) {
  const uniqueTags = ["all", ...new Set(tagList.filter(Boolean))];

  tags.innerHTML = uniqueTags.map(tag => `
    <button class="tag ${state.tag === tag ? "active" : ""}" data-tag="${tag}">
      ${escapeHTML(tag)}
    </button>
  `).join("");

  document.querySelectorAll(".tag").forEach(button => {
    button.onclick = () => {
      state.tag = button.dataset.tag;
      render();
    };
  });
}

function filterItems(items) {
  return items.filter(item => {
    const searchText = [
      item.name,
      item.description,
      item.bio,
      ...(item.tags || [])
    ].join(" ").toLowerCase();

    const matchesSearch = !state.search || searchText.includes(state.search);
    const matchesTag = state.tag === "all" || (item.tags || []).includes(state.tag);

    return matchesSearch && matchesTag;
  });
}

function filterImages(images, person) {
  return images.filter(image => {
    const searchText = [
      image.title,
      image.caption,
      person.name,
      ...(image.tags || []),
      ...(person.tags || [])
    ].join(" ").toLowerCase();

    const matchesSearch = !state.search || searchText.includes(state.search);
    const matchesTag = state.tag === "all" || (image.tags || []).includes(state.tag);

    return matchesSearch && matchesTag;
  });
}

function sortItems(items) {
  const sorted = [...items];

  if (state.sort === "az") {
    sorted.sort((a, b) => (a.name || a.title).localeCompare(b.name || b.title));
  }

  if (state.sort === "newest") {
    sorted.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  }

  if (state.sort === "featured") {
    sorted.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  }

  return sorted;
}

function getAllTags(items) {
  return items.flatMap(item => item.tags || []);
}

function getCategory(slug) {
  return state.data.categories.find(category => category.slug === slug);
}

function getPerson(categorySlug, personSlug) {
  const category = getCategory(categorySlug);
  return category?.people.find(person => person.slug === personSlug);
}

function setBreadcrumb(items) {
  breadcrumbs.innerHTML = items.map(item => `
    <a href="${item.link}">${escapeHTML(item.label)}</a>
  `).join("");
}

function showMissing() {
  pageTitle.textContent = "Not found";
  pageSubtitle.textContent = "This gallery does not exist.";
  grid.innerHTML = "";
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}
