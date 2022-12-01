const characters =
  "https://gateway.marvel.com/v1/public/characters?apikey=97d62f598e1023a90303368f09b1004a";
const comics =
  "https://gateway.marvel.com/v1/public/comics?apikey=97d62f598e1023a90303368f09b1004a";
const image_size = "portrait_medium";
// getCharacters();

// async function getCharacters() {
//   const res = await fetch(
//     "https://gateway.marvel.com/v1/public/characters?apikey=97d62f598e1023a90303368f09b1004a"
//   );
//   console.log(await res.json());
// }

const comics_count = 20;

const main = document.getElementsByClassName("main");

getComics();

async function getComics() {
  const res = await fetch(comics);
  const data = await res.json();
  console.log(data);
}

function showComics(comics) {
  main.innerHTML = "";

  comics.forEach((comics) => {
    const { title, path, extension } = comics;

    const comicsElement = document.createElement("div");
    comicsElement.classList.add("card");

    comicsElement.innerHTML = `
              <img class="card-img-top" src="${
                path + "/" + image_size + "." + extension
              }" alt=${title}>
              <div class="card-body">
                 <h5 class="card-title">${title}</h5>
                 <p class="card-text">
                     Some quick example text to build on the card title and make up the
                     bulk of the card's content.
                 </p>
                 <a href="#" class="btn btn-primary">Go somewhere</a>
             </div>
          `;
    main.appendChild(comicsElement);
  });
}
