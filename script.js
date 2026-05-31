const people = [
  {
    id: "skibidi-1",
    name: "Skibidi-1",
    image: "images/skibidi-1",
    gallery: [
      {
        title: "Skibidi-1 Image 1",
        image: "images/skibidi-1.jpg"
      },
      {
        title: "LeBron Image 2",
        image: "images/lebron-2.jpg"
      },
      {
        title: "LeBron Image 3",
        image: "images/lebron-3.jpg"
      },
      {
        title: "LeBron Image 4",
        image: "images/lebron-4.jpg"
      }
    ]
  },
  {
    id: "person-two",
    name: "Person Two",
    image: "images/person-two-main.jpg",
    gallery: [
      {
        title: "Person Two Image 1",
        image: "images/person-two-1.jpg"
      },
      {
        title: "Person Two Image 2",
        image: "images/person-two-2.jpg"
      },
      {
        title: "Person Two Image 3",
        image: "images/person-two-3.jpg"
      }
    ]
  },
  {
    id: "person-three",
    name: "Person Three",
    image: "images/person-three-main.jpg",
    gallery: [
      {
        title: "Person Three Image 1",
        image: "images/person-three-1.jpg"
      },
      {
        title: "Person Three Image 2",
        image: "images/person-three-2.jpg"
      }
    ]
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
