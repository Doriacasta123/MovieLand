const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');

// Add an event listener to detect when a key is pressed inside the input field
inputElement.addEventListener('keypress', function(e) {

  // Check if the pressed key was the "Enter" key
  if (e.key === 'Enter') {

    // Get the value entered by the user
    const movie = inputElement.value;

    // Create the URL to request data from the OMDb API
    // Insert the movie name into the URL using ${movie}
    const apiUrl = `https://www.omdbapi.com/?t=${movie}&apikey=c5483806`;

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