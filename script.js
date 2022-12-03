const characters =
  "https://gateway.marvel.com/v1/public/characters?apikey=97d62f598e1023a90303368f09b1004a";

const comicsByCharacters =
  "https://gateway.marvel.com/v1/public/characters/${id}/comics?&ts=1&apikey=01302fe8616347c6decaf8fc30e088f9&hash=ba81f8fdf7e1f5233e29dc5a8d5a227a";

// search api
const superhero_url =
  "https://gateway.marvel.com/v1/public/characters?apikey=97d62f598e1023a90303368f09b1004a";
// getCharacters();

const image_size = "portrait_incredible";
const main = document.getElementById("main");
// აქ [0] რას შვება
const form = document.getElementsByClassName("form")[0];
const search = document.getElementsByClassName("search")[0];

// creating cards
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
              </div>
              <div class= "card-footer">
                 <button 
                    class="btn btn-primary" 
                    id="${id}" 
                    type="button"
                >
                    View Details
                </button>
                 <div class="" onClick="addFavorite({id: '${id}', name: '${name}', description: '${description}', imgUrl: '${imgUrl}', events: '${events}'})">
                 <img class="heart_icon" src="src/Marvel Images/heart icon.jpg" alt="heart icon" />
                 </div>
              </div>
          `;

    main.appendChild(charactersElement);
    // popup
    document.getElementById(id).onclick = () => showModal(name, description);
  });
}

// search

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

// add to favorites

function addFavorite(character) {
  console.log(character);

  // ?? operator takes right side if left side is null or undefined and makes an empty array
  const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];

  const itemToAdd = favorites.find((item) => item.id === character.id);

  if (itemToAdd == null) {
    favorites.push(character);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } else {
    alert("item is already added in favorites");
  }
}

// popup section

let modalWrap = null;
const showModal = (title, description) => {
  if (modalWrap !== null) {
    modalWrap.remove();
  }

  modalWrap = document.createElement("div");
  modalWrap.innerHTML = `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-light">
            <h5 class="modal-title">${title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>${description}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  main.appendChild(modalWrap);

  let modal = new bootstrap.Modal(modalWrap.querySelector(".modal"));
  modal.show();
};
