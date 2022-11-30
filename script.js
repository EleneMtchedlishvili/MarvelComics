const characters =
  "https://gateway.marvel.com/v1/public/characters?apikey=97d62f598e1023a90303368f09b1004a";
const comics =
  "https://gateway.marvel.com/v1/public/comics?apikey=97d62f598e1023a90303368f09b1004a";

// getCharacters();

// async function getCharacters() {
//   const res = await fetch(
//     "https://gateway.marvel.com/v1/public/characters?apikey=97d62f598e1023a90303368f09b1004a"
//   );

//   console.log(await res.json());
// }

getComics();

async function getComics() {
  const res = await fetch(
    "https://gateway.marvel.com/v1/public/comics?apikey=97d62f598e1023a90303368f09b1004a"
  );

  console.log(await res.json());
}
