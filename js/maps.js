function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 41.99910774322552, lng: -87.65829138861581},
    zoom: 8,
    });
}

function build_map(){
    window.initMap = initMap;
}
