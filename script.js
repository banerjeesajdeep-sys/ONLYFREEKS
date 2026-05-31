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
  }
];

const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const backBtn = document.getElementById("backBtn");
const pageTitle = document.getElementById("pageTitle");
const siteLogo = document.getElementById("siteLogo");

let currentView = "home";
let currentPerson = null;

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

  person.gallery.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="card-info">
        <h2>${item.title}</h2>
      </div>
    `;

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

  filteredGallery.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="card-info">
        <h2>${item.title}</h2>
      </div>
    `;

    gallery.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  if (currentView === "home") {
    searchHomePage();
  } else {
    searchPersonGallery();
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

displayHomePage(people);
