const characters =
  "https://gateway.marvel.com/v1/public/characters?apikey=97d62f598e1023a90303368f09b1004a";
const comicsEndpoint =
  "https://gateway.marvel.com/v1/public/comics?apikey=97d62f598e1023a90303368f09b1004a";
const image_size = "portrait_incredible";

// const comicsByCharacters =
//   "https://gateway.marvel.com/v1/public/characters/${id}/comics?&ts=1&apikey=01302fe8616347c6decaf8fc30e088f9&hash=ba81f8fdf7e1f5233e29dc5a8d5a227a";

// superhero search api

const superheroSearch =
  "https://superheroapi.com/api/5774899559220439/search/${title}";

// search marvel api

const superhero_url =
  "https://gateway.marvel.com:443/v1/public/characters?apikey=97d62f598e1023a90303368f09b1004a";
// getCharacters();

// async function getCharacters() {
//   const res = await fetch(
//     "https://gateway.marvel.com/v1/public/characters?apikey=97d62f598e1023a90303368f09b1004a"
//   );
//   console.log(await res.json());
// }

// const comics_count = 20;

const main = document.getElementById("main");
const form = document.getElementsByClassName("form");
const search = document.getElementsByClassName("search");

getComics();

async function getComics() {
  const res = await fetch(comicsEndpoint);
  const data = await res.json();
  console.log(data.data.results);
  showComics(data.data.results);
}

function showComics(comics) {
  main.innerHTML = " ";

  comics.forEach((comics) => {
    const { title, thumbnail, events } = comics;

    const comicsElement = document.createElement("div");
    comicsElement.classList.add("card");

    const imgUrl = `${thumbnail.path}/${image_size}.${thumbnail.extension}`;

    comicsElement.innerHTML = `
              <img class="card-img-top" 
              src="${imgUrl}" 
              alt=${title}>
              <div class="card-body">
                 <h5 class="card-title">${title}</h5>
                 <p class="card-text">
                     Some quick example text to build on the card title and make up the
                     bulk of the card's content.
                 </p>
              </div>
              <div class= "card-footer">
                 <a href="${events}" class="btn btn-primary">View Details</a>
                 <span onclick> <svg class="heart_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></span></svg>
              </div>
          `;

    main.appendChild(comicsElement);
  });
}

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const searchTerm = search.value;
//   if (searchTerm && searchTerm !== "") {
//     getComics(superhero_url + searchTerm);
//     search.value = "";
//   } else {
//     window.location.reload();
//   }
// });
