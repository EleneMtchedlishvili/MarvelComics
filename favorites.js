const favoritesContainer = document.getElementById("favorites");

function removeFavorite(id) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
  console.log(favorites);
  const toRemove = favorites.find((item) => item.id === id);

  if (toRemove !== null) {
    const filtered = favorites.filter((item) => item.id !== id);
    localStorage.setItem("favorites", JSON.stringify(filtered));

    favoritesContainer.innerHTML = "";
    showFavorites();
  }
}

function showFavorites() {
  let favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];

  favorites.forEach((favorite) => {
    const charactersElement = document.createElement("div");
    charactersElement.classList.add("card");

    charactersElement.innerHTML = `
        
              <img class="card-image" 
              src="${favorite.imgUrl}" 
              alt=${favorite.name}>
              <div class="card-info">
                 <h5 class="card-title">${name}</h5>
                 <p class="card-text">
                     ${favorite.description}
                 </p>
              </div>
              <div class= "card-footer">
                 <a href="${favorite.events}" class="btn btn-primary">View Details</a>
                 <div onClick="removeFavorite('${favorite.id}')">
                    <svg class="heart_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                 </div>
              </div>
          `;

    favoritesContainer.appendChild(charactersElement);
  });
}

showFavorites();