// Add console.log to check to see if our code is working.
console.log("working");

// 1) Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// 4) Adding Markers to the map for Los Angeles, California.
let marker = L.marker([34.0522, -118.2437]).addTo(map);

// 5) Add a Circle to the map for los Angeles, California.
L.circle([34.0522, -118.2437], {
    radius: 100
 }).addTo(map);


// 2) We create the tile layer that will be the background of our map.

// ******** MapBox Styles API **********
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// 3) Then we add our 'graymap' tile layer to the map.
streets.addTo(map);







