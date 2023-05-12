// script.js

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const locationInput = document.getElementById('locationInput');
    const resultsContainer = document.getElementById('resultsContainer');
  
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const location = locationInput.value.trim();
  
      // Make API requests using selected APIs and process the responses
      // Example:
      fetchRestaurants(location)
        .then(function(restaurants) {
          displayRestaurants(restaurants);
        })
        .catch(function(error) {
          console.log(error);
        });
    });
  
    function fetchRestaurants(location) {
      // Use the chosen APIs to fetch restaurant data based on the provided location and rating criteria
      // Make sure to handle CORS, authentication, and JSON response
      // Example:
      const apiUrl = '1Io01Ksq6FjIvfNbaS8AP3N2ZIcf4r_deaDAtRfmhHERnKRUpRPmW2y40YjVrVRJl1m2SHlVeWZvz2EYLyvxtE7OguP8B4A3mwie6ixUsF9sLlGnTf4cOaw40npdZHYx';
      const apiKey = 'YOUR_API_KEY';
      const url = `${apiUrl}?location=${location}&minRating=4&apiKey=${apiKey}`;
  
      return fetch(url)
        .then(function(response) {
          if (!response.ok) {
            throw new Error('Unable to fetch restaurants. Please try again later.');
          }
          return response.json();
        })
        .then(function(data) {
          return data.restaurants; // Adjust this according to the API response structure
        });
    }
  
    function displayRestaurants(restaurants) {
      resultsContainer.innerHTML = '';
  
      if (restaurants.length === 0) {
        resultsContainer.innerHTML = '<p>No restaurants found.</p>';
      } else {
        const restaurantList = document.createElement('ul');
        
        restaurants.forEach(function(restaurant) {
          const restaurantItem = document.createElement('li');
          restaurantItem.textContent = restaurant.name;
          restaurantList.appendChild(restaurantItem);
        });
  
        resultsContainer.appendChild(restaurantList);
      }
    }
  });
  