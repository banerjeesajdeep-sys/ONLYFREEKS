function makeGallery(id, name, totalImages = 50) {
  return Array.from({ length: totalImages }, (_, i) => {
    const imageNumber = i + 1;

    return {
      title: `${name} Image ${imageNumber}`,
      image:
        imageNumber === 1
          ? `images/${id}.jpg`
          : `images/${id}-${imageNumber}.jpg`
    };
  });
}

function makeCategoryGallery(id, name, totalImages = 20) {
  return Array.from({ length: totalImages }, (_, i) => {
    const imageNumber = i + 1;

    return {
      title: `${name} Image ${imageNumber}`,
      image:
        imageNumber === 1
          ? `images/${id}.jpg`
          : `images/${id}-${imageNumber}.jpg`
    };
  });
}

const people = [
  {
    id: "tanababyxo",
    name: "Tanababyxo",
    image: "images/tanababyxo.jpg",
    gallery: makeGallery("tanababyxo", "Tanababyxo")
  },
  {
    id: "vegathompson",
    name: "Vegathompson",
    image: "images/vegathompson.jpg",
    gallery: makeGallery("vegathompson", "Vegathompson")
  },
  {
    id: "savaschultz",
    name: "Savaschultz",
    image: "images/savaschultz.jpg",
    gallery: makeGallery("savaschultz", "Savaschultz")
  },
  {
    id: "perlababe",
    name: "Perlababe",
    image: "images/perlababe.jpg",
    gallery: makeGallery("perlababe", "Perlababe")
  },
  {
    id: "noturhoneybb",
    name: "Noturhoneybb",
    image: "images/noturhoneybb.jpg",
    gallery: makeGallery("noturhoneybb", "Noturhoneybb")
  },
  {
    id: "wettmelons",
    name: "Wettmelons",
    image: "images/wettmelons.jpg",
    gallery: makeGallery("wettmelons", "Wettmelons")
  },
  {
    id: "sweetmuffins",
    name: "Sweetmuffins",
    image: "images/sweetmuffins.jpg",
    gallery: makeGallery("sweetmuffins", "Sweetmuffins")
  },
  {
    id: "lilyphilips",
    name: "Lilyphilips",
    image: "images/lilyphilips.jpg",
    gallery: makeGallery("lilyphilips", "Lilyphilips")
  },
  {
    id: "emarrb",
    name: "Emarrb",
    image: "images/emarrb.jpg",
    gallery: makeGallery("emarrb", "Emarrb")
  },
  {
    id: "tripleceleste",
    name: "Tripleceleste",
    image: "images/tripleceleste.jpg",
    gallery: makeGallery("tripleceleste", "Tripleceleste", 10)
  },
  {
    id: "autumnfalls",
    name: "Autumnfalls",
    image: "images/autumnfalls.jpg",
    gallery: makeGallery("autumnfalls", "Autumnfalls")
  },
  {
    id: "lexi2legit",
    name: "Lexi2legit",
    image: "images/lexi2legit.jpg",
    gallery: makeGallery("lexi2legit", "Lexi2legit")
  },
  {
    id: "seracortinez",
    name: "Seracortinez",
    image: "images/seracortinez.jpg",
    gallery: makeGallery("seracortinez", "Seracortinez")
  },
  {
    id: "perischeer",
    name: "Perischeer",
    image: "images/perischeer.jpg",
    gallery: makeGallery("perischeer", "Perischeer", 10)
  },
  {
    id: "karolrosado",
    name: "Karolrosado",
    image: "images/karolrosado.jpg",
    gallery: makeGallery("karolrosado", "Karolrosado")
  },
  {
    id: "danicooppss",
    name: "Danicooppss",
    image: "images/danicooppss.jpg",
    gallery: makeGallery("danicooppss", "Danicooppss")
  },
  {
    id: "emmiep",
    name: "Emmiep",
    image: "images/emmiep.jpg",
    gallery: makeGallery("emmiep", "Emmiep")
  },
  {
    id: "person18",
    name: "Person18",
    image: "images/person18.jpg",
    gallery: makeGallery("person18", "Person18")
  },
  {
    id: "person19",
    name: "Person19",
    image: "images/person19.jpg",
    gallery: makeGallery("person19", "Person19")
  },
  {
    id: "person20",
    name: "Person20",
    image: "images/person20.jpg",
    gallery: makeGallery("person20", "Person20")
  },
  {
    id: "person21",
    name: "Person21",
    image: "images/person21.jpg",
    gallery: makeGallery("person21", "Person21")
  },
  {
    id: "person22",
    name: "Person22",
    image: "images/person22.jpg",
    gallery: makeGallery("person22", "Person22")
  },
  {
    id: "person23",
    name: "Person23",
    image: "images/person23.jpg",
    gallery: makeGallery("person23", "Person23")
  },
  {
    id: "person24",
    name: "Person24",
    image: "images/person24.jpg",
    gallery: makeGallery("person24", "Person24")
  },
  {
    id: "person25",
    name: "Person25",
    image: "images/person25.jpg",
    gallery: makeGallery("person25", "Person25")
  },
  {
    id: "person26",
    name: "Person26",
    image: "images/person26.jpg",
    gallery: makeGallery("person26", "Person26")
  },
  {
    id: "person27",
    name: "Person27",
    image: "images/person27.jpg",
    gallery: makeGallery("person27", "Person27")
  },
  {
    id: "person28",
    name: "Person28",
    image: "images/person28.jpg",
    gallery: makeGallery("person28", "Person28")
  },
  {
    id: "person29",
    name: "Person29",
    image: "images/person29.jpg",
    gallery: makeGallery("person29", "Person29")
  },
  {
    id: "person30",
    name: "Person30",
    image: "images/person30.jpg",
    gallery: makeGallery("person30", "Person30")
  },
  {
    id: "person31",
    name: "Person31",
    image: "images/person31.jpg",
    gallery: makeGallery("person31", "Person31")
  },
  {
    id: "person32",
    name: "Person32",
    image: "images/person32.jpg",
    gallery: makeGallery("person32", "Person32")
  },
  {
    id: "person33",
    name: "Person33",
    image: "images/person33.jpg",
    gallery: makeGallery("person33", "Person33")
  },
  {
    id: "person34",
    name: "Person34",
    image: "images/person34.jpg",
    gallery: makeGallery("person34", "Person34")
  },
  {
    id: "person35",
    name: "Person35",
    image: "images/person35.jpg",
    gallery: makeGallery("person35", "Person35")
  },
  {
    id: "person36",
    name: "Person36",
    image: "images/person36.jpg",
    gallery: makeGallery("person36", "Person36")
  },
  {
    id: "person37",
    name: "Person37",
    image: "images/person37.jpg",
    gallery: makeGallery("person37", "Person37")
  },
  {
    id: "person38",
    name: "Person38",
    image: "images/person38.jpg",
    gallery: makeGallery("person38", "Person38")
  },
  {
    id: "person39",
    name: "Person39",
    image: "images/person39.jpg",
    gallery: makeGallery("person39", "Person39")
  },
  {
    id: "person40",
    name: "Person40",
    image: "images/person40.jpg",
    gallery: makeGallery("person40", "Person40")
  },
  {
    id: "person41",
    name: "Person41",
    image: "images/person41.jpg",
    gallery: makeGallery("person41", "Person41")
  },
  {
    id: "person42",
    name: "Person42",
    image: "images/person42.jpg",
    gallery: makeGallery("person42", "Person42")
  },
  {
    id: "person43",
    name: "Person43",
    image: "images/person43.jpg",
    gallery: makeGallery("person43", "Person43")
  },
  {
    id: "person44",
    name: "Person44",
    image: "images/person44.jpg",
    gallery: makeGallery("person44", "Person44")
  },
  {
    id: "person45",
    name: "Person45",
    image: "images/person45.jpg",
    gallery: makeGallery("person45", "Person45")
  },
  {
    id: "person46",
    name: "Person46",
    image: "images/person46.jpg",
    gallery: makeGallery("person46", "Person46")
  },
  {
    id: "person47",
    name: "Person47",
    image: "images/person47.jpg",
    gallery: makeGallery("person47", "Person47")
  },
  {
    id: "person48",
    name: "Person48",
    image: "images/person48.jpg",
    gallery: makeGallery("person48", "Person48")
  },
  {
    id: "person49",
    name: "Person49",
    image: "images/person49.jpg",
    gallery: makeGallery("person49", "Person49")
  },
  {
    id: "person50",
    name: "Person50",
    image: "images/person50.jpg",
    gallery: makeGallery("person50", "Person50")
  },
  {
    id: "person51",
    name: "Person51",
    image: "images/person51.jpg",
    gallery: makeGallery("person51", "Person51")
  },
  {
    id: "person52",
    name: "Person52",
    image: "images/person52.jpg",
    gallery: makeGallery("person52", "Person52")
  },
  {
    id: "person53",
    name: "Person53",
    image: "images/person53.jpg",
    gallery: makeGallery("person53", "Person53")
  },
  {
    id: "person54",
    name: "Person54",
    image: "images/person54.jpg",
    gallery: makeGallery("person54", "Person54")
  },
  {
    id: "person55",
    name: "Person55",
    image: "images/person55.jpg",
    gallery: makeGallery("person55", "Person55")
  },
  {
    id: "person56",
    name: "Person56",
    image: "images/person56.jpg",
    gallery: makeGallery("person56", "Person56")
  },
  {
    id: "person57",
    name: "Person57",
    image: "images/person57.jpg",
    gallery: makeGallery("person57", "Person57")
  },
  {
    id: "person58",
    name: "Person58",
    image: "images/person58.jpg",
    gallery: makeGallery("person58", "Person58")
  },
  {
    id: "person59",
    name: "Person59",
    image: "images/person59.jpg",
    gallery: makeGallery("person59", "Person59")
  },
  {
    id: "person60",
    name: "Person60",
    image: "images/person60.jpg",
    gallery: makeGallery("person60", "Person60")
  },
  {
    id: "person61",
    name: "Person61",
    image: "images/person61.jpg",
    gallery: makeGallery("person61", "Person61")
  },
  {
    id: "person62",
    name: "Person62",
    image: "images/person62.jpg",
    gallery: makeGallery("person62", "Person62")
  },
  {
    id: "person63",
    name: "Person63",
    image: "images/person63.jpg",
    gallery: makeGallery("person63", "Person63")
  }
];

const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const backBtn = document.getElementById("backBtn");
const pageTitle = document.getElementById("pageTitle");
const siteLogo = document.getElementById("siteLogo");

const imageLightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");
const prevImageBtn = document.getElementById("prevImageBtn");
const nextImageBtn = document.getElementById("nextImageBtn");
const zoomImageBtn = document.getElementById("zoomImageBtn");

const homeLink = document.getElementById("homeLink");
const trendingLink = document.getElementById("trendingLink");
const categoriesLink = document.getElementById("categoriesLink");
const favoritesLink = document.getElementById("favoritesLink");

const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarClose = document.getElementById("sidebarClose");

const trendingBoxes = [
  {
    title: "Most Viewed",
    description: "The most clicked galleries right now.",
    image: "images/trending-most-viewed.jpg"
  },
  {
    title: "New Drops",
    description: "Recently added galleries and updates.",
    image: "images/trending-new-drops.jpg"
  },
  {
    title: "Top Rated",
    description: "Popular picks people keep coming back to.",
    image: "images/trending-top-rated.jpg"
  },
  {
    title: "Rising",
    description: "Characters getting more attention lately.",
    image: "images/trending-rising.jpg"
  },
  {
    title: "Featured",
    description: "Hand-picked boxes for the front page.",
    image: "images/trending-featured.jpg"
  },
  {
    title: "Fresh Finds",
    description: "New pages worth checking out.",
    image: "images/trending-fresh-finds.jpg"
  }
];

const categoryBoxes = [
  {
    id: "ass",
    title: "Ass",
    description: "A gallery full of ass images.",
    image: "images/categories-ass.jpg",
    gallery: makeCategoryGallery("ass", "Ass", 20)
  },
  {
    id: "tits",
    title: "Tits",
    description: "A gallery full of tit images.",
    image: "images/categories-tits.jpg",
    gallery: makeCategoryGallery("tits", "Tits", 20)
  },
  {
    id: "pusst",
    title: "Pussy",
    description: "A gallery full of pussy images.",
    image: "images/categories-pussy.jpg",
    gallery: makeCategoryGallery("pussy", "Pussy", 20)
  },
  {
    id: "anal",
    title: "Anal",
    description: "A gallery full of anal images.",
    image: "images/categories-anal.jpg",
    gallery: makeCategoryGallery("anal", "Anal", 20)
  },
  {
    id: "large",
    title: "Large",
    description: "A gallery full of large images.",
    image: "images/categories-large.jpg",
    gallery: makeCategoryGallery("large", "Large", 20)
  },
  {
    id: "petite",
    title: "Petite",
    description: "A gallery full of petite images.",
    image: "images/categories-petite.jpg",
    gallery: makeCategoryGallery("petite", "Petite", 20)
  },
  {
    id: "milf",
    title: "Milf",
    description: "A gallery full of milf images.",
    image: "images/categories-milf.jpg",
    gallery: makeCategoryGallery("milf", "Milf", 20)
  },
  {
    id: "ginger",
    title: "Ginger",
    description: "A gallery full of ginger images.",
    image: "images/categories-ginger.jpg",
    gallery: makeCategoryGallery("ginger", "Ginger", 20)
  },
  {
    id: "ebony",
    title: "Ebony",
    description: "A gallery full of ebony images.",
    image: "images/categories-ebony.jpg",
    gallery: makeCategoryGallery("ebony", "Ebony", 20)
  },
  {
    id: "brailian",
    title: "Brazilian",
    description: "A gallery full of brazilian images.",
    image: "images/categories-brazilian.jpg",
    gallery: makeCategoryGallery("brazilian", "Brazilian", 20)
  },
  {
    id: "feet",
    title: "Feet",
    description: "A gallery full of feet images.",
    image: "images/categories-feet.jpg",
    gallery: makeCategoryGallery("feet", "Feet", 20)
  },
  {
    id: "travel",
    title: "Travel",
    description: "A gallery full of travel images.",
    image: "images/categories-travel.jpg",
    gallery: makeCategoryGallery("travel", "Travel", 20)
  },
  {
    id: "memes",
    title: "Memes",
    description: "A gallery full of meme images.",
    image: "images/categories-memes.jpg",
    gallery: makeCategoryGallery("memes", "Memes", 20)
  },
  {
    id: "movies",
    title: "Movies",
    description: "A gallery full of movie images.",
    image: "images/categories-movies.jpg",
    gallery: makeCategoryGallery("movies", "Movies", 20)
  },
  {
    id: "tech",
    title: "Tech",
    description: "A gallery full of tech images.",
    image: "images/categories-tech.jpg",
    gallery: makeCategoryGallery("tech", "Tech", 20)
  },
  {
    id: "space",
    title: "Space",
    description: "A gallery full of space images.",
    image: "images/categories-space.jpg",
    gallery: makeCategoryGallery("space", "Space", 20)
  },
  {
    id: "animals",
    title: "Animals",
    description: "A gallery full of animal images.",
    image: "images/categories-animals.jpg",
    gallery: makeCategoryGallery("animals", "Animals", 20)
  },
  {
    id: "city",
    title: "City",
    description: "A gallery full of city images.",
    image: "images/categories-city.jpg",
    gallery: makeCategoryGallery("city", "City", 20)
  }
];

let currentView = "home";
let currentPerson = null;
let currentGalleryImages = [];
let currentImageIndex = 0;
let isZoomed = false;

function getLightboxImageData(item) {
  if (typeof item === "string") {
    return { image: item, title: "Gallery image" };
  }

  return {
    image: item.image,
    title: item.title || "Gallery image"
  };
}

function openLightbox(images, index) {
  currentGalleryImages = images;
  currentImageIndex = index;
  isZoomed = false;

  const currentItem = getLightboxImageData(currentGalleryImages[currentImageIndex]);

  lightboxImage.classList.remove("zoomed");
  lightboxImage.src = currentItem.image;
  lightboxImage.alt = currentItem.title;

  imageLightbox.classList.add("active");
}

function closeImageLightbox() {
  imageLightbox.classList.remove("active");
  lightboxImage.src = "";
  lightboxImage.alt = "Opened gallery image";
  lightboxImage.classList.remove("zoomed");
  isZoomed = false;
}

function showCurrentLightboxImage() {
  const currentItem = getLightboxImageData(currentGalleryImages[currentImageIndex]);

  lightboxImage.src = currentItem.image;
  lightboxImage.alt = currentItem.title;
  lightboxImage.classList.remove("zoomed");
  isZoomed = false;
}

function showNextImage() {
  if (currentGalleryImages.length === 0) return;

  currentImageIndex++;

  if (currentImageIndex >= currentGalleryImages.length) {
    currentImageIndex = 0;
  }

  showCurrentLightboxImage();
}

function showPreviousImage() {
  if (currentGalleryImages.length === 0) return;

  currentImageIndex--;

  if (currentImageIndex < 0) {
    currentImageIndex = currentGalleryImages.length - 1;
  }

  showCurrentLightboxImage();
}

function toggleZoom() {
  isZoomed = !isZoomed;

  if (isZoomed) {
    lightboxImage.classList.add("zoomed");
  } else {
    lightboxImage.classList.remove("zoomed");
  }
}

function displayHomePage(list) {
  currentView = "home";
  currentPerson = null;

  gallery.innerHTML = "";
  pageTitle.textContent = "Browse People";
  searchInput.placeholder = "Search names...";
  backBtn.style.display = "none";

  if (list.length === 0) {
    gallery.innerHTML = `<p class="no-results">No results found.</p>`;
    return;
  }

  list.forEach(person => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${person.image}" alt="${person.name}">
      <div class="card-info">
        <h2>${person.name}</h2>
      </div>
    `;

    card.addEventListener("click", () => {
      displayPersonGallery(person);
    });

    gallery.appendChild(card);
  });
}

function displayTrendingPage() {
  currentView = "trending";
  currentPerson = null;

  gallery.innerHTML = "";
  pageTitle.textContent = "Trending";
  searchInput.value = "";
  searchInput.placeholder = "Search trending...";
  backBtn.style.display = "inline-block";

  trendingBoxes.forEach(box => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("trending-box");

    card.innerHTML = `
      <img src="${box.image}" alt="${box.title}">
      <div class="trending-info">
        <h2>${box.title}</h2>
        <p>${box.description}</p>
      </div>
    `;

    gallery.appendChild(card);
  });
}

function displayCategoriesPage() {
  currentView = "categories";
  currentPerson = null;

  gallery.innerHTML = "";
  pageTitle.textContent = "Categories";
  searchInput.value = "";
  searchInput.placeholder = "Search categories...";
  backBtn.style.display = "inline-block";

  categoryBoxes.forEach(category => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("trending-box");

    card.innerHTML = `
      <img src="${category.image}" alt="${category.title}">
      <div class="trending-info">
        <h2>${category.title}</h2>
        <p>${category.description}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      displayCategoryGallery(category);
    });

    gallery.appendChild(card);
  });
}

function displayFavoritesPage() {
  currentView = "favorites";
  currentPerson = null;

  gallery.innerHTML = "";
  pageTitle.textContent = "Favorites";
  searchInput.value = "";
  searchInput.placeholder = "Search favorites...";
  backBtn.style.display = "inline-block";

  gallery.innerHTML = `
    <p class="no-results">No favorites added yet.</p>
  `;
}

function displayPersonGallery(person) {
  currentView = "person";
  currentPerson = person;

  gallery.innerHTML = "";
  pageTitle.textContent = person.name;
  searchInput.value = "";
  searchInput.placeholder = `Search ${person.name} gallery...`;
  backBtn.style.display = "inline-block";

  if (person.gallery.length === 0) {
    gallery.innerHTML = `<p class="no-results">No images added yet.</p>`;
    return;
  }

  person.gallery.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="card-info">
        <h2>${item.title}</h2>
      </div>
    `;

    card.addEventListener("click", () => {
      openLightbox(person.gallery, index);
    });

    gallery.appendChild(card);
  });
}

function displayCategoryGallery(category) {
  currentView = "categoryGallery";
  currentPerson = null;

  gallery.innerHTML = "";
  pageTitle.textContent = category.title;
  searchInput.value = "";
  searchInput.placeholder = `Search ${category.title} gallery...`;
  backBtn.style.display = "inline-block";

  if (category.gallery.length === 0) {
    gallery.innerHTML = `<p class="no-results">No images added yet.</p>`;
    return;
  }

  category.gallery.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="card-info">
        <h2>${item.title}</h2>
      </div>
    `;

    card.addEventListener("click", () => {
      openLightbox(category.gallery, index);
    });

    gallery.appendChild(card);
  });
}

function searchHomePage() {
  const searchValue = searchInput.value.toLowerCase();

  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(searchValue)
  );

  displayHomePage(filteredPeople);
}

function searchPersonGallery() {
  const searchValue = searchInput.value.toLowerCase();

  const filteredGallery = currentPerson.gallery.filter(item =>
    item.title.toLowerCase().includes(searchValue)
  );

  gallery.innerHTML = "";

  if (filteredGallery.length === 0) {
    gallery.innerHTML = `<p class="no-results">No results found.</p>`;
    return;
  }

  filteredGallery.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="card-info">
        <h2>${item.title}</h2>
      </div>
    `;

    card.addEventListener("click", () => {
      openLightbox(filteredGallery, index);
    });

    gallery.appendChild(card);
  });
}

function searchTrendingPage() {
  const searchValue = searchInput.value.toLowerCase();

  const filteredBoxes = trendingBoxes.filter(box =>
    box.title.toLowerCase().includes(searchValue) ||
    box.description.toLowerCase().includes(searchValue)
  );

  gallery.innerHTML = "";

  if (filteredBoxes.length === 0) {
    gallery.innerHTML = `<p class="no-results">No results found.</p>`;
    return;
  }

  filteredBoxes.forEach(box => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("trending-box");

    card.innerHTML = `
      <img src="${box.image}" alt="${box.title}">
      <div class="trending-info">
        <h2>${box.title}</h2>
        <p>${box.description}</p>
      </div>
    `;

    gallery.appendChild(card);
  });
}

function searchCategoriesPage() {
  const searchValue = searchInput.value.toLowerCase();

  const filteredBoxes = categoryBoxes.filter(box =>
    box.title.toLowerCase().includes(searchValue) ||
    box.description.toLowerCase().includes(searchValue)
  );

  gallery.innerHTML = "";

  if (filteredBoxes.length === 0) {
    gallery.innerHTML = `<p class="no-results">No results found.</p>`;
    return;
  }

  filteredBoxes.forEach(box => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("trending-box");

    card.innerHTML = `
      <img src="${box.image}" alt="${box.title}">
      <div class="trending-info">
        <h2>${box.title}</h2>
        <p>${box.description}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      displayCategoryGallery(box);
    });

    gallery.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  if (currentView === "home") {
    searchHomePage();
  } else if (currentView === "person") {
    searchPersonGallery();
  } else if (currentView === "trending") {
    searchTrendingPage();
  } else if (currentView === "categories") {
    searchCategoriesPage();
  }
});

backBtn.addEventListener("click", () => {
  searchInput.value = "";
  displayHomePage(people);
});

siteLogo.addEventListener("click", () => {
  searchInput.value = "";
  displayHomePage(people);
});

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.add("open");
});

sidebarClose.addEventListener("click", () => {
  sidebar.classList.remove("open");
});

closeLightbox.addEventListener("click", closeImageLightbox);
nextImageBtn.addEventListener("click", showNextImage);
prevImageBtn.addEventListener("click", showPreviousImage);
zoomImageBtn.addEventListener("click", toggleZoom);

imageLightbox.addEventListener("click", event => {
  if (event.target === imageLightbox) {
    closeImageLightbox();
  }
});

document.addEventListener("keydown", event => {
  if (!imageLightbox.classList.contains("active")) return;

  if (event.key === "ArrowRight") {
    showNextImage();
  }

  if (event.key === "ArrowLeft") {
    showPreviousImage();
  }

  if (event.key === "Escape") {
    closeImageLightbox();
  }
});

homeLink.addEventListener("click", event => {
  event.preventDefault();
  searchInput.value = "";
  sidebar.classList.remove("open");
  displayHomePage(people);
});

trendingLink.addEventListener("click", event => {
  event.preventDefault();
  searchInput.value = "";
  sidebar.classList.remove("open");
  displayTrendingPage();
});

categoriesLink.addEventListener("click", event => {
  event.preventDefault();
  searchInput.value = "";
  sidebar.classList.remove("open");
  displayCategoriesPage();
});

favoritesLink.addEventListener("click", event => {
  event.preventDefault();
  searchInput.value = "";
  sidebar.classList.remove("open");
  displayFavoritesPage();
});

displayHomePage(people);
