const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');

// Le decimos al input que escuche cuando se presiona una tecla
inputElement.addEventListener('keypress', function(e) {

  // Verificamos si la tecla presionada fue la tecla "Enter"
  if (e.key === 'Enter') {

    // Obtenemos el valor que el usuario escribió en el input
    const movie = inputElement.value;

    // Creamos la URL para hacer la solicitud a la API de OMDb
    // Insertamos el nombre de la película en la URL con ${movie}
    const apiUrl = `https://www.omdbapi.com/?t=${movie}&apikey=c5483806`;

    // Mostramos la URL en la consola para verificar que esté bien construida
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
    })
    .catch(error => {
      console.error('Error:', error);
    });

}});