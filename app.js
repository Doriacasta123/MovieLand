const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');

const peliculas = [
  "The Shawshank Redemption",
  "The Vampire Diaries",
  "The Godfather",
  "Breaking Bad",
  "Inception",
  "Stranger Things",
  "Titanic",
  "Game of Thrones",
  "The Dark Knight",
  "The Office",
  "Forrest Gump",
  "Friends",
  "Pulp Fiction",
  "The Walking Dead",
  "Jurassic Park",
  "Supernatural",
  "Gladiator",
  "Grey's Anatomy",
  "Avatar",
  "The Crown",
  "The Matrix",
  "The Mandalorian",
  "Toy Story",
  "The Big Bang Theory",
  "Interstellar",
  "House of the Dragon",
  "Frozen",
  "How I Met Your Mother",
  "The Lion King",
  "Dark",
  "Avengers: Endgame"
];



// Add an event listener to detect when a key is pressed inside the input field
inputElement.addEventListener('keypress', function(e) {

  // Check if the pressed key was the "Enter" key
  if (e.key === 'Enter') {

    // Get the value entered by the user
    const movie = inputElement.value;

    // Create the URL to request data from the OMDb API
    // Insert the movie name into the URL using ${movie}
    const apiUrl = `https://www.omdbapi.com/?t=${encodeURIComponent(movie)}&apikey=c5483806`;

    // Print the URL in the console to check if it is correct
    console.log(apiUrl);
   


  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Display data in an HTML element
      //outputElement.textContent = JSON.stringify(data, null, 2);
      document.getElementById("poster").src = data.Poster;
      document.getElementById("title").innerText = data.Title;
      document.getElementById("plot").innerText = data.Plot;
      document.getElementById("actors").innerText = data.Actors;

      //Visibility
      document.getElementById("poster").style.visibility = "visible";
      document.getElementById("title").style.visibility = "visible";
      document.getElementById("plot").style.visibility = "visible";
      document.getElementById("actors").style.visibility = "visible";
    })
    .catch(error => {
      console.error('Error:', error);
    });




}});

//pelicula del dia

window.addEventListener("load", () => {
  const peliculas = [
    "The Shawshank Redemption", "The Vampire Diaries", "The Godfather", "Breaking Bad",
    "Inception", "Stranger Things", "Titanic", "Game of Thrones", "The Dark Knight",
    "The Office", "Forrest Gump", "Friends", "Pulp Fiction", "The Walking Dead",
    "Jurassic Park", "Supernatural", "Gladiator", "Grey's Anatomy", "Avatar",
    "The Crown", "The Matrix", "The Mandalorian", "Toy Story", "The Big Bang Theory",
    "Interstellar", "House of the Dragon", "Frozen", "How I Met Your Mother",
    "The Lion King", "Dark", "Avengers: Endgame"
  ];

  const hoy = new Date().getDate(); 
  const peliDia = peliculas[hoy % peliculas.length]; 

  const apiUrl = `https://www.omdbapi.com/?t=${encodeURIComponent(peliDia)}&apikey=c5483806`;

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      if (data.Response === "False") {
        console.log("Película no encontrada:", peliDia);
        return;
      }

      document.getElementById("poster").src = data.Poster;
      document.getElementById("title").innerText = `Movie of the Day: ${data.Title}`;
      document.getElementById("plot").innerText = data.Plot;
      document.getElementById("actors").innerText = data.Actors;

     
      document.getElementById("poster").style.visibility = "visible";
      document.getElementById("title").style.visibility = "visible";
      document.getElementById("plot").style.visibility = "visible";
      document.getElementById("actors").style.visibility = "visible";
    })
    .catch(error => console.error("Error al obtener la película del día:", error));
});
