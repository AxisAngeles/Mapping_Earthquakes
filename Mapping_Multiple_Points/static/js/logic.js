// Add console.log to check to see if our code is working.
console.log("working");

// 1) Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 5);

// 2) Get data from cities.js
let cityData = cities;


// 3) Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location)
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });


// 3) Loop through the cities array and create one circle for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location,{
        radius: city.population/100000,
        stroke: true,
        weight: 3,
        color: "orange",
        fillColor: "orange"

    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});



// 2) We create the tile layer that will be the background of our map.

// ******** MapBox Styles API **********
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// 3) Then we add our 'graymap' tile layer to the map.
streets.addTo(map);







