const people = [
  {
    id: "skibidi",
    name: "Skibidi",
    image: "images/skibidi.jpg",
    gallery: [
      {
        title: "Skibidi Image 1",
        image: "images/skibidi.jpg"
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
    id: "swagger",
    name: "Swagger",
    image: "images/swagger.jpg",
    gallery: [
      {
        title: "Swagger Image 1",
        image: "images/swagger.jpg"
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
  id: "person6",
  name: "Person Six",
  image: "images/person-six.jpg",
  gallery: [
    {
      title: "Person Six Image 1",
      image: "images/person-six.jpg"
    }
  ]
},
{
  id: "person7",
  name: "Person Seven",
  image: "images/person-seven.jpg",
  gallery: [
    {
      title: "Person Seven Image 1",
      image: "images/person-seven.jpg"
    }
  ]
},
{
  id: "person8",
  name: "Person Eight",
  image: "images/person-eight.jpg",
  gallery: [
    {
      title: "Person Eight Image 1",
      image: "images/person-eight.jpg"
    }
  ]
},
{
  id: "person9",
  name: "Person Nine",
  image: "images/person-nine.jpg",
  gallery: [
    {
      title: "Person Nine Image 1",
      image: "images/person-nine.jpg"
    }
  ]
},
{
  id: "person10",
  name: "Person Ten",
  image: "images/person-ten.jpg",
  gallery: [
    {
      title: "Person Ten Image 1",
      image: "images/person-ten.jpg"
    }
  ]
},
{
  id: "person11",
  name: "Person Eleven",
  image: "images/person-eleven.jpg",
  gallery: [
    {
      title: "Person Eleven Image 1",
      image: "images/person-eleven.jpg"
    }
  ]
},
{
  id: "person12",
  name: "Person Twelve",
  image: "images/person-twelve.jpg",
  gallery: [
    {
      title: "Person Twelve Image 1",
      image: "images/person-twelve.jpg"
    }
  ]
},
{
  id: "person13",
  name: "Person Thirteen",
  image: "images/person-thirteen.jpg",
  gallery: [
    {
      title: "Person Thirteen Image 1",
      image: "images/person-thirteen.jpg"
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
