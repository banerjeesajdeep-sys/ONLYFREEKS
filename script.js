const people = [
  {
    id: "tanababyxo",
    name: "Tanababyxo",
    image: "images/tanababyxo.jpg",
    gallery: [
      {
        title: "Tanababyxo Image 1",
        image: "images/tanababyxo.jpg"
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
    id: "vegathompson",
    name: "Vegathompson",
    image: "images/vegathompson.jpg",
    gallery: [
      {
        title: "Vegathompson Image 1",
        image: "images/vegathompson.jpg"
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
  id: "savaschultz",
  name: "Savaschultz",
  image: "images/savaschultz.jpg",
  gallery: [
    {
      title: "Savaschultz Image 1",
      image: "images/savaschultz.jpg"
    },
    {
      title: "Person Three Image 2",
      image: "images/person-three-2.jpg"
    }
  ]
},
{
  id: "perlababe",
  name: "Perlababe",
  image: "images/perlababe.jpg",
  gallery: [
    {
      title: "Perlababe Image 1",
      image: "images/perlababe.jpg"
    }
  ]
},
{
  id: "noturhoneybb",
  name: "Noturhoneybb",
  image: "images/noturhoneybb.jpg",
  gallery: [
    {
      title: "Noturhoneybb Image 1",
      image: "images/noturhoneybb.jpg"
    }
  ]
},
{
  id: "wettmelons",
  name: "Wettmelons",
  image: "images/wettmelons.jpg",
  gallery: [
    {
      title: "Wettmelons Image 1",
      image: "images/wettmelons.jpg"
    }
  ]
},
{
  id: "sweetmuffins",
  name: "Sweetmuffins",
  image: "images/sweetmuffins.jpg",
  gallery: [
    {
      title: "Sweetmuffins Image 1",
      image: "images/sweetmuffins.jpg"
    }
  ]
},
{
  id: "lilyphilips",
  name: "Lilyphilips",
  image: "images/lilyphilips.jpg",
  gallery: [
    {
      title: "Lilyphilips Image 1",
      image: "images/lilyphilips.jpg"
    }
  ]
},
{
  id: "emarrb",
  name: "Emarrb",
  image: "images/emarrb.jpg",
  gallery: [
    {
      title: "Emarrb Image 1",
      image: "images/emarrb.jpg"
    }
  ]
},
{
  id: "tripleceleste",
  name: "Tripleceleste",
  image: "images/tripleceleste.jpg",
  gallery: [
    {
      title: "Tripleceleste Image 1",
      image: "images/tripleceleste.jpg"
    }
  ]
},
{
  id: "autumnfalls",
  name: "Autumnfalls",
  image: "images/autumnfalls.jpg",
  gallery: [
    {
      title: "Autumnfalls Image 1",
      image: "images/autumnfalls.jpg"
    }
  ]
},
{
  id: "lexi2legit",
  name: "Lexi2legit",
  image: "images/lexi2legit.jpg",
  gallery: [
    {
      title: "Lexi2legit Image 1",
      image: "images/lexi2legit.jpg"
    }
  ]
},
{
  id: "seracortinez",
  name: "Seracortinez",
  image: "images/seracortinez.jpg",
  gallery: [
    {
      title: "Seracortinez Image 1",
      image: "images/seracortinez.jpg"
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
