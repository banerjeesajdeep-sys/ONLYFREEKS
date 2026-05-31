const people = [
  {
    name: "Person One",
    image: "images/placeholder1.jpg"
  },
  {
    name: "Person Two",
    image: "images/placeholder2.jpg"
  },
  {
    name: "Person Three",
    image: "images/placeholder3.jpg"
  },
  {
    name: "Person Four",
    image: "images/placeholder4.jpg"
  },
  {
    name: "Person Five",
    image: "images/placeholder5.jpg"
  },
  {
    name: "Person Six",
    image: "images/placeholder6.jpg"
  }
];

const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");

function displayPeople(list) {
  gallery.innerHTML = "";

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

    gallery.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(searchValue)
  );

  displayPeople(filteredPeople);
});

displayPeople(people);
