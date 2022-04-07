//Full screen map view
var mapId = document.getElementById('map');
function fullScreenview() {
    if(document.fullscreenElement){
        document.exitFullscreen()
    }else {
    mapId.requestFullscreen();
    }
}

//Map print
$('.print-map').click(function() {
    window.print();
});

//Leaflet browser print function
var browserControl = L.control.browserPrint({position: 'topright'}).addTo(map);

//Leaflet search
L.Control.geocoder().addTo(map);

//Leaflet measure
L.control.measure({
    primaryLengthUnit: 'kilometers', 
    secondaryLengthUnit: 'meters',
    primaryAreaUnit: 'hectares', 
    secondaryAreaUnit: undefined
}).addTo(map);

// Zoom to layer function
$('.zoom-to-layer').click(function() {
    map.setView([-15.805, -47.80], 11)
})