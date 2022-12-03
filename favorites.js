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
    const comicsElement = document.createElement("div");
    comicsElement.classList.add("card");

    comicsElement.innerHTML = `
        
              <img class="card-image" 
              src="${favorite.imgUrl}" 
              alt=${favorite.name}>
              <div class="card-info">
                 <h5 class="card-title">${favorite.name}</h5>
                 <p class="card-text">
                    
                 </p>
              </div>
              <div class= "card-footer">
                 <a href="${favorite.events}" class="btn btn-primary">View Details</a>
                 <div onClick="removeFavorite('${favorite.id}')">
                 <img class="heart_icon" src="src/Marvel Images/heart icon.jpg" alt="heart icon" />
              </div>
          `;

    favoritesContainer.appendChild(comicsElement);
  });
}

showFavorites();
