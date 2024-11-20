document.getElementById('fetchData').addEventListener('click', function() {
    // Clear previous data or error messages
    document.getElementById('data').innerHTML = '';
    document.getElementById('error').innerHTML = '';

    // URL for a random dog image from Dog CEO's Dog API
    const apiUrl = 'https://dog.ceo/api/breeds/image/random';

    // Fetch data from the public API
    fetch(apiUrl)
        .then(response => {
            // Check if the response is successful (status code 200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse JSON from the response
        })
        .then(data => {
            // Display the fetched data (dog image)
            const dogImage = data.message; // The API sends image URL under the 'message' key
            const imageElement = document.createElement('img');
            imageElement.src = dogImage;
            imageElement.alt = 'Random Dog';
            imageElement.style.maxWidth = '300px';
            imageElement.style.maxHeight = '300px';
            document.getElementById('data').appendChild(imageElement);
        })
        .catch(error => {
            // Handle errors (network issues, invalid response)
            document.getElementById('error').innerText = `Error: ${error.message}`;
        });
});
