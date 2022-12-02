const characters =
  "https://gateway.marvel.com/v1/public/characters?apikey=97d62f598e1023a90303368f09b1004a";
const comicsEndpoint =
  "https://gateway.marvel.com/v1/public/comics?limit=10&apikey=97d62f598e1023a90303368f09b1004a";
const image_size = "portrait_incredible";

const comicsByCharacters =
  "https://gateway.marvel.com/v1/public/characters/${id}/comics?&ts=1&apikey=01302fe8616347c6decaf8fc30e088f9&hash=ba81f8fdf7e1f5233e29dc5a8d5a227a";

// superheroapi.com search api

const superheroSearch =
  "https://superheroapi.com/api/5774899559220439/search/name";

// search marvel api

const superhero_url =
  "https://gateway.marvel.com/v1/public/characters?apikey=97d62f598e1023a90303368f09b1004a";
// getCharacters();

// async function getCharacters() {
//   const res = await fetch(
//     "https://gateway.marvel.com/v1/public/characters?apikey=97d62f598e1023a90303368f09b1004a"
//   );
//   console.log(await res.json());
// }

// const comics_count = 20;

const main = document.getElementById("main");
const form = document.getElementsByClassName("form")[0];
const search = document.getElementsByClassName("search")[0];

getCharacters(superhero_url);

async function getCharacters(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.data.results);
  showCharacters(data.data.results);
}

function showCharacters(characters) {
  main.innerHTML = " ";

  characters.forEach((characters) => {
    const { id, name, description, thumbnail, events } = characters;

    const charactersElement = document.createElement("div");
    charactersElement.classList.add("card");

    const imgUrl = `${thumbnail.path}/${image_size}.${thumbnail.extension}`;

    charactersElement.innerHTML = `
        
              <img class="card-image" 
              src="${imgUrl}" 
              alt=${name}>
              <div class="card-info">
                 <h5 class="card-title">${name}</h5>
                 <p class="card-text">
                     ${description}
                 </p>
              </div>
              <div class= "card-footer">
                 <a href="${events}" class="btn btn-primary">View Details</a>
                 <div onClick="addFavorite({id: '${id}', name: '${name}', description: '${description}', imgUrl: '${imgUrl}', events: '${events}'})">
                    <svg class="heart_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                 </div>
              </div>
       
          `;

    main.appendChild(charactersElement);
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(search.value);
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getCharacters(superhero_url + "&nameStartsWith=" + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});

// თუ ტაიტლს ფრჩხილებში უწერია 2022 გაუშვას ლეითესთ კომიქსებში

// favorites

function addFavorite(character) {
  console.log(character);

  // ?? operator takes right side if left side is null or undefined
  const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];

  const itemToAdd = favorites.find((item) => item.id === character.id);

  if (itemToAdd == null) {
    favorites.push(character);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } else {
    alert("your hero already added in favorites");
  }
}
