// map class initialize
var map = L.map('map').setView([-15.805, -47.80], 13);
map.zoomControl.setPosition('topright');
// adding osm tilelayer
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var esri = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);

var st = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
subdomains: 'abcd',
minZoom: 0,
maxZoom: 20,
ext: 'png'
});

// Adding marker in the center of map
var singleMarker = L.marker([-15.805, -47.80])
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

//add map scale
L.control.scale().addTo(map)

//Map coordinate display
map.on('mousemove', function(e) {
    
    $('.coordinate').html(`Lat: ${e.latlng.lat} Long: ${e.latlng.lng}`)
})

//Geojson load
var marker = L.markerClusterGroup();
var local = L.geoJSON(data,{
    onEachFeature: function(feature, layer) {
        layer.bindPopup(feature.properties.name)
    }
});
local.addTo(marker);
marker.addTo(map);

//Leaflet layer control
var baseMaps = {
    'OSM': osm,
    'Esri_WorldImagery': esri,
    'Stamen Toner': st
};

var overlayerMaps = {
    'GeoJSON Markers': marker,
    'Single Marker': singleMarker
};

L.control.layers(overlayerMaps, baseMaps, {collapsed: false, position: 'topleft'}).addTo(map);

