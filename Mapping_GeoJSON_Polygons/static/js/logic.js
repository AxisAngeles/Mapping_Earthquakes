
// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.

// ******** MapBox Styles API **********
// Streets view tile layer that will be an option for our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let strsatelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

            // // Light view tile layer that will be an option for our map.
            // let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            // attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
            //     maxZoom: 18,
            //     accessToken: API_KEY
            // });

            // // Dark view tile layer that will be an option for our map.
            // let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            // attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
            //     maxZoom: 18,
            //     accessToken: API_KEY
            // });

// 3) Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// 4) Create a base layer that holds both maps.
let baseMaps = {
    Streets: streets,
    SatelliteStreets: strsatelliteStreets
};


// 1) Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// 1) Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [43.8, -79.5],
    zoom: 10,
    layers: [streets]
})

// 1.5) Pass our map layers into our LAYERS CONTROL and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// 2) Add GeoJSON data within the web
let torontoHoods = "https://raw.githubusercontent.com/AxisAngeles/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// 3) Create a style variable for the lines.
let myStyle = {
    color: "blue",
    fillColor: "yellow",
    weight: 1
}


// 3) Grabbing our GeoJSON data.
// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
  
    // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data,{
      style: myStyle
    ,
    onEachFeature:function(feature,layer){
    layer.bindPopup("<h3> Neighborhood: " + feature.properties.AREA_NAME + "</h3>");
    }
  }

  ).addTo(map);

});
